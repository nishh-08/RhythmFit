/*function calculatePhase() {

    let startDate = new Date(document.getElementById("startDate").value);
    let today = new Date();

    if (!document.getElementById("startDate").value) {
        alert("Please select a date!");
        return;
    }

    let diffTime = today - startDate;
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    let cycleDay = diffDays % 28;
    if (cycleDay === 0) cycleDay = 28;

    let phase = "";
    let advice = "";
    let workout = "";
    let food = "";
    let quote = "";
    let reminder = "";
    let image = "";

    if (cycleDay >= 1 && cycleDay <= 5) {
        phase = "Menstrual Phase";
        advice = "Rest and take care of your body.";
        workout = "Light stretching or yoga.";
        food = "Iron-rich foods, warm soup, dark chocolate.";
        quote = "Rest is part of progress.";
        reminder = "Drink warm water and relax.";
        image = "../images/menstrual.svg";
    }

    else if (cycleDay >= 6 && cycleDay <= 13) {
        phase = "Follicular Phase";
        advice = "Start new goals and stay active.";
        workout = "Cardio and strength training.";
        food = "Fruits, vegetables, protein foods.";
        quote = "You are building momentum.";
        reminder = "Stay productive today.";
        image = "../images/follicular.svg";
    }

    else if (cycleDay >= 14 && cycleDay <= 16) {
        phase = "Ovulation Phase";
        advice = "Great time for social activities.";
        workout = "HIIT, running, dance workouts.";
        food = "Smoothies, fiber foods.";
        quote = "You are at your peak.";
        reminder = "Stay hydrated.";
        image = "../images/ovulation.svg";
    }

    else {
        phase = "Luteal Phase";
        advice = "Slow down and focus on self-care.";
        workout = "Pilates, walking, light workouts.";
        food = "Bananas, oats, nuts, magnesium foods.";
        quote = "Listen to your body.";
        reminder = "Take deep breaths.";
        image = "../images/luteal.svg";
    }

    document.getElementById("result").innerHTML = `
        <h2>${phase}</h2>
        <p><strong>Cycle Day:</strong> ${cycleDay}</p>
        <img src="${image}" class="phase-image">

        <p><strong>Advice:</strong> ${advice}</p>
        <p><strong>Workout:</strong> ${workout}</p>
        <p><strong>Food:</strong> ${food}</p>
        <p><strong>Reminder:</strong> ${reminder}</p>
        <p><em>${quote}</em></p>
    `;
}
*/