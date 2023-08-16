/*This function will check the User answer 
and compare it to the CPU's random answer and display an alert based on the outcome.
The code for the alert boxes were sourced from https://sweetalert2.github.io */

function checkAnswer() {
    var userChoice = document.getElementById("result-display").innerHTML;
    var aiChoice = document.getElementById("cpu-display").innerHTML;
    var rock = '<button class="icons" id="rock" type="submit"></button>';
    var paper = '<button class="icons" id="paper" type="submit"></button>';
    var scissors = '<button class="icons" id="scissors" type="submit"></button>';
    var lizard = '<button class="icons" id="lizard" type="submit"></button>';
    var spock = '<button class="icons" id="spock" type="submit"></button>';

    if (userChoice === aiChoice) {
        setTimeout(function () { drawPlay(); }, 700);
        setTimeout(function () {
            Swal.fire({
                icon: 'info', title: "DRAW", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === rock && aiChoice === lizard) {
        setTimeout(function () { winPlay(); }, 700);
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Rock Crushes Lizard", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === rock && aiChoice === scissors) {
        setTimeout(function () { winPlay(); }, 700);
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Rock Crushes Scissors", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === paper && aiChoice === rock) {
        setTimeout(function () { winPlay(); }, 700);
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Paper Covers Rock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === paper && aiChoice === spock) {
        setTimeout(function () { winPlay(); }, 700);
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Paper Disproves Spock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === scissors && aiChoice === lizard) {
        setTimeout(function () { winPlay(); }, 700);
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Scissors Stabs Lizard", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === scissors && aiChoice === paper) {
        setTimeout(function () { winPlay(); }, 700);
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Scissors Cuts Paper", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === lizard && aiChoice === paper) {
        setTimeout(function () { winPlay(); }, 700);
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Lizard Eats Paper", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === lizard && aiChoice === spock) {
        setTimeout(function () { winPlay(); }, 700);
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Lizard Poisons Spock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === spock && aiChoice === rock) {
        setTimeout(function () { winPlay(); }, 700);
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Spock Vaporises Rock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === spock && aiChoice === scissors) {
        setTimeout(function () { winPlay(); }, 700);
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Spock Smashes Scissors", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else {
        checkLose();
    }
    checkMaxScore();
} 
