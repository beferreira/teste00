import './cabecalho-diario.scss';

function CabecalhoDiario() {
  return (
    <div className="cabecalho">
        <nav>
            <a href="/add">Cadastrar</a>
            <a href="/get">Consultar</a>
            <a href="/alt">Alterar</a>
            <a href="/del">Deletar</a>
            <a className='voltar' href="/">Voltar</a>
        </nav>
    </div>
  );
}

export default CabecalhoDiario;
