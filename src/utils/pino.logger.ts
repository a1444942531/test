import pino from "pino";

export const pinoLoggerOptions: pino.LoggerOptions = {
    transport: {
        targets: [{
            target: "pino-roll",
            level: 'info',
            options: {
                file: `logs/log/app.log`,
                frequency: 'daily',
                mkdir: true,
                size: '10m',
                dateFormat: 'yyyy-MM-dd',
                nameFormat: 'app-<DATE>.log'
            }
        }, {
            target: 'pino-roll',
            level: 'warn',
            options: {
                file: `logs/warn/warn.log`,
                frequency: 'daily',
                mkdir: true,
                size: '10m',
                dateFormat: 'yyyy-MM-dd',
                nameFormat: 'warn-<DATE>.log'
            }
        }, {
            target: 'pino-roll',
            level: 'error',
            options: {
                file: `logs/error/error.log`,
                frequency: 'daily',
                mkdir: true,
                size: '10m',
                dateFormat: 'yyyy-MM-dd',
                nameFormat: 'error-<DATE>.log'
            }
        },
        ...(process.env.NODE_ENV !== 'production' ? [{
            target: 'pino-pretty',
            level: 'debug',
            options: {
                colorize: true,
                translateTime: 'HH:MM:ss'
            }
        }] : [])
        ]
    }
}
