let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let temp = []

fightButton.addEventListener("click", function() {
    let re_1 = fighters[Math.floor(Math.random()*fighters.length)]
    let re_2 = fighters[Math.floor(Math.random()*fighters.length)]

    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
        stageEl.textContent = re_1 + " vs " + re_2
    
})

