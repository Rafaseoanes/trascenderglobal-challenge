import React from 'react'
import "./styles/Images.css"

function Images(props) {
  return (
    <div className='imageContainer'>
        <img src={props.data ? props.data.sprites.other['official-artwork'].front_default : "https://i.imgur.com/OBsRAeI.png"} alt={props.data?.name} />
    </div>
  )
}

export default Images