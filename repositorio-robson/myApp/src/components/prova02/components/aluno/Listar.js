import "../../css/crud.css"
import AlunoService from "../../services/AlunoService";
import AlunoFirebaseService from "../../services/AlunoFirebaseService";
import FirebaseContext from "../../utils/FirebaseContext";

import { useEffect, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Listar = () => {

  const [alunos, setAlunos] = useState([])
  const navigate = useNavigate()
  const firebase = useContext(FirebaseContext)

  useEffect(
    () => {
      AlunoFirebaseService.listar(
        firebase.getFirestoreDb(),
        ( alunos ) => {
          setAlunos(alunos)
        }
      )
    }
    ,
    []
  )

  const handleDelete = (id) => {
    if (window.confirm(`Deseja excluir id = ${id}`)) {
      AlunoFirebaseService.apagar(
        firebase.getFirestoreDb(),
        (response) => {
          const result = alunos.filter((aluno) => aluno.id!==id)
          setAlunos(result)
        },
        id
      )
    }
  }

  const renderizarAlunos = () => {
    const vetorResultado = alunos.map(
        (aluno) => {
            return (
                <tr>
                    <th scope="row">{aluno.id}</th>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td>{aluno.titulacao}</td>
                    <td>
                        <div className="button-content">
                            <Link 
                              to={`/aluno/editar/${aluno.id}`}
                              className="btn btn-primary"
                            >
                              Editar
                            </Link>
                            <button 
                              type="button" 
                              className="btn btn-danger"
                              onClick={() => handleDelete(aluno.id)}
                            >
                              Apagar
                            </button>
                        </div>
                    </td>
                </tr>
            )
        }
    )
    return vetorResultado;
  };

  return (
    <div className="page-content">
      <h1>Listar Aluno {process.env.REACT_APP_LINK_API}</h1>
      <div className="table-content">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Titulação</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {renderizarAlunos()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listar;
