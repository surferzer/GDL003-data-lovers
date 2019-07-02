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
describe('filter',() =>{
  it('is a function', () =>{
    expect(typeof dataLovers.filter).toBe('function');
  });

  it('returns `filter`', () => {
    expect(dataLovers.filter(RICKANDMORTY)).toBe('string');
  });
});

describe('computation',()=>{
  it('is a function', ()=>{
    expect(typeof dataLovers.computation).toBe('function');
  });

  it('returns `computation`',()=>{
    expect(dataLovers.computation()).toBe('computation');
  });
});
