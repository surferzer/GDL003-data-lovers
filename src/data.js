// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
//eval('(' + RICKANDMORTY + ')'); (eval es mas verbose por el doble parentesis)
const example = () => {
  return 'example';
};


const filter = (data, button) => {
  let searchData='';
  let bingo=-1;

  if(button.value == "Name"){
    console.log(data);
    for(let i=0;i<data.length;i++){
      let runner=`<td>${data[i].name}<td>`;
      console.log(data[i].name);
      let runnerPic=`<td><img src=${data[i].image}></td>`;
      searchData+=`<tr>${runnerPic+runner}</tr>`;
    }

  }else if(button.value == "Dead"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].status;
      if(runner== "Dead"){
        bingo=i;
        let deadFound=`<td>${runner}<td>`;
        console.log(deadFound.length);
        let runnerPic=`<td><img src=${data[bingo].image}></td>`;
        searchData+=`<tr>${runnerPic+deadFound}</tr>`;
      }
    }
  }else if(button.value == "Alive"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].status;
      if(runner== "Alive"){
        bingo=i;
        let aliveFound=`<td>${runner}<td>`;
        console.log(aliveFound.length);
        let runnerPic=`<td><img src=${data[bingo].image}></td>`;
        searchData+=`<tr>${runnerPic+aliveFound}</tr>`;
      }
    }
  }else if(button.value == "Aliens"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].species;
      if(runner== "Alien"){
        bingo=i;
        let aliensFound=`<td>${runner}<td>`;
        console.log(aliensFound.length);
        let runnerPic=`<td><img src=${data[bingo].image}></td>`;
        searchData+=`<tr>${runnerPic+aliensFound}</tr>`;
      }
    }
  }else if(button.value == "Origin"){
    console.log(data);
    for(let i=0;i<data.length;i++){
      let runner=`<td>${data[i].origin.name}<td>`;
      console.log(data[i].origin);
      let runnerPic=`<td><img src=${data[i].image}></td>`;
      searchData+=`<tr>${runnerPic+runner}</tr>`;
    }
  }else if(button.value == "Female"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].gender;
      if(runner== "Female"){
        bingo=i;
        let femaleFound=`<td>${runner}<td>`;
        console.log(femaleFound.length);
        let runnerPic=`<td><img src=${data[bingo].image}></td>`;
        searchData+=`<tr>${runnerPic+femaleFound}</tr>`;
      }
    }
  }else if(button.value == "Male"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].gender;
      if(runner== "Male"){
        bingo=i;
        let maleFound=`<td>${runner}<td>`;
        console.log(maleFound.length);
        let runnerPic=`<td><img src=${data[bingo].image}></td>`;
        searchData+=`<tr>${runnerPic+maleFound}</tr>`;
      }
    }
  }else if(button.value == "Humans"){
    for(let i=0;i<data.length;i++){
      let runner=data[i].species;
      if(runner== "Human"){
        bingo=i;
        let humanFound=`<td>${runner}<td>`;
        console.log(humanFound.length);
        let runnerPic=`<td><img src=${data[bingo].image}></td>`;
        searchData+=`<tr>${runnerPic+humanFound}</tr>`;
      }
    }
  }else if(button.value == "Episode"){
    console.log(data);
    for(let i=0;i<data.length;i++){
      let runner=`<td>${data[i].episode}<td>`;
      let runnerEpisode=`<td><a href=${runner}></td>`;
      searchData+=`<tr>${runner+runnerEpisode}</tr>`;
    }

  }
  //name=myData.results[0].name;
  //console.log(myData.results[0].name);
  return searchData;
};

const picture = (data) =>{
    let picData= '';
    for(let i=0;i<data.length;i++);
      let runner=`<img src=${data[i].image}>`;
      //console.log(data[i].image);
      picData+=runner;

    console.log(picData);

  return picData;
};



const computation= (data) =>{
let score=0;
for (i=0; i<data.length; i++){
let acumulacion=data[i].status;
if (acumulacion=="Dead"){
score=score+1;
}
}
console.log(score);
let estadistica=(score*100)/data.length;
return estadistica;
};


window.example = {
example,
filter,
computation,
picture
};
