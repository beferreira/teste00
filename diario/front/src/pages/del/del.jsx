import './del.scss'
import axios from 'axios'
import CabecalhoDiario from '../../components/cabecalho-diario/cabecalho-diario.jsx';
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function DelDiario() {
    const [token, setToken] = useState(null);
    const [id, setId] = useState('')    
    const navigate = useNavigate()

    async function salvar() {

        const url = `http://localhost:5020/diario/${id}`;
        let resp = await axios.delete(url);

        alert(`Id: ${id} deletado da lista de anotações.` + resp.data);
    }

    useEffect(() => {
        let usuario = localStorage.getItem('Usuario')
        setToken(usuario)

        if (usuario == undefined) {
            navigate('/add')
        }
    }, [])

    return (
        <div className='del'>
            <header>
                <CabecalhoDiario/>
            </header>

            <div className='id'>
                <input type='text' placeholder='ID que deseja remover' value={id} onChange={e => setId(e.target.value)} />
            </div>

            <button onClick={salvar}> Deletar </button>

        </div>
    )
}
