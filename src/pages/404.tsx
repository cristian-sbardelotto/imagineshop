import React from 'react';

import styled from 'styled-components';
import { Container } from '@/styles/utils';

const Error404 = () => {
  return (
    <MessageContainer>
      <Title>Erro 404</Title>
      <SubTitle>Página não encontrada!</SubTitle>

      <p>Verifique se a URL do site foi digitada corretamente.</p>
    </MessageContainer>
  );
};


const MessageContainer = styled.div`
  ${Container}
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const SubTitle = styled.h3`
  font-size: 2rem;
`;

export default Error404;
