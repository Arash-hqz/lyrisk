import { Link } from "react-router-dom";


const DetailsHeader = ({ artistData , songData , artistId}) => {

   const artist =  artistData?.artists[artistId]?.attributes;

  return(
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div className="flex inset-0 absolute items-center">

      <img
       src={artistId ? artist.artwork?.url
        .replace('{h}' , '500').replace('{w}' , '500'):songData?.images?.coverart}
       alt="art"
       className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
       />

       <div className="ml-5">
        <p className=" font-bold text-white sm:text-3xl text-xl "> {artistId ? artist.name : songData?.title} </p>
       </div>

    </div>
  </div>
  )

  };

export default DetailsHeader;
