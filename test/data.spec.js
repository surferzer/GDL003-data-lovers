require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example.example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example.example()).toBe('example');
  });
});

describe('filter',() =>{
  it('is a function', () =>{
    expect(typeof example.filter).toBe('function');
  });

  it('returns `filter`', () => {
    expect(example.filter()).toBe('filter');
  });
});

describe('computation',()=>{
  it('is a function', ()=>{
    expect(typeof example.computation).toBe('function');
  });

  it('returns `computation`',()=>{
    expect(example.computation()).toBe('computation');
  });
});
