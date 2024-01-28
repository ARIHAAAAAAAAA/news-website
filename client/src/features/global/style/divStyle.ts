import styled from "styled-components";

type DiveStyled = {
    flex_Direction?: string
    height?: string
    margin?: string;
    $padding?: string;
    width?: string
    alignItems?: string;
    max_width?: string;
    border?: string;
}

export const StyledDive = styled.div<DiveStyled>`
display: flex;
color: white;
flex-direction: ${(props) => props.flex_Direction };
height: ${(props) => props.height};
width: ${(props) => props.width};
margin: ${(props) => props.margin};
padding: ${(props) => props.$padding};
align-items: ${(props) => props.alignItems};
justify-content: center;
flex-wrap: wrap;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
text-align: center;
overflow: hidden;
border: ${(props) => props.border};

`;


