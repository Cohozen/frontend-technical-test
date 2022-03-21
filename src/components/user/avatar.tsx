import { Image } from "semantic-ui-react";

interface IAvatarProps {
    userId: number;
}

const Avatar = ({ userId }: IAvatarProps) => {
    return <Image avatar src={`${process.env.PUBLIC_URL}/avatar/small/${userId}.jpg`} />
}

export default Avatar;