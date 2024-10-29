
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations =[]} = useGetConversations();

  console.log("Conversations length in component: ", conversations.length);
  console.log("Conversations data in component: ", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.length > 0 ? (
        conversations.map((conversation, index) => (
          <Conversation
            key={conversation._id} // Ensure conversation exists before accessing _id
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={index === conversations.length - 1}
          />
        ))
      ) : (
        !loading && <span>No conversations available</span> // Display message when conversations array is empty
      )}

      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  );
};

export default Conversations;
