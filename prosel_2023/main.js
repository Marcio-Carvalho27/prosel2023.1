

document.querySelector('#top').innerHTML = `
<div class="box">
        <div>
            <a href="index.html"> <img class="icon" src="files/icon.png" alt="icon"> </a>
            <a href="index.html"> <img class="logo" src="files/logo.svg" alt="logo"> </a>
            <img class="profile" src="files/profile.svg" alt="profile">
        </div>
        <div id="divBusca">
            <input type="text" id="txtBusca" placeholder="Digite sua pesquisa aqui..."/>
        </div>
    </div>
    
    <nav class="navbar">
        <ul class="elementos">
            <li>
                <a class="nav-el" href="#slider">NOVIDADES</a>
            </li>
            <li>
                <a class="nav-el" href="#sobre">MANIFESTO</a>
            </li>
            <li>
                <a class="nav-el" href="#banners">PRODUTOS</a>
            </li>
        </ul>
    </nav>
`   
    
 

document.querySelector('#corpo').innerHTML = `
<ul class="slider" id="slider">
<li>
    <input type="radio" id="slide1" name="slide" checked>
    <label for="slide1"></label>
    <img class="ci" src="files/fotos/img2.jpg" />
</li>
<li>
    <input type="radio" id="slide2" name="slide">
    <label for="slide2"></label>
    <img class="ci" src="files/fotos/img4.jpeg" />
</li>
<li>
    <input type="radio" id="slide3" name="slide">
    <label for="slide3"></label>
    <img class="ci" src="files/fotos/img3.jpg" />
</li>
</ul>

<h1 class="sobre" id="sobre">MANIFESTO</h1>

<div class="texto">
<p>
    &nbsp A única coisa que te separa da sua melhor versão, é ter energia para ser você ao máximo.
</p>
<p>
    &nbsp E energia na medida certa é tudo o que precisamos para seguir. Cada dia, todos os dias. 
    Mente e corpo num só lugar, com equilíbrio para ser você por inteiro. Para nós, todos os 
    dias são importantes. A jornada é feita de grandes e pequenos momentos. E momentos com vitalidade, 
    são movimentos.
</p>
<p>
    &nbsp A Caffeine Army agora é Smart Energy: energia potente, natural e que não oscila. Convidamos você a 
    embarcar nesse novo desafio com a gente, afinal seguimos inquietos, nos reinventando para tornar 
    nossa marca em um marco. Seguimos unindo propósitos e alimentando uma comunidade global que vive e 
    reverbera um estilo de vida em alta performance, emando equilíbrio, saúde e bem-estar em todos os 
    momentos da sua vida. <strong>#BeUnstoppable </strong> 
</p>
</div>   

<div id="banners">

<h2 class="sobre1">NOSSOS PRODUTOS</h2>      

<ul class="banners" >
    <li>
        <button id="myBtn"><img src="files/banners/chocolate.svg"></button>
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2 class="modal-titulo"> SUPPER COFEE - CHOCOLATE</h2>
                <p class="modal-text"> 
                    &nbsp Um mix de igredintes naturais feitos exclusivamente para você, um delicioso gostinho de chocolate. 
                </p>
                <p class="modal-text"> 
                    &nbsp Misture com agua morna e garanta o melhor desempenho no seu treino.
                </p>
                <p class="modal-text"> 
                    &nbsp Originalidade é para poucos. Somos os criadores do conceito de blends energéticos à base de café e não existe produto igual ao SuperCoffee 3.0.
                </p>
                
                 <img class="modal-img" src="files/produtos/n_cho.svg" alt="">
            </div>
          
        </div>
    </li>   
    <li>
        <button id="myBtn2"><img src="files/banners/original.svg"></button>
        <div id="myModal2" class="modal2">

            <!-- Modal content -->
            <div class="modal-content2">
                <span class="close2">&times;</span>
                <h2 class="modal-titulo"> SUPPER COFFEE - ORIGINAL</h2>
                <p class="modal-text"> 
                    &nbsp Um mix de igredintes naturais feitos exclusivamente para você, com o nosso delicioso gostinho original. 
                </p>
                <p class="modal-text"> 
                    &nbsp Misture com agua morna e garanta o melhor desempenho no seu treino.
                </p>
                <p class="modal-text"> 
                    &nbsp Originalidade é para poucos. Somos os criadores do conceito de blends energéticos à base de café e não existe produto igual ao SuperCoffee 3.0.
                </p>
                <img class="modal-img" src="files/produtos/n_ori.svg" alt="">
            </div>
          
        </div>
    </li>
    <li>
        <button id="myBtn3"><img src="files/banners/vinilla.svg"></button>
        <div id="myModal3" class="modal3">

            <!-- Modal content -->
            <div class="modal-content3">
              <span class="close3">&times;</span>
              <h2 class="modal-titulo"> SUPPER COFFEE - VANILLA LATE</h2>
              <p class="modal-text"> 
                  &nbsp Um mix de igredintes naturais feitos exclusivamente para você, um delicioso gostinho de vanilla late. 
              </p>
              <p class="modal-text"> 
                  &nbsp Misture com agua morna e garanta o melhor desempenho no seu treino.
              </p>
              <p class="modal-text"> 
                  &nbsp Originalidade é para poucos. Somos os criadores do conceito de blends energéticos à base de café e não existe produto igual ao SuperCoffee 3.0.
              </p>
              <img class="modal-img" src="files/produtos/n_van.svg" alt="">
            </div>
          
        </div>
    </li>    
</ul>
</div>


`

document.querySelector('#baixo').innerHTML = `
<div class="box2">
<ul id="rodape">
    <li>
        <ul>
            <li class="r1">
                <img src="files/rodape.svg" alt="">
            </li>
        </ul>
    </li>
    <li>
        <ul class="ro">
            <li class="titulo">Institucional</li>
            <li> Sobre Nós</li>
            <li> Trabalhe Conosco</li>
            <li> Parceirias</li>
            <li> Politicas de Privacidade</li>
            <li> Termos de Uso</li>
            <li> Status</li>
        </ul>
    </li>
    <li>
        <ul class="ro">
            <li class="titulo">Conteudo</li>
            <li> <a href="#slider"> Topo</a></li>
            <li> Produtos</li>
            <li> Parceirias</li>
            <li> <a href="https://www.caffeinearmy.com.br"> Site Oficial</a></li>
        </ul>
    </li>
    <li>
        <ul class="ro">
            <li class="titulo">Contato</li>
            <li> Instragram</li>
            <li> Email</li>
            <li> WhatssApp</li>
            <li> Twitter</li>
        </ul>
    </li>
</ul>
</div>

`
