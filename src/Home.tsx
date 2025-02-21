import axios from "axios";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";

import { BaseList } from "./BaseList";
import { Spinner } from "./Spinner";
import { Phone } from "./Types";

export const Home = () => {
  const [phones, setPhones] = useState([]);

  //const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [filteredPhones, setFilteredPhones] = useState([]);
  console.log("render");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.restful-api.dev/objects");
      setPhones(response.data);
    } catch (err) {
      console.log(err);
      setPhones([]);
    } finally {
      setLoading(false);
    }
  };

  const filter = (search: string) => {
    console.log("aa");
    setFilteredPhones(
      phones.filter((phone: Phone) => {
        return phone.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
      })
    );
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // console.log(event.target.value);
    const value = event.target.value;
    filter(value);
    // setSearch(value);
  };

  const debouncedFilter = debounce(handleChange, 500);

  useEffect(() => {
    //  debouncedFilter();
    setFilteredPhones(phones);
  }, [phones]);

  if (loading) return <Spinner />;
  return (
    <>
      <div className="relative ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          onChange={debouncedFilter}
          id="search-navbar"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
        <BaseList filteredPhones={filteredPhones} />
      </div>
    </>
  );
};
