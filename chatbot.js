// chatbot.js
(function() {
    // Create the chatbot container
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = '20px';
    chatbotContainer.style.right = '20px';
    chatbotContainer.style.width = '300px';
    chatbotContainer.style.height = '400px';
    chatbotContainer.style.background = '#2c3e50';
    chatbotContainer.style.borderRadius = '10px';
    chatbotContainer.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
    chatbotContainer.style.color = '#ecf0f1';
    chatbotContainer.style.padding = '15px';
    chatbotContainer.style.display = 'flex';
    chatbotContainer.style.flexDirection = 'column';
    chatbotContainer.style.justifyContent = 'space-between';
    chatbotContainer.style.fontFamily = 'Arial, sans-serif';

    // Chatbot header
    const chatbotHeader = document.createElement('div');
    chatbotHeader.style.textAlign = 'center';
    chatbotHeader.style.fontSize = '18px';
    chatbotHeader.innerText = 'Chatbot 1.0';
    chatbotContainer.appendChild(chatbotHeader);

    // Chat area
    const chatArea = document.createElement('div');
    chatArea.id = 'chat-area';
    chatArea.style.flexGrow = '1';
    chatArea.style.overflowY = 'auto';
    chatArea.style.marginBottom = '10px';
    chatArea.style.border = '1px solid #34495e';
    chatArea.style.padding = '10px';
    chatbotContainer.appendChild(chatArea);

    // Input area
    const inputArea = document.createElement('div');
    inputArea.style.display = 'flex';

    const userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.placeholder = 'Type a message...';
    userInput.style.flexGrow = '1';
    userInput.style.padding = '10px';
    userInput.style.border = '1px solid #34495e';
    userInput.style.borderRadius = '5px';
    userInput.style.marginRight = '10px';
    inputArea.appendChild(userInput);

    const sendButton = document.createElement('button');
    sendButton.innerText = 'Send';
    sendButton.style.padding = '10px 15px';
    sendButton.style.border = 'none';
    sendButton.style.background = '#e67e22';
    sendButton.style.color = '#fff';
    sendButton.style.borderRadius = '5px';
    inputArea.appendChild(sendButton);

    chatbotContainer.appendChild(inputArea);

    // Append chatbot container to body
    document.body.appendChild(chatbotContainer);

    // Add event listener for sending messages
    sendButton.addEventListener('click', function() {
        const message = userInput.value.trim();
        if (message !== '') {
            addMessage('You', message);
            botReply(message);
            userInput.value = '';
        }
    });

    // Function to add user message to chat area
    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.style.marginBottom = '10px';
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatArea.appendChild(messageDiv);
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    // Simple bot reply logic
    function botReply(message) {
        setTimeout(function() {
            let reply = '';
            switch (message.toLowerCase()) {
                case 'hi':
                case 'hello':
                    reply = 'Hello! How can I help you today?';
                    break;
                case 'how are you?':
                    reply = 'I am just a bot, but I am here to assist you!';
                    break;
                default:
                    reply = 'Sorry, I didn\'t understand that. Could you please rephrase?';
            }
            addMessage('Bot', reply);
        }, 1000);
    }
})();
