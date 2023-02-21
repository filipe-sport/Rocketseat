const element = document.querySelector('body');

element.classList.add('active','green');

element.classList.remove('active');

element.classList.toggle('active'); //  o toogle active faz o inverso do que deveria ser feito,
                                    //  no caso, a classe active está sendo removida, por isso permanece a cor vermelha
console.log(element.classList);