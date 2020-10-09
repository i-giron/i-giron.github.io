let myFullName = 'Idis Giron'; // 9 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
const header = document.querySelector(".header");
header.innerText = myFullName + "'s Lab 4";
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
let paragraph1 = document.createElement ("p");
paragraph1.className = "content1";
let paragraph2 = document.createElement ("p");
paragraph2.className = "content2";

let content = document.querySelector (".content");

content.appendChild (paragraph1);
content.appendChild (paragraph2);
// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
let nameCharacters = myFullName.length - 1;
let p1Phrase = "my name has " + nameCharacters + " characters";
paragraph1.append(p1Phrase);
// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
let p2Phrase = myFullName.charAt(2).toUpperCase();
paragraph2.append(p2Phrase);
// 6 Add a new line to your second paragraph
paragraph2.innerHTML += "<br/>";
// 7 Return the final three characters of your last name to that new line
let lastThreeChar =myFullName.substring(myFullName.length - 3, myFullName.length);
paragraph2.append(lastThreeChar);
// 8 Substring your first and last name into two separate variables
let firstName = myFullName.substring(0, 3);
let lastName = myFullName.substring (4 + 9);
// 9 Add the total length of your first and last names together
let nameLength = firstName.length + lastName.length;
// 10 Display that total next to your name in your header
header.append("The length of my name is "+ nameLength);