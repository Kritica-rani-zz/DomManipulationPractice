import "./styles.css";
const para = document.querySelector("p");

para.innerHTML = para.innerText
  .split(" ")
  .map((word) =>
    word.length >= 8 ? `<span style="background:yellow">${word}</span>` : word
  )
  .join(" ");
// ADD LINK TO THE SOURCE OF THE TAG AFTER PARA
//https://forcemipsum.com/
const link = document.createElement("a");
link.href = "https://forcemipsum.com/";
link.target = "blank";
link.innerText = "take me to the website";
document.body.appendChild(link);
//Calculate Word count
let wordCount = para.innerText.split(" ").length;
let wordCountElem = document.createElement("div");
wordCountElem.innerText = `${wordCount} words`;
document.body.appendChild(wordCountElem);
//document.body.insertBefore(wordCountElem,para)
