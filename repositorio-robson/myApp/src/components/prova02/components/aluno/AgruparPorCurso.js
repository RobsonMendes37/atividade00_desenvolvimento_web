import React from 'react';

const AgruparPorCurso = () => {
    const alunos = [
        { nome: "Fulano de Tal", curso: "Sistemas de Informação", ira: 7.5 },
        { nome: "Sicrano de Tal", curso: "Sistemas de Informação", ira: 6.3 },
        { nome: "Beltrana de Tal", curso: "Engenharia de Software", ira: 9.4 }
    ];

    const groupedAlunos = alunos.reduce((acc, aluno) => {
        if (!acc[aluno.curso]) {
            acc[aluno.curso] = [];
        }
        acc[aluno.curso].push(aluno);
        return acc;
    }, {});

    return (
        <div>
            {Object.keys(groupedAlunos).map(curso => (
                <div key={curso}>
                    <h2>{curso}</h2>
                    <ul>
                        {groupedAlunos[curso].map(aluno => (
                            <li key={aluno.nome}>
                                {aluno.nome} - IRA: {aluno.ira}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AgruparPorCurso;