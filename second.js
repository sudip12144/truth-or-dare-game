const totalPlayers = localStorage.getItem('totalPlayers');
const playersContainer = document.getElementById('players-container');
const nextBtn = document.getElementById('next-btn');

let errorMsg = document.getElementById('error-msg');

if (totalPlayers) {
    const count = parseInt(totalPlayers);
    
    for (let i = 1; i <= count; i++) {
        const inputField = document.createElement('input');
        inputField.type = "text";
        inputField.placeholder = `Player ${i} Name...`;
        inputField.classList.add('player-name-input'); 
        
        inputField.style.width = "100%";
        inputField.style.padding = "12px 15px";
        inputField.style.marginBottom = "12px";
        inputField.style.borderRadius = "8px";
        inputField.style.border = "1px solid rgba(255, 255, 255, 0.2)";
        inputField.style.background = "rgba(255, 255, 255, 0.05)";
        inputField.style.color = "#fff";
        inputField.style.fontSize = "1rem";
        inputField.style.boxSizing = "border-box";

        playersContainer.appendChild(inputField);
    }
} else {
    window.location.href = "index.html";
}

nextBtn.addEventListener('click', function() {
    const allInputs = document.querySelectorAll('.player-name-input');
    let allFilled = true;
    let playerNames = [];

    allInputs.forEach(input => {
        const nameValue = input.value.trim();
        if (nameValue === "") {
            allFilled = false;
        } else {
            playerNames.push(nameValue);
        }
    });

    if (!allFilled) {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Please enter all player name..!";
    } else {
        errorMsg.style.display = "none";
        localStorage.setItem('playerNames', JSON.stringify(playerNames));
        
         window.location.href = "third.html";
    }
});