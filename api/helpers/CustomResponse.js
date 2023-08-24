const MsgRes = (message) => {
  return {
    message,
  };
};

const DataRes = (data) => {
  return {
    data,
  };
};

const ErrRes = (error) => {
  return {
    error,
  };
};

module.exports = { MsgRes, DataRes, ErrRes };
