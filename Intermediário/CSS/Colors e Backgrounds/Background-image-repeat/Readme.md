* Background Imagem

- Para adicionar uma imagem como background podemos usar a propriedade background-image
- Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade background-repeat

/* Values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Podedmos usar 2 valores: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

* Background Position

- Com a propriedade background-position podemos mudar a posição da imagem do background.

/* Pricipais valores */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* Valores Secundários */
background-position: top left;
background-position: bottom right;
background-position: left bottom;
background-position: right top;
background-position: center top;

* Background Size

Para mudar o tamanho da imagem do background usamos a propriedade background-size.

/* Values */
background-size: cover;
background-size: contain;

/* Podemos usar 2 valores, o primeiro é para a LARGURA da imagem e o segundo é para a ALTURA */
background-size: 40% auto;
background-size: 2em 25%;
background-size: auto 8px;
background-size: auto auto;

* Background Origin Clip

- A propriedade background-origin é quem define o ponto de origem de uma imagem específica.

/* Principais valores */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

- O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.

/* Principais valores */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;