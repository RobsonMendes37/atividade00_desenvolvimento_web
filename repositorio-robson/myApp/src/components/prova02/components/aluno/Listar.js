import AlunoService from "../../services/AlunoService";
import AlunoFirebaseService from "../../services/AlunoFirebaseService";
import FirebaseContext from "../../utils/FirebaseContext";

import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Listar = () => {
  const [alunos, setAlunos] = useState([]);
  const [colorApplied, setColorApplied] = useState(false); // Novo estado
  const navigate = useNavigate();
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    AlunoFirebaseService.listar(firebase.getFirestoreDb(), (alunos) => {
      setAlunos(alunos);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm(`Deseja excluir id = ${id}`)) {
      AlunoFirebaseService.apagar(
        firebase.getFirestoreDb(),
        (response) => {
          const result = alunos.filter((aluno) => aluno.id !== id);
          setAlunos(result);
        },
        id
      );
    }
  };

  const calcularMedia = () => {
    if (alunos.length === 0) return 0;
    const soma = alunos.reduce((acc, aluno) => acc + parseInt(aluno.ira, 10), 0);
    return soma / alunos.length;
  };

  const media = calcularMedia();

  const toggleColor = () => {
    setColorApplied(!colorApplied);
  };

  return (
    <div className="page-content">
      
      <button onClick={toggleColor} className="btn btn-secondary">
        {colorApplied ? "Remover Cores" : "Aplicar Cores"}
      </button>
      <div className="table-content">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Titulação</th>
              <th scope="col">IRA</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => {
              const alunoIRA = parseInt(aluno.ira, 10);
              let rowStyle = {};
              if (colorApplied) {
                rowStyle = {
                  backgroundColor: alunoIRA < media ? "red" : "blue",
                  color: "white", // Ajusta a cor do texto para melhor contraste
                };
              }
              return (
                <tr key={aluno.id}>
                  <th scope="row" style={rowStyle}>{aluno.id}</th>
                  <td style={rowStyle}>{aluno.nome}</td>
                  <td style={rowStyle}>{aluno.curso}</td>
                  <td style={rowStyle}>{aluno.titulacao}</td>
                  <td style={rowStyle}>{aluno.ira}</td>
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
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th  scope="col" style={{ color: "Green" }}>Media :{media}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Listar;
