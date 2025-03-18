import axios from "axios";
import React, { PureComponent, useCallback, useEffect, useState } from "react";

import { Spinner } from "./Spinner";

export function withLoadingSpinner(
  Component: React.ComponentType<{ data: any[] }>
  //  url: string
) {
  return (props: { url: string }) => {
    console.log(props);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([]);

    console.log("loading - " + loading);

    const getData = async () => {
      setLoading(true);
      try {
        // const response = await axios.get("https://api.restful-api.dev/objects");
        const response = await axios.get(props.url);
        setData(response.data);
      } catch (err) {
        console.log(err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      getData();
    }, []);

    if (loading) return <Spinner />;
    return (
      <>
        <Component data={data} />
      </>
    );
  };
}
