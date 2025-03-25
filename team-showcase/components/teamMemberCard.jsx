import React from "react"
import './teamMemberCard.css'

const TeamMemberCard = ({data}) => {
    return(
        <div className="card">
            <h1>Name: {data.name}</h1>
            <h2>Age: {data.age}</h2>
            <h2>Gender: {data.gender}</h2>
            <p>Loves {data.favouriteMovie}</p>
        </div>
    )
}

export default TeamMemberCard