import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchItems } from "../store/cartSlice";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const items = useSelector((state) => state.cart.originalProducts);
  // console.log(items[1].title);
  const dispatch = useDispatch();
  const findItems = (searchText, products) => {
    const filterData = products.filter((val) =>
      val.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  };
  return (
    <div>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search items here..."
          required
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            e.preventDefault();
            const data = findItems(searchText, items);
            dispatch(searchItems(data));
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
