



// --- Navigation Functions ---
function goPhase(){
    window.location.href="phase.html";
}
function goHome() {
    window.location.href = "home.html";
}

function goWorkout() {
    window.location.href = "workouts.html";
}

function goNutrition() {
    window.location.href = "nutrition.html";
}

// --- Main Calculation and Data Storage ---
function checkPhase() {
    let startDateValue = document.getElementById("startDate").value;
    
    if (!startDateValue) {
        alert("Please select your period start date!");
        return;
    }

    let startDate = new Date(startDateValue);
    let today = new Date();

    // Calculate days passed
    let diff = today - startDate;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

    // Cycle math (assuming a standard 28-day cycle)
    let cycleDay = days % 28;
    if (cycleDay === 0) cycleDay = 28;

    let phase = "";
    let workout = "";
    let food = "";
    let quote = "";

    // Phase Logic with Detailed Lists and Nutrition
    if (cycleDay <= 5) {
        phase = "Menstrual Phase";
        workout = "1. Gentle Yoga & Yin Yoga<br>2. Light Walking (15-20 mins)<br>3. Pelvic Tilts for cramp relief";
        food = `<strong>Detailed Nutrition:</strong><br>
                1. <b>Iron-Rich:</b> Spinach, lentils, and lean red meat to replenish blood loss.<br>
                2. <b>Anti-Inflammatory:</b> Ginger and turmeric tea to reduce pain.<br>
                3. <b>Magnesium:</b> Dark chocolate (70%+) to relax muscles.<br>
                4. <b>Vitamin C:</b> Oranges and bell peppers to help iron absorption.`;
        quote = "Rest is productive. Listen to your body's need for quiet.";
    } else if (cycleDay <= 13) {
        phase = "Follicular Phase";
        workout = "1. Power Walking<br>2. Light Resistance Training<br>3. Hiking or Zumba";
        food = "1. Fermented foods (Yogurt/Kimchi)<br>2. Sprouted beans and nuts<br>3. Fresh, vibrant citrus salads";
        quote = "New beginnings. Your energy and creativity are blooming.";
    } else if (cycleDay <= 16) {
        phase = "Ovulation Phase";
        workout = "1. HIIT Training<br>2. Kickboxing or Spinning<br>3. Heavy Weightlifting";
        food = "1. Anti-oxidant rich berries<br>2. Cruciferous veggies (Broccoli)<br>3. Quinoa and lean proteins";
        quote = "Peak confidence. You are at your strongest right now.";
    } else {
        phase = "Luteal Phase";
        workout = "1. Pilates for core stability<br>2. Moderate Hiking<br>3. Slow Flow Vinyasa";
        food = "1. Sweet potatoes (Complex carbs)<br>2. Avocado & Walnuts (Healthy fats)<br>3. Bananas for bloating relief";
        quote = "Slow and steady. Focus on persistence and self-care.";
    }

    // --- ADD THESE TWO LINES AT THE END OF YOUR CALCULATION LOGIC ---
localStorage.setItem('userPhase', phase.toLowerCase()); 
updateAppTheme();

    // Save data to localStorage
    localStorage.setItem("phase", phase);
    updateAppTheme();

    localStorage.setItem("workout", workout);
    localStorage.setItem("food", food);
    localStorage.setItem("quote", quote);

    // Redirect to result page
    window.location.href = "phase.html";
}

// --- Display and Styling Logic (Runs when pages load) ---
window.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Text Display (Using innerHTML for the <br> lists)
    if (document.getElementById("phaseResult")) {
        const currentPhase = localStorage.getItem("phase");
        const currentQuote = localStorage.getItem("quote");
        document.getElementById("phaseResult").innerHTML = `<h2>${currentPhase}</h2><p>${currentQuote}</p>`;
    }

    if (document.getElementById("workoutData")) {
        document.getElementById("workoutData").innerHTML = localStorage.getItem("workout");
    }

    if (document.getElementById("foodData")) {
        document.getElementById("foodData").innerHTML = localStorage.getItem("food");
    }

    // 2. Handle Dynamic Phase Styling (Changes colors based on phase)
    const storedPhase = localStorage.getItem("phase");
    const container = document.querySelector('.result-card, .content-box, .card');

    if (storedPhase && container) {
        const firstWord = storedPhase.split(' ')[0]; // Gets "Luteal" from "Luteal Phase"
        container.classList.add(`phase-${firstWord}`);
        
        // Update header color to match the phase
        const header = document.querySelector('h2');
        if (header) {
            header.style.color = `var(--${firstWord.toLowerCase()})`;
        }
    }
});



// --- New Section: Emotional Well-being and Reassurance ---
// This function contains all the detailed content and quotes.
function loadWellbeingContent() {
    const wellbeingContainer = document.getElementById("wellbeingContent");
    if (!wellbeingContainer) return; // Only runs on the phase page

    const storedPhase = localStorage.getItem("phase");
    if (!storedPhase) return;

    // We get the first word (e.g., "Menstrual") to determine the content
    const phaseKey = storedPhase.split(' ')[0]; 

    const contentMap = {
        'Menstrual': {
            icon: '🩸',
            detailedNote: `This is your inner winter—a time for release, rest, and reflection. Your hormone levels (Estrogen and Progesterone) are at their lowest, which naturally leads to lower physical energy.  You are shedding what you don’t need, both physically and emotionally, making space for the new cycle ahead.`,
             reassurance:`It is okay to not be 'on' today. You are permitted to rest. The tide will turn, and your energy will return. Trust the process.`,
            quote: `"Rest is a form of productivity.🌹"`
        },
        'Follicular': {
            icon: '🌱',
            detailedNote: `it's YOUR!! Springtime has arrived! your Estrogen levels begin to rise steadily. This hormonal shift often brings a welcome surge in physical energy, mental clarity, and creative inspiration. You may feel more adventurous, confident, and ready to start new projects or learn something new OHOO!. Your brain is more receptive to complex problem-solving and planning...`,
            reassurance: `Feel that spark? That is your vitality returning. You are capable, focused, and ready to bloom. What new seeds will you plant today?`,
            quote: `"The energy you are feeling now is your power returning.🤗"`
        },
        'Ovulation': {
            icon: '☀️',
            detailedNote: `Your cycle is in its summer season. Socially, you may feel more communicative, magnetic, and outgoing. Your mood is often elevated, and you are naturally more resilient. It is the perfect phase for important meetings, social events, or a challenging workout. Celebrate this peak!!`,
            reassurance: `You are radiant. Your confidence is high, and your energy is magnetic. Enjoy this moment of power and connection—you have earned it.`,
            quote: `"You are a force of nature, shining brightly.🌷"`
        },
        'Luteal': {
            icon: '🍂',
            detailedNote: `This is your inner autumn. Progesterone becomes the dominant hormone, preparing your body for a potential new cycle. In the first half (early luteal), you may still feel energetic, but in the second half (late luteal/PMS), energy can dip and you might feel more inward, sensitive, or critical.Prioritize self-care before the next menstrual phase.`,
            reassurance: `If you are feeling sensitive or overwhelmed, breathe. This is your intuition speaking to you. Be patient and kind to yourself—this phase requires gentle nurturing, not harsh criticism.`,
            quote: `"Breathe in calm. Breathe out expectations.💪"`
        }
    };

    const data = contentMap[phaseKey];

    if (data) {
        wellbeingContainer.innerHTML = `
            <div class="wellbeing-section">
                <div class="wellbeing-header">${data.icon} Inner ${phaseKey === 'Menstrual' ? 'Winter' : phaseKey === 'Follicular' ? 'Spring' : phaseKey === 'Ovulation' ? 'Summer' : 'Autumn'} & Well-being</div>
                <div class="wellbeing-text">
                    <p>${data.detailedNote}</p>
                    <p><strong>Reassurance for you:</strong> ${data.reassurance}</p>
                </div>
                <div class="reassurance-quote">${data.quote}</div>
            </div>
        `;
    }
}

// Ensure this function runs when the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Keep your existing display logic...
    if (document.getElementById("phaseResult")) {
        const currentPhase = localStorage.getItem("phase");
        const currentQuote = localStorage.getItem("quote");
        document.getElementById("phaseResult").innerHTML = `<h2>${currentPhase}</h2><p>${currentQuote}</p>`;
    }
    // ... rest of your existing DOMContentLoaded logic ...

    // ADD THIS LINE AT THE BOTTOM OF YOUR EXISTING DOMContentLoaded BLOCK
    loadWellbeingContent(); 
});








// --- ADD THIS TO THE VERY END OF THE FILE ---
function updateAppTheme() {
    const currentPhase = localStorage.getItem('phase'); // or 'userPhase' if that's what you used
    if (currentPhase) {
        document.body.className = currentPhase.toLowerCase().trim();
    }
}
document.addEventListener('DOMContentLoaded', updateAppTheme);