import React from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import MessageSeender from './MessageSeender'
import Post from './Post'


const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSeender/>
      <Post
    
      profilePic='https://pps.whatsapp.net/v/t61.24694-24/71088210_2995143413889336_1177259456480673792_n.jpg?ccb=11-4&oh=396f91ba0b0c0b535efa63f27fc6b82e&oe=62D50D78'
      message='Tam bir sanat eseri!'
      timestamp="This is the timestramp"
      username="DropdDeart"
      image = 'https://media.moddb.com/cache/images/members/5/4550/4549205/thumb_620x2000/duck.jpg'
      
      
      />
      <Post
      
      profilePic='https://pps.whatsapp.net/v/t61.24694-24/71088210_2995143413889336_1177259456480673792_n.jpg?ccb=11-4&oh=396f91ba0b0c0b535efa63f27fc6b82e&oe=62D50D78'
      message='Tam bir sanat eseri!'
      timestamp="This is the timestramp"
      username="DropDeart"
      image = 'https://media.moddb.com/cache/images/members/5/4550/4549205/thumb_620x2000/duck.jpg'
      />
      <Post
      
      profilePic='https://pps.whatsapp.net/v/t61.24694-24/71088210_2995143413889336_1177259456480673792_n.jpg?ccb=11-4&oh=396f91ba0b0c0b535efa63f27fc6b82e&oe=62D50D78'
      message='Tam bir sanat eseri!'
      timestamp="This is the timestramp"
      username="DropdDeart"
      image = 'https://media.moddb.com/cache/images/members/5/4550/4549205/thumb_620x2000/duck.jpg'
      />
      
    </div>
  )
}

export default Feed
