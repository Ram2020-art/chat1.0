(function() {
    // Create a script element for the chat application's JavaScript
    var script = document.createElement('script');
    script.src = 'https://ram2020-art.github.io/chat1.0/chat.js'; // URL to your chat app's JavaScript file
    script.onload = function() {
        // Ensure that your chat app's JavaScript is loaded before initializing the widget
        initChatWidget();
    };
    
    // Append the script to the body or head
    document.head.appendChild(script);
    
    function initChatWidget() {
        var container = document.getElementById('chat-widget-container');
        
        // Create the chat application HTML structure
        container.innerHTML = `
            <div id="chat-container">
                <div id="chat-header">Chat Widget</div>
                <div id="chat-messages"></div>
                <div id="chat-input">
                    <input type="text" id="message" placeholder="Type a message...">
                    <button id="send-message">Send</button>
                </div>
            </div>
            <style>
                #chat-container {
                    width: 300px;
                    height: 400px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                    background: #fff;
                }
                #chat-header {
                    background: #007bff;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                    font-size: 18px;
                    border-bottom: 1px solid #ccc;
                }
                #chat-messages {
                    flex: 1;
                    padding: 10px;
                    overflow-y: auto;
                }
                #chat-input {
                    display: flex;
                    padding: 10px;
                    border-top: 1px solid #ccc;
                }
                #message {
                    flex: 1;
                    padding: 5px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                }
                #send-message {
                    padding: 5px 10px;
                    margin-left: 5px;
                    border: none;
                    border-radius: 3px;
                    background: #007bff;
                    color: #fff;
                    cursor: pointer;
                }
            </style>
        `;
        
        // Add event listeners for sending messages
        document.getElementById('send-message').addEventListener('click', function() {
            var messageInput = document.getElementById('message');
            var message = messageInput.value;
            if (message) {
                // Add message to chat
                var messagesContainer = document.getElementById('chat-messages');
                var messageDiv = document.createElement('div');
                messageDiv.textContent = message;
                messagesContainer.appendChild(messageDiv);
                messageInput.value = '';
                
                // Optionally, handle sending the message to a server or bot
                // sendMessageToServer(message);
            }
        });
        
        // Optionally, handle receiving messages from a server or bot
        // function receiveMessageFromServer(message) {
        //     var messagesContainer = document.getElementById('chat-messages');
        //     var messageDiv = document.createElement('div');
        //     messageDiv.textContent = message;
        //     messagesContainer.appendChild(messageDiv);
        // }
    }
})();
