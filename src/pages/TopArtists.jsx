
import { ArtistCard , Error , Loader , SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/service/ShazamCore";


const TopArtists  = () => {

 
//  const [activeSong , isPlaying] = useSelector((state) => state.player );
//  const [ data , isFetching , error] = useGetTopChartsQuery(country);



//  if (isFetching) {
//     <Loader title="Loading songs Top Charts"/>
//  }
//  if (error && country) {
//    <Error/>
//  }

 return(
      
      <div className="flex flex-col">
         <h2 className="font-bold text-3xl text-white text-left mb-10 mt-4">
           Discover Top Artists
            {/* <span className="text-black">{country}</span> */}
         </h2>
         <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {/* {data.map(( track )=>(
               <ArtistCard
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

export default  TopArtists
    

