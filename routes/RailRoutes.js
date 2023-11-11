const express = require("express");
const {
  getAllRails,
  getRailSeatsByStationId,
  AvailableSeatStatus,
  AddAvailableSeatStatus,
  AddDateAvailableSeatStatus,
  DailyTimetable
} = require("../controllers/RailController");

const router = express.Router();

// 'query' parameter is the object after the "?"
// Example: localhost:3001/api/rails?top=10
// Note: I imported the function "getAllRails" on line 3
router.route("/").get(getAllRails) 

// 'path' parameter is the object after the "/"
// Example: localhost:3001/api/rails/availableSeats/0990
router.route("/availableSeats/:stationId").get(getRailSeatsByStationId)

// TODO: 取得當天對號座即時剩餘位資料({原始}列車區段Leg角度) 1
// TODO: 取得當天對號座即時剩餘位資料({原始}列車區段Leg角度) 2
// TODO: 取得指定[日期], [起迄站]對號座即時剩餘位資料(加值型列車起迄段OD角度) 1
// TODO: 取得指定[日期], [起迄站]對號座即時剩餘位資料(加值型列車起迄段OD角度) 2
router.route("/AvailableSeatStatus").get(AvailableSeatStatus) 

router.route("/TrainDate/:TrainDate").get(AddAvailableSeatStatus) 

router.route("/AvailableSeatStatus/Train/OD/:OriginStationID/:DestinationStationID/:TrainDate").get(AddDateAvailableSeatStatus) 

router.route("/DailyTimetable/OD/:OriginStationID/:DestinationStationID/:TrainDate").get(DailyTimetable)

module.exports = router;
