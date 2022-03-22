import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import UserSelector from '../components/user/userSelector';
import ConversationsList from '../components/conversations/conversationsList';

const Home = () => {
  const profile = useSelector((state: RootState) => state.user.profile);

  return (
    <>
      {profile === null ? <UserSelector /> : <ConversationsList user={profile} />}
    </>
  )
};

export default Home