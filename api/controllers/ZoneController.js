const asyncHandler = require("../helpers/AsyncHandler");
const {
  MsgResult,
  DataResult,
  ErrResult,
  LogResult,
} = require("../helpers/Result");
const { ApplicationLogger, DebugLogger } = require("../utils/Logger");
const ZoneModel = require("../models/ZoneModel");
const ZoneValidator = require("../validators/ZoneValidator");

const postZone = asyncHandler(async (req, res, next) => {});

const getZone = asyncHandler(async (req, res, next) => {});

const deleteZone = asyncHandler(async (req, res, next) => {});

const putZone = asyncHandler(async (req, res, next) => {});

module.exports = { postZone, getZone, deleteZone, putZone };
