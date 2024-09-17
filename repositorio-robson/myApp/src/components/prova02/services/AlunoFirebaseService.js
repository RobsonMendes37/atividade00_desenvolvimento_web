import { collection, query, getDocs, addDoc, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore"

class AlunoFirebaseService {

    static listar(db, callback) {
        const c = collection(db,"alunos")
        //const q = query(c)
        getDocs(c)
        .then(
            (querySnapshot) => {

                const alunos = []
                //laço
                querySnapshot.forEach(
                    ( aluno ) => {
                        //console.log(aluno.id)
                        //console.log(aluno.data())
                        alunos.push(
                            {
                                id:aluno.id,
                                ...aluno.data()
                            }
                        ) //alunos
                    }
                ) // fim do laço
                callback(alunos)
            }
        )
        .catch(error => console.log(error))
    }

    static criar(db, callback, aluno) {
        const c = collection(db,"alunos")
        addDoc(c,aluno)
        .then(
            (aluno) => {
                callback({id:aluno.id})
            }
        )
        .catch(error => console.log(error))
    }

    static getById(db, callback, id) {
        
        const docRef = doc(db, "alunos", id)
        getDoc(docRef)
        .then(
            (docSnap) => {
                //console.log(docSnap.data())
                //const aluno = docSnap.data()
                callback(docSnap.data())
            }
        )
        .catch(error => console.log(error))
    }

    static atualizar(db, callback, id, alunoAtualizado) {
        const docRef = doc(db,"alunos",id)
        setDoc(docRef,alunoAtualizado)
        .then(
            () => {
                callback({id})
            }
        )
        .catch(error => console.log(error))
    }

    static apagar(db, callback, id) {
        const docRef = doc(db, "alunos", id)
        deleteDoc(docRef)
        .then(
            () => {
                callback({id})
            }
        )
        .catch(error => console.log(error))
    }
}

export default AlunoFirebaseService