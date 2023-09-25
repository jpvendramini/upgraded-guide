import moment from 'moment-timezone';

export const formatDate = (date: string, pattern: string): string => {
    moment.locale('pt-br');
    return moment.tz(date, pattern, "America/Sao_Paulo").format('DD/MM HH:mm');
};