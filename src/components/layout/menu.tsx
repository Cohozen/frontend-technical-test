import { useDispatch, useSelector } from "react-redux";
import { Icon, Menu as SemanticMenu } from "semantic-ui-react";
import { RootState } from "../../redux/rootReducer";
import { RootActions } from "../../redux/rootActions";

const Menu = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state: RootState) => state.user.profile);

    const goHome = () => {
        dispatch(RootActions.userActions.resetProfile());
    }

    return (
        <SemanticMenu attached='top' icon='labeled'>
            <SemanticMenu.Item
                onClick={goHome}
                active={profile === null}
            >
                <Icon name='home' />
                Home
            </SemanticMenu.Item>
        </SemanticMenu>
    )
}

export default Menu;