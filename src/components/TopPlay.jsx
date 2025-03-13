import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import { Swiper,  SwiperSlide } from "swiper/react";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/service/ShazamCore";

import "swiper/css";
import "swiper/css/free-mode";
import { FaHeadphonesAlt } from "react-icons/fa";


const TopChartCard = ({song , i , isPlaying , activeSong , handlePauseClick , handlePlayClick}) => {

  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
   <h3 className="font-bold text-base text-white mr-3" >
     {i+1 || "songtitle"} 
   </h3>

   <div className="flex-1 flex flex-row justify-between items-center">

    <img className="w-20 h-20 rounded-lg " src={song?.images?.coverart} alt={song?.title} />
     <div className="flex flex-col flex-1 justify-center mx-3">
      <link to={`/artists/${song.key}`} >
        <p className="text-xl font-bold text-white">
          {song?.title || "EROR"}
        </p>
      </link>
      <link to={`/artists/${song.artists[0].adamid}`} >
        <p className="text-base mt-1 text-gray-300">
          {song?.subtitle || "EROR"}
        </p>
      </link>
     </div>
   </div>

   <PlayPause
     isPlaying={isPlaying}
     activeSong={activeSong}
     song={song}
     handlePauseClick={handlePauseClick}
     handlePlayClick={handlePlayClick}
   />
  </div>

}

const TopPlay = () =>{

  const dispatch = useDispatch();
  const {activeSong , isPlaying} = useSelector((state) => state.player);
  const {data} = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(()=> {
    divRef.current.scrollIntoView({ behavior: 'smooth'});
  })

  //const topPlays = data?.slice(0,5)

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song , i , data}));
    dispatch(playPause(true))
  }

  return(
    <div ref={divRef} className=" xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">

      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
           <h2 className="text-white font-bold text-2xl"> Top Charts </h2>

           <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">see more...</p>
           </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {/* {topPlays?.map((song,i) => (
            <TopChartCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={FaHeadphonesAlt}
            />
          )) || "EROR"} */}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
           <h2 className="text-white font-bold text-2xl"> Top Artists </h2>

           <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">see more...</p>
           </Link>
        </div>

        <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="mt-4"
        >

         {/* {topPlays?.map((song , i) => (
          <SwiperSlide
           key={song?.key}
           style={{ width: '25%' , height: 'auto'}}
           className="shadow-lg rounded-full animate-slideright"
          >
            
            <link to={`/artists/${song?.artists[0].admid}`} >
              <img src={song?.images.bacground} alt="name" className="rounded-full w-full object-cover" />
            </link>
          </SwiperSlide>

         ))} */}

        </Swiper>
      </div>
    </div>
  )
}

export default TopPlay;
