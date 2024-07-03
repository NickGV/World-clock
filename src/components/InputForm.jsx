import { useContext, useEffect, useState } from "react";
import TimeZones from "../helpers/Timezones.json";
import { ClockContext } from "../context/ClockContext";

export const InputForm = () => {
  const [showList, setShowList] = useState(false);
  const [filteredTimezones, setFilteredTimezones] = useState([]);
  const [inputQuery, setInputQuery] = useState("");
  const { query, setQuery } = useContext(ClockContext);

  const handleChange = (e) => {
    setInputQuery(e.target.value)
    setQuery(e.target.value);
  };
  useEffect(() => {
    setFilteredTimezones(
      TimeZones.filter(
        (tz) =>
          tz.Country.toLowerCase().includes(query.toLowerCase()) ||
          tz.Timezone.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  const handleSelectTz = (timezone) => {
    setInputQuery(timezone);
    setQuery(timezone)
  };

  return (
    <form className="w-full md:w-80 ">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name"
          id="name"
          value={inputQuery}
          onChange={handleChange}
          onClick={() => setShowList(!showList)}
          onBlur={() => setTimeout(() => setShowList(false), 100)}
          autoComplete="off"
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer `}
          placeholder=" "
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Country/City
        </label>
        <ul
          className={`absolute z-10 w-full bg-white dark:bg-gray-800 max-h-60 overflow-y-auto ${
            showList ? "block" : "hidden"
          }`}
        >
          {filteredTimezones.map((tz, index) => (
            <li
              key={index}
              onClick={() => handleSelectTz(tz.Timezone)}
              className="text-black dark:text-white cursor-pointer px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {tz.Country} - {tz.Timezone}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};
