<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p class= "meu-paragrafo"> titulo da pagina </p>


    <!-- Box Model-->
    <div class="box-model"> este é o Box Model </div>
    
    <!-- Espaçamento texto-->
    <h3 class="espacamento-texto"> Este é um espaçamento de texto</h3>

    <!--Links-->
    <div>
        <a href="#" class="decoration">Meu Link 1</a> 
    </div>
    <div>
        <a href="https://flexboxfroggy.com/" class="visitado">Meu Link 2</a> 
    </div>
    <div>
        <a href="#" class="bnt">Meu Link 3</a> 
    </div>

    <!--Lista-->
    <ul>
        <li> lista </li>
        <li> com </li>
        <li> bulltes</li>
    </ul>
    <ul class="sem-stilo">
        <li> lista 2 </li>
        <li> sem  </li>
        <li> bulltes</li>
    </ul>
    <!--Display-->
    <div class="inline"></div>
    <div class="inline"></div>
    <span class="span"> teste 1</span>
    <span class=" span">teste 2</span>

     <!--Position Fixed-->
     <div class="elemento-fixo"> Este elemnto vai ficar fixo na tela</div>

     <!--first child-->
     <div class="primeiro-elemento"> 
        <p> Este terá estilo</p>
        <p> este não</p>
        <p> este não</p>
        <p> este não</p>
        <p> este não</p>
     </div>

     <!-- Pseudo elemento-->
     <p class="primeira-letra"> Esta frase começa com uma letra diferente </p>

     <!--Especificidade-->
     <h2> Meu titulo</h2>
     <h2 class="titulo"> Meu titulo</h2>
     <h2 class="titulo" id=" meu-favorito"> Meu titulo</h2>
</body>
</html>






body{
    background-color: aqua;
    padding-bottom: 500px;
}

.meu-paragrafo{
    background-color:brown;
    color: blue;
    padding: 10px;

}
.box-model{
    width: 200px; /* altura*/
    height: 100px; /*largura*/
    padding: 20px; /*margem*/
    padding-left: 30px;
    margin: 20px; 
    border: 2px solid coral; /* borda*/
    text-align: center;
}

 /**/
 /*Espaçamento de texto e letras*/
.espacamento-texto{
    width: 150px;
    line-height: 40px;  /* aumenta a altura da linha*/
    letter-spacing: 8px; /* espaçamento entre letras*/
}
 /*Links*/
 .decoration{
    text-decoration: none; /* link sem o @ */
 }
 .visitado:visited{
    color: orange;
 }
 .estilo-hover:hover{
    background-color: blueviolet;
 }

 /*Link botão*/
 .bnt{
    background-color: chocolate; /**/
    border: 3px solid #234466; /* borda visivel*/ 
    border-radius: 5px; /* arredonda  a borda*/
    color: black; /* cor do texto*/
    text-decoration: none; /* tira a decoraçaõ do texto*/
    display: block; 
    width: 120px;
    padding: 12px 7 px; /**preenchimento iterno */
    margin: 20px;
    text-align:  center;
 transition: 0.5s;
 }
 .bnt:hover{ /* para quando passar o mouse por cima o botão fica na mesma cor de fundo*/
    background-color:#234466;
 }
 /*Lista*/
 .sem-stilo{ /*elimina as bolinhas de marcação da lista */
list-style: none;
 }

 /*Display*/
 .inline{
    width: 50px;
    height: 50px;
    background-color: cadetblue;
    margin: 5px;
    display: inline-block /* deixa os elementos lado a lado*/
 }
 .span{
    display: block; /* elemento um abaixo do outro*/
 }
 /*Position Fixed*/
 .elemento-fixo{
    position: fixed;/* deixa o elemente estatico na pagina*/
    left: 0;
    top: 0; /*altura cabeçalho*/
    width: 100%;
    padding: 15px;
    text-align: center;
    background-color: blueviolet;
    border-bottom: 2px solid #342234;
    color: aliceblue;
 }

 /*Pseudo seletor*/
 .primeiro-elemento p:first-child{ /*para eu estilizar somente um filho da minha div eu escrevo ".nomedaClasse p:first-chil" */
    color: purple;
    font-weight: bold;
 }

 /*Pseudo Elemento*/
 .primeira-letra::first-letter { /*para alterar um elemento expecifico deve se usar os 2 pontos ex: ".nomedaClasse :: first-letter" */
font-size:  40px;
color: antiquewhite;
background-color: #342234;
padding: 4px;
 }
/*Especificidade*/
 h2{
    color: crimson;
 }
 .titulo{
    color: green;
 }
 .titulo- #meu-favorito{
    color: blue;
 }