require('../src/data.js');
const RICKANDMORTY = require('../src/data/rickandmorty/rickandmorty.js');
/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example.example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example.example()).toBe('example');
  });
});
*/


//FILTER
describe('filter',() =>{
  it('is a function', () =>{
    expect(typeof dataLovers.filter).toBe('function');
  });

  it('returns `filter`', () => {
    expect(dataLovers.filter(RICKANDMORTY, "results", "name")).toBe('Rick Sanchez');
  });
});

//COMPUTATION
describe('computation',()=>{
  it('is a function', ()=>{
    expect(typeof dataLovers.computation).toBe('function');
  });

  it('returns `computation`',()=>{
    expect(dataLovers.computation(RICKANDMORTY, "status")).toBe("string");
  });
});

//SORTING
describe('sorting',()=>{
  it('is a function', ()=>{
    expect(typeof dataLovers.sorting).toBe('function');
  });

  it('returns `sorting`',(RICKANDMORTY)=>{
    expect(dataLovers.sorting(RICKANDMORTY, "name")).toBe('order');
  });
});
