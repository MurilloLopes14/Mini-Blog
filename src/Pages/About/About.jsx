import React from "react";
import { Link } from "react-router-dom";
import { AboutContainer, P, H3, ProjectDescription } from "./AboutStyle";

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
        <ProjectDescription>
          <h1>Blog: o que é?</h1>
          <P>
            Podemos entender como blog um sistema de postagem, e interação de
            publicações, algo parecido com as redes sociais que possuímo hoje em
            dia, ( Como <span>Instagram, twitter</span> ). Ou seja, dentro de um
            blog, geralmente temos funções que atualmente no mundo tecnológico
            em que vivemos se dizem por comuns, algo como criar postagens
            (posts), visualizar seus posts em uma página inicial e juntamente as
            postagens de outras pessoas, poder administrar suas postagens por
            meio de sua biblioteca, e além de tudo isso, poder customizar sua
            postagem, colocando imagens, títulos, descrições, e Hashtags.
          </P>
          <h2>O que são HashTags</h2>
          <P>
            Podemos entender por Hashtags palavras-chave que são utilizadas para
            uma melhor visibilidade de algo, dentro deste projeto, utilizaremos
            as Hashtags para filtrar o mecanismo de pesquisa e além disso,
            possibilitar as pessoas um compreendimento das postagens por meio de
            suas Hashtags. Por exemplo, você posta algo relacionado a sua
            carreira pessoal, e então para que as pessoas entendam do que se
            trata e o algoritimo consiga filtrar sua postagem de maneira que
            seja destinada a um público determinado, você escreve de determinada
            forma, como: #vidapessoal, #progressodecarreira. Com isso, sua
            postagem se torna mais dinâmicamente visível para o público que
            gosta de falar sobre carreira pessoal.
          </P>
        </ProjectDescription>
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
