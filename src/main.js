//INICIO//

//welcome.style.display="";
function inicio(){
document.getElementById("welcome").style.display="block";
document.getElementById("rick").style.display="none";
document.getElementById("lookFor").style.display="none";
document.getElementById("lastPage").style.display="none";
}


//FUNCION PAGINA 1//
function start(){
welcome.style.display="none";
rick.style.display="block";
lookFor.style.display="none";
lastPage.style.display="none";
}

function knowMore(){
welcome.style.display="none";
rick.style.display="none";
lookFor.style.display="block";
lastPage.style.display="none";
}

//document.getElementsByClassName('names').addEventListener('click',name)
function showName(){
  welcome.style.display="none";
  rick.style.display="none";
  lookFor.style.display="none";
  lastPage.style.display="block";
  let boton = document.querySelector('.names');
  document.getElementById('showData').innerHTML=
  'Characters N a m e: '+ '<br>' + window.example.filter(RICKANDMORTY.results, boton);
  }

function showDead(){
  welcome.style.display="none";
  rick.style.display="none";
  lookFor.style.display="none";
  lastPage.style.display="block";
  let boton = document.querySelector('.dead');
  document.getElementById('showData').innerHTML=
  'List of D e a d Characters : '+ '<br>' + window.example.filter(RICKANDMORTY.results,boton);
}

function alive(){}

function aliens(){}

function earth(){}

function women(){}

function men(){}

function humans(){}

function episode(){}


function back(){
  welcome.style.display="none";
  rick.style.display="block";
  lookFor.style.display="none";
  }


function home(){
  welcome.style.display="block";
  rick.style.display="none";
  lookFor.style.display="none";
  lastPage.style.display="none";
}

function back2(){
  welcome.style.display="none";
  rick.style.display="none";
  lookFor.style.display="block";
  lastPage.style.display="none";
}
