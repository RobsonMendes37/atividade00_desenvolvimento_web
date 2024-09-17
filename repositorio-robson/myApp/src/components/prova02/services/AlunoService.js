import axios from "axios";

const url = "http://localhost:3003/alunos/"


class AlunoService {
  //GET SERVICES
  static getAlunosAxiosThenCatch = (callback) => {
    axios
      .get(url+"listar")
      .then((response) => {
        //console.log(response.data)
        callback(response.data);
      })
      .catch((error) => console.log(error));
  };

  static getAlunosAxiosAsyncAwait = async (callback) => {
    try {
      const response = await axios.get(url+"listar");
      callback(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  static getAlunosFetchThenCatch = (callback) => {
    fetch(url+"listar")
      .then((response) => response.json())
      .then((json) => callback(json))
      .catch((error) => console.log(error));
  };

  static getAlunosFetchAsyncAwait = async (callback) => {
    try {
      const response = await fetch(url+"listar");
      const json = await response.json();
      callback(json);
    } catch (error) {
      console.log(error);
    }
  };

  static getAlunoById = (id, callback) => {
    //.get(`http://localhost:3001/alunos/?id=${id}`)
    axios  
      .get(`http://localhost:3003/alunos/recuperar/${id}`)
      .then((response) => {
        //console.log(response)
        callback(response.data);
      })
      .catch((error) => console.log(error));
  };

  //POST SERVICES
  static postAlunoAxiosThenCatch = (aluno, callback) => {
    axios
      .post(url+"criar", aluno)
      .then((response) => {
        callback(response);
      })
      .catch((error) => console.log(error));
  };

  static postAlunoFetchThenCatch = (aluno, callback) => {
    fetch(url+"criar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => callback(json))
      .catch((error) => console.log(error));
  };

  // PUT SERVICES

  static updateAluno = (id, alunoEditado, callback) => {
    //.put(`http://localhost:3001/alunos/${id}`, alunoEditado)
    axios
      .put(`http://localhost:3003/alunos/atualizar/${id}`, alunoEditado)
      .then((response) => {
        //console.log(response)
        callback(response)
      })
      .catch((error) => console.log(error));
  };

  // DELETE SERVICES

  static deleteAluno = (id, callback) => {
    //.delete(`http://localhost:3001/alunos/${id}`)
    axios
      .delete(`http://localhost:3003/alunos/apagar/${id}`)
      .then(response => {
        alert("Aluno apagado!")
        //navigate("/aluno/listar")
        console.log(response)
        callback("ok!")
      })
      .catch( error => console.log(error))
  }
}

export default AlunoService;
