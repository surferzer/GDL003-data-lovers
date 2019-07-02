// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

























































































































































































































































const filter = (data, button,count, slideB, slideN) => {
  let searchData='';
  let bingo=0;
  
  
  
  
  //let c = count;
  if(button.value == "Name"){
    /*console.log(data);
    let runner=`</dd>${data[c].name}</dd>`;
    console.log(data[c].name);
    let runnerPic=`<dt><img src=${data[c].image}></dt>`;
    searchData+=runnerPic+runner;
  */

    for(let i=0;i<data.length;i++){
      let runner=`<dd>${data[i].name}</dd>`;
      console.log(data[i].name);
      let runnerPic=`<dt><img src=${data[i].image}></dt>`;
      searchData+=runnerPic+runner;
         
    }     
  }

  /*
  //El nuevo metodo
  if(slideN.value == "Next"){
    c+=1;
    if(c>492){
      c=0;
    }
    console.log(data);
    let runner=`</dd>${data[c].name}</dd>`;
    console.log(data[c].name);
    let runnerPic=`<dt><img src=${data[c].image}></dt>`;
    searchData+=runnerPic+runner;
  }
  if(slideB.value == "Before"){
    c-=1;
    if(c<0){
      c=492;
    }
    console.log(data);
    let runner=`</dd>${data[c].name}</dd>`;
    console.log(data[c].name);
    let runnerPic=`<dt><img src=${data[c].image}></dt>`;
    searchData+=runnerPic+runner;
  }
  Termina el nuevo método
*/

//los demas filtros-----------------------------------------------------------------
else if(button.value == "Dead"){
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

const computation = (data) => {

  

       
  return computationData;
};





window.dataLovers = {
filter,
computation,
};
