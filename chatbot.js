document.addEventListener('DOMContentLoaded', function () {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chatContainer';
    chatContainer.style.position = 'fixed';
    chatContainer.style.bottom = '0';
    chatContainer.style.right = '0';
    chatContainer.style.width = '300px';
    chatContainer.style.height = '400px';
    chatContainer.style.border = '1px solid #ccc';
    chatContainer.style.borderRadius = '8px';
    chatContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    chatContainer.style.backgroundColor = '#fff';
    chatContainer.style.overflow = 'hidden';
    chatContainer.style.zIndex = '9999';

    chatContainer.innerHTML = `
        <div id="chatHeader" style="background-color: #007BFF; color: white; padding: 10px; text-align: center;">
            Chatbot
        </div>
        <div id="chatOutput" style="height: calc(100% - 80px); overflow-y: auto; padding: 10px; border-bottom: 1px solid #ddd;">
        </div>
        <input id="chatInput" type="text" style="width: calc(100% - 60px); padding: 10px;" placeholder="Type a message...">
        <button id="sendButton" style="width: 60px; padding: 10px; background-color: #007BFF; color: white; border: none; cursor: pointer;">
            Send
        </button>
    `;
    document.body.appendChild(chatContainer);

    const chatInput = document.getElementById('chatInput');
    const chatOutput = document.getElementById('chatOutput');
    const sendButton = document.getElementById('sendButton');

    function sendMessage(message, callback) {
        fetch('https://your-backend-server-url.com/api/chat', { // Replace with your server URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            callback(data.reply); // Assumes server responds with { reply: "response text" }
        })
        .catch(error => {
            console.error('Error:', error);
            callback('Sorry, something went wrong.');
        });
    }

    sendButton.addEventListener('click', function () {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            chatOutput.innerHTML += `<div class="user-message" style="text-align: right; margin-bottom: 10px;">${userMessage}</div>`;
            chatInput.value = ''; // Clear input

            sendMessage(userMessage, function (botResponse) {
                chatOutput.innerHTML += `<div class="bot-response" style="text-align: left; margin-bottom: 10px; color: #007BFF;">${botResponse}</div>`;
                chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to bottom
            });
        }
    });

    chatInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
