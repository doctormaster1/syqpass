const MsgResult = (message) => {
  return {
    message,
  };
};

const DataResult = (data) => {
  return {
    data,
  };
};

const ErrResult = (error) => {
  return {
    error,
  };
};

const LogResult = (log) => {
  return JSON.stringify(log);
};

module.exports = { MsgResult, DataResult, ErrResult, LogResult };
