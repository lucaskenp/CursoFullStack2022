import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }

    getData();
  }, []);
  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => {
          return (
            <div key={String(aluno.id)}>
              <ProfilePicture>
                {get(aluno, 'Fotos[0].url', false) ? (
                  <img
                    crossOrigin="anonymous"
                    src={aluno.Fotos[0].url}
                    alt=""
                  />
                ) : (
                  <FaUserCircle className="user-circle" />
                )}
              </ProfilePicture>
              <span>{aluno.nome}</span>
              <span>{aluno.email}</span>

              <Link to={`/aluno/${aluno.id}/edit`}>
                <FaEdit />
              </Link>
              <Link to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose />
              </Link>
            </div>
          );
        })}
      </AlunoContainer>
    </Container>
  );
}
