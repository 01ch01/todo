import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
  padding: 15px;
  border: 3px solid #04d361;
  border-radius: 5px;
  margin: 12px;
  background-color: #7159c1;
`;

const ItemHeader = styled.View`
  display: flex;
  flex-direction: row;
`;

const ItemTitle = styled.Text`
  font-size: 20px;
  color: whitesmoke;
  font-weight: bold;
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 3px solid #04d361;
`;

const ItemText = styled.Text`
  font-size: 16px;
  color: whitesmoke;
`;

export default (props) => {
  return (
    <Item onPress={() => {}}>
      <ItemHeader>
        <ItemTitle>{props.data.task}</ItemTitle>
        <ItemCheck />
      </ItemHeader>

      <ItemText>{props.data.description}</ItemText>
    </Item>
  );
};
