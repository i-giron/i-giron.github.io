let myFullName = "Idis Giron"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
let header = document.querySelector(".header");
header.textContent = myFullName + "'s Lab 4";
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
let paragraph1 = document.createElement ("p");
let paragraph2 = document.createElement ("p");
let p1_text = document.createTextNode ("First Paragraph");
let p2_text = document.createTextNode ("Second Paragraph");
paragraph1.appendChild(p1_text);
paragraph2.appendChild(p2_text);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

// 6 Add a new line to your second paragraph

// 7 Return the final three characters of your last name to that new line

// 8 Substring your first and last name into two separate variables

// 9 Add the total length of your first and last names together

// 10 Display that total next to your name in your header
