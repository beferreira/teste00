import con from "./connection.js";

export async function validarUsuario(usuario) {
    const comando = `
        select 
            id_usuario id,
            nm_usuario nome
        from tb_usuario 
        where 
            nm_usuario = ?
            and ds_senha = ?
    `;
    
    let registros = await con.query(comando, [usuario.nome, usuario.senha])
    return registros[0][0];
}

export async function inserirUsuario(usuario){
    
    const comando = `
    insert into tb_usuario(nm_usuario, ds_senha)
    values (?,?);
    `
    let resposta= await con.query(comando, [usuario.nome, usuario.senha])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarUsuario(){
    const comando = `
    select id_usuario     id,
    nm_usuario            nome,
    ds_senha            senha
    from tb_usuario
    `
    
    let resposta= await con.query(comando)
    let registros = resposta[0];

    return registros
}

export async function alterarUsuario(usuario,id){
    const comando = `
    update tb_usuario
    set nm_usuario =?,
    ds_senha =?

    where id_usuario =?;
    `
    let resposta= await con.query(comando, [usuario.nome, usuario.senha, id])
    let registros = resposta[0];

    return registros;

}

export async function removerUsuario(id){

    const comando = `
    delete from tb_usuario
    where id_usuario = ?
    `
    let resposta= await con.query(comando, [id])
    let info = resposta[0];
    
    return info.affectedRows;
}