document.getElementById('sosButton').addEventListener('click', function () {
    if ('vibrate' in navigator) {
        let sosPattern = [200, 200, 200, 500, 500, 500, 200, 200, 200];
        
        navigator.vibrate(sosPattern);
    } else {
        alert("Vibration API is not supported on this device.");
    }
});
