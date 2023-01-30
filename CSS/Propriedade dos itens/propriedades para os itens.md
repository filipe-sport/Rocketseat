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