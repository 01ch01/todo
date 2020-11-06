import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
  background-color: #7159c1;
  border-radius: 5px;
  border: 3px solid #04d361;
  margin: 12px;
  padding: 15px;
`;

const ItemHeader = styled.View`
  display: flex;
  flex-direction: row;
`;

const ItemTitle = styled.Text`
  color: whitesmoke;
  flex: 1;
  font-size: 20px;
  font-weight: bold;
`;

const ItemCheck = styled.Text`
  border-radius: 10px;
  border: 3px solid #04d361;
  height: 25px;
  width: 25px;
  color: whitesmoke;
  text-align: center;
  background-color: #04d361;
  font-size: 16px;
`;

const ItemText = styled.Text`
  color: whitesmoke;
  font-size: 16px;
`;

export default (props) => {
  return (
    <Item onPress={() => {}}>
      <ItemHeader>
        <ItemTitle>{props.data.task}</ItemTitle>
        <ItemCheck>{props.data.done ? '✓' : '✗'}</ItemCheck>
      </ItemHeader>

      <ItemText>{props.data.description}</ItemText>
    </Item>
  );
};
