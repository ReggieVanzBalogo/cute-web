
const message = document.getElementById("message");
const character = document.getElementById("character");
const hugButton = document.getElementById("hugButton");
const cuteButton = document.getElementById("cuteButton");

hugButton.addEventListener("click", function() {
    message.textContent = "Sending you the biggest virtual hug! 🧸💕";
    character.textContent = "(づ๑•ᴗ•๑)づ♡";
});

cuteButton.addEventListener("click", function() {
    const messages = [
        "You are someone's favorite notification! 💌",
        "Remember to drink water, cutie! 💧",
        "You make the world a little brighter! ☀️",
        "Sending you a pocket full of sunshine! 🌼",
        "You're doing better than you think! 🩷",
        "Today is a good day to be kind to yourself! 🌷",
        "Here is a tiny strawberry just for you! 🍓"
    ];

    const characters = [
        "૮ ˶ᵔ ᵕ ᵔ˶ ა",
        "૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა",
        "(｡♥‿♥｡)",
        "ʕ•ᴥ•ʔ",
        "૮꒰ ˶• ༝ •˶꒱ა"
    ];

    const randomMessage =
        Math.floor(Math.random() * messages.length);

    const randomCharacter =
        Math.floor(Math.random() * characters.length);

    message.textContent = messages[randomMessage];
    character.textContent = characters[randomCharacter];
});
