Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

::pseudo-element-name

💻 Exemplos
::before adiciona um pseudo-elemento antes do elemento selecionado.

HTML

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
CSS

li::before {
  content: "> "
}
::after adiciona um pseudo-elemento depois do elemento selecionado.

li::after{
  content: ";"
}
Tanto para o ::before quanto para o ::after é preciso adicionar o content, mesmo que ele seja vazio content = "";

::first-line pega a primeira linha de um texto.

p::first-line {
	font-weight: bold;
}

----------------------------------------------------------------------------------


* Outro exemplo:

# HTML

<p>Ser grato é ter reconheciemnto de que alguém auxiliou de alguma forma. É perceber naturalmente os benefícios que fizeram a seu favor</p>
<p>É quando você recebe uma ajuda, direta ou indiretamente, e consegue creditar na outra pessoa, o gesto de bondade.</p>
<p>A gratidão deveria ser um sentimento nato, plantado, dentro de cada ser humano.</p>

# CSS

p::first-line{
    font-weight: bold;
}

p:nth-of-type(3)::first-line{
    font-weight: bold;
}