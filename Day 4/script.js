

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'}, {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'}, {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint:
    'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'}, {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
    ]

const randomMovie = movies[Math.floor(Math.random() * movies.length)];

const text = document.getElementById("expText");
text.innerHTML = randomMovie.explanation;

const hint = document.getElementById("hintText");

const userInput = document.getElementById("userInput");
const submitEvent = document.getElementById("submit");
const hintEvent = document.getElementById("hint");

const form = document.getElementById("form");

submitEvent.addEventListener("click", (event)=> {
    if (document.getElementById("result")) {
        document.getElementById("result").remove();
    }
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    
    if (userInput.value === randomMovie.title) {
        resultDiv.innerHTML = "That's correct!";
        resultDiv.classList.add("alert");
        resultDiv.classList.add("alert-primary");
        resultDiv.classList.add("mt-4");
        form.append(resultDiv);
    }
    else {
        resultDiv.innerHTML = "Try again.";
        resultDiv.classList.add("alert");
        resultDiv.classList.add("alert-danger");
        resultDiv.classList.add("mt-4");
        form.append(resultDiv);
    }
});

hintEvent.addEventListener("click", (event)=> {
    hintEvent.innerHTML = randomMovie.hint;
});