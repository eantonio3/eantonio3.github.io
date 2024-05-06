function displayDate() {
    let currentDate = new Date();
    let weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    let time = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    let date = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    document.getElementById("date").textContent = "Welcome to Josie's Styles, it is " + time + " on " + weekday + " " + date;
}
document.addEventListener("DOMContentLoaded", function() {
    displayDate();
});