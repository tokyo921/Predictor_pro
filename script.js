document.addEventListener('DOMContentLoaded', () => {
    const getSignalButton = document.getElementById('get-signal-button');
    const resetButton = document.getElementById('reset-button');
    const ballSpots = document.querySelectorAll('.ball-spot');
    const multipliers = document.querySelectorAll('.multiplier');
    const dots = document.querySelectorAll('.dot');

    let currentMultiplierIndex = 0;

    function resetGame() {
        ballSpots.forEach(spot => spot.classList.remove('active'));
        multipliers.forEach(mult => mult.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        dots[0].classList.add('active');
        currentMultiplierIndex = 0;
        getSignalButton.disabled = false;
    }

    function showSignal() {
        getSignalButton.disabled = true;

        ballSpots.forEach(spot => spot.classList.remove('active'));

        const randomIndex = Math.floor(Math.random() * ballSpots.length);
        const randomBall = ballSpots[randomIndex];

        randomBall.classList.add('active');

        if (currentMultiplierIndex < multipliers.length) {
            multipliers[currentMultiplierIndex].classList.add('active');
            if (currentMultiplierIndex > 0) {
                dots[currentMultiplierIndex].classList.add('active');
            }
            currentMultiplierIndex++;
        }
    }

    getSignalButton.addEventListener('click', showSignal);
    resetButton.addEventListener('click', resetGame);

    resetGame();
});
