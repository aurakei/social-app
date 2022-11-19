import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";
// import Home from "../../pages/home/Home";

export default function Rightbar({profile}) {

  const HomeRightbar = ()=>{
    return(
      <>
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
      </>
    );
  };

  const ProfileRightbar =()=>{
    return(
     <>
     <h4 className="rightbarTitle">User Information</h4>
     <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City : </span>
        <span className="rightbarInfoValue">Nairobi </span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From :</span>
        <span className="rightbarInfoValue">Eldoret</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship :</span>
        <span className="rightbarInfoValue">Entangled</span>
      </div>
     </div>

     <h4 className="rightbarTitle">User Friends</h4>
     <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Alice Mwenda</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">crazy Mole</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Mule Poa</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Gummy Bear</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Bill Malipo</span>
      </div>
     </div>
     </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
          {profile ? <ProfileRightbar /> : <HomeRightbar />} 
      </div>
    </div>
  )
}
