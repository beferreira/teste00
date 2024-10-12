import './cadastro.scss';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



function Cadastro() {
  const [token, setToken] = useState(null);
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()

    async function logar() {
    const paramCorpo = {
        "nome": nome,
        "senha": senha
    }

    const url = 'http://localhost:5020/usuario';
    let resp = await axios.post(url, paramCorpo);
    navigate("/")

    alert('Usuário cadastrado' + resp.data.novoId);
  }

  return (
    <div className="cadastro">
        <h1>Cadastrar-se</h1>
        <div className='interativo'>
        <input type="text" placeholder='Usuário' value={nome} onChange={e => setNome(e.target.value)}/>
        <input type="password" placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>

        <button onClick={logar}>Entrar</button>
        <a href="/">Login</a>
      </div>
    </div>
  );
}

export default Cadastro;
