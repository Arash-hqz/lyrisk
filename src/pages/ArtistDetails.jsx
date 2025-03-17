import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader , Error , Loader , RelatedSongs } from "../components";
import { useGetArtistDeatilsQuery } from "../redux/service/ShazamCore";
// import PlayPause from "../components/PlayPause";



const ArtistDetails = () => {
  const { id: artistId } = useParams();  
  const { activeSong , isPlaying } = useSelector((state) => state.player);
  const { data: artistData , isFetching : isFetchingArtistDetail , Error } = useGetArtistDeatilsQuery({artistId});

  
  if (isFetchingArtistDetail) return <Loader title="searching song details "/>;

   
  if (Error) return <Error/>
  
   
  
  return(
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} artistData={artistData} /> */}
        
           

           <RelatedSongs
            data={Object.values(artistData?.songs)}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
           />

        </div>
   ) 

};

export default ArtistDetails;
