import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminChatPanel() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  // Fetch all messages once to extract unique users
  useEffect(() => {
    axios.get('http://localhost:3001/api/admin-chat')
      .then(res => {
        const allMessages = res.data;
        const uniqueUsers = Array.from(new Set(allMessages.map(m => m.user_id)));
        setUsers(uniqueUsers);
      })
      .catch(err => console.error('Failed to load chat users:', err));
  }, []);

  // Fetch messages for selected user
  useEffect(() => {
    if (!selectedUser) return;
    axios.get(`http://localhost:3001/api/admin-chat/${selectedUser}`)
      .then(res => setMessages(res.data))
      .catch(err => console.error('Failed to fetch messages:', err));
  }, [selectedUser]);

  const sendMessage = async () => {
    if (!messageInput.trim() || !selectedUser) return;

    try {
      await axios.post('http://localhost:3001/api/admin-chat', {
        user_id: selectedUser,
        sender: 'admin',
        message: messageInput,
      });
      setMessageInput('');
      const res = await axios.get(`http://localhost:3001/api/admin-chat/${selectedUser}`);
      setMessages(res.data);
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  return (
    <div style={{ display: 'flex', height: '500px' }}>
      <div style={{ width: '400px', borderRight: '1px solid #ddd', padding: '1rem' }}>
        <h4 className='mb1'>Users</h4>
        <ul>
          {users.map(uid => (
            <li
              key={uid}
              style={{
                backgroundColor: '#1C1F35',
                color: '#fff',
                borderRadius: '5px',
                width: '350px',
                padding: '8px',
                cursor: 'pointer',
                marginBottom: '5px',
                background: selectedUser === uid ? '#333' : 'transparent'
              }}
              onClick={() => setSelectedUser(uid)}
            >
              {uid}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ padding: '1rem', }}>
        <div style={{ height: '400px', width: "600px", borderRadius: "10px", overflowY: 'auto', border: '1px solid #ccc', padding: '1rem' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ textAlign: msg.sender === 'admin' ? 'right' : 'left' }}>
              <b>{msg.sender}</b>: {msg.message}
              <br />
              <small>{new Date(msg.created_at).toLocaleString('uz-UZ')}</small>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1rem' }}>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type your message"
            style={{ width: '80%', padding: '0.7rem', borderRadius: "5px", border: '1px solid #ccc' }}
          />
          <button onClick={sendMessage} style={{ padding: '0.7rem 1rem', marginLeft: '0.5rem', borderRadius: '10px', border: '1px solid #ccc' }}>Send</button>
        </div>
      </div>
    </div>
  );
}
