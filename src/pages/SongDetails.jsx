import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader , Error , Loader , RelatedSongs } from "../components";
import { setActiveSong  , playPause } from "../redux/features/playerSlice";
// import PlayPause from "../components/PlayPause";



const SongDetails = () => {
 
  const { songid } = useParams();  

  console.log(songid);
  return(
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} songData={songData} /> */}
        
           <div className="mb-10">
            <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

            <div className="mt-5"></div>
           </div>

        </div>
   ) 

};

export default SongDetails;
