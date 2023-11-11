const axios = require('axios').default;
const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJER2lKNFE5bFg4WldFajlNNEE2amFVNm9JOGJVQ3RYWGV6OFdZVzh3ZkhrIn0.eyJleHAiOjE2OTkyNTAzMDgsImlhdCI6MTY5OTE2MzkwOCwianRpIjoiYTM4MzRmY2YtZWNjMS00ZWIyLWFlMTYtZTVhMjE1MjRiYjEzIiwiaXNzIjoiaHR0cHM6Ly90ZHgudHJhbnNwb3J0ZGF0YS50dy9hdXRoL3JlYWxtcy9URFhDb25uZWN0Iiwic3ViIjoiYzg2MTlmNDctNmFlMy00Njc3LThmOTktMWY2NDMwMWVkNmVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicmVkbG92ZWFuZHRlbi00NGZhNTdmYS01ZjdlLTRiZDMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInN0YXRpc3RpYyIsInByZW1pdW0iLCJtYWFzIiwiYWR2YW5jZWQiLCJ2YWxpZGF0b3IiLCJoaXN0b3JpY2FsIiwiYmFzaWMiXX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInVzZXIiOiJjYjRlY2I0ZSJ9.XKh4sDsS_VHoP0RQO3qjGxhcrkYwvg5c1OI4mQ-K2nTavC-kFS7ihR2IdzYNnWhYDLJsh9BKQ3uLM7rslY07XaAyi4UKva2KH--L3X_B0aaJpNaeTWCj3K_3Rq4_hgnvzBJfwxf-zdDD7XU5TO8DRKckyfGnDuDmpLZ30osLuSCOMBWAWW3NUG13OQJNyb83basGPBOtP6vw2mnNGjb0hh_fZsdBoPI5vS2oLBZ98OyU9wr0sBW0KOCkAj-vqT2QHx6_GnLRilDe8gyf7gxCV1JlfCxptH_2J9drJ6HL17AfFxSBnvAhc1JL4pQlTYiBHb10Wxm0jTWugCZiI-AdwQ"
exports.getAllRails = async (query) => {
  return axios.get(
    "https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Station",
    {
      params: {
        $top: query.top, // note about the query parameter
        $format: "JSON",
      },
      headers: {
        accept: "application/json",
        // you can get the authorization token by 
        // - log in to tdx.transportdata.tw
        // - look at the curl
        Authorization:  `Bearer ${token}`,
      },
    }
  );
};

exports.getRailSeatsByStationId = async (params) => {
  return axios.get(
    // note about the path parameter
    `https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/AvailableSeatStatusList/${params.stationId}`,
    {
      params: {
        $top: 30,
        $format: "JSON",
      },
      headers: {
        accept: "application/json",
        // you can get the authorization token by 
        // - log in to tdx.transportdata.tw
        // - look at the curl
        Authorization: `Bearer ${token}`,      
      },
    }
  );
};

// TODO: 取得當天對號座即時剩餘位資料({原始}列車區段Leg角度) 1
// TODO: TODO: 取得當天對號座即時剩餘位資料({原始}列車區段Leg角度) 2
// TODO: 取得指定[日期], [起迄站]對號座即時剩餘位資料(加值型列車起迄段OD角度) 1
// TODO: 取得指定[日期], [起迄站]對號座即時剩餘位資料(加值型列車起迄段OD角度) 2
exports.AvailableSeatStatus = async (query) => {
  return axios.get(
    "https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/AvailableSeatStatus/Train/Leg/Today",
    {
      params: {
        $top: query.top, // note about the query parameter
        $format: "JSON",
      },
      headers: {
        accept: "application/json",
        // you can get the authorization token by 
        // - log in to tdx.transportdata.tw
        // - look at the curl
        Authorization:
          `Bearer ${token}`,
      },
    }
  );
};

exports.AddAvailableSeatStatus = async (params) => {
  return axios.get(
    `https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/AvailableSeatStatus/Train/OD/TrainDate/${params.TrainDate}`,
    {
      params: {
        $top: 30, // note about the query parameter
        $format: "JSON",
      },
      headers: {
        accept: "application/json",
        // you can get the authorization token by 
        // - log in to tdx.transportdata.tw
        // - look at the curl
        Authorization: `Bearer ${token}`
      },
    }
  );
};

exports.AddDateAvailableSeatStatus = async (params) => {
  return axios.get(
    
    `https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/AvailableSeatStatus/Train/OD/${params.OriginStationID}/to/${params.DestinationStationID}/TrainDate/${params.TrainDate}`,
    {
      params: {
        $top: 30, // note about the query parameter
        $format: "JSON",
      },
      headers: {
        accept: "application/json",
        // you can get the authorization token by 
        // - log in to tdx.transportdata.tw
        // - look at the curl
        Authorization: `Bearer ${token}`
      },
    }
  );
};

exports.DailyTimetable = async (params) => {
  return axios.get(
    `https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/DailyTimetable/OD/${params.OriginStationID}/to/${params.DestinationStationID}/${params.TrainDate}`,
    {
      params: {
        $top: 30, // note about the query parameter
        $format: "JSON",
      },
      headers: {
        accept: "application/json",
        // you can get the authorization token by 
        // - log in to tdx.transportdata.tw
        // - look at the curl
        Authorization: `Bearer ${token}`
      },
    }
  );
};

