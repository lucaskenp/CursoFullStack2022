import React from 'react';
import { Tittle, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Tittle isRed={false}>
        Login
        <small>Oi</small>
      </Tittle>
      <Paragraph>Lorem ipsum</Paragraph>
      <button type="button">Enviar</button>
    </Container>
  );
}
