# Propriedades do Flex Container

* Direção dos itens
* Multi linhas
* Alinhamento
    - Principal
    - Cruzado
* Espaços entre os itens

# Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- Podemos mudar a direção com `flex-direction`
- Valores: (row | row-reverse | column | column-reverse)

* HTML

<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

* CSS

.container {
    display: flex;
    flex-direction: row-reverse;
}

# Flex-Wrap (Multiplas linhas)

- Podemos usar multi linhas.
- Cada nova linha, um novo container.

* HTML

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

* CSS

.box {
    display: flex;
    flex-wrap: wrap;
    boder: 1px dashed red;
}

.box div {
    border: 1px solid;
    width: 80px;

# Flex-flow

- Shorthand
- flex-direction || flex-wrap  

* HTML

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

* CSS

.box{
    display: flex;
    flex-flow: column wrap;
    <!-- ou -->
    flex-flow: row wrap;
    border: 1px dashed red;
}

# Justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

* Valores
- flex-start    
- flex-end
- center
- space-around
- space-between
- space-evenly

* HTML

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

* CSS

.box{
    display: flex;
    flex-flow: column;
    <!-- ou -->
    justify-content: space-around;
    border: 1px dashed red;
    height: 150px;
}

# Alinhamento dos itens no eixo cruzado (align-itens)

- Alinhamento dos elementos no eixo cruzado

* Valores

- stretch
- flex-start
- flex-end
- center

* HTML

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

* CSS

.box {
    display: flex;
    align-items: stretch; (padrão)
    border: 1px solid red;
    height: 150px;
}

# Espaço entre os elementos (gap)

- Espaços entre os elementos

* Valores

- Unidades de medidas: 
    - fixas: px, pt
    - flexíveis: %, em, rem

* HTML

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

* CSS

.box {
    display: flex;
    border: 1px dashed red;
    gap: 2rem;
}

.box div {
    border: 1px solid;
}