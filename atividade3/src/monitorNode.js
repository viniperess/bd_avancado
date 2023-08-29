import  {ref, onChildChanged, off} from "firebase/database";// sera preciso usar fb antes de cada funcao
import dbConnect from "./libs/firebase/rtdb_connection.js"

const db = dbConnect;

const produtosRef = ref(db, 'produtos');

onChildChanged(produtosRef,(snapData) => {
    console.log("Alterações:");
    console.table(snapData.val());
    if(snapData.key == '-MwSzyJMlNDToTGtPuhc'){
        console.log("REMOVE CALLBACK");
        off(produtosRef, 'child_changed');
    }
});