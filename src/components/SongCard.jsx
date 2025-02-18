import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { playPause , setActiveSong  } from "../redux/features/playerSlice";

const SongCard = ({song , activeSong , isPlaying , data , i}) => {
  
   const dispatch = useDispatch(  )
  const handlePauseClick = () => {

  }
  const handlePlayClick = () => {
    
  }

  return(
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-50 backdrop-blur-sm rounded-lg 
  animate-slideup cursor-pointer">
    
    <div className=" w-full h-56 relative group ">

       <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50
        group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70'
         : 'hidden'} 
         `}>
           <PlayPause 
             isPlaying={isPlaying}
             activeSong={activeSong}
             song={song}
             handLePause={handlePauseClick}
             handLePlay={handlePlayClick}
           />
        </div>
        <img src={song.images?.coverart} alt="song-img" />
    </div>
   
    <div className="flex flex-col mt-4">
     <p className=" font-semibold text-lg text-white truncate">
       <Link to={`/song/${song?.key}`}>
         {song.title || 'no Name'}
       </Link>
     </p>

     <p className="text-sm truncate text-gray-300 mt-1">
       <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
         {song.subtitle}
       </Link>
     </p>
    </div>
  </div>
  
);
 }
export default SongCard;
