- Combinadores trabalham para buscar e combinar seletores a fim de aplicar uma estilização

# Descendant combinator
- Identificado por um espaço entre os seletores
- Busca um elemento dentro de outro, mesmo que existam outros elementos no caminho

# HTML

<body>
	<article>
		<h2>Um Título</h2>
	</article>
    <article>
		<h2>Outro titulo</h2>
	</article>
</body>

# CSS

body article h2 {
	color: red;
}