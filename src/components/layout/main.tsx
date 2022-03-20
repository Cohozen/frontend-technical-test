import { useSelector } from "react-redux";
import { Segment } from "semantic-ui-react";
import { RootState } from "../../redux/modules/rootReducer";
import UserSelector from "../user/userSelector";

const Main = () => {
    const profile = useSelector((state: RootState) => state.user.profile);

    return (
        <>
            <Segment basic padded textAlign="center">
                {profile === null ? <UserSelector /> : `Bonjour ${profile.nickname}`}
            </Segment>
        </>
    )
}

export default Main;