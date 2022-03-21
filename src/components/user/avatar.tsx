import { Image } from "semantic-ui-react";

interface IAvatarProps {
    userId: number;
}

const Avatar = ({ userId }: IAvatarProps) => {
    return <Image avatar size="tiny" src={`${process.env.PUBLIC_URL}/avatar/large/${userId}.jpg`} />
}

export default Avatar;