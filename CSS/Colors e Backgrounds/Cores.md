Usamos CSS para alterar cores do nosso documento.

Tipos:

- background-color (para caixas)
- color (para textos)
- border-color (para caixas)
- outros

Valores

- Podemos definir valores por:

- palavra-chave (blue, transparent)
- hexadecimal (# 99 00 11 BB) (# red green blue transparencia ou  # 9 0 1 F )
- funções: rgb, rgba, hsl, hsla

CSS

element {
    color: currentcolor;
}

<named-color> values
color: red;
color: orange;
color: blue;
color: rebeccapurple;

<hex-color> values 0-F
color: #090
color: #F90
color: #009900
color: #99BB22
color: #090a;
color: #009900aa;

<color-rgb()> values 0-255
color: rgb(34, 12, 64);
color: rgba(34, 12, 64, 0.6);
?color: rgba(34, 12, 64, 60%);
color: rgb(34 12 64 / 0.6)
color: rgba(34 12 64 / 30%)
color: rgb(34.6 12 64)

<color-hsl()> values (Hue - Saturation - Lumiance)
color: hsl(180, 100%, 50%)
color: hsla(180, 100%, 50%, 60%)

obs - Red (0 100% 50%) Green(120 100%  50%) Blue (240 100% 50%)

Hue - Localização da cor
Saturation - Se quer a cor mais fraca ou mais forte
Lumiance -  50% é a cor real 
            0% é a cor sem luz
            100% é a cor com muita luz
