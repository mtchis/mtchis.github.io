var index1 = 6
function getmore1() {
var ul, li, i;
ul = document.getElementById("myUL1");
li = ul.getElementsByClassName("item-content");
if(li.length-index1 > 6){
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index1; i < index1 + 6; i++ ) {
        li[i].style.display = "";   
    }
}
else{
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index1; i < ((li.length - index1))+index1 ; i++ ) {
        li[i].style.display = "";   
    }
    index1=li.length;
}
if(index1===li.length){
    index1 = 0;
}
else{
    index1=index1+6;
}
}

var index2 = 6
function getmore2() {
var ul, li, i;
ul = document.getElementById("myUL2");
li = ul.getElementsByClassName("item-content");
if(li.length-index2 > 6){
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index2; i < index2 + 6; i++ ) {
        li[i].style.display = "";   
    }
}
else{
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index2; i < ((li.length - index2))+index2 ; i++ ) {
        li[i].style.display = "";   
    }
    index2=li.length;
}
if(index2===li.length){
    index2 = 0;
}
else{
    index2=index2+6;
}
}

var index3 = 6
function getmore3() {
var  ul, li, i;
ul = document.getElementById("myUL3");
li = ul.getElementsByClassName("item-content");
if(li.length-index3 > 6){
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index3; i < index3 + 6; i++ ) {
        li[i].style.display = "";   
    }
}
else{
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index3; i < ((li.length - index3))+index3 ; i++ ) {
        li[i].style.display = "";   
    }
    index3=li.length;
}
if(index3===li.length){
    index3 = 0;
}
else{
    index3=index3+6;
}
}

var index4 = 6
function getmore4() {
var ul, li, i;
ul = document.getElementById("myUL4");
li = ul.getElementsByClassName("item-content");
if(li.length-index4 > 6){
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index4; i < index4 + 6; i++ ) {
        li[i].style.display = "";   
    }
}
else{
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index4; i < ((li.length - index4))+index4 ; i++ ) {
        li[i].style.display = "";   
    }
    index4=li.length;
}
if(index4===li.length){
    index4 = 0;
}
else{
    index4=index4+6;
}
}

var index5 = 6
function getmore5() {
var ul, li, i;
ul = document.getElementById("myUL5");
li = ul.getElementsByClassName("item-content");
if(li.length-index5 > 6){
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index5; i < index5 + 6; i++ ) {
        li[i].style.display = "";   
    }
}
else{
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index5; i < ((li.length - index5))+index5 ; i++ ) {
        li[i].style.display = "";   
    }
    index5=li.length;
}
if(index5===li.length){
    index5 = 0;
}
else{
    index5=index5+6;
}
}

var index6 = 6
function getmore6() {
var ul, li, i;
ul = document.getElementById("myUL6");
li = ul.getElementsByClassName("item-content");
if(li.length-index6 > 6){
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index6; i < index6 + 6; i++ ) {
        li[i].style.display = "";   
    }
}
else{
    for (i = 0; i< li.length ; i++ ) {
    li[i].style.display = "none";   
    }
    for (i = index6; i < ((li.length - index6))+index6 ; i++ ) {
        li[i].style.display = "";   
    }
    index6=li.length;
}
if(index6===li.length){
    index6 = 0;
}
else{
    index6=index6+6;
}
}


function limit6() {
var ul1,ul2,ul3,ul4,ul5,ul6, li1,li2,li3,li4,li5,li6, i;
ul1 = document.getElementById("myUL1");
ul2 = document.getElementById("myUL2");
ul3 = document.getElementById("myUL3");
ul4 = document.getElementById("myUL4");
ul5 = document.getElementById("myUL5");
ul6 = document.getElementById("myUL6");
li1 = ul1.getElementsByClassName("item-content");
li2 = ul2.getElementsByClassName("item-content");
li3 = ul3.getElementsByClassName("item-content");
li4 = ul4.getElementsByClassName("item-content");
li5 = ul5.getElementsByClassName("item-content");
li6 = ul6.getElementsByClassName("item-content");
for (i = 6; i < li1.length; i++) {
    li1[i].style.display = "none";  
}
for (i = 6; i < li2.length; i++) {
    li2[i].style.display = "none";  
}
for (i = 6; i < li3.length; i++) {
    li3[i].style.display = "none";
}
for (i = 6; i < li4.length; i++) {
    li4[i].style.display = "none";
}
for (i = 6; i < li5.length; i++) {
    li5[i].style.display = "none";
}
for (i = 6; i < li6.length; i++) {
    li6[i].style.display = "none";
}
}

// function limit6t(myUL) {
//     var ul, li, i;
//     ul = document.getElementById(myUL);
//     li = ul.getElementsByClassName("item-content");
//     for (i = 6; i < li.length; i++) {
//         li[i].style.display = "none";  
//     }
//     }

function myFunction(myUL,myInput) {
var input, filter, ul, li,li1, a, i, txtValue;
input = document.getElementById(myInput);
filter = input.value.toUpperCase();
ul = document.getElementById(myUL);
li = ul.getElementsByClassName("item-title");
li1 = ul.getElementsByClassName("item-content");
for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("b")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li1[i].style.display = "";
    } else {
        li1[i].style.display = "none";
    }
}
if (filter === ''){
    limit6();
}
}


// function redirect() {
//     setTimeout(function(){ 
//             window.location.replace("https://ipa.mtchi.net");
//         }
//         , 100);	
//     }

// // I'm  building an function to validate the URL
// function checkValidURL(url) {
//     var xmlhttp;
//     if (window.XMLHttpRequest) {
//       xmlhttp = new XMLHttpRequest();
//     } else {
//       // code for older browsers
//       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
  
//     // Callback
//     xmlhttp.onreadystatechange = function() {
//       if (this.status == 200) {
//         return true; // OK
//       } else { // or -> } else if (this.status == 404) {
//         return false; // Ops, something happen..
//       }
//     };
//     // AJAX configuration
//     xmlhttp.open("GET", url, false); // <- "false" for a synchronous request
//     xmlhttp.send();
//   }

//   function check(){
//     if (!checkValidURL("http://ipa.mtchi.net")) {
//     console.log("invalid URL"); 
//     // Call or check other URL
//         } else {
//             // It's OK, proceed with the business rules
//         }
//   }
  