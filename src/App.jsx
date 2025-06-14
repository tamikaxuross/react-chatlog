import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const [chatMessages, setChatMessages] = useState(messages);

  const toggleLike = (id) => {
    const updatedMessages = chatMessages.map((message) => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      }
      return message;
    });
    setChatMessages(updatedMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} onToggleLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;
