import pino from 'pino';
import dayjs from 'dayjs';

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            ignore: 'pid,hostname',
            translateTime: 'dd/mm/yyyy HH:MM:ss',
        },
    },
});

export default logger;
