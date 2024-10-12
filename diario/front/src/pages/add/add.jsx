import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import './add.scss'
import axios from 'axios'
import CabecalhoDiario from '../../components/cabecalho-diario/cabecalho-diario.jsx';

export default function AddDiario() {
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');
    const [token, setToken] = useState(null);
    const navigate = useNavigate()

    async function salvar() {
        let paramCorpo = {
            "data": data,   
            "descricao": descricao
        }

        const url = `http://localhost:5020/diario?x-access-token=${token}`;
        let resp = await axios.post(url, paramCorpo);

        alert('Anotação adicionada ao diário. Id: ' + resp.data.novoId);
    }

    useEffect(() => {
        let usuario = localStorage.getItem('Usuario')
        setToken(usuario)

        if (usuario == undefined) {
            Navigate('/add')
        }
    }, [])

    return (
        <div className='add'>
            <div className='header'>
                <CabecalhoDiario/>
            </div>

            <div className='inputs'>
                    <input className='inp' type='date' value={data} onChange={e => setData(e.target.value)} />
                
                    <input className='desc' type="text" placeholder='Descreva o que aconteceu' value={descricao} onChange={e => setDescricao(e.target.value)}/>
                
            </div>

            <button onClick={salvar}> Adicionar </button>

        </div>
    )
}
