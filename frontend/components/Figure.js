import React from "react";

export default function Figure({ imageURL, caption }) {
    return (
        <figure>
            <img src={imageURL} />
            <figcation>Picture was taken on: {caption}</figcation>
        </figure>
    )
}