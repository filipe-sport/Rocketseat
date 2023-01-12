* Trabalhando com fontes
- Tipografia transmite mensagem

    - negrito
    - tamanho
    - estilo 

* Basic Font Properties

    - font-family
    - font-weight
    - font style
    - font-size

* Font-family

- Tipo de fonte de um elemento
- Lista de fontes e ordem de prioridade inclui fallback(fonte usada caso dê algo errado) font

- CSS

p {
  font-family: "Times New Roman", Times, serif;
}

Alguns tipos de fonts:

serif (com serifa = dobrinhas)
sans-serif (sem serifa = sem dobrinhas)

* Font-weight
- Peso da fonte
- Valores: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
- Dependendo da família da fonte não conseguimos utilizar todos os pesos de fonte

p {
	font-weight: bold;
}

* Font-style
- É o estilo da fonte
- Valores: normal | italic | oblique
- Os valores que podem ser aplicados dependem da fonte usada

span {
	font-style: italic;
}

* Fonte-size
- Tamanho da fonte

p {
	font-size: 18px;
}

* Web-fonts
- Fontes do sistema x Fontes da web
    Fontes do sistema são as fontes que estão instaladas na máquina do usuário e nem sempre o cliente vai ter instalado as fontes usadas no projeto e isso pode fazer com que os estilos dos textos não sejam aplicados corretamente, mas para resolver esses casos podemos preparar nossas fonts para web ou usar fontes da web.

- Como usar fontes para web?
@font-face
@import
link

* Font-variant
- Faz variações na apresentação da fonte

p {
	font-variant: small-caps;
}

* Font-stretch
- Alargamento ou encolhimento da fonte
- Aceita palavras-chaves como: expanded, condensed, normal
- Aceita porcentagens de 50% a 200%
- Essa propriedade não vai funcionar em todas as fontes

p {
	font-stretch: expanded;
}

