const railService = require("../services/RailService");

exports.getAllRails = async (req, res) => {
  try {
    const rails = await railService.getAllRails(req.query);
    console.log(req.query)
    res.json({ data: rails.data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getRailSeatsByStationId = async (req, res) => {
  try {
    console.log(req.params)
    const seats = await railService.getRailSeatsByStationId(req.params);
    res.json({ data: seats.data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// TODO: 取得當天對號座即時剩餘位資料({原始}列車區段Leg角度) 1
// TODO: TODO: 取得當天對號座即時剩餘位資料({原始}列車區段Leg角度) 2
// TODO: 取得指定[日期], [起迄站]對號座即時剩餘位資料(加值型列車起迄段OD角度) 1
// TODO: 取得指定[日期], [起迄站]對號座即時剩餘位資料(加值型列車起迄段OD角度) 2

exports.AvailableSeatStatus = async (req, res) => {
  try {
    const rails = await railService.AvailableSeatStatus(req.query);
    console.log(req.query)
    res.json({ data: rails.data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.AddAvailableSeatStatus = async (req, res) => {
  try {
    const rails = await railService.AddAvailableSeatStatus(req.params);
    console.log(req.params)
    res.json({ data: rails.data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.AddDateAvailableSeatStatus = async (req, res) => {
  try {
    const rails = await railService.AddDateAvailableSeatStatus(req.params);
    console.log(req.params)
    res.json({ data: rails.data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.DailyTimetable = async (req, res) => {
  try {
    const rails = await railService.DailyTimetable(req.params);
    console.log(req.params)
    res.json({ data: rails.data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};