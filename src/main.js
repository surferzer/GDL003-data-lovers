//INICIO HOME
const welcomeHome = ()=>{
  document.querySelector('#welcome').style.display="block";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="none";
};
document.querySelector('#body').addEventListener('onload',welcomeHome());
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

//FUNCION BOTON MOSTRAR NOMBRE /PAG-LASTPAGE*********
const showName = ()=>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let button = document.querySelector('.names');

  document.querySelector('#showData').innerHTML=`<tr><th colspan="2">You're in Section °° N A M E °° </th></tr> `+
  window.example.filter(RICKANDMORTY.results, button);

};
document.querySelector('.names').addEventListener('click',showName);

//FUNCION BOTON MOSTRAR STATUS DEAD /PAG-LASTPAGE
const showDead = () =>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let button = document.querySelector('.dead');
  document.getElementById('showData').innerHTML= `<tr><th colspan="2">You're in Section °° DEAD °° </th></tr> `+
  window.example.filter(RICKANDMORTY.results, button);
};
document.querySelector('.dead').addEventListener('click', showDead);

//FUNCTION ALIVE
const showAlive = () =>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let button = document.querySelector('.alive');
  document.getElementById('showData').innerHTML= window.example.filter(RICKANDMORTY.results,button);
};
document.querySelector('.alive').addEventListener('click', showAlive);

//FUNCTION ALIENS
const showAliens =() =>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let button = document.querySelector('.aliens');
  document.getElementById('showData').innerHTML= window.example.filter(RICKANDMORTY.results,button);
};
document.querySelector('.aliens').addEventListener('click', showAliens);

//FUNCTION ORIGIN
const showOrigin =() =>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let button = document.querySelector('.origin');
  document.getElementById('showData').innerHTML= window.example.filter(RICKANDMORTY.results,button);
};
document.querySelector('.origin').addEventListener('click', showOrigin);
//FUNCTION FEMALE
const showFemale =() =>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let button = document.querySelector('.female');
  document.getElementById('showData').innerHTML= window.example.filter(RICKANDMORTY.results,button);
};
document.querySelector('.female').addEventListener('click', showFemale);


//FUNCION BOTON MOSTRAR GENDER MALE/ PAG-LASTPAGE
const showMale = () =>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let button = document.querySelector('.male');
  document.getElementById('showData').innerHTML= window.example.filter(RICKANDMORTY.results,button);
};
document.querySelector('.male').addEventListener('click', showMale);

//FUNCION BOTON MOSTRAR SPECIES HUMAN/ PAG-LASTPAGE
const showHuman = () =>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let button = document.querySelector('.humans  ');
  document.getElementById('showData').innerHTML= window.example.filter(RICKANDMORTY.results,button);
};
document.querySelector('.humans').addEventListener('click', showHuman);

//FUNCION BOTON MOSTRAR EPISODE/ PAG-LASTPAGE *****************
const showEpisode = () =>{
  document.querySelector('#welcome').style.display="none";
  document.querySelector('#rick').style.display="none";
  document.querySelector('#lookFor').style.display="none";
  document.querySelector('#lastPage').style.display="block";
  let button = document.querySelector('.episode');
  document.getElementById('showData').innerHTML= window.example.filter(RICKANDMORTY.results,button);
};
document.querySelector('.episode').addEventListener('click', showEpisode);


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


//PORCENTAJE
const porcentajes=()=>{
  document.getElementById("porcentaje").innerHTML= window.example.computation(RICKANDMORTY.results);
};
document.querySelector(".dead").addEventListener("click", porcentajes);
