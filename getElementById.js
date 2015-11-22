Build a function that takes in a collection
It runs a test on each element of that collection
It returs a new collection of the elements that pass the test

Clarifying questions:

// Declare a string
var whatEverYouLike = 'What';

// Create a new empty array
// var newArr = [];

// Loop through the string
// for (var i = 0; i < 'Whatever you like'.length; i++){
//   // for each index position push the letter into an array
//   newArr.push('Whatever you like'[i]);
// var element = document.body.children;
function getId(id){
  var element = document.body.children;
  var head = element;
  // if(head.id === id){
  //   console.dir(head);
  //   return head;
  // }
  var myNode;

  function recurse(node) {
    for (var j = 0; j < node.length; j++){
      if(node[j].id === id){
        console.log('Your node', node[j]);
        myNode = node[j]
        return myNode;
      } else {
        recurse(node[j].children);      
      }
    }
  };
  
  recurse(head);
  return myNode
};

console.log(getId("reallydeep"));
// console.log(element);

// console.log({name: 'Muhsin', age: 59}.age);

