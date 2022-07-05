import React from 'react'
import './Story.css'
import { Avatar } from '@material-ui/core'

const Story = ({image,profileSrc,title }) => {
  return (
    <div className='Story'>
      <Avatar src = {profileSrc}/>
      <h4>{}title</h4>
    </div>
  )
}

export default Story