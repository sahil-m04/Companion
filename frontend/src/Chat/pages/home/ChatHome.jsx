import "./chathome.scss";
import MessageContainer from "../../Components/messages/MessageContainer";
import Sidebar from "../../Components/sidebar/Sidebar";

const ChatHome = () => {
  return (
    <div className="home-containers">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default ChatHome;
