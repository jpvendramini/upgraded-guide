import moment from 'moment-timezone';

export const formatDate = (date: string, pattern: string): string => {
    moment.locale('pt-br');
    return moment.tz(date, pattern, "America/Sao_Paulo").subtract(3, 'h').format('DD/MM HH:mm');
};