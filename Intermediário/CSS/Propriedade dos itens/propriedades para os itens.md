# Propriedades para os itens

- flex-basis (mudar o tamanho do item)
- flex-grow (faz o item crescer automaticamente)
- flex-shrink ( encurtar/encurtar / comprimir o item )
- flex (shorthand)
- order (ordenar elementos)

# Largura e altura dos itens com flex-basis

* HTML

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
</div>

* CSS

.box {
    display: flex;
    flex-direction: row;
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
}

.box div:nth-child(1) {
    flex-basis: 30px;
}

# Crescimento e adaptação dos itens (flex-grow)

- O crescimento do item dentro do container em relação aos espaços vazios.

* HTML

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
</div>

* CSS

.box {
    display: flex;
    flex-direction: row;
    border: 1px dashed red;
}

.box div {
    border: 1px solid;
}

.box div:nth-child(2),
.box div:nth-child(3) {
    flex-grow: 1;
}
.box div:nth-child(1){
    flex-grow: 2;
}

# Encolhimento e encaixe dos elementos (flex-shrink)

- O encolher do item dentro do container.

* HTML

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
</div>

* CSS

.box {
    display: flex;
    flex-direction: row;
    border: 1px dashed red;
    width: 160px;
}

.box div {
    border: 1px solid;
    flex-basis: 80px;
}

.box div:nth-child(2),
.box div:nth-child(3) {
    flex-shrink: 4;
}

# Shorthand Flex

- shorthand
- flex-grow | flex-shrink | flex-basis
- podem ter 1, 2 ou 3 valores

* HTML

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
</div>

* CSS

.box {
    display: flex;
    flex-direction: row;
    border: 1px dashed red;
    width: 160px;
}

.box div {
    border: 1px solid;
    flex: (grow) | (shrink) | (basis)
    flex: 1 1 40px;
}

# Alterando tamanho de múltiplos itens

- o valor do flex-basis > grow e shrink 

* HTML

<div class="page">
    <aside>Aside</aside>
    <main>Main         
        <section>Content 1</section>
        <section>Content 2</section>
        <section>Content 3</section>
    </main>
</div>

* CSS

.page{
    border: 2px solid;
    min-length: 100vh;
    display: flex;
}

aside{
    background-color: lightgreen;
    flex: 1;
}

main {
    background-color: lightblue;
    flex: 2;
    display: flex;
    flex-direction: column;
}

main section:nth-child(1){
    background: lightgoldenrodyellow;
    flex: 2;
}

main section:nth-child(2){
    background: lightsalmon;
    flex: 0 100px;
}

main section:nth-child(3){
    background: lightpink;
    flex: 1;
}

# Ordenando itens ( order )

- Muda visualmente as ordens e não as estruturas HTML

* HTML

<div class="box">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
</div>

* CSS

.box{
    display: flex;
    border: 1px dashed red;
}

.box div{
    border: 1px solid;
}
.box div:nth-child(1){
    order: 1;
}
.box div:nth-child(2){
    order: 20;
}
.box div:nth-child(3){
    order: -1;
}
.box div:nth-child(4){
    order: 0;
}