# Subjugate
This is a website from the fictional Blind Games Studio, a game company that is making a fictional RTS game called "Subjugate". The website showcases the incomplete game, by showing the units, buildings, and support powers of one of the game's factions.

## Purpose:
Subjugate is practice for the creation of video game websites to show

## Technologies:
This game utilized the front end languages of HTML, CSS, and JavaScript. It uses a variety of image and sound assets imported from other sources to create the polished aesthetic experience of the game. After forming the divs in HTML, and its organization done in CSS, the JavaScript DOM system was primarily utilized for the user interaction in the game.

## Development Approach:
The code of the game is formed through a variety of functions that perform specific tasks critical for the game operation. All these functions call to each other and there is one starting function the starts game operation. I made it so that the game's many functions become operable only after certain mouse clicks occur on specific blocks. This way the game functions from a button click to button click methodology.

## Installation:
Simply have all files in this repository be together and open it to a live server, if not go here: https://rolandyambao.github.io/Oversight/

## Unsolved Problems:
Not really a problem, but one potential point of improvement is finding ways to make the aesthetics more dynamic, ex. an explosive animation plays upon clicking on a block.

## Functions and Code Snippets:
1. Sound Effect Functions - Various functions that simply play a certain sound effect when a certain event occurs or a button is clicked.
~~~js
// Functions for Sound Effects
function machineVoice1Play() {
    machineVoice1.play();
    machineVoice1.volume = 0.5;
}
function machineVoice2Play() {
    machineVoice2.play();
    machineVoice2.volume = 0.5;
}
function machineVoice3Play() {
    machineVoice3.play();
    machineVoice3.volume = 0.5;
}
function machineVoice4Play() {
    machineVoice4.play();
    machineVoice4.volume = 0.5;
}
function machineVoice5Play() {
    machineVoice5.play();
    machineVoice5.volume = 0.5;
}
function openFire() {
    explosion.play();
    explosion.volume = 0.5;
}
~~~

2. typeWriter Function - This function creates the effect of text appearing as if it was being typed by a user.
~~~js
// Function for the interesting Typing Effect for the Hints
function typeWriter(phrase) {
    for (let i = 0; i < phrase.length; i++) {
        setTimeout(function () {
            intelligence.innerHTML += phrase.charAt(i)
        }, 25 * i);
    }
}
~~~

3. stopTyping Function - This function stops all typing when a new transition fo text is about to appear to prevent them from mixing together. It clears all timeouts in the game.
~~~js
// Function to stop all typing, I found this interesting "Hack" in Stack Overflow
function stopTyping() {
    let allTimeouts = setTimeout(" ");
    for (let i = 0; i < allTimeouts; i++) {
        clearTimeout(i);
    }
    intelligence.innerText = "";
}
~~~

4. nextExplosion Function - This function stops the explosion sound effect and it's placed before a new explosion sound effect is played to keep each click creating a consistent explosion.
~~~js
// Function to stop explosion sound to begin next one
function nextExplosion() {
    explosion.pause();
    explosion.currentTime = 0;
}
~~~

5. failedAttack Function - This function increases the turn number everytime a button is clicked and calls in the failedMission function to see if you lost.
~~~js
// Function for the failure of one Attack
function failedAttack() {
    turns++;
    failedMission();
}
~~~

6. Highlight and Darken Functions - Many functions that highlight specific blocks as areas the troublemaker is potentially located in, the darken function is placed on areas that where previously highlighted in turns 4 and 5.
~~~js
// Highlight the Western areas if the troublemaker is there
function highlightWest() {
    hidingSpot[0].style.borderColor = "red";
    hidingSpot[0].style.boxShadow = "0 0 10px red";
    hidingSpot[1].style.borderColor = "red";
    hidingSpot[1].style.boxShadow = "0 0 10px red";
    hidingSpot[5].style.borderColor = "red";
    hidingSpot[5].style.boxShadow = "0 0 10px red";
    hidingSpot[10].style.borderColor = "red";
    hidingSpot[10].style.boxShadow = "0 0 10px red";
    hidingSpot[11].style.borderColor = "red";
    hidingSpot[11].style.boxShadow = "0 0 10px red";
}

// Darken the Western areas if the troublemaker is not there
function darkenWest() {
    hidingSpot[0].style.borderColor = "indigo";
    hidingSpot[0].style.boxShadow = "0 0 0 indigo";
    hidingSpot[1].style.borderColor = "indigo";
    hidingSpot[1].style.boxShadow = "0 0 0 indigo";
    hidingSpot[5].style.borderColor = "indigo";
    hidingSpot[5].style.boxShadow = "0 0 0 indigo";
    hidingSpot[10].style.borderColor = "indigo";
    hidingSpot[10].style.boxShadow = "0 0 0 indigo";
    hidingSpot[11].style.borderColor = "indigo";
    hidingSpot[11].style.boxShadow = "0 0 0 indigo";
}
~~~

7. intel Function - This function analyzes the location of the troublemaker and displays the hints to the player, depending on the turn count.
~~~js
// Function for the given hints to the player
function intel() {
    if (turns == 2) {
        intelligence.style.color = "orange";
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 6 || computerChoice == 11 || computerChoice == 12) {
            if (guess == 1) {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightEast();
                typeWriter(notCenter);
            } else if (guess == 2) {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightEast();
                typeWriter(notCenter);

            } else {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightCenter();
                typeWriter(notEastern);
            }
        }
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 10 || computerChoice == 14 || computerChoice == 15) {
            if (guess == 1) {
                stopTyping();
                machineVoice2Play();
                highlightCenter();
                highlightEast();
                typeWriter(notWestern);
            } else if (guess == 2) {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightEast();
                typeWriter(notCenter);
            } else {
                stopTyping();
                machineVoice2Play();
                highlightCenter();
                highlightEast();
                typeWriter(notWestern);
            }
        }
        if (computerChoice == 3 || computerChoice == 7 || computerChoice == 8 || computerChoice == 9 || computerChoice == 13) {
            if (guess == 1) {
                stopTyping();
                machineVoice2Play();
                highlightCenter();
                highlightEast();
                typeWriter(notWestern);
            } else if (guess == 2) {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightCenter();
                typeWriter(notEastern);
            } else {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightCenter();
                typeWriter(notEastern);
            }
        }
    }
    if (turns == 4) {
        intelligence.style.color = "red";
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 6 || computerChoice == 11 || computerChoice == 12) {
            stopTyping();
            machineVoice3Play();
            highlightWest();
            darkenCenter();
            darkenEast();
            typeWriter(lastWestern);
        }
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 10 || computerChoice == 14 || computerChoice == 15) {
            stopTyping();
            machineVoice3Play();
            highlightEast();
            darkenWest();
            darkenCenter();
            typeWriter(lastEastern);
        }
        if (computerChoice == 3 || computerChoice == 7 || computerChoice == 8 || computerChoice == 9 || computerChoice == 13) {
            stopTyping();
            machineVoice3Play();
            highlightCenter();
            darkenWest();
            darkenEast();
            typeWriter(lastCenter);
        }
    }
}
~~~

8. failedMission Function - This function displays the aesthetic presentation once the player fails to destroy the troublemaker after 6 turns.
~~~js
// Function for the Failure of the player
function failedMission() {
    if (turns == 6) {
        stopTyping();
        music.setAttribute("src", "defeatMusic.mp3");
        music.volume = 0.5;
        document.getElementById("title").innerHTML = "Oversight".strike();
        document.getElementById("tower").innerHTML = "&#9760;";
        backgroundBanner.style.backgroundImage = "url(fire.gif)";
        backgroundBanner.style.backgroundSize = "100% 100%";
        camera1.style.display = "none";
        camera2.style.display = "none";
        highlightWest();
        highlightCenter();
        highlightEast();
        machineVoice4Play();
        typeWriter(defeat);
        for (let i = 0; i < 15; i++) {
            hidingSpot[i].addEventListener("click", function () {
                location.reload();
            })
        }
    }
}
~~~

9. successfulMission Function - This function displays the aesthetic presentation once the player destroys the troublemaker in time.
~~~js
// Function for the Success of the playerSterling Eide
function successfulMission() {
    stopTyping();
    openFire();
    music.setAttribute("src", "theInnerPartySpeaker.mp3");
    music.volume = 0.1;
    machineVoice5Play();
    typeWriter(victory);
    intelligence.style.color = "white";
    darkenWest();
    darkenCenter();
    darkenEast();
    for (let i = 0; i < 15; i++) {
        hidingSpot[i].addEventListener("click", function () {
            location.reload();
        })
    }
}
~~~

10. watchTowerSearch Function - This function initiates it all and has many eventlsiteners for clicks.
~~~js
// Function for the initiation of the game
function watchtowerSearch() {
    machineVoice1Play();
    typeWriter(scour);

    intelligence.addEventListener("click", function () {
        location.reload();
    })

    hidingSpot[0].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[0].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[0].style.backgroundSize = "100% 100%";
        if (computerChoice == 1) {
            hidingSpot[0].style.backgroundImage = "url(bullseye.png)";
            hidingSpot[0].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    // ....And many more
~~~

## Screenshot:
![Alt text](oversightScreenshot.png "Oversight Screenshot")

## Game Loop:
1. There is one player versus a computer, the player is the watchtower and the computer is the troublemaker.
2. The computer will randomly select a number between 1 to 15, each number represents a tile where the troublemaker is hiding in.
3. The Watchtower is given orders to fire three shots at any space in hope sof hitting the troublemaker.
4. After three shots, intel is given to the Watchtower telling what directional area the troublemaker is not located in.
6. After two shots, the Watchtower has one shot left, with one piece of intel stating which directional region the troublemaker is in.
7. If the Watchtower hits the troublemaker, it wins, if it misses, it loses.

## Reflections:
I was surprised that so much time can be spent on making sure specific tidbits and aesthetic occurances are properly utilized. For example, the typeWriter function, if multiple sentences are typing at the same time, this can have multiple garbled text morphed together if the player moves through the game too quickly. I had to create a stopTyping function to ensure that the text are not displaying incorrectly. The sound effects as well, stopExplosion was created so that a new explosion sound is played once a block is clicked again, previously if you click another block before an explosion sound finishes, it won't play another sound.

## Credits:
1. Command & Conquer 3: Tiberium Wars (2007) - Background Music (Gathering Intel) and Defeat Music (Mourning Hour)
2. 1984 (1984) remixed by Willard Networks - Victory Music (The Inner Party Speaker) remix name: Anthem of City Twenty-Four
3. Warhammer 40,000: Mechanicus (2020) - Machine Voices
4. SFX AND STUFF from YouTube - Cannon Sound Effect
5. Cisco Eng-emojis from Giphy - Security Camera gif
6. WallpaperAccess - Ruined City Background
7. Marco Di Lauro on Getty Images - Destroyed Building Image
8. Acegif - Fire Background on Defeat Screen
9. Adobe Stock - Red Crosshair Image

## Licensing:
1. All credited content is under the Fair Use Law.
2. Code written by me is licensed under a CC-BY-NC-SA 4.0 license.
