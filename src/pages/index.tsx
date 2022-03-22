import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import UserSelector from '../components/user/userSelector';
import ConversationList from '../components/conversations/conversationList';

const Home = () => {
  const profile = useSelector((state: RootState) => state.user.profile);

  return (
    <>
      {profile === null ? <UserSelector /> : <ConversationList user={profile} />}
    </>
  )
};

export default Home