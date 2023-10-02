import "./sidebar.css"
// import {RssFeed} from "@mui/icons-material";
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import React, { useState } from 'react';


export default function Sidebar() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  const toggleShowMore = (sectionNumber) => {
    switch (sectionNumber) {
      case 1:
        setShowMore1(!showMore1);
        break;
      case 2:
        setShowMore2(!showMore2);
        break;
      case 3:
        setShowMore3(!showMore3);
        break;
      default:
        break;
    }
  };


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
          {/* show more button */}
          {showMore1 ? (
            <>
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
          </>
          ) : null}
        </ul>
        <button onClick={() => toggleShowMore(1)}>
          {showMore1 ? 'Show Less' : 'Show More'}</button>
        <hr className="sidebarHr"></hr>
        {Users.map(u => (
          <CloseFriend key={u.id} user={u}/>
        ))}
      </div>
      </div>
  )
}
