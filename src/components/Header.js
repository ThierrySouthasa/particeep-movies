import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            <h1>Particeep Movies</h1>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
  height : 80px;
  background-color : black;
  color : red;

  h1 {
    text-align : center;
    padding-top : 17px;
    font-family: 'Anton', sans-serif;
    text-transform : uppercase;
  }

  h1:hover {
    color : #FFF;
  }
`

export default Header;