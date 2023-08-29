import  {ref, get} from "firebase/database";// sera preciso usar fb antes de cada funcao
import dbConnect from "./libs/firebase/rtdb_connection.js"

const db = dbConnect;

console.log(db);

const produtosRef = ref(db, 'produtos');

get(produtosRef).then(snapData => {
    console.log(snapData.val());
}).catch(err=>console.log(err))