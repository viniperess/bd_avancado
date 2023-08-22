import db from "./libs/firebase/rtdb_connection.js"
import {ref, set} from "firebase/database";

set(ref(db, 'clientes/-NcPUywKWEuLLdTUhT-H'),{
    nome: "João Silva",
    idade: 35
}).then(()=>{
    console.log("Registro Alterado!!")
    process.exit(1);
})
.catch(error=>console.log("Erro!?"+error))