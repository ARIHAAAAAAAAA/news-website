import React from "react";
import { Card, CardProps, Paragraph, Title, Image, ImageLink } from "../style/cardStyle";



export const CardComponent: React.FC<CardProps> = (props) => {
  return (
    <ImageLink href={props.url}>
      <Card >
        <Image src={props.imageSrc} />
        <Title>{props.title}</Title>
        <Paragraph>{props.paragraph}</Paragraph>
      </Card>
    </ImageLink>
  );
};
