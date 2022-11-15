import "./feed.css"
import Share from "../share/Share"
import Post from "../posts/Post"

export default function feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <>
        <Share />
        <Post />
        </>
      </div>
    </div>
  )
}
