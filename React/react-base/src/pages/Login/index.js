import React from 'react';
import { useDispatch } from 'react-redux';
import { Tittle, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(event) {
    event.preventDefault();
    dispatch(exampleActions.clicaBotao());
  }

  return (
    <Container>
      <Tittle isRed={false}>
        Login
        <small>Oi</small>
      </Tittle>
      <Paragraph>Lorem ipsum</Paragraph>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
