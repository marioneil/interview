import axios from "axios";
import React, { useEffect, useState } from "react";

import { Phone } from "./Types";

export const Home = () => {
  const [phones, setPhones] = useState([]);

  const [search, setSearch] = useState("");

  const [filteredPhones, setFilteredPhones] = useState([]);

  useEffect(() => {
    axios.get("https://api.restful-api.dev/objects").then((response) => {
      //   console.log(response.data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
      setPhones(response.data);
    });
  }, []);

  useEffect(() => {
    //  console.log("1");
    setFilteredPhones(
      phones.filter((phone: Phone) => {
        return phone.name.indexOf(search) >= 0;
      })
    );
  }, [phones]);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPhones.map((el: Phone) => (
              <tr
                key={el.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.id}
                </th>
                <td className="px-6 py-4">{el.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
