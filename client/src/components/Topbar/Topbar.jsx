import "./topbar.css"; 
import { FaSistrix, FaUser, FaComments, FaFlag } from "react-icons/fa";

const ICON_SIZE = "1.2rem"; // Define a constant for icon size
const BADGE_SIZE = "15px"; // Define a constant for badge size
const ICON_COLOR = "#555"; // Define a constant for icon color

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Aura</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar"> 
          <FaSistrix className="searchIcon" />
          <input placeholder="Search for friends, posts, or any video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUser size={ICON_SIZE} color={ICON_COLOR} />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FaComments size={ICON_SIZE} color={ICON_COLOR} />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <FaFlag size={ICON_SIZE} color={ICON_COLOR} />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/Capture.PNG" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
