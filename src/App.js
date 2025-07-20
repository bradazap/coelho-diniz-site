import React, { useState } from "react";
import "./style.css";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(0);

  const handleLogin = () => {
    const nome = prompt("Digite seu nome:");
    if (nome) setUser(nome);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Coelho Diniz</h1>
        <p>Certeza do menor preço</p>
        <div className="actions">
          <button onClick={handleLogin}>
            {user ? `Olá, ${user}` : "Fazer Login"}
          </button>
          <a href="#promo"><button>Ver Promoções</button></a>
          <span role="img" aria-label="carrinho">🛒 {cart}</span>
        </div>
      </header>

      <nav className="navbar">
        <a href="#lojas">Lojas Físicas</a>
        <a href="#online">Loja Online</a>
        <a href="#receitas">Dicas de Receitas</a>
        <a href="#trabalhe">Trabalhe Conosco</a>
        <a href="#contato">Fale Conosco</a>
      </nav>

      <section id="banner">
        <img
          src="https://coelhodiniz.com.br/images/banners/banner01.png"
          alt="Banner Principal"
          className="banner-img"
        />
      </section>

      <section id="promo" className="produtos">
        <h2>Ofertas da Semana</h2>
        <div className="grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="produto" key={i}>
              <img
                src={`https://source.unsplash.com/300x200/?grocery,aisle&sig=${i}`}
                alt={`Produto ${i + 1}`}
              />
              <p>Produto {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer" id="contato">
        <p>&copy; 2025 Supermercado Coelho Diniz. Todos os direitos reservados.</p>
        <p>Contato: contato@coelhodiniz.com.br | (33) 9999-9999</p>
      </footer>
    </div>
  );
}

export default App;