// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
//eval('(' + RICKANDMORTY + ')'); (eval es mas verbose por el doble parentesis)
const example = () => {
  return 'example';
};

const filter = (data, boton) => {
  let searchData='';
  if(boton.value == "Name"){
    //console.log(data);
    for(let i=0;i<data.length;i++){
      let runner=data[i].name;
      console.log(data[i].name);
      searchData+=runner+'<br>';
    }
  }else if(boton.value == "Dead"){
      //console.log(data);
        for(let i=0;i<data.length;i++){
        let runner=data[i].status;
        console.log(data[i].status);
        searchData+=runner+'<br>';
      }
  }
  //name=myData.results[0].name;
  //console.log(myData.results[0].name);
  return searchData;
};


const computation = () =>{
  return 'computation';
};


window.example = {
example,
filter,
computation
};
