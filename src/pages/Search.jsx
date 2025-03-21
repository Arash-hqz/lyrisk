import { useEffect,  } from "react";
import { useSelector } from "react-redux";
import { Error , Loader , SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/service/ShazamCore";
import { useParams } from "react-router-dom";

const Search  = () => {

 const {searchTerm} = useParams();
//  const [activeSong , isPlaying] = useSelector((state) => state.player );
//  const [ data , isFetching , error] = useGetSongsBySearchQuery(country);

    const songs = data?.tracks?.hits?.map((songs) => song.track)

//  if (isFetching) {
//     <Loader title="Loading songs Top Charts"/>
//  }
//  if (error && country) {
//    <Error/>
//  }

 return(
      
      <div className="flex flex-col">
         <h2 className="font-bold text-3xl text-white text-left mb-10 mt-4">
           Showing results for
            {/* <span className="text-black">{searchTerms}</span> */}
         </h2>
         <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {/* {songs.map(( song , i)=>(
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

export default  Search ;

