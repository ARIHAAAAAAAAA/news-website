import styled from "styled-components"


const Image = styled.img`
  border-radius: 10px; 
  width:100%;
  height: 150px;
  object-fit: cover;
`;
const ImageLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Paragraph = styled.p<{padding?:string}>`
  line-height: 1.5;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #666;
  padding: ${(props)=> props.padding = "100px" };
`;


export interface CardProps {
  url: string | undefined;
  title: string;
  imageSrc:string;
  paragraph: string;
}

export { Paragraph, Image,ImageLink}