//add more logging features to make it easier to debug and to see how the player is progressing,
//variables
// Use Number() to turn the stored string back into a real number
var rabbitCost = Number(localStorage.getItem('rabbitCost')) || 20;
var sheepCost = Number(localStorage.getItem('sheepCost')) || 50;
var petrolMowerCost = Number(localStorage.getItem('petrolMowerCost')) || 250;
let pushMowerCost = Number(localStorage.getItem('pushMowerCost')) || 100;
let scytheCost = Number(localStorage.getItem('scytheCost')) || 50;
let shearsCost = Number(localStorage.getItem('shearsCost')) || 20;
var grassTouched = Number(localStorage.getItem('score')) || 0;
var clickPower = Number(localStorage.getItem('clickingPower')) || 1;
var ach67 = localStorage.getItem('ach67') === 'true' || false;
var ach100 = localStorage.getItem('ach100') === 'true' || false;
var ach1000 = localStorage.getItem('ach1000') === 'true' || false;
var ach10000 = localStorage.getItem('ach10000') === 'true' || false;
var ach100000 = localStorage.getItem('ach100,000') === 'true' || false;
var rabbits = Number(localStorage.getItem('rabbits')) || 0;
var sheep = Number(localStorage.getItem('sheep')) || 0;
var petrolMowers = Number(localStorage.getItem('petrolMowers')) || 0;
const clickAudio = new Audio('click.mp3');
// Calculate total passive income
    var income = (rabbits * 1) + (sheep * 5) + (petrolMowers * 50);
var totalGrassTouched = Number(localStorage.getItem('totalGrassTouched')) || 0;
// Update the display immediately on 
document.getElementById('rabbitTxt').innerText = "Cost: " + rabbitCost;
document.getElementById('sheepTxt').innerText = "Cost: " + sheepCost;
document.getElementById('petrolMowerTxt').innerText = "Cost: " + petrolMowerCost;
document.getElementById('shearsTxt').innerText = "Cost: " + shearsCost;
document.getElementById('scytheTxt').innerText = "Cost: " + scytheCost;
document.getElementById('pushMowerTxt').innerText = "Cost: " + pushMowerCost;
document.getElementById('counter').innerText = "Grass Touched: " + grassTouched;
document.getElementById('per-click').innerText = "Per Click: " + clickPower;
document.getElementById('per-second').innerText = "Per Second: " + income;

    function touch() {
        const img = document.getElementById('grass-img');
    img.classList.add('grow');
    setTimeout(() => {
        img.classList.remove('grow');
    }, 100);
     grassTouched += clickPower; 
    document.getElementById('counter').innerText = "Grass Touched: " + grassTouched;
                localStorage.setItem("score", grassTouched)
                console.log(`${grassTouched}`);
        totalGrassTouched += clickPower; 
    document.getElementById("total-grass").innerText = "Total Grass Touched: " + totalGrassTouched;
                localStorage.setItem("totalGrassTouched", totalGrassTouched)
                console.log(`${totalGrassTouched}`);
                }
                //achievment if statements
                if (grassTouched === 1) {
                    showAchievement("How did it feel?", "You touched grass for the first time");
                    }
                if (grassTouched === 10) {
                    showAchievement("A step in the right direction", "You touched grass ten times");
                    }
                if (grassTouched > 67 && !ach67) {
                    showAchievement("Is this meme dead yet?", "SIXXXX SEVENNNNNNN");
                    ach67 = true
                    localStorage.setItem('ach67', 'true');
                    }
                if (grassTouched > 100 && !ach100) {
                    showAchievement("A lasting descision?", "You touched grass 100 times");
                    ach100 = true
                    localStorage.setItem('ach100', 'true');
                    }
                if (grassTouched > 1000 && !ach1000) {
                    showAchievement("Green Thumb Maniac:     Touched Grass 1000 Times", "Rumour has it that grass was invented by fortnite");
                    ach1000 = true
                    localStorage.setItem('ach1000', 'true');
                    }
                    if (grassTouched > 10000 && !ach10000) {
                    showAchievement("Commited", "You touched grass 10,000 times, that's more than 99% of Steam users");
                    ach10000 = true
                    localStorage.setItem('ach10000', 'true');
                    }
                if (grassTouched > 100000 && ach100000 == false ) {
                    console.log("ach 10,000 triggered, ach10000 is false")
                    showAchievement("Outdoors Master", "You touched grass 100,000 times");
                    ach100000 = true
                    localStorage.setItem('ach100,000', 'true');
                    }
                if (ach100000 == true) {
                    console.log("ach10000 is true")
                    }
