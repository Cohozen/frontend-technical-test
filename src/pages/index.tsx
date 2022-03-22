import { useSelector } from 'react-redux';
import ConversationsList from '../components/conversations/conversationsList';
import UserSelector from '../components/user/userSelector';
import { RootState } from '../redux/rootReducer';

const Home = () => {
	const profile = useSelector((state: RootState) => state.user.profile);

	return <>{profile === null ? <UserSelector /> : <ConversationsList user={profile} />}</>;
};

export default Home;
