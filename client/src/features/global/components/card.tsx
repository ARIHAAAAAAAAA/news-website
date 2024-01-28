import React from "react";
import { CardProps, Paragraph, Image, ImageLink } from "../style/cardStyle";
import { H1 } from "../style/hStyle";
import { StyledDive } from "../style/divStyle";



export const CardComponent: React.FC<CardProps> = (props) => {
  return (
    <ImageLink href={props.url}>
      <StyledDive flex-direction="column" 
  margin= "10px" width="300px" height="250px" border="1px solid #ddd">
        <Image src={props.imageSrc} />
        <H1 color="black">{props.title}</H1>
        <Paragraph>{props.paragraph}</Paragraph>
      </StyledDive>
    </ImageLink>
  );
};
