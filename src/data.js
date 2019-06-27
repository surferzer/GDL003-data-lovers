// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
//eval('(' + RICKANDMORTY + ')'); (eval es mas verbose por el doble parentesis)
const example = () => {
  return 'example';
};

const filter = (data, button) => {
  let searchData='';
  if(button.value == "Name"){
    console.log(data);
    //let nameCharacter='';
    //let imgCharacter='';
    for(let i=0;i<data.length;i++){
      let runner=data[i].name;
      console.log(data[i].name);
      searchData+=runner+`<br>`;
      //nameCharacter+= runner;
      //console.log(nameCharacter);
    }
    
  }else if(button.value == "Dead"){
      console.log(data);
        for(let i=0;i<data.length;i++){
        let runner=data[i].status;
        console.log(data[i].status);
        if(runner== "Dead"){
          searchData+=runner+`<br>`;
        }
      
      }
  }
  //name=myData.results[0].name;
  //console.log(myData.results[0].name);
  return searchData;
};

const picture = (data, button) =>{
  let picData='';
  if(button.value == "Name"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].image;
      console.log(data[i].image);
      picData+=runner+`<br>`;
    } 
  }
  return picData;
};

const computation = () =>{
  return 'computation';
};


window.example = {
example,
filter,
computation,
picture
};
