import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { playPause , setActiveSong  } from "../redux/features/playerSlice";

const SongCard = (song , i) => (
  <div>SongCard</div>
);

export default SongCard;
