import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();

  let num = true;
  if (messages.length < 1) {
    num = false;
  }
  useListenMessages();
  const lastMessageRef = useRef();

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && !num && (
        <p className="text-center text-black">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
