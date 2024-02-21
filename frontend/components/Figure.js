import React from "react";
import styled from "styled-components";

const StyledFigure = styled.figure`

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

figcation {
    font-style: italic;
}
`

export default function Figure({ imageURL, date }) {
    return (
        <StyledFigure>
        <figure>
            <img src={imageURL} />
            <figcation>Picture was taken on: {date}</figcation>
        </figure>
        </StyledFigure>
    )
}