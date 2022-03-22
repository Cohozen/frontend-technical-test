import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useDateTimeFromTimestamp = (timestamp: number) => {
	const { locale } = useRouter();
	const [formatedValue, setFormatedValue] = useState((timestamp && timestamp.toString()) || '');

	useEffect(() => {
		if (timestamp) {
			const formated = new Intl.DateTimeFormat(locale, {
				day: '2-digit',
				month: 'long',
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
			}).format(timestamp * 1000);
			setFormatedValue(formated);
		}
	}, [timestamp, locale]);

	return formatedValue;
};
