import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Error , Loader , SongCard } from "../components";


const AroundYou  = () => {

 const [country , setCountry] = useState();
 const [loading , setLoading] = useState(true);
 const [activeSong , isPlaying] = useSelector((state) => state.player );

 useEffect(() =>{
    axios.get('')
    // از سایت geo شحه باید بگیریم برایه تشخیص ورود دستگاه از ای پی کدوم کشور هست
    .then((res) => setCountry(res?.data?.locaton?.country))
    .catch((err) => console.log(err) )
    .finally(( ) => setLoading(false))
 } , [country])

 return(
      
      <div>CountryTracks</div>
 );
};

export default  AroundYou ;
