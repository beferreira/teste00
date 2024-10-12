import con from "./connection.js";

export async function inserirDiario(diario){
    
    const comando = `
    insert into tb_diario(dt_dia, ds_conteudo, id_usuario)
    values (?,?,?);
    `
    let resposta= await con.query(comando, [diario.dia, diario.conteudo, diario.idUsuario])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarDiario(){
    const comando = `
    select id_diario    id,
    dt_dia              data,
    ds_conteudo         conteudo,
    id_usuario          idUsuario
    from tb_diario;
    `
    
    let resposta= await con.query(comando)
    let registros = resposta[0];

    return registros
}

export async function alterarDiario(diario,id){
    const comando = `
    update tb_diario
    set dt_dia =?,
    ds_conteudo =?,
    id_usuario =?

    where id_diario =?;
    `
    let resposta= await con.query(comando, [diario.dia, diario.conteudo, diario.idUsuario, id])
    let registros = resposta[0];

    return registros;

}

export async function removerDiario(id){

    const comando = `
    delete from tb_diario
    where id_diario = ?
    `
    let resposta= await con.query(comando, [id])
    let info = resposta[0];
    
    return info.affectedRows;
}