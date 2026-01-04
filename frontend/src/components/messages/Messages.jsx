import { useEffect, useRef, useState } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const [num, setNum] = useState(true);

  if (messages.length === 0) {
    setNum(false);
  }
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && !num && (
        <p className="text-center text-black">
          -Send a message to start the conversation
        </p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
    </div>
  );
};
export default Messages;
