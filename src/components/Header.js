import React from 'react';
import styled from 'styled-components/native';

const Header = styled.View`
  align-items: center;
  background-color: #7159c1;
  height: 60px;
  justify-content: center;
  width: 100%;
`;

const HeaderText = styled.Text`
  color: whitesmoke;
  font-size: 22px;
  font-weight: bold;
`;

export default () => {
  return (
    <Header>
      <HeaderText>Pretty cool, huh?</HeaderText>
    </Header>
  );
};
