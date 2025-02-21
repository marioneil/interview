import React from "react";

import { withHigherOrderComponent } from "./ToDo";
import { Phone } from "./Types";

export const BaseList = ({ filteredPhones }: { filteredPhones: Phone[] }) => {
  return (
    <div>
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
    </div>
  );
};

export const HOCList = withHigherOrderComponent(BaseList);
