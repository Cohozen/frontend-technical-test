import { Image } from 'semantic-ui-react';

interface IAvatarProps {
	userId: number;
	size?: 'small' | 'large';
}

const Avatar = ({ userId, size = 'large' }: IAvatarProps) => {
	return (
		<Image
			avatar
			size={(size === 'large' && 'tiny') || 'mini'}
			src={`${process.env.PUBLIC_URL}/avatar/${size}/${userId}.jpg`}
		/>
	);
};

export default Avatar;
