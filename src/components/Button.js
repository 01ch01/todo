import React from 'react';
import {Container, Header, Content, Button, Text, Title} from 'native-base';

export default () => {
  return (
    <Container>
      <Header>
        <Title>My Title</Title>
      </Header>
      <Content>
        <Button>
          <Text>Click Me!</Text>
        </Button>
      </Content>
    </Container>
  );
};
