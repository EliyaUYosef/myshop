exports.printIncomingRequestInfo = (req, res, next) => {
  const timestamp = new Date().toLocaleString("en-US");
  const timeArr = timestamp.split(",");
  console.log(BLUE + "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  console.log(`${req.protocol.toUpperCase()} : ${req.method}  ${req.url}`);
  console.log();
  console.log(`${timeArr[0]} - ${timeArr[1]}`);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + RESET);
  next();
};

exports.allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  // res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};
