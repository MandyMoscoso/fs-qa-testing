const {
  returnTwo,
  greeting,
  add
} = require('./function')


  // Let's write a basic test to familiarize ourselves with Jest syntax

  // test(" Check to see if Jest works", () =>{
  //   expect(2).toBe(2);
  // });

  
test("Check to see if returnTwo return 2", ()=> {
  expect(returnTwo()).toEqual(2)
});

test("Check to see if greeting works", ()=> {
  expect(greeting("James")).toEqual("Hello, James");
  expect(greeting("Jill")).toEqual("Hello, Jill")
});


test(" Check to see if add works", () =>{
expect(add(1,2)).toEqual(3);
expect(add(5,9)).toEqual(14)
});
