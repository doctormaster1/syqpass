const winston = require("winston");
require("winston-daily-rotate-file");

const path = require("path");
const process = require("process");

const httpOptions = (location) => {
  return { host: "127.0.0.1", port: "5000", path: `/log/${location}` };
};
let logPath;

if (process.platform === "win32") {
  logPath = path.join(process.env.APPDATA, "syqpass");
} else {
  logPath = path.join("/var/log", "syqpass");
}

const {
  AuditFormat,
  ApplicationFormat,
  DebugFormat,
  AccessFormat,
  SecurityFormat,
} = require("./LogFormat");

const AuditLogger = winston.createLogger({
  level: "debug",
  format: AuditFormat,
  transports: [
    new winston.transports.Http(httpOptions("audit")),
    new winston.transports.DailyRotateFile({
      filename: path.join(logPath, `audit/%DATE%.log`),
      datePattern: "DD.MM.YYYY",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
    new winston.transports.Console({ format: winston.format.colorize() }),
  ],
});

const ApplicationLogger = winston.createLogger({
  level: "info",
  format: ApplicationFormat,
  transports: [
    new winston.transports.Http(httpOptions("application")),
    new winston.transports.DailyRotateFile({
      filename: path.join(logPath, `application/%DATE%.log`),
      datePattern: "DD.MM.YYYY",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
    new winston.transports.Console({ format: winston.format.colorize() }),
  ],
});

const DebugLogger = winston.createLogger({
  level: "error",
  format: DebugFormat,
  transports: [
    new winston.transports.Http(httpOptions("debug")),
    new winston.transports.DailyRotateFile({
      filename: path.join(logPath, `debug/%DATE%.log`),
      datePattern: "DD.MM.YYYY",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
    new winston.transports.Console({ format: winston.format.colorize() }),
  ],
});

const AccessLogger = winston.createLogger({
  level: "warning",
  format: AccessFormat,
  transports: [
    new winston.transports.Http(httpOptions("access")),
    new winston.transports.DailyRotateFile({
      filename: path.join(logPath, `access/%DATE%.log`),
      datePattern: "DD.MM.YYYY",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
    new winston.transports.Console({ format: winston.format.colorize() }),
  ],
});

const SecurityLogger = winston.createLogger({
  level: "alert",
  format: SecurityFormat,
  transports: [
    new winston.transports.Http(httpOptions("security")),
    new winston.transports.DailyRotateFile({
      filename: path.join(logPath, `security/%DATE%.log`),
      datePattern: "DD.MM.YYYY",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
    new winston.transports.Console({ format: winston.format.colorize() }),
  ],
});

module.exports = {
  AuditLogger,
  ApplicationLogger,
  DebugLogger,
  AccessLogger,
  SecurityLogger,
};
