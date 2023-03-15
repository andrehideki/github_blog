import { differenceInDays, differenceInHours, differenceInMinutes } from "date-fns";

export function diffInDays(dateLeft: Date, dateRight: Date): number {
    return differenceInDays(dateLeft, dateRight);
}

export function diffInHours(dateLeft: Date, dateRight: Date): number {
    return differenceInHours(dateLeft, dateRight);
}

export function diffInMinutes(dateLeft: Date, dateRight: Date): number {
    return differenceInMinutes(dateLeft, dateRight);
}

export function diifFormatedPeriod(dateLeft: Date, dateRight: Date) {
    const differenceInDays = diffInDays(dateLeft, dateRight);
    const differenceInHours = diffInHours(dateLeft, dateRight);
    const differenceInMinutes = diffInMinutes(dateLeft, dateRight);

    const createdTimeFormated = differenceInDays > 0? `Há ${differenceInDays} dia${differenceInDays > 1? 's' : ''}` :
        differenceInHours > 0? `Há ${differenceInHours} hora${differenceInHours > 1? 's' : ''}` :
        `Há ${differenceInMinutes} minuto${differenceInMinutes > 1?'s' : ''}`;
        
    return createdTimeFormated; 
}