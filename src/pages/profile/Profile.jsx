import "./profile.css"
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img 
                    className="profileCoverImg"
                    src="assets/person/3.jpg" 
                    alt=""
                 />
                <img 
                    className="profileUserImg" 
                    src="assets/person/4.jpg" 
                    alt="" 
                />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Aura Keith</h4>
                    <span className="profileInfoDesc">creating our world</span>
                </div>
            </div>
            <div className="profileRightBottom">
        
        <Feed />
        <Rightbar profile/>
        </div>
        </div>
    </div>
    
</>
  )
}
