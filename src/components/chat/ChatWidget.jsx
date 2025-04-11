import { useState, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.userid;
  const username = storedUser?.name;

  const toggleChat = () => setIsOpen(!isOpen);

  const fetchMessages = async () => {
    if (!userId) return;
    try {
      const res = await fetch(`http://localhost:3001/api/admin-chat/${userId}`);
      const data = await res.json();
      setChat(
        data.map((msg) => ({
          sender: msg.sender,
          text: msg.message,
        }))
      );
    } catch (error) {
      console.error("❌ Failed to load messages:", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (message.trim() && userId) {
      const newMessage = {
        user_id: userId,
        sender: "user",
        message,
        username, // ✅ Include username
      };

      setChat((prev) => [...prev, { sender: "user", text: message }]);
      setMessage("");

      await fetch("http://localhost:3001/api/admin-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });
    }
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Chat with Admin</span>
            <button onClick={toggleChat}>×</button>
          </div>
          <div className="chat-body">
            {chat.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button className="chat-toggle" onClick={toggleChat}>
          💬
        </button>
      )}
    </div>
  );
}
