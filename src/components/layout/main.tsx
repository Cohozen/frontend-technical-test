import { useSelector } from "react-redux";
import { Segment } from "semantic-ui-react";
import { RootState } from "../../redux/rootReducer";
import ConversationList from "../conversations/conversationList";
import UserSelector from "../user/userSelector";
import Menu from "./menu";

const Main = () => {
    const profile = useSelector((state: RootState) => state.user.profile);
    const loading = useSelector((state: RootState) => state.application.loading);

    return (
        <>
            <Menu />
            <Segment attached padded loading={loading}>
                {profile === null ? <UserSelector /> : <ConversationList user={profile} />}
            </Segment>
        </>
    )
}

export default Main;