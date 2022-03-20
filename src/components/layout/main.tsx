import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import { RootState } from "../../redux/modules/rootReducer";
import UserSelector from "../user/userSelector";

const Main = () => {
    const profile = useSelector((state: RootState) => state.user.profile);

    useEffect(() => {
        console.log(profile)
    }, [profile])

    return (
        <>
            {profile === null ? <UserSelector /> : `Bonjour ${profile.nickname}`}
        </>
    )
}

export default Main;