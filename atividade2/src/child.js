import db from "./libs/firebase/rtdb_connection.js"
import { child, ref, set} from "firebase/database";

const refNode = ref(db, 'clientes/-NcPW--uP_g_pb6i360F');
const refAttr = child(refNode, 'nome');
set(refAttr, "Maria Silva")
.then( ()=>{
    console.log("Nome Alterado!!")
    process.exit(0);
})
.catch(error=>console.log("Erro!?"+error))