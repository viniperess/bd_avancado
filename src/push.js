import db from "./libs/firebase/rtdb_connection.js"
import { push, ref } from "firebase/database";


const newCliente1 = {
    nome: 'Maria',
    idade: 15,
}

const newCliente2 = {
    nome: 'Joao',
    idade: 25,
}

const newCliente3 = {
    nome: 'Ana',
    idade: 23,
}


push(ref(db, 'clientes/'), newCliente1)
.then(()=>console.log('Inserido!!!'))
	.catch(()=>console.log("Erro ao inserir!!"))
	.finally(()=>process.exit(0))