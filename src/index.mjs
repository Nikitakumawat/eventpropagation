import "./styles.css";
//bubbling, capturing
// let button = document.querySelector("button");
// let div = document.querySelector("div");
// let form = document.querySelector("form");

let button = document.querySelector("button");

const openModal = () => {
  document.querySelector(".modal_container").style.display = "block";
  document.querySelector(".modal_container").addEventListener("click", () => {
    document.querySelector(".modal_container").style.display = "none";
  })
  document.querySelector(".modal").addEventListener("click", (e) => {
    e.stopPropagation();
  })
 
}

button.addEventListener("click", openModal);





// div.addEventListener("click", (e) => {e.stopPropagation();  alert("div")})
// form.addEventListener("click", (e) => {e.stopPropagation();  alert("form")})
// button.addEventListener("click", (e) => { e.stopPropagation(); alert("button")});

// function print(num){
//   return function (num1){
//      return num + num1;
//   }
// }

// let a = print(6);
// console.log(a(10));
// console.log(a(21));

// function a(){
// for(var i = 0 ; i < 3; i++){
//   (function(i){
//    setTimeout(() => {
//       console.log(i);
//    }, 0);
//   })(i)
// }
// }
// a();

// function counter(){
//   var _count = 0;

//   const add = (num) => {
//     _count += num;
//   }

//   const retrieve = () => {
//     return "Counter="+ _count;
//   }
//   return {add, retrieve};
// }

// const a = counter();
// a.add(5);
// a.add(10);
// console.log(a.retrieve());

// const char = 65;
// console.log(String.fromCharCode(char));

// let abc ;
// function once(){
//   let counter = 0;
//   return function(){
//     if(counter > 0){
//       console.log("already called");
//     }
//     else{

//   abc= "roadside coder";
//   ++counter;
//   return console.log("sub to "+abc);
  
//     }
// }
// }
// let ch = once();

// ch();
// ch();


const  objname = {
  name: "Nikita"
}

function getValue(age){
  return this.name +" "+ age;
}

console.log(getValue.call(objname, 2));


