import React, { useEffect, useState, useContext } from 'react';
import AlunoFirebaseService from '../../services/AlunoFirebaseService';
import FirebaseContext from '../../utils/FirebaseContext';
import '../../css/crud.css';

const AgruparPorCurso = () => {
    const [alunos, setAlunos] = useState([]);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        AlunoFirebaseService.listar(
            firebase.getFirestoreDb(),
            (alunos) => {
                setAlunos(alunos);
            }
        );
    }, [firebase]);

    const groupedAlunos = alunos.reduce((acc, aluno) => {
        if (!acc[aluno.curso]) {
            acc[aluno.curso] = [];
        }
        acc[aluno.curso].push(aluno);
        return acc;
    }, {});

    return (
        <div className="page-content">
            <h1>Alunos Por Curso</h1>
            {Object.keys(groupedAlunos).map(curso => (
                <div key={curso} className="table-content">
                    <h2>{curso}</h2>
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">IRA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupedAlunos[curso].map(aluno => (
                                <tr key={aluno.id}>
                                    <td className={parseFloat(aluno.ira) >= 7 ? 'highlight-ira' : ''}>{aluno.nome}</td>
                                    <td className={parseFloat(aluno.ira) >= 7 ? 'highlight-ira' : ''}>
                                        {aluno.ira}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default AgruparPorCurso;