function buyShears() {
    //increase cost if player is getting too op
    if(grassTouched >= shearsCost && clickPower > 3) {
        shearsCost += clickPower;
        localStorage.setItem('shearsCost', shearsCost)
        const shearsText = document.getElementById('shearsTxt');
        shearsText.innerText = `Cost: ${shearsCost}`
        }
    if (grassTouched >= shearsCost) {
        grassTouched -= shearsCost; // Spend the grass
        clickPower += 1;      // Increase click power
        localStorage.setItem("clickingPower", clickPower)
        
        // Update display
        document.getElementById('counter').innerText = "Grass Touched: " + grassTouched;
        showAchievement("Bought Garden Shears", "You'll now get 1 more grass per touch");
        clickAudio.play(); 
        document.getElementById('per-click').innerText = "Per Click: " + clickPower;
        document.getElementById('per-second').innerText = "Per Second: " + income;  
    } else {
        showAchievement("Not enough grass!", "Touch some more blud");
    }
}
function buyScythe() {
    //increase cost if player is getting too op
    if(grassTouched >= scytheCost && clickPower > 10) {
        scytheCost += clickPower;
        localStorage.setItem('scytheCost', scytheCost)
        const scytheText = document.getElementById('scytheTxt');
        scytheText.innerText = `Cost: ${scytheCost}`
        }
    if (grassTouched >= scytheCost) {
        grassTouched -= scytheCost; // Spend the grass
        clickPower += 5;      // Increase click power
        localStorage.setItem("clickingPower", clickPower)
        
        // Update display
        document.getElementById('counter').innerText = "Grass Touched: " + grassTouched;
        showAchievement("Bought Scythe", "You'll now get 5 more grass per touch");
        clickAudio.play(); 
        document.getElementById('per-click').innerText = "Per Click: " + clickPower;
        document.getElementById('per-second').innerText = "Per Second: " + income;
    } else {
        showAchievement("Not enough grass!", "Touch some more blud");
    }
}
function buyPushmower() {
    if(grassTouched >= pushMowerCost && clickPower > 45) {
        pushMowerCost += clickPower;
        localStorage.setItem('pushMowerCost', pushMowerCost)
        const pushMowerText = document.getElementById('pushMowerTxt');
        pushMowerText.innerText = `Cost: ${pushMowerCost}`
        }
    if (grassTouched >= pushMowerCost) {
        grassTouched -= pushMowerCost; // Spend the grass
        clickPower += 10;      // Increase click power
        localStorage.setItem("clickingPower", clickPower)
        
        // Update display
        document.getElementById('counter').innerText = "Grass Touched: " + grassTouched;
        document.getElementById('per-click').innerText = "Per Click: " + clickPower;
        document.getElementById('per-second').innerText = "Per Second: " + income;
        showAchievement("Bought Push Mower", "You'll now get 50 more grass per touch");
        clickAudio.play(); 
    } else {
        showAchievement("Not enough grass!", "Touch some more blud");
    }
}
function buyRabbit() {
    if(grassTouched >= rabbitCost && rabbits > 3) {
        rabbitCost += rabbits * 5;
        //log the new phase 
        console.log("increased rabbit cost due to having more than 3 rabbits")
        //log the new cost and rabbit count       
        console.log(`New rabbit cost: ${rabbitCost}, Rabbits owned: ${rabbits}`);
        //save to memeory
        localStorage.setItem('rabbitCost', rabbitCost)
        //update the cost text
        const rabbitText = document.getElementById('rabbitTxt');
        rabbitText.innerText = `Cost: ${rabbitCost}`
        }
    if(grassTouched >= rabbitCost && rabbits > 50) {
        rabbitCost += rabbits * 50;
        localStorage.setItem('rabbitCost', rabbitCost)
        const rabbitText = document.getElementById('rabbitTxt');
        rabbitText.innerText = `Cost: ${rabbitCost}`
        }
    if (grassTouched >= rabbitCost) {
        grassTouched -= rabbitCost;
        rabbits++; 
        // Save the new rabbit count
        localStorage.setItem("rabbits", rabbits);
        
        // Update display
        document.getElementById('counter').innerText = "Grass Touched: " + grassTouched;
        showAchievement("Hired help", "You bought a rabbit! It touches 1 grass per second.");
        clickAudio.play(); 
        document.getElementById("per-second").innerText = "Per Second: " + income;
        document.getElementById('per-click').innerText = "Per Click: " + clickPower;
    } else {
                showAchievement("Not enough grass!", "Touch some more blud");
    }
}
function buySheep() {
    if(grassTouched >= sheepCost && sheep > 3) {
        sheepCost += sheep * 5;
        //log the new phase 
        console.log("increased sheep cost due to having more than 3 sheep")
        //log the new cost and sheep count       
        console.log(`New sheep cost: ${sheepCost}, Sheep owned: ${sheep}`);
        //save to memeory
        localStorage.setItem('sheepCost', sheepCost)
        //update the cost text
        const sheepText = document.getElementById('sheepTxt');
        sheepText.innerText = `Cost: ${sheepCost}`
        }
    if (grassTouched >= sheepCost) {
        grassTouched -= sheepCost;
        sheep++; 
        
        // Save the new sheep count
        localStorage.setItem("sheep", sheep);
        
        // Update display
        document.getElementById('counter').innerText = "Grass Touched: " + grassTouched;
        showAchievement("Don't pull the wool over my eyes", "You bought a sheep! It touches 5 grass per second.");
        clickAudio.play(); 
        document.getElementById("per-second").innerText = "Per Second: " + income;
        document.getElementById('per-click').innerText = "Per Click: " + clickPower;
    } else {
                showAchievement("Not enough grass!", "Touch some more blud");
    }
}
function buyPetrolMower() {
    if(grassTouched >= petrolMowerCost && petrolMowers > 3) {
        petrolMowerCost += petrolMowers * 50;
        //log the new phase 
        console.log("increased petrol mower cost due to having more than 3 petrol mowers")
        //log the new cost and petrol mower count       
        console.log(`New petrol mower cost: ${petrolMowerCost}, Petrol mowers owned: ${petrolMowers}`);
        //save to memeory
        localStorage.setItem('petrolMowerCost', petrolMowerCost)
        //update the cost text
        const petrolMowerText = document.getElementById('petrolMowerTxt');
        petrolMowerText.innerText = `Cost: ${petrolMowerCost}`
        }
    if (grassTouched >= petrolMowerCost) {
        grassTouched -= petrolMowerCost;
        petrolMowers++; 
        localStorage.setItem("petrolMowers", petrolMowers);
        document.getElementById('counter').innerText = "Grass Touched: " + grassTouched;
        showAchievement("You automated the one thing that shouldn't be automated", "You bought a petrol mower! It touches 50 grass per second.");
        clickAudio.play(); 
        document.getElementById("per-second").innerText = "Per Second: " + income;
        document.getElementById('per-click').innerText = "Per Click: " + clickPower;
    } else {
                showAchievement("Not enough grass!", "Touch some more blud");
    }
}
            
function showAchievement(title, desc) {
    const popup = document.getElementById('achievement-popup');
    const titleEl = document.getElementById('achievement-title');
    const descEl = document.getElementById('achievement-desc');

    // Set the text
    titleEl.innerText = title;
    descEl.innerText = desc;

    // Slide it in
    popup.classList.add('show');

    // Slide it back out after 4 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 4000);
}
//commands
    window.setGrass = function(newGrass) {
    grassTouched = parseInt(newGrass);
    console.log(`%c Grass touched manually set to: ${grassTouched}`,);
    localStorage.setItem("score", grassTouched)
};  
    window.setClickPower = function(newClickPower) {
    clickPower = parseInt(newClickPower);
    console.log(`%c Click Power manually set to: ${clickPower}`,);
    localStorage.setItem("clickingPower", clickPower)
};  
//autocliker functionality
    setInterval(function() {
    
    if (income > 0) {
        grassTouched += income;
        totalGrassTouched += income;
        // Update display and save
        document.getElementById('counter').innerText = "Grass Touched: " + grassTouched;
        document.getElementById("per-second").innerText = "Per Second: " + income;
        localStorage.setItem("score", grassTouched);
            document.getElementById("total-grass").innerText = "Total Grass Touched: " + totalGrassTouched;
                localStorage.setItem("totalGrassTouched", totalGrassTouched)
                console.log(`${totalGrassTouched}`);
    }
}, 1000);