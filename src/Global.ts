

import styled from "styled-components";

export const Container = styled.div`
*{
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;

}
background-color: black;
color: whitesmoke;
height: 100vh;
display: flex;
width: 100%;
`

export const LeftSide = styled.div`
width: 22rem;
background-color: #191d2b;
display: flex;
flex-direction: column;
align-items: center;
border-right: 1px solid #2e344e;
`


export const RightSide = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: center;
width: max-content;
padding: 6rem;
flex-direction: column;

h1{
    font-size: 4rem;
}

span{
    color: #007bff
}

p{
    font-size: 1.2rem;
    color: #a4acc4;
}

` 


export const Avatar = styled.div`
    width: 100%;
    border-bottom: 1px solid #2e344e;
    text-align: center;
    padding: 1rem 0px;
`

export const Image = styled.img`
    width: 218px;
    height: 218px;
    border-radius: 50%;
    border: 8px solid #2e344e
`