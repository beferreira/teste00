import { useState } from 'react'
import './alt.scss'
import axios from 'axios'
import CabecalhoDiario from '../../components/cabecalho-diario/cabecalho-diario.jsx';



export default function AltDiario() {
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');
    const [token, setToken] = useState(null);   

    const [id, setId] = useState('')

    async function salvar() {
        let paramCorpo = {
            "data": data,   
            "descricao": descricao
        }

        const url = `http://localhost:5020/diario/${id}?x-access-token=${token}`;
        let resp = await axios.put(url, paramCorpo);

        alert('Anotação alterada do diário. ' + resp.data);
    }

    return (
        <div className='alt'>
            <div className='header'>
                <CabecalhoDiario/>
            </div>

            <div className='inputs'>
            <input className='inp' type='text' placeholder='Insira o ID a ser alterado  ' value={id} onChange={e => setId(e.target.value)}/>

                    <input className='inp' type='date' value={data} onChange={e => setData(e.target.value)} />
                
                    <input className='desc' type="text" placeholder='Descreva o que aconteceu' value={descricao} onChange={e => setDescricao(e.target.value)}/>
                
            </div>

            <button onClick={salvar}> Adicionar </button>

        </div>
    )
}