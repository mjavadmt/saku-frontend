import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event

const useChat = (userName, messageList) => {
  const [messages, setMessages] = useState(messageList); // Sent and received messages
  const socketRef = useRef();
  const SOCKET_SERVER_URL = `ws://188.121.110.151:8887/chat/mjavad/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYxNDQ5NzYwLCJpYXQiOjE2NTYyNjU3NjAsImp0aSI6IjRlNzNhYTVjMzNkMjRkNGRiOTg3M2E3NTdiYmE2MGZlIiwidXNlcl9pZCI6M30.4PHLLWr3ZBFLpu4IWQsOfXVRuX-fB6590tmlPvhkbg8`;
  useEffect(() => {
    if (!!userName) {
      // Creates a WebSocket connection
      socketRef.current = socketIOClient(SOCKET_SERVER_URL);

      // Listens for incoming messages
      socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
        const incomingMessage = {
          ...message,
          ownedByCurrentUser: message.senderId === socketRef.current.id,
        };
        setMessages((messages) => [...messages, incomingMessage]);
      });

      // Destroys the socket reference
      // when the connection is closed
      return () => {
        socketRef.current.disconnect();
      };
    }
  }, [userName, SOCKET_SERVER_URL]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };
  return { messages, sendMessage };
};

export default useChat;
