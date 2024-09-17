import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Home = () => {
  return (
    
    <div>
    <br />
    <br />
      {/* Banner */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Bem-vindo à Prova de WEB!</h1>
          <p className="lead">Demonstrando as habilidades na criação de sites e interfaces web.</p>
        </div>
      </header>
      <br />
    <br />
    <br />
    <br />
    <br />
      {/* Seção de Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">HTML e CSS</h5>
                  <p className="card-text">
                    Teste seus conhecimentos em criação de estruturas HTML semânticas e estilização com CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">JavaScript</h5>
                  <p className="card-text">
                    Desafios que envolvem manipulação de DOM, eventos e lógica de programação com JavaScript.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Bootstrap</h5>
                  <p className="card-text">
                    Utilize o poder do Bootstrap para criar layouts responsivos e rápidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">© 2024 Prova de WEB. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;