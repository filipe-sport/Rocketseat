* Border ( e outline)

- As bordas das caixas quanto ao seu estilo, largura e coloração.

- Shorthand:

- values: <border-style> | <border-width> | <border-color> |
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: <length> 
    - color: <color>

- CSS

div{
    border-top: solid 2px; (top | right | bottom | left)
    border: solid; (style)
    border: 2px dotted; (width | style)
    border: outset #f33; (style | color)
    border: medium dashed green; (width | style | color)
}

Outline

- difere em 4 sentidos:
    - Não modifica o tamanho da caixa, pois não é parte do Box Model
    - Poderá ser diferente de retangular
    - Não permite ajustes individuais
    - Mais usado pelo user agent para acessibilidade