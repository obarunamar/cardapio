import React from "react";
import { db } from "../data/db";

const Menu = () => {
  const {
    entradas,
    porcoes,
    guarnicoes,
    pratos,
    paorecheado,
    bebidas,
    sucos,
    doses,
    cerveja,
    longneck,
    chopp,
    vinho,
    drinks,
    drinkssemalcool,
    drinksobar
  } = db.menu;

  return (
    <div>
      <div id="pratos">
        <h2>Entradas</h2>
        <div className="menu">
          {entradas.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Porções</h2>
        <div className="menu">
          {porcoes.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Guarnições</h2>
        <div className="menu">
          {guarnicoes.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Pratos</h2>
        <h4>Acompanhamentos: Arroz, Batata Frita, Farofa e Salada</h4>
        <div className="menu">
          {pratos.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Pão Recheado</h2>
        <div className="menu">
          {paorecheado.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="bebidas">
        <h2>Bebidas</h2>
        <div className="menu">
          {bebidas.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Sucos</h2>
        <div className="menu">
          {sucos.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Doses</h2>
        <div className="menu">
          {doses.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Cerveja 600ML</h2>
        <div className="menu">
          {cerveja.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Long Neck</h2>
        <div className="menu">
          {longneck.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Chopp</h2>
        <div className="menu">
          {chopp.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Vinhos</h2>
        <h4>Nacionais, Chileno e Argentino</h4>
        <div className="menu">
          {vinho.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="drinks">
        <h2>Drinks</h2>
        <div className="menu">
          {drinks.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Drinks sem Álcool</h2>
        <div className="menu">
          {drinkssemalcool.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Drinks o Bar</h2>
        <div className="menu">
          {drinksobar.map((item) => (
            <div className="card" key={item.nome}>
              <h3>{item.nome}</h3>
              <p>{item.preço}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Menu;
