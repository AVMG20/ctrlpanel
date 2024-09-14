import { parseISO, format } from 'date-fns';

export default function Date ({date}: {date: Date}) {
    return (
        <time dateTime={date.toString()}>{format(date, 'dd-MM-yyyy')}</time>
    )
}