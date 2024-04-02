const story = {
    start: {
        text: "Your kingdom is under attack by a powerful enemy. As the king, you must make strategic decisions to defend your people and win the war. What is your first move?",
        choices: ["Gather your troops and prepare for battle", "Negotiate a peace treaty"],
        consequence: {
            "Gather your troops and prepare for battle": "stage1",
            "Negotiate a peace treaty": "peace"
        },
        image: "start.jpg"
    },
    stage1: {
        text: "Your troops are ready for battle. Do you want to launch a surprise attack or wait for the enemy to make the first move?",
        choices: ["Launch a surprise attack", "Wait for the enemy's move"],
        consequence: {
            "Launch a surprise attack": "stage2",
            "Wait for the enemy's move": "peace"
        },
        image: "stage1.jpg"
    },
    stage2: {
        text: "Your surprise attack has caught the enemy off guard, but they have regrouped and launched a counterattack. Your troops are outnumbered. Do you order a retreat or stand your ground?",
        choices: ["Order a retreat", "Stand your ground"],
        consequence: {
            "Order a retreat": "stage3",
            "Stand your ground": "peace"
        },
        image: "stage2.jpg"
    },
    stage3: {
        text: "You ordered a strategic retreat, saving many lives. The enemy has gained control of some territories, but your kingdom is still standing. Do you call for reinforcements or launch a counterattack?",
        choices: ["Call for reinforcements", "Launch a counterattack"],
        consequence: {
            "Call for reinforcements": "stage4",
            "Launch a counterattack": "peace"
        },
        image: "stage3.jpg"
    },
    stage4: {
        text: "Your reinforcements have arrived, and your troops are ready for a decisive battle. Do you launch an all-out offensive or try to reclaim lost territories first?",
        choices: ["Launch an all-out offensive", "Reclaim lost territories"],
        consequence: {
            "Launch an all-out offensive": "stage5",
            "Reclaim lost territories": "peace"
        },
        image: "stage4.jpg"
    },
    stage5: {
        text: "Your all-out offensive has caught the enemy by surprise. Their defenses are crumbling, but they have one last trick up their sleeve. Do you press the attack or call for a temporary ceasefire?",
        choices: ["Press the attack", "Call for a temporary ceasefire"],
        consequence: {
            "Press the attack": "stage6",
            "Call for a temporary ceasefire": "peace"
        },
        image: "stage5.jpg"
    },
    stage6: {
        text: "Your relentless attack has paid off. The enemy has been defeated, and their leaders have surrendered. Do you show mercy or execute them for their crimes?",
        choices: ["Show mercy", "Execute them"],
        consequence: {
            "Show mercy": "kingWon",
            "Execute them": "peace"
        },
        image: "stage6.jpg"
    },
    kingWon: {
        text: "Congratulations! Your strategic decisions and bravery have led your kingdom to victory. You have defended your people and secured your reign as a wise and just king.",
        image: "kingWon.jpg"
    },
    peace: {
        text: "While your kingdom is at peace, the enemy's demands have left you with a heavy price to pay. Your people are safe, but your reign has been tarnished by compromise.",
        image: "peace.jpg"
    }
};

let currentStage = 'start';

function startGame() {
    currentStage = 'start';
    updatePage(currentStage);
}

function updatePage(stage) {
    const storyObject = story[stage];
    document.getElementById("story").textContent = storyObject.text;
    document.getElementById("image").src = "images/" + storyObject.image;
    document.getElementById("choices").innerHTML = "";

    if (storyObject.choices) {
        storyObject.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", function() {
                makeChoice(choice);
            });
            document.getElementById("choices").appendChild(button);
        });
    }

    if (stage !== 'start') {
        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart";
        restartButton.addEventListener("click", startGame);
        document.getElementById("choices").appendChild(restartButton);
    }
}

function makeChoice(choice) {
    const consequence = story[currentStage].consequence[choice];
    currentStage = consequence;
    updatePage(consequence);
}

function changeBackgroundColor() {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

startGame(); // Start the game initially
setInterval(changeBackgroundColor, 3000); // Change background color every 3 seconds
