import React from 'react'
import './styles/AditionalInfo.css'

function AditionalInfo(props) {
    // Firts letter to upper case
    function capitalizeFirstLetter(string) {
        return `${string[0].toUpperCase()}${string.slice(1)}`;
      }
      
  return (
    <div className='aditionalInfoMain'>
        
        <h4>Height: {props.data ? `${props.data.height*10} cm` : ""}</h4>
        <h4>Weight: {props.data ? `${props.data.weight/10} kg` : ""}</h4>
        <h4>Type: {props.data ? capitalizeFirstLetter(props.data.types[0].type.name) : ""}</h4>
        <h4>Hp: {props.data?.stats[0].base_stat}</h4>
        <h4>Attack: {props.data?.stats[1].base_stat}</h4>
        <h4>Defense: {props.data?.stats[2].base_stat}</h4>
    </div>
  )
}

export default AditionalInfo