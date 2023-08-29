import  {ref, onChildChanged, off, query, orderByChild, onValue, orderByKey, orderByValue, onChildAdded} from "firebase/database";// sera preciso usar fb antes de cada funcao
import dbConnect from "./libs/firebase/rtdb_connection.js"

const db = dbConnect;

const produtosRef = ref(db, 'produtos');

const consulta = query(produtosRef, orderByChild('preco'));

onValue(consulta, dados => {
    console.log("Alterações");
    dados.forEach((childDados) => {
        let chave = childDados.key;
        let valor = childDados.child('preco').val();
        console.log(`${chave}: ${valor}`);
    });
},{
    onlyOnce: true // apenas uma vez    
});
