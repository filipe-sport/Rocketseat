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

* Letter spacing
- Define o espaçamento entre os caracteres

p {
	letter-spacing: 4px;
}

* Word spacing
- Define o espaçamento entre palavras

p {
	word-spacing: 1em;
}

* Line-height
- Define os espaços entre linhas
- Pode ser com unidades ou sem unidades de medida
- Valores comuns: 1.5 ou 2

p {
	line-height: 1.5;
}

* Text transform
- Transformação do texto
- Valores podem ser: none | capitalize | uppercase | lowercase | full-width | full-size-kana

p {
	text-transform: uppercase;
}

* Text decoration
- Aparência decorativa de um texto line: underline | overline | line-through
- podemos aplicar mais de 1 valor style: wavy | dotted | double | dashed | solid  - Ex: underline wavy;
- color: <color> values - Ex: line-through dashed red;

h1 {
	text-decoration: underline; /* shorthand */
}

p {
  text-decoration: wavy overline blue; /* shorthand */
}

* Text align
- Alinhamento de um texto
- Valores: start | end | left | right | center | justify | match-parent

p {
	text-align: center;
}

* Text shadow
- Sombra aplicada a um texto
- Permite múltiplos valores

p {
  text-shadow: 1px 1px 1px red,
	       2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}


OBSERVAÇÂO: Podemos usar o shorthand font para determinar os seguintes valores: font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family
p {
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}