import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Error , Loader , SongCard } from "../components";
import { usegetSongsByCountry } from "../redux/service/ShazamCore";


const AroundYou  = () => {

 const [country , setCountry] = useState();
 const [loading , setLoading] = useState(true);
//  const [activeSong , isPlaying] = useSelector((state) => state.player );
//  const [ data , isFetching , error] = usegetSongsByCountry(country);

//  useEffect(() =>{
//     axios.get('')
//     // از سایت geo شحه باید بگیریم برایه تشخیص ورود دستگاه از ای پی کدوم کشور هست
//     .then((res) => setCountry(res?.data?.locaton?.country))
//     .catch((err) => console.log(err) )
//     .finally(( ) => setLoading(false))
//  } , [country])

//  if (isFetching && loading) {
//     <Loader title="Loading songs arund you"/>
//  }
//  if (error && country) {
//    <Error/>
//  }

 return(
      
      <div className="flex flex-col">
         <h2 className="font-bold text-3xl text-white text-left mb-10 mt-4">
            Aroud You
            {/* <span className="text-black">{country}</span> */}
         </h2>
         <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {/* {data.map(( song , i)=>(
               <SongCard
               key={song.Key}
               song={song}
               isPlaying={isPlaying}
               activeSong={activeSong}
               data={data}
               i={i}

                />
            ))} */}
         </div>
      </div>
 );
};

export default  AroundYou ;
