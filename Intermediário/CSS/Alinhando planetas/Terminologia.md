# Terminologia

- Flex Container
    - Flex item
- Nesting
- Axis (eixos)
    - main (principal)
        - start, end
    - cross (cruzado)
        - start, end
- Flex sizing
    - flexível
    - altera width, height dos itens para preenchimento dos espaços do flex container  

* HTML (Flex Container e Nesting)

<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

* HTML (Axis)

<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

* CSS (Axis)
.container{
    display: flex;

    DIRECIONAMENTO DOS EIXOS
    flex-direction: column ou  row;
    justify-content: flex-end ou flex-start ou center ou ... ;
}

* HTML (Flex Sizing)

<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

* CSS

.container {
    display: flex;
    border: 1px solid red;
    height: 80vh;
}

.item {
    background-color: gray;
    border: 1px solid;
    flex: 1;
}
