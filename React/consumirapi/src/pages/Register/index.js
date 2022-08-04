import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if (formErrors) return;

    try {
      await axios.post('/users', {
        nome,
        password,
        email,
      });
      toast.success('Você fez seu cadastro');
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  function handleNome(e) {
    setNome(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nome">
          Nome:
          <input type="text" value={nome} onChange={handleNome} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" value={email} onChange={handleEmail} />
        </label>
        <label htmlFor="senha">
          Senha:
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
