import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { Meetup } from '../types/meetups';

dayjs.extend(utc);
dayjs.extend(timezone);

function convertDate(meetup: Meetup): Meetup;
function convertDate(meetup: Meetup[]): Meetup[];
function convertDate(meetup: Meetup | Meetup[]): Meetup | Meetup[] {
    let result = meetup;
    if (Array.isArray(result)) {
        return result?.map((item) => ({
            ...item,
            startTime: dayjs(item?.startTime)
                .tz('Europe/Minsk')
                .format('DD.MM.YYYY hh:mm'),
            endTime: dayjs(item?.endTime)
                .tz('Europe/Minsk')
                .format('DD.MM.YYYY hh:mm'),
        }));
    }

    result = {
        ...result,
        startTime: dayjs(result?.startTime)
            .tz('Europe/Minsk')
            .format('DD.MM.YYYY hh:mm'),
        endTime: dayjs(result?.endTime)
            .tz('Europe/Minsk')
            .format('DD.MM.YYYY hh:mm'),
    };

    return result;
}

export default convertDate;
