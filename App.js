//                 1st Task
// let firstName = prompt("Enter Your First Name");
// let SecondName = prompt("Enter Your Second Name");

// let FullName = firstName+SecondName
// console.log(FullName);

//                 2nd Task

// let mobi = prompt("Enter Your Favourite Mobile Name")
// console.log(mobi.length);

//                 3rd Task

// let countryName = "Pakistan"
// console.log(countryName.slice(-1));

// // 4th Task
// let abc = "Hello World";
// console.log(abc.lastIndexOf("l"));

// // 5th TAsk
// let countryName = "pakistan";
// console.log(countryName.indexOf("i"));


// // 6th TAsk
// let countryName = "hyderabad";
// console.log(countryName.replace("hyder","islam"));

// 7th Task
// let abc = `Ali and Sami are best friends. They play cricket and
// football together`

// console.log(abc.replaceAll("and","&"));

// 8th TAsk
// let abc = "123"
// console.log(typeof abc);
// abc = Number(abc)
// console.log(typeof abc);

// // task 9
// let abc = "peanut"
// console.log(abc.toUpperCase());


// task 10
// let abc = "javascript"
// // abc = 
// console.log(abc.slice(0,1).toUpperCase()+abc.slice(1));

// task 11
// let abc = 35.36
// // let adc = abc.toString();
// let aic = adc.replace(".","")
// console.log(aic);

// task 14
// let userchoice = prompt("Enter Your Item").toLowerCase()
// let abc = ["cake", "apple", "pie", "cookie", "chips", "patties"]

// let flag = "Yes"
// for (let i = 0 ;i<abc.length;i++){
//     if(abc[i]== userchoice){
//         flag = 'NO'
//         break
//     }
// }
// if(flag == "NO"){
//     alert(`Yes I Have A ${userchoice} `)


// }else{
//     alert(`Sorry I Have Not A ${userchoice}`)
// }


// let userchoice = prompt("Enter Your Item").toLowerCase()
// let abc = ["cake", "apple", "pie", "cookie", "chips", "patties"]

// let flag = 0
// for(let i = 0 ; i < abc .length; i++){
//     if(abc[i]== userchoice){
//         flag= 1
//     }
// }
// if(flag == 1){
//     alert("yes")
// }else{
//     alert("no")
// }

// Task 15
// let abc = prompt("Enter A Password")
// check = abc.charCodeAt();
// if (abc.length > 5) {
//     if (check >= 65 && check <= 90 || check >= 97 && check <= 122) {
//         alert("your password is good")
//     } else {
//         alert("Password Cannot Begin With A Number")
//     }
// } else {
//     alert("Your Password Is Less Than 5 Please Enter A Valid PAssword")

// }

// Task 16
// let college = "University Of Karachi";
// let uni = college.split(" ")

// for (let i = 0; i < college.length; i++) {
//     document.write(`${college[i]} <br>`)
// }
// console.log(uni);

// task 17

// let text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//  Qui cumque voluptas dignissimos voluptates mollitia, distinctio porro tenetur laudantium. 
// Voluptates commodi odio ex porro fugiat error odit id voluptatibus optio alias.`
// alert("Read The Text and Find The Word" + "   " + text)
// let find = prompt("Enter Your Text")

// let flag = 0;
// let count = 0;
// for (let i = 0; i < text.length; i++) {
//     if (text.toLowerCase().slice(i, i + find.length) == find.toLowerCase()){
//         flag = 1
//     ++count}
// };

// if (flag == 1) {
//     alert(`The ${find} is ${count}`)
// } else {
//     alert(`${find} is Not In The Text`)
// }



function btn(){
let random1 = Math.ceil(Math.random()*275)
let random2 = Math.ceil(Math.random()*275)
let random3 = Math.ceil(Math.random()*275);
document.body.style.backgroundColor = `rgb(${random1},${random2},${random3})`;


}
