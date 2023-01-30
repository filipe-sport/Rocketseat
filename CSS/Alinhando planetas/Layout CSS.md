- Layout tem a ver com a menira que os elementos estão distribuidos na tela.

# Normal flow

- ou Flow Layout é a maneira que os elementos `block` e `inline` ficam na página.

* HTML
<p> Texto block com <strong style = "background: green">inline</strong> dentro </p>

<div style = "background: green" >Outro texto</div>

# Tables

- É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td`e `tr` possam ser usados para montar um tabela.

* HTML
<table>
    <tr>
        <td>Hora</td>
        <td>20:00</td>
    </tr>
    <tr>
        <td>Hora</td>
        <td>20:37</td>
        <td>Outra coisa</td>
    </tr>
</table>

# Tabless

- Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

* HTML

<div style="float: left">esquerda</div>
<div style="float: right">direita</div>
<div style="clear:both">normal flow</div>

# Flexbox

- A caixa se torna flexível, fazendo com que os elementos internos possam receber melhor:

    - Alinhamento
    - Ordenação
    - Tamanhos flexíveis

* HTML

<div class="flexbox">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

* CSS

.flexbox {
    display: flex;
    justify-content: column;
}

.item:nth-child(1){
    order: 1;
} 
<!-- O item A ficou com order 1 enquanto B e C continuaram com order 0 -->

