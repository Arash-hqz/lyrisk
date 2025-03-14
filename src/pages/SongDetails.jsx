import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader , Error , Loader , RelatedSongs } from "../components";
import { setActiveSong  , playPause } from "../redux/features/playerSlice";
import { usegetSongDetail } from "../redux/service/ShazamCore";
// import PlayPause from "../components/PlayPause";



const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();  
  const { activeSong , isPlaying } = useSelector((state) => state.player);
  const { data : songData , isFetching : isFetchingSongDetails } = usegetSongDetail({songid});

//   console.log(songid);
  return(
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} songData={songData} /> */}
        
           <div className="mb-10">
            <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

            <div className="mt-5">
               {songData?.section[1].type === 'LYRICS' ? songData?.section[1].text.map((line,i) =>(
                  <p className="text-gray-400 text-base my-1">  {line} </p>
               )):    <p className="text-gray-400 text-base my-1">  Sorry , no lyrics found </p> } 
            </div>
           </div>

        </div>
   ) 

};

export default SongDetails;
