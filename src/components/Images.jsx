import React from 'react'
import "./styles/Images.css"

function Images(props) {
  return (
    <div className='imageComponentContainer'>
    <div className='imageContainer'>
        <img src={props.data ? props.data.sprites.other['official-artwork'].front_default : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/1024px-International_Pokémon_logo.svg.png"} alt={props.data?.name} />
    </div>
    </div>
  )
}

export default Images