import { useDateTimeFromTimestamp } from '../../hooks/useDateTimeFromTimestamp';

interface IDatetimeProps {
	timestamp: number;
}

const Datetime = ({ timestamp }: IDatetimeProps) => {
	const formatedDatetime = useDateTimeFromTimestamp(timestamp);

	return <time>{formatedDatetime}</time>;
};

export default Datetime;
