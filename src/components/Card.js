import React, { useState } from 'react';
import styled from 'styled-components';

const Card = ({ movies }) => {

    const theme = [
        { "background-color": "blue", "color": "white" },
        { "background-color": "red", "color": "white" }
    ]

    const [like, setLike] = useState(0)
    const [buttonBlue, setButtonBlue] = useState(true)

    const handleAdd = (e) => {
        e.preventDefault();
        setLike(like + 1)
        setButtonBlue(false)
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setLike(like - 1)
        setButtonBlue(true)
    }

    return (
        <StyledCard>
            <h1>{movies.title}</h1>
            <h2>{movies.category}</h2>
            <div className='likeDislike'>
                <button
                    onClick={buttonBlue ? handleAdd : handleDelete}
                    style={buttonBlue ? theme[0] : theme[1]}
                >{buttonBlue ? "like" : "dislike"}</button>
                <p>{like}</p>
            </div>
            <button>Supprimer</button>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    height : 500px;
    margin : 10vh auto;
    background-color : lightgrey;
    width : 600px;
    border-radius : 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content : space-around;

    .likeDislake {
        text-align : center;
    }
`

export default Card;