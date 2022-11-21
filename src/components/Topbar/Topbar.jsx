
import "./topbar.css"; 
import { FaSistrix, FaUser, FaComments, FaFlag } from "react-icons/fa"

// import { Search, Person, Chat, Notifications} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Aura</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
          <FaSistrix className="searchIcon"/>
            <input placeholder="search for friends, posts, or any video" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <FaUser />
              <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
              <FaComments />
              <span className="topbarIconBadge">2</span>
            </div>

            <div className="topbarIconItem">
              <FaFlag />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>

          <img src="/assets/person/Capture.PNG" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
