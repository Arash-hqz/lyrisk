import { useNavigate } from "react-router-dom";



const ArtistCard = ({track}) => {
  
  const navigate = useNavigate(); 
  
  return(
    <div className=" flex flex-col w-[250px] p4 bg-opacity-80 backdrop-blur-sm animate-slideup cursor-pointer"
         onClick={() => navigate(`/artists/${track?.artists[0]?.adamid}`)} >
      <img className=" w-full h-56 rounded-lg" src={traks?.images?.cover} alt="" />
      <p className=" font-semibold mt-4 text-lg text-white truncate"> {track?.subtitle}</p>
    </div>

  );
};

export default ArtistCard;
