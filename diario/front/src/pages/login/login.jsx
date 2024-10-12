import { Navigate, useNavigate } from 'react-router-dom';
import './login.scss';
import axios from 'axios';
import { useState } from 'react';

function Login() {
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

    if(resp.data.erro!= undefined){
      alert('Usuário não encontrado' + resp.data.erro);
    }

    else{
      localStorage.setItem('Usuario',resp.data.token)
      navigate("/add")
    }
  }

  return (
    <div className="login">
        <h1>Login</h1>
      <div className='interativo'>
        <input type="text" placeholder='Usuário' value={nome} onChange={e => setNome(e.target.value)}/>
        <input type="password" placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>

        <button onClick={logar}>Entrar</button>
        <a href="/cadastro">Cadastre-se</a>
      </div>
    </div>
  );
}

export default Login;
