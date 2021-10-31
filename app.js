const Quote = document.getElementById("quote");
const Author = document.getElementById("author");

function getquote() {
  fetch("http://quotes.stormcansultancy.co.uk/random.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Quote.innerText = data.quote;
      Author.innerText = `-$(data.author)`;
    });
}
getquote();
