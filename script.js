
function generateMessage() {

    var messages = [
        `Love is in the air!`,   
        `Love and be loved!`,
        `Wishing you love and happiness.`,
        `Success is on the horizon!`,
        `Pursue your dreams in your career.`,
        `Wishing you a career of success.`,
        `Cherish your time with family.`,
        `Family is everything.`,
        `Sending love to you and your family.`
    ]

    var randomMessage = messages[Math.floor(Math.random() * messages.length)];

    document.getElementById('messageDisplay').innerHTML = `<p>${randomMessage}</p>`;
} 


