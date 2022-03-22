import { useDispatch, useSelector } from "react-redux";
import { Icon, Menu as SemanticMenu } from "semantic-ui-react";
import { RootState } from "../../redux/rootReducer";
import { RootActions } from "../../redux/rootActions";
import { useRouter } from "next/router";
import Avatar from "../user/avatar";

const Menu = () => {
    const { push, back, route } = useRouter()
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.user.profile);

    const goHome = () => {
        push("/")
        dispatch(RootActions.userActions.resetProfile());
    }

    const goBack = () => {
        if (route !== '/') back();
        else {
            dispatch(RootActions.userActions.resetProfile());
        }
    }

    return (
        <SemanticMenu attached='top' icon='labeled'>
            <SemanticMenu.Item
                onClick={goHome}
                active={currentUser === null}
            >
                <Icon name='home' />
                Home
            </SemanticMenu.Item>
            <SemanticMenu.Item
                onClick={goBack}
                disabled={currentUser === null}
            >
                <Icon name='arrow left' />
                Retour
            </SemanticMenu.Item>
            {currentUser &&
                <SemanticMenu.Item position="right" title={currentUser.nickname}>
                    <Avatar userId={currentUser.id} size="small" />
                </SemanticMenu.Item>
            }
        </SemanticMenu>
    )
}

export default Menu;