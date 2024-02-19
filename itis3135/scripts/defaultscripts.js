function displayDate() {
    let currentDate = new Date();
    let weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    let time = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    let date = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    document.getElementById("date").textContent = "It is " + time + " on " + weekday + ", " + date;
}

function userGreeting() {
    let name = document.getElementById("name").value;
    let mood = document.getElementById("mood").value;
    text = "The Ecstatic Alligator welcomes you, " + name + "! We're glad you are feeling " + mood + "! ";
    document.getElementById("greeting").innerHTML = text;
}

function userPolygon() {
    let number = document.getElementById("number").value;
    number = Math.abs(number);
    number = Math.round(number);
    let polygonName;
    switch (number) {
        case 1:
            polygonName = "henagon (monogon)";
            break;
        case 2:
            polygonName = "digon (bigon)";
            break;
        case 3:
            polygonName = "trigon";
            break;
        case 4:
            polygonName = "tetragon (quadrilateral)";
            break;
        case 5:
            polygonName = "pentagon";
            break;
        case 6:
            polygonName = "hexagon";
            break;
        case 7:
            polygonName = "heptagon (septagon)";
            break;
        case 8:
            polygonName = "octagon";
            break;
        case 9:
            polygonName = "enneagon (nonagon)";
            break;
        case 10:
            polygonName = "decagon";
            break;
        default:
            polygonName = "polygon with " + number + " sides";
    }
    alert("Your favorite number corresponds to a " + polygonName + ".");
}

function catAgeCalculator() {
    let input = prompt("How old is your cat in human years?");
    let catAge = Math.round(input * 7)
    alert("Your cat is " + catAge + " cat years old!");
}

function catTranslator() {
    let input = prompt("Enter a message to translate into meows:");
    if (input) {
        alert("Meow meow meow! (Translation: " + input + ")");
    }}

function catToySelector() {
    let toys = ["catnip mouse", "feather teaser", "ball track toy", "treat puzzle toy"];
    let randomIndex = Math.floor(Math.random() * toys.length);
    let selectedToy = toys[randomIndex];
    alert("Your cat will love playing with this " + selectedToy + "!");
}

function catnipCalculator() {
    let weight = prompt("Enter your cat's weight:");
    let age = prompt("Enter your cat's age:");
    let catnip = Math.round(weight / age);
    alert("Optimal catnip amount calculated: " + catnip + " grams.");}

function catMoodDetector() {
    let moods = ["happy", "playful", "relaxed", "curious", "sleepy"];
    let randomIndex = Math.floor(Math.random() * moods.length);
    let mood = moods[randomIndex];
    alert("Your cat seems " + mood + " today! Maybe it's time for some playtime!");
}

function catTreatDispenser() {
    alert("Yum! Here's a tasty treat for your cat!");
}

document.addEventListener("DOMContentLoaded", function() {
    displayDate();
});
