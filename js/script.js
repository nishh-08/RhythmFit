function saveDate() {
    const date = document.getElementById("lastPeriodDate").value;

    if (!date) {
        alert("Please select a valid date.");
        return;
    }

    localStorage.setItem("lastPeriod", date);
    calculatePhase();
}

function calculatePhase() {
    const savedDate = localStorage.getItem("lastPeriod");

    if (!savedDate) {
        document.getElementById("result").innerHTML =
            "Enter your last period start date to begin tracking.";
        return;
    }

    const startDate = new Date(savedDate);
    const today = new Date();

    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const cycleDay = (diffDays % 28) + 1;

    let phase = "";
    let workout = "";
    let nutrition = "";
    let mood = "";

    if (cycleDay >= 1 && cycleDay <= 5) {
        phase = "Menstrual Phase";
        workout = "Light yoga, stretching, slow walks.";
        nutrition = "Iron-rich foods, warm meals, hydration.";
        mood = "Rest. It is okay to slow down.";
    }
    else if (cycleDay >= 6 && cycleDay <= 13) {
        phase = "Follicular Phase";
        workout = "Strength training, new workouts.";
        nutrition = "Protein-rich meals, fresh vegetables.";
        mood = "Energy rising — good time to start new goals.";
    }
    else if (cycleDay >= 14 && cycleDay <= 16) {
        phase = "Ovulation Phase";
        workout = "HIIT, group workouts, peak performance.";
        nutrition = "Fiber, light balanced meals.";
        mood = "Confidence and communication peak.";
    }
    else {
        phase = "Luteal Phase";
        workout = "Moderate workouts, pilates, steady cardio.";
        nutrition = "Magnesium-rich foods, reduce caffeine.";
        mood = "Emotions may fluctuate. Be gentle with yourself.";
    }

    document.getElementById("result").innerHTML = `
        <h2>Current Phase: ${phase}</h2>
        <p><strong>Workout:</strong> ${workout}</p>
        <p><strong>Nutrition:</strong> ${nutrition}</p>
        <p><strong>Mood Advice:</strong> ${mood}</p>
        <p><strong>Cycle Day:</strong> ${cycleDay}</p>
    `;
}

window.onload = calculatePhase;