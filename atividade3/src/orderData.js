import  {ref, onChildChanged, off, query, orderByChild, onValue, orderByKey} from "firebase/database";// sera preciso usar fb antes de cada funcao
import dbConnect from "./libs/firebase/rtdb_connection.js"

const db = dbConnect;

const produtosRef = ref(db, 'produtos');

const consulta = query(produtosRef, orderByKey())
onValue(consulta, dados => {
    console.log(dados.val());
    process.exit(0);
})