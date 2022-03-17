import React from "react";
import './navbar.css';
import mafalda from '../imagens/mafalda.jpg';
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <img src={mafalda}/>
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <Link to="Pricing">Youtubekkkk</Link>
        </li>
        <li class="nav-item">
        <Link to="/contato">Contato</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
         <Link to='/exemplo_grid'> Exemplo Grid</Link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;

const Mafalda = styled.img`
width: 25px;
height: 25px;
`;
