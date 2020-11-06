import React from 'react';
import styled from 'styled-components/native';
import list from './src/list';
import ListItem from './src/components/ListItem';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const List = styled.FlatList`
  flex: 1;
  background-color: #202024;
`;

export default () => {
  return (
    <Container>
      <List
        data={list}
        renderItem={({item}) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};
