import React from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import MessageSeender from './MessageSeender'
import Post from './Post'
import { useStateValue } from '../StateProvider/StateProvider'

const Feed = () => {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="feed">
      <StoryReel />
      <MessageSeender />
      <Post
        profilePic={user.photoURL}
        message="Tam bir sanat eseri!"
        timestamp="This is the timestramp"
        username={user.displayName}
        image="https://media.moddb.com/cache/images/members/5/4550/4549205/thumb_620x2000/duck.jpg"
      />
      <Post
        profilePic={user.photoURL}
        message="Tam bir sanat eseri!"
        timestamp="This is the timestramp"
        username={user.displayName}
        image="https://media.moddb.com/cache/images/members/5/4550/4549205/thumb_620x2000/duck.jpg"
      />
      <Post
        profilePic={user.photoURL}
        message="Tam bir sanat eseri!"
        timestamp="This is the timestramp"
        username={user.displayName}
        image="https://media.moddb.com/cache/images/members/5/4550/4549205/thumb_620x2000/duck.jpg"
      />
    </div>
  )
}

export default Feed
