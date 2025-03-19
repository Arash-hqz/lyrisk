import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Searchbar = () => (
  <form autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">

    <label htmlFor="serach-field" className="sr-only"> Search all songs</label>

    <div className="flex flex-row justify-start items-center">
      
      <FiSearch className=" w-5 h-5 ml-4"/>
      <input 
       type="search"
       name="serach-field"
       autoComplete="off"
       id="serach-field"
       placeholder="Serach"
       value=""
       onChange={()=>{}}
       className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white"
       />
    </div>  
  </form>

);

export default Searchbar;
