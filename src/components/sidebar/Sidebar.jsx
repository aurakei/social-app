import "./sidebar.css"
// import {RssFeed} from "@mui/icons-material";
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            {/* <RssFeed className="sidebarIcon"/> */}
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"></hr>
        {Users.map(u => (
          <CloseFriend key={u.id} user={u}/>
        ))}
      </div>
      </div>
  )
}
