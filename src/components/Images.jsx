import React from 'react'

function Images(props) {
  return (
    <div>
        
        <img src={props.data.sprites.other['official-artwork'].front_default} alt={props.data.name} />
    </div>
  )
}

export default Images