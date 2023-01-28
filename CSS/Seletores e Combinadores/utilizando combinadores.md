<!-- combinadores -->
Dica:
- Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização
- Muitas vezes, um simples uso de classes, torna o trabalho mais eficiente

# HTML

<ul>
  <li>Alooo</li>
  <li class="red">Hey</li>
</ul>

<p class="red">Para um parágrafo</p>

# CSS

ul > li[class="red"] {
	color: red;
}

<!-- mais eficiente -->

.red{
    color: red;
}