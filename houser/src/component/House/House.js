import React from 'react'

export default function House(props){
    return(
        <div>
            {props.house.id}
            {props.house.name}
            {props.house.address}
            {props.house.city}
            {props.house.state}
            {props.house.zip}
            House

            <button onClick={() => {props.deleteHouse(props.house.id)}}> Delete </button>
        </div>
    )
}