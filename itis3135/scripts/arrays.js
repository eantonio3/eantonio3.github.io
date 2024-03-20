let person = [];
let salary = [];

function addSalary() {
    document.getElementById('addSalaryInput').innerHTML = `
    <div id="addSal">
        <label>Name: </label>
        <input type="text" id="name" required><br>
        <label>Salary: </label>
        <input type="number" id="salary" min="0"><br>
        <button type="button" style="cursor: pointer" onclick="addToArray()">Submit</button>
    </div>
    `;
    document.getElementById('name').focus();
}

function addToArray() {
    let newName = document.getElementById('name').value;
    let newSalary = document.getElementById('salary').value;

    if (newName === "") {
        alert("Please fill out the name input");
        return;
    } else if (isNaN(newSalary) || newSalary === "") {
        alert("Please fill out the salary input with a numeric value");
        return;
    } 

    person.push(newName);
    salary.push(parseInt(newSalary));

    document.getElementById('addSal').style.display = "none";
}
    
function modifySalary() {
    let selectPersonOptions = person.map(name => `<option value="${name}">${name}</option>`).join('');

    let modifySalaryDiv = document.getElementById('modifySalaryInput');
    modifySalaryDiv.innerHTML = `
        <select id="selectPerson">${selectPersonOptions}</select>
        <input type="number" id="newSalary" placeholder="New Salary"><br>
        <button onclick="updateSalary()">Modify</button>
    `;
}

function updateSalary() {
    let selectedPerson = document.getElementById('selectPerson').value;
    let newSalary = document.getElementById('newSalary').value;
    let index = person.indexOf(selectedPerson);
    if (index !== -1) {
        salary[index] = parseInt(newSalary);
    }
}

function displayResults() {
    let total = salary.reduce((acc, curr) => acc + curr, 0);
    let average = total / salary.length;
    let highest = Math.max(...salary);

    let resultsDiv = document.getElementById('displayResultsInput');
    resultsDiv.innerHTML = `
        <label>Average Salary: ${average}</label><br>
        <label>Highest Salary: ${highest}</label>
    `;
}

function displaySalary() {
    let table = document.getElementById('displaySalaryInput');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            ${person.map((name, index) => `<tr><td>${name}</td><td>${salary[index]}</td></tr>`).join('')}
        </tbody>
    `;
}