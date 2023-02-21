- É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

- Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse sobre ele.

- Pseudo-classes começam com 2 pontos seguido do nome da pseudo class :pseudo-class-name

* Selecionando elementos com pseudo-classes

#  :first-child (primeiro elemento fireto)

<ul>
    <h3>Palavras bonitas</h3>
    <li>Gratidão</li>
    <li>Esperança</li>
    <li>Fé</li>
</ul>

<!-- o elemento li não irá funcionar pois não é primero elemento direto -->
ul li:first-child{
    font-weight: bold;
    color: red;
}

<!-- quem é o primeiro elemento direto é o h3 -->
ul h3:first-child{
    font-weight: bold;
    color: red;
}

# nth-of-type

# HTML

<article>
<h3>Gratidão</h3>
<p>Ser grato é ter reconheciemnto de que alguém auxiliou de alguma forma. É perceber naturalmente os benefícios que fizeram a seu favor</p>
<p>É quando você recebe uma ajuda, direta ou indiretamente, e consegue creditar na outra pessoa, o gesto de bondade.</p>
<p>A gratidão deveria ser um sentimento nato, plantado, dentro de cada ser humano.</p>
</article>

# CSS

article p: nth-of-type(3){
    font-weight: bold;
    font-size: 18px;
}

article p: nth-of-type(1){
    font-weight: lighter;
    font-size: 16px;
}

# nth-child

não existe first-child <p> numero 1 pois se refere ao <article>

article p: nth-child(2){ 
    font-weight: bold;
    font-size: 18px;
}

* nth-child odd e even

* even - números pares
* odd - números ímpares

# HTML

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>

# CSS

ul li:nth-child(odd) {
  color: gray;
}

# hover e focus

# Ações do usuário

- Algumas estilos só são aplicados quando o usuário faz alguma ação na página.

* :hover

a:hover {
  color: red;
}

- Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link

* :focus 

- é aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. 
- é comumente usado em campos de input como uma forma de mostrar qual o input "ativo".

input:focus {
  border-color: red;
  <!-- para usuários que precisam de acessibilidade, não mexer no outline  -->
  outline: none;
}

# disabled e required

* Atributos

* :disabled

# HTML

<input type="text" disabled>

# CSS

input:disabled {
  background-color: green;
}

* :required

# HTML

<input type="text" required>

# CSS

input:required {
  background-color: red;
}