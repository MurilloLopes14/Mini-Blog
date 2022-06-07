import React from "react";
import { Link } from "react-router-dom";
import { AboutContainer, P, H3 } from "./AboutStyle";

export const About = () => {
  return (
    <>
      <AboutContainer>
        <h2>
          Sobre o mini <span>Blog</span>
        </h2>
        <P>
          Este projeto consiste em um sistem de criação e visualização de blogs
          com React.js no front-end e firebase no Back-end.
        </P>
        <P>Comece a entender o projeto criando seus próprios posts!</P>
        <H3>
          <Link to="/posts/create" className="btn">
            Criar post
          </Link>
        </H3>
      </AboutContainer>
    </>
  );
};
