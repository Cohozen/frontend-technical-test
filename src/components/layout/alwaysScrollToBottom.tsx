import { useEffect, useRef } from 'react';

export const AlwaysScrollToBottom = () => {
	const elementRef = useRef(null);
	useEffect(() => elementRef.current.scrollIntoView({ behavior: 'smooth' }));
	return <div ref={elementRef} />;
};
