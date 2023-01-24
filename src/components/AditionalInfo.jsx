import React from 'react'
import './styles/AditionalInfo.css'

function AditionalInfo(props) {
  return (
    <div className='aditionalInfoMain'>
        
        <h4>Weight: {props.data ? props.data.weight/10 : ""} kg</h4>
        <h4>Type: {props.data?.types[0].type.name}, {props.data?.types[1].type.name}</h4>
        <h4>Attack: {props.data?.stats[1].base_stat}</h4>
        <h4>Defense: {props.data?.stats[2].base_stat}</h4>
    </div>
  )
}

export default AditionalInfo