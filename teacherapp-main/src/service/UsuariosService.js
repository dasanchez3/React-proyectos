const urlCrud = 'http://localhost:3001';


const getListUsuarios = async () => {
    const response = await fetch(`${urlCrud}/usuarios`);  
    const data = await response.json();     
    return  data;
}
// Obtener solo un id
const findByIdUsuarios = async (usuarioId) => {
    const response = await fetch(`${urlCrud}/usuarios/${usuarioId}`);  
    const data = await response.json();     
    return  data;
}

const createUsuarios = async (usuario) => {

    const resp = await fetch(`${urlCrud}/usuarios`, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateUsuarios = async (usuario) => {
  
    const resp = await fetch(`${urlCrud}/usuarios`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListUsuarios,
    createUsuarios,
    updateUsuarios,
    findByIdUsuarios

}