// Story stages
const story = [
    {
        text: "Your kingdom is under attack by a powerful enemy. As the king, you must make strategic decisions to defend your people and win the war. What is your first move?",
        choices: ["Gather your troops and prepare for battle", "Negotiate a peace treaty"],
        consequence: [1, 2],
        image: "4.jpg"
    },
    {
        text: "Your troops are ready for battle. Do you want to launch a surprise attack or wait for the enemy to make the first move?",
        choices: ["Launch a surprise attack", "Wait for the enemy's move"],
        consequence: [3, 4],
        image: "3.jpg"
    },
    {
        text: "Your surprise attack has caught the enemy off guard, but they have regrouped and launched a counterattack. Your troops are outnumbered. Do you order a retreat or stand your ground?",
        choices: ["Order a retreat", "Stand your ground"],
        consequence: [5, 6],
        image: "2.jpg"
    },
    {
        text: "You ordered a strategic retreat, saving many lives. The enemy has gained control of some territories, but your kingdom is still standing. Do you call for reinforcements or launch a counterattack?",
        choices: ["Call for reinforcements", "Launch a counterattack"],
        consequence: [7, 8],
        image: "1.jpg"
    },
    {
        text: "Your reinforcements have arrived, and your troops are ready for a decisive battle. Do you launch an all-out offensive or try to reclaim lost territories first?",
        choices: ["Launch an all-out offensive", "Reclaim lost territories"],
        consequence: [9, 10],
        image: "6.jpg"
    },
    {
        text: "Your all-out offensive has caught the enemy by surprise. Their defenses are crumbling, but they have one last trick up their sleeve. Do you press the attack or call for a temporary ceasefire?",
        choices: ["Press the attack", "Call for a temporary ceasefire"],
        consequence: [11, 12],
        image: "5.jpg"
    },
    {
        text: "Your relentless attack has paid off. The enemy has been defeated, and their leaders have surrendered. Do you show mercy or execute them for their crimes?",
        choices: ["Show mercy", "Execute them"],
        consequence: [13, 14],
        image: "5.jpg"
    },
    {
        text: "Congratulations! Your strategic decisions and bravery have led your kingdom to victory. You have defended your people and secured your reign as a wise and just king.",
        image: "2.jpg"
    },
    {
        text: "While your kingdom is at peace, the enemy's demands have left you with a heavy price to pay. Your people are safe, but your reign has been tarnished by compromise.",
        image: "1.jpg"
    }
];

// Game state
let currentStage = 0;

// Display story text
function displayStory(text) {
    document.getElementById("decision-heading").innerText = text;
}

// Display choices
function displayChoices(choices) {
    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
        let choiceButton = document.createElement("button");
        choiceButton.textContent = choices[i];
        choiceButton.addEventListener("click", function() {
            makeChoice(story[currentStage].consequence[i]);
        });
        choicesDiv.appendChild(choiceButton);
    }
}

// Display image 
function displayImage(image) {
    let img = document.getElementById("story-image");
    img.src = image;
    img.style.display = "block";
}

// Start game
function startGame() {
    currentStage = 0;
    document.getElementById("home").style.display = "none";
    document.getElementById("decision-page").style.display = "block";
    updateStory();
}

// Restart game
function restartGame() {
    currentStage = 0; 
    document.getElementById("home").style.display = "block";
    document.getElementById("decision-page").style.display = "none";
}

// Update story
function updateStory() {
    let stage = story[currentStage];
    
    displayStory(stage.text);
    displayChoices(stage.choices);
    displayImage(stage.image);
}

// Make choice
function makeChoice(consequence) {
    if (consequence !== undefined) {
        currentStage = consequence;
        updateStory();
    } else {
        // End of the game or specific case
        displayStory("Congratulations! You've defended your kingdom and emerged victorious.");
        displayChoices([]);
        displayImage("8.jpg"); // Replace "8.jpg" with the image for the victorious ending
        document.getElementById("restart-game").style.display = "inline-block";
    }
}

// Start game on click
document.getElementById("start-game").addEventListener("click", startGame);

// Restart game on click
document.getElementById("restart-game").addEventListener("click", restartGame);
