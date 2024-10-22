import React from "react";
import Map from "./components/Map";
import Visible from "./components/IsVisible";
import Tabela from "./components/Table";
import ImagesUrl from "./components/ImagemCondicional";
import IsHighlight from "./components/Highlight";
import ListOfTask from "./components/Keys";
import Card from "./components/Card";
import Fragments from "./components/Fragments";
import AltImg from "./components/AltImg";
import "./App.css";

// #region Dados para o Componente Map
const input = prompt("Digite uma lista de nomes. Eles devem ser separados por vírgulas para que funcione.");
const idadesInput = prompt("Qual a idade destas pessoas? Coloque de forma respectiva, separadas por vírgulas.");
const nomes = input ? input.split(",").map((nome) => nome.trim()) : [];
const idades = idadesInput ? idadesInput.split(",").map((idade) => idade.trim()) : [];
const titulo = "Esta é a lista de nomes que você forneceu: ";
const pessoas = nomes.map((nome, index) => ({
    id: index + 1,
    nome,
    idade: idades[index] ? Number(idades[index]) : "Idade não informada",
}));
// #endregion

// #region Dados para o Componente ImagesUrl
const urls = [
    "https://s2-techtudo.glbimg.com/CDCDKUhS0FMmWH6daMavnixT6cg=/0x0:1024x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
    "https://cdn.pixabay.com/photo/2023/08/23/15/44/ai-generated-8208847_1280.png",
];
// #endregion

// #region Dados para o Componente IsHighlight
const textoDestaque = "Este é um parágrafo com estilo dinâmico!";
// #endregion

// #region Dados para o Componente ListOfTask
const tarefas = [
    "Estudar React",
    "Fazer compras",
    "Caminhar no parque",
    "Ler um livro",
];
// #endregion

// #region Dados para o Componente Card
const conteudoCard = [
    { title: "Título do Card", content: "Card com titulo." },
    { content: "Card Sem titulo" },
];
// #endregion

// #region Dados para o Componente Fragments
const itens = ['Item 1', 'Item 2', 'Item 3'];
// #endregion

// #region Dados para o Componente AltImg
const urlsAlt = [
    "https://7_280.png",
    "https://7_280.png",
];
const textosAlt = [
    "altDinamico.",
    "outro alt dinamico.",
];
// #endregion

function App() {
    return (
        <>
            {/* #region Renderização dos Componentes */}
            <Map titulo={titulo} nomes={nomes} />
            <Visible paragrafo="O conteúdo está visível." />
            <Tabela dados={pessoas} />
            <ImagesUrl urls={urls} />
            <IsHighlight text={textoDestaque} />
            <ListOfTask task={tarefas} />
            {conteudoCard.map((card, index) => (
                <Card key={index}>
                    {card.title && <h2>{card.title}</h2>}
                    <p>{card.content}</p>
                </Card>
            ))}
            <Fragments items={itens} titulo="Este é o titulo" paragrafo="este é o paragrafo" />
            <AltImg urls={urlsAlt} altTexts={textosAlt} />
            {/* #endregion */}
        </>
    );
}

export default App;
