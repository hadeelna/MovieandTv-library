import React from 'react'
import Moviecard from './Moviecard'
const NewList = (props) => {
  return (
    <div >
      <ul >
      <Moviecard movie={props.movie}
      onclick={props.onclick}
      ></Moviecard>
  </ul> 
    
      </div>
     )
}

export default NewList