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

}

function catTranslator() {

}

function catNameGenerator() {

}

function catnipCalculator() {
    
}

function catMoodDetector() {
    let moods = ["happy", "playful", "relaxed", "curious", "sleepy"];
    let randomIndex = Math.floor(Math.random() * moods.length);
    let mood = moods[randomIndex];
    alert("Your cat seems " + mood + " today! Maybe it's time for some playtime!");
}

document.addEventListener("DOMContentLoaded", function() {
    displayDate();
});
