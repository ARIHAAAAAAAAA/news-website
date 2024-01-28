import styled from "styled-components"


type H={
    margin?:string;
    padding?:string;
    width?:string;
    hight?:string;
    color?:string;
    fontSize?:string;
  }
  
export const H1 = styled.h1<H>`
color: ${(props)=> props.color};
margin: ${(props)=> props.margin};
padding: ${(props)=> props.padding};
margin-bottom: ${(props)=> props.margin};
text-align: center;
justify-content: center;
font-size: ${(props) => props.fontSize};
`
export const H2 = styled.h2<H>`
color: white;
margin: ${(props)=> props.margin};
padding: ${(props)=> props.padding};
height: ${(props)=> props.hight};
width: ${(props)=> props.width};
text-align: center;
justify-content: center;
`