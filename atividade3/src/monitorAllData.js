import  {ref, get, getDatabase, onValue} from "firebase/database";// sera preciso usar fb antes de cada funcao
import dbConnect from "./libs/firebase/rtdb_connection.js"

const db = dbConnect;

console.log(db);

const produtosRef = ref(db, 'produtos');

onValue(produtosRef,(snapData) => {
    console.log(snapData.val());
});