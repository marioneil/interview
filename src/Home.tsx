import { debounce } from "lodash";
import React, { useContext, useEffect, useRef, useState } from "react";

import { BaseList } from "./BaseList";
import { Phone } from "./Types";

export const Home: React.FC<{ data: any[] }> = (props) => {
  const phones = props.data;
  const searchInputRef = useRef<HTMLButtonElement>(null);

  const [filteredPhones, setFilteredPhones] = useState<Phone[]>([]);
  console.log("render");

  const filter = (search: string) => {
    console.log("aa");
    setFilteredPhones(
      phones.filter((phone) => {
        return phone.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
      })
    );
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // console.log(event.target.value);
    const value = event.target.value;
    filter(value);
    if (value.length >= 3) {
      searchInputRef.current?.focus();
    }
    // setSearch(value);
  };

  const debouncedFilter = debounce(handleChange, 500);

  const setFocus = () => {
    // document.getElementById("search-navbar")?.focus();
    searchInputRef.current?.focus();
  };

  useEffect(() => {
    //  debouncedFilter();
    setFilteredPhones(phones);
  }, [phones]);

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
        <div>
          <button
            onClick={setFocus}
            type="button"
            ref={searchInputRef}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Default
          </button>
        </div>
      </div>
    </>
  );
};
