- Identificado pelo sinal `+` entre dois seletores.
- Seleciona somente o elemento do lado direito que é irmão direto na hierarquia

# HTML

<h1>
  Título
</h1>
<p>
  Esse é um parágrafo
</p>
<p>
  Mais um parágrafo
</p>

# CSS

<!-- pega o irmão direto -->

h1 + p {       
	color: red;
}

# General sibling combinator

- Identificado pelo sinal `~` entre dois seletores
- Seleciona todos os elementos irmãos

# HTML

<h1>
  Título
</h1>
<p>
  Esse é um parágrafo
</p>
<!-- mesmo que tenha um botão no meio das tags diretas, seleciona todos os elementos irmãos -->
<button>Um botão</button>
<p>
  Mais um parágrafo
</p>

# CSS

h1 ~ p {
	color: red;
}