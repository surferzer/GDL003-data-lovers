//INICIO HOME
const welcomeHome = ()=>{
  document.querySelector('#welcome').style.display="block";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="none";
};
document.querySelector('.firstButton').addEventListener('onload',welcomeHome());
document.querySelector('.reload').addEventListener('click',welcomeHome);

//FUNCION PAGINA 1 / PAG-RICK
const start = ()=>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="block";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="none";
};
document.querySelector('.firstButton').addEventListener('click',start);

// fUNCION PAGINA 2/ PAG-LOOKFOR
const knowMore = ()=>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="block";
  document.querySelector('#lastPage').style.display="none";
};
document.querySelector('.knowMore').addEventListener('click',knowMore);

//FUNCION BOTON MOSTRAR NOMBRE /PAG-LASTPAGE
const showName = ()=>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let boton = document.querySelector('.names');
  document.querySelector('#showData').innerHTML=
  window.example.filter(RICKANDMORTY.results, boton)+window.example.picture(RICKANDMORTY.results, boton);
};
document.querySelector('.names').addEventListener('click',showName);
//FUNCION BOTON MOSTRAR STATUS DEAD /PAG-LASTPAGE
const showDead = () =>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let button = document.querySelector('.dead');
  document.getElementById('showData').innerHTML= window.example.filter(RICKANDMORTY.results,button);
};
document.querySelector('.dead').addEventListener('click', showDead);

//function alive(){}

//function aliens(){}

//function earth(){}

//function women(){}

//function men(){}

//function humans(){}

//function episode(){}

//FUNCION BOTON REGRESAR DE PAG 3  A PAG2
const back =()=>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="block";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="none";
};
document.querySelector('.back').addEventListener('click',back);

//FUNCION BOTON REGRESAR DE PAG4   A PAG3
const back2 = ()=>{
  document.querySelector('#welcome').style.display="none"; 
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="block";
  document.querySelector('#lastPage').style.display="none";
};
document.querySelector('.reloadAfter').addEventListener('click',back2);