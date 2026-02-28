const phases = {
    Menstrual: {
        image: "../images/menstrual.svg",
        quote: "Rest is productive too.",
        reassurance: "Feeling low-energy is normal. Your body is working hard."
    },
    Follicular: {
        image: "../images/follicular.svg",
        quote: "Energy is building — use it wisely.",
        reassurance: "This phase often brings renewed energy."
    },
    Ovulation: {
        image: "../images/ovulation.svg",
        quote: "You are powerful.",
        reassurance: "Confidence and social energy peak during this phase."
    },
    Luteal: {
        image: "../images/luteal.svg",
        quote: "Progress over perfection.",
        reassurance: "Mood fluctuations are normal. Adjust your pace."
    }
};

function getCurrentPhase() {
    const lastPeriod = new Date(localStorage.getItem("lastPeriod"));
    const cycleLength = parseInt(localStorage.getItem("cycleLength") || 28);
    const today = new Date();
    const diffDays = Math.floor((today - lastPeriod)/(1000*60*60*24));
    const dayInCycle = diffDays % cycleLength + 1;
    const ovulationDay = cycleLength - 14;

    if(dayInCycle <= 5) return "Menstrual";
    else if(dayInCycle <= ovulationDay-1) return "Follicular";
    else if(dayInCycle <= ovulationDay+1) return "Ovulation";
    else return "Luteal";
}

window.onload = () => {
    const currentPhase = getCurrentPhase();
    const data = phases[currentPhase];
    document.getElementById("phaseName").textContent = currentPhase;
    document.getElementById("phaseImage").src = data.image;
    document.getElementById("phaseQuote").textContent = data.quote;
    document.getElementById("phaseReassurance").textContent = data.reassurance;
};