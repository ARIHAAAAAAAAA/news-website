import styled from "styled-components"

export const StyledInput = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }

  // You can add more styles or use media queries for responsiveness
`;

export const FormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
export const LogoNotifyR = styled.img`
  height: 48px;
  width: 61px;
  border-radius: 50px;
  margin: 12px ;
  color: white;
`;


export const InputBox = styled.textarea<TextInput>`
height: ${(props)=> props.height};
width: ${(props)=> props.width};
margin-top: ${(props)=> props.marginTop};
padding: ${(props)=> props.padding};
resize: none;
font-size: 16px; /* Set your desired font size here */
padding: 10px;
`
type TextInput ={
  flexDirection?:string
  height?:string
  marginTop?:string;
  padding?:string;
  width?:string
}
