document.getElementById("saveBtn").addEventListener("click", () => {
    const lastPeriod = document.getElementById("lastPeriod").value;
    const cycleLength = document.getElementById("cycleLength").value;
    const moodNote = document.getElementById("moodNote").value;

    if (!lastPeriod || !cycleLength) {
        alert("Please fill all required fields.");
        return;
    }

    localStorage.setItem("lastPeriod", lastPeriod);
    localStorage.setItem("cycleLength", cycleLength);
    localStorage.setItem("moodNote", moodNote);

    window.location.href = "phase.html";
});