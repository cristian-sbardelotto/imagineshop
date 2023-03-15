import React from 'react';

import { MessageContainer, SubTitle, Title } from './styles';

const Error404 = () => {
  return (
    <MessageContainer>
      <Title>Erro 404</Title>
      <SubTitle>Página não encontrada!</SubTitle>

      <p>Verifique se a URL do site foi digitada corretamente.</p>
    </MessageContainer>
  );
};

export default Error404;
