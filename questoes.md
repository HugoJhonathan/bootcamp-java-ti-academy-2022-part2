# Exercicio 1

>1. Esta afirmação está correta: “O JS é uma linguagem interpretada, 
portanto irá gerar um código fonte. Isto  está correto.” Explique.

    Não, JS é uma linguagem interpretada, mas não gera código fonte, o código dele é interpretado automaticamente pela engine do browser, ou por alguma framework externa, como Node.js.

>2. Ainda nos dias de hoje o JS só pode ser usado por meio de um browser. 

    Não, atualmente existem frameworks que fazem o papel de um interpretador, fazendo assim a execução dos códigos em diversos sistemas operacionais, como Windows, Linux/Android, MacOS.

# Exercicio 2

> 1. Qual foi a principal finalidade do JS desde sua criação?

    Inicialmente, o JS foi criado com a finalidade de fazer interações entre os elementos HTML e CSS dinamicamente.

> 2. Qual empresa originou o JS e quando isso aconteceu? 

    Foi criado por Brendan Eich, que trabalhava na empresa Netscape, na década de 90.
# Exercicio 3

> 1. O que são as variáveis em uma  linguagem de programação?

    Variavel é o espaço reservado na memória
    para armazenar dados.

> 2. Dê um exemplo de um tipo de dado e o que este tipo irá representar. 

    Um exemplo de um tipo de dado é o string, na qual represeta uma cadeia de caracteres.

# Exercício 4

> 1. Dê um exemplo de uma variável obedecendo a boa prática camelCase.

    nomeCompleto

> 2. Por padrão, qual o tipo de dado atribuído a uma variável quando esta não recebe nenhum valor?

    undefined (não definida).

> 3. Quais são as duas categorias de tipos de dados do JS?

    Primitivos e não primitivos.

> 4. É verdade que o JS é uma linguagem server-side? Explique.

    Não. A princípio o JS é uma linguagem client-side, ou seja, roda no lado do client, o local onde
    ele está sendo executado, e não é server-side porque este rodaria com servidor.

# Exercício 8

> 1. Qual é a diferença entre as declarações de variáveis var, let e const?
 
    Quando declarado var, esta variavel terá scopo a função, ou seja, dentro de toda função conseguimos
    acessá-la. Já usando let o scopo é dentro do bloco 
    (dentro do par de chaves {}), só conseguimos usa-la
    dentro do bloco que foi criada. O const é uma declaração para variaveis que não terá alteração em seu valor durante todo o código.

> 2. É verdade que o uso de parâmetros em funções é obrigatório? 

    Não é obrigatório.

> 3. Selecione a opção verdadeira para inserir um arquivo js em um documento HTML:

    [ ] a) <link src=”nomeDoArquivo.js”></link>
    [ ] b) <meta src=”nomeDoArquivo.js”></meta>
    [X] c) <script src=”nomeDoArquivo.js”></script>
    [ ] d) <a href=”nomeDoArquivo.js”></a>   


# Exercício 13

> 1. O que o manipulador ou função replace( ) efetua em uma string? 

    A função irá procurar um parâmetro, que pode ser uma palavra ou um caracter, e  substitui-la por outra, exemplo:
    minhaVar.replace(/e/gi,'x')
    Neste caso substituiria toda letra 'e' por 'x'.

> 2. O que o manipulador ou função sort() efetua em um array? 

    A função sort() retorna um array com seus elementos organizados
    em ordem de acordo com a pontuação de código unicode.

> 3. É correto dizer que o JS é uma linguagem orientada a objetos?

    Não, mas a Orientação a Objeto foi implementada, e é possível
    criar Objetos com classes e funções construtoras.

> 4. Como podemos definir o operador new?

    O operador new cria uma instancia de um novo objeto em uma função construtora.

