import React from "react"
import Figure from './Figure'
import styled from "styled-components"

const StyledCard = styled.div`
border: 1px solid black;
border-radius: 12px;
padding: 2rem;

h2 {
    text-align: center;
    color: green;
    font-size: 2.5rem;
    margin: 0 0 1rem 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

p {
    margin: 0 0 1rem 0;
    text-align: center;
    font-weight: bolder;
    font-size: 1rem ;
    font-family: 'Courier New', Courier, monospace;
    
}

`

export default function Card({ title, text, imageURL, date }) {
    return (
        <StyledCard className="card">
            <h2>{title}</h2>
            <p>{text}</p>
            <Figure
                imageURL={imageURL}
                date={date}
            />
        </StyledCard>
    )
}