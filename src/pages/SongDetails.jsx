import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader , Error , Loader , RelatedSongs } from "../components";
import { setActiveSong  , playPause } from "../redux/features/playerSlice";
import { usegetSongDetail , useGetSongRelatedQuery } from "../redux/service/ShazamCore";
// import PlayPause from "../components/PlayPause";



const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();  
  const { activeSong , isPlaying } = useSelector((state) => state.player);
  const { data : songData , isFetching : isFetchingSongDetails } = usegetSongDetail({songid});
  const { data , isFetching : isFetchingRelatedSongs , Error } = useGetSongRelatedQuery({songid});

  const handlePauseClick = () => {
   dispatch(playPause(false));
  }
  const handlePlayClick = (song , i) => {
   dispatch(setActiveSong({ song , i , data}));
   dispatch(playPause(true))
  }

  if (isFetchingRelatedSongs || isFetchingSongDetails) return <Loader title="searching song details "/>;

   
  if (Error) return <Error/>
  
   
  
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

           <RelatedSongs
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}

           />

        </div>
   ) 

};

export default SongDetails;
