import microtime from 'microtime';
import moment from 'moment';
import winston from 'winston';
const Logger = winston.Logger;
const Console = winston.transports.Console;
import chalk from 'chalk';

export default class Euler {
    startTime;
    endTime;
    totalTime;

    constructor() {
        this.solution = undefined;

        const name = this.constructor.name;

        this.logger = new Logger({
            transports: [
                new Console({
                    /**
                     * @returns {String}
                     */
                    timestamp() {
                        return moment(Date.now()).format('MM.DD.YY H:mm:ss');
                    },
                    /**
                     * @param {Object} opts
                     * @param {Function} opts.timestamp
                     * @param {String} opts.level
                     * @param {String} [opts.message]
                     * @param {*} [opts.meta]
                     */
                    formatter(opts) {
                        // Return string will be passed to logger.
                        const time = chalk.blue(opts.timestamp());
                        const level = opts.level.toUpperCase();
                        const coloredLevel =
                            level === 'WARN' ? chalk.yellow('WARN') :
                            level === 'ERROR' ? chalk.red('ERROR') :
                            level;
                        const message = opts.message !== undefined ? opts.message : '';
                        const meta = opts.meta && Object.keys(opts.meta).length ? `\n\t${JSON.stringify(opts.meta)}` : '';
                        return `[${chalk.green(name)}][${time}][${coloredLevel}] ${message}${meta}`;
                    }
                })
            ]
        });
    }

    start() {
        this.startTime = microtime.now();
    }

    end() {
        this.endTime = microtime.now();
        this.totalTime = this.endTime - this.startTime;
    }

    error(...args) {
        this.logger.error(...args);
    }
    warn(...args) {
        this.logger.warn(...args);
    }
    info(...args) {
        this.logger.info(...args);
    }
    verbose(...args) {
        this.logger.verbose(...args);
    }
    debug(...args) {
        this.logger.debug(...args);
    }
    silly(...args) {
        this.logger.silly(...args);
    }
    log(...args) {
        this.logger.log(...args);
    }
}