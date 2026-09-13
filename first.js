const playerInput = document.getElementById('player-name');
const startBtn = document.getElementById('start-btn');
const errorMsg = document.getElementById('error-msg');

startBtn.addEventListener('click', function() {
    const value = playerInput.value.trim();
    
    if (value === "") {
        errorMsg.style.display = "block";
        errorMsg.textContent = "please enter player..";
        return;
    }
    
    if (!/^\d+$/.test(value) || parseInt(value) <= 0) {
        errorMsg.style.display = "block";
        errorMsg.textContent = "enter number only...!";
        return;
    }

    const numPlayers = parseInt(value);

    if (numPlayers < 2) {
        errorMsg.style.display = "block";
        errorMsg.textContent = "must be 2 player..!";
        return;
    }
    
    localStorage.setItem('totalPlayers', value);

    errorMsg.style.display = "none";
    window.location.href = "second.html";
});