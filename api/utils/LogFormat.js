const winston = require("winston");

const TimeFormat = "DD/MM/YYYY-HH:mm:ss";

const AuditFormat = winston.format.combine(
  winston.format.timestamp({ format: TimeFormat }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${level.toUpperCase()}:[${timestamp}] ${message}`;
  })
);

const ApplicationFormat = winston.format.combine(
  winston.format.timestamp({ format: TimeFormat }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${level.toUpperCase()}: [${timestamp}] ${message}`;
  })
);

const DebugFormat = winston.format.combine(
  winston.format.timestamp({ format: TimeFormat }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${level.toUpperCase()}: [${timestamp}] ${message}`;
  })
);

const AccessFormat = winston.format.combine(
  winston.format.timestamp({ format: TimeFormat }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${level.toUpperCase()}: [${timestamp}] ${message}`;
  })
);

const SecurityFormat = winston.format.combine(
  winston.format.timestamp({ format: TimeFormat }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${level.toUpperCase()}: [${timestamp}] ${message}`;
  })
);

module.exports = {
  AuditFormat,
  ApplicationFormat,
  DebugFormat,
  AccessFormat,
  SecurityFormat,
};
