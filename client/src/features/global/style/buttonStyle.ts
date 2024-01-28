import styled from "styled-components"

export const Button = styled.button`
  border-radius:8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    color: black;
  }
  background-color:white;
    color: black;
  &:active{
    transform: scale(0.9);
}
`