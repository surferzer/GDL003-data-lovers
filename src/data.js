// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filter = (data, button) => {
  let searchData='';
  let bingo=0;

    if(button.value == "Name"){
    for(let i=0;i<data.length;i++){
      let runner=`<dd>${data[i].name}</dd>`;
      console.log(data[i].name);
      let runnerPic=`<dt><img src=${data[i].image}></dt>`;
      searchData+=runnerPic+runner;
  }
//los demas filtros-----------------------------------------------------------------


  }else if(button.value == "Dead"){

    for(let i=0;i<data.length;i++){
      let runner=data[i].status;
      if(runner== "Dead"){
        bingo=i;
        let deadFound=`<dd>${runner}<dd>`;
        console.log(deadFound.length);
        let runnerPic=`<dt><img src=${data[bingo].image}></dt>`;
        searchData+=runnerPic+deadFound;

      }
    }
  }else if(button.value == "Alive"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].status;
      if(runner== "Alive"){
        bingo=i;
        let aliveFound=`<dd>${runner}<dd>`;
        console.log(aliveFound.length);
        let runnerPic=`<dt><img src=${data[bingo].image}></dt>`;
        searchData+=runnerPic+aliveFound;
      }
    }
  }else if(button.value == "Aliens"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].species;
      if(runner== "Alien"){
        bingo=i;
        let aliensFound=`<dt>${runner}<dt>`;
        console.log(aliensFound.length);
        let runnerPic=`<dd><img src=${data[bingo].image}></dd>`;
        searchData+=runnerPic+aliensFound;
      }
    }
  }else if(button.value == "Origin"){
    console.log(data);
    for(let i=0;i<data.length;i++){
      let runner=`<dd>${data[i].origin.name}<dd>`;
      console.log(data[i].origin);
      let runnerPic=`<dt><img src=${data[i].image}></dt>`;
      searchData+=runnerPic+runner;
    }
  }else if(button.value == "Female"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].gender;
      if(runner== "Female"){
        bingo=i;
        let femaleFound=`<dd>${runner}<dd>`;
        console.log(femaleFound.length);
        let runnerPic=`<dt><img src=${data[bingo].image}></dt>`;
        searchData+=runnerPic+femaleFound;
      }
    }
  }else if(button.value == "Male"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].gender;
      if(runner== "Male"){
        bingo=i;
        let maleFound=`<dd>${runner}<dd>`;
        console.log(maleFound.length);
        let runnerPic=`<dt><img src=${data[bingo].image}></dt>`;
        searchData+=runnerPic+maleFound;
      }
    }
  }else if(button.value == "Humans"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].species;
      if(runner== "Human"){
        bingo=i;
        let humanFound=`<dd>${runner}<dd>`;
        console.log(humanFound.length);
        let runnerPic=`<dt><img src=${data[bingo].image}></dt>`;
        searchData+=runnerPic+humanFound;
      }
    }
  }else if(button.value == "Episode"){
    console.log(data);
    for(let i=0;i<data.length;i++){
      let runner=`<dd>${data[i].episode}<dd>`;
      let runnerEpisode=`<dt><a href=${runner}></dt>`;
      searchData+=runner+runnerEpisode;
    }

  }
  //name=myData.results[0].name;
  //console.log(name);
  return searchData;
};





//const picture = (data) =>{
//    let picData= '';
//    for(let i=0;i<data.length;i++);
//      let runner=`<img src=${data[i].image}>`;
//      //console.log(data[i].image);
//      picData+=runner;

//    console.log(picData);

//  return picData;
//};


//FUNCION COMPUTATION
const computation= (data) =>{
  let score=0;
  for (let i=0; i<data.length; i++){
  let acumulacion=data[i].status;
  if (acumulacion=="Dead"){
      score=score+1;
      //console.log(score)
    }
    }

  //if(acumulacion=="Alive"){
    //    score=score+1;
      //  console.log(score)
    //}

  let estadistica=(score*100)/data.length;
  console.log(estadistica);
  return estadistica;
};



//ORDENAR
const sorting=(data)=>{

   let order= data.sort(function (a, b) {
   if (a.name > b.name) {
     return 1;

   }if (a.name < b.name) {
     return -1;
   }
     return 0;
}).map(order =>`<dd>${order.name}</dd>` + `<dt><img src=${order.image}></dt>`);


 console.log(order);

  return order;
};


window.dataLovers = {
filter,
computation, sorting
};
