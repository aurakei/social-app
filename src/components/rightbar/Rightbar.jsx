import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="./assets/person/4.jpg" alt="" />
          <span className="birthdayText"><b>Harry Porter</b> and <b>4 other friends</b> have a birthday today</span>
        </div>
        <img src="./assets/person/CAPTURE.png" alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
