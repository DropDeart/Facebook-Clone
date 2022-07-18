import React from 'react'
import './Widgets.css'

const Widgets = () => {
  return (
    <div className='widgets'>
      
      <iframe
       src="https://www.youtube.com/watch?v=PD6BpltFv0k"
       width='340'
       height = '100%'
       style = {{border : "none" , oweflow : "hidden"}}
       scrolling="no"
       allowTransparency="true"
       allow='encrypted-media'
       frameborder="0">

      </iframe>

    </div>
  )
}

export default Widgets