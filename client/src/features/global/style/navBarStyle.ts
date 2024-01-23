import React from 'react';
import styled from "styled-components";





const SearchInput = styled.input`
  border-radius: 8px;
  padding: 8px;
  padding-right: 30px;
  width: 200px; 
  border: 1px solid #ccc;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px;
`;

const StyledSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  outline: none;
  cursor: pointer;
`;

const LanguageOption = styled.option`
  font-size: 16px;
`;

export interface navBarProps {
  button: string;
  search: string;
}
export { SearchInput, SearchIcon, StyledSelect, LanguageOption }

