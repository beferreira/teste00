import './get.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CabecalhoDiario from '../../components/cabecalho-diario/cabecalho-diario.jsx';
import { Navigate, useNavigate } from 'react-router-dom';

export default function GetDiario() {
    const [getdiario, setGetDiario] = useState([]);
    const [token, setToken] = useState(null);
    const navigate = useNavigate()

    async function buscar() {
        const url = `http://localhost:5020/diario?x-access-token=${token}`;
        let resp = await axios.get(url);
        setGetDiario(resp.data);
    }

    useEffect(() => {
        let usuario = localStorage.getItem('Usuario')
        setToken(usuario)

        if (usuario == undefined) {
            navigate('/add')
        }
    }, [])
    

    return (
        <div className='get'>
            <header>
                <CabecalhoDiario/>
            </header>

            <button onClick={buscar}>Buscar</button>

            
            <table>
                <thead>
                    <tr>
                        <th>ID Diario </th>
                        <th>ID Usuário</th>
                        <th>Data</th>
                        <th>Conteudo</th>
                    </tr>
                </thead>

                <tbody>
                    {getdiario.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.idUsuario}</td>
                            <td>{item.data}</td>
                            <td>{item.descricao}</td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}