import "./sidebar.css";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import React, { useState } from 'react';

// const SCROLLBAR_WIDTH = '5px';
// const SCROLLBAR_TRACK_COLOR = '#f1f1f1';
// const SCROLLBAR_THUMB_COLOR = 'gray';
// const SIDEBAR_BACKGROUND_COLOR = '#ebbbb0';

export default function Sidebar() {
  const [showMore1, setShowMore1] = useState(false);

  const toggleShowMore = () => {
    setShowMore1(!showMore1);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Videos</span>
          </li>
          {showMore1 && (
            <>
              <li className="sidebarListItem">
                <span className="sidebarListItemText">Groups</span>
              </li>
              <li className="sidebarListItem">
                <span className="sidebarListItemText">Bookmarks</span>
              </li>
              <li className="sidebarListItem">
                <span className="sidebarListItemText">Questions</span>
              </li>
              <li className="sidebarListItem">
                <span className="sidebarListItemText">Jobs</span>
              </li>
              <li className="sidebarListItem">
                <span className="sidebarListItemText">Events</span>
              </li>
              <li className="sidebarListItem">
                <span className="sidebarListItemText">Courses</span>
              </li>
            </>
          )}
        </ul>
        <button onClick={toggleShowMore}>
          {showMore1 ? 'Show Less' : 'Show More'}
        </button>
        <hr className="sidebarHr"></hr>
        {Users.map(u => (
          <CloseFriend key={u.id} user={u}/>
        ))}
      </div>
    </div>
  );
}
