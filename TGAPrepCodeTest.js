

function getId(id) {
  var body = document.body.children;
  var newArr = [];
  
  function recurse (node) {
    for (var i = 0; i < node.length; i++){
        // console.dir(node[i]);
      if (node[i].id === 'recurse') {
        // console.log("We got it!", node[i].id);
        newArr.push(node[i]);
        return newArr;

      } 

      if(node[i].children.length > 0){
        // console.log("Logging node at i", node[i].children);
        

        recurse(node[i].children);      
      }
    }
  }

  recurse(body);
  return recurse(body);
}

console.log(getId('recurse'));
// document.getElementsByTagName('img');