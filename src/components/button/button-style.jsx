import styled from "styled-components"

export const BaseButton = styled.button`
 min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

`
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #FF7D7D;
        color: white;
        border-color:#FF7D7D ;
  
      &:hover {
        background-color: #E26868;
        border-color:#FF7D7D;
        color:white;
      }


`
export const GitHubSignInButton = styled(BaseButton)`
  background-color: black;   
        border-color: #372948;
      
  
      &:hover {
        background-color: white;
        border-color:none;
        color:black;
      }


`
export const FacebookSignInButton = styled(BaseButton)`
 background-color: #7978FF;
        color: aliceblue;
        border-color: #7978FF;
  
      &:hover {
        background-color: #4649FF;
        color:white;
        border-color:aliceblue;
      }


`
export const Inverted = styled(BaseButton)`
  background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
`
