import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'João',
      sobrenome: 'Lucas',
      email: 'lucasmonteirolima17@gmail.com',
      idade: 21,
      peso: 69,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
