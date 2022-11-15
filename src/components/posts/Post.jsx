import "./post.css"
// import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/Capture.png" alt="" className="postProfileImg" />
                    <span className="postUsername">Keith</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    {/* <MoreVert /> */}
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey Brother :)</span>
                <img src="/assets/person/1.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/person/2.jpg" alt="" className="likeIcon" />
                    <img src="/assets/person/3.jpg" alt="" className="likeIcon" />
                    <span className="postLikeCounter">18 folks are in love with it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">4 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
