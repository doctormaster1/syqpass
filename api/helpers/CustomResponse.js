const MsgRes = (msg) => {
  return {
    message: msg,
  };
};

const DataRes = (data) => {
  return {
    data: {
      ...data,
    },
  };
};

const ErrRes = (err) => {
  return {
    error: {
      ...err,
    },
  };
};

module.exports = { MsgRes, DataRes, ErrRes };
