// import espanicon-sdk
const EspaniconSDK = require("@espanicon/espanicon-sdk");
// import txEventParser
const { txEventParser } = require("../txEventParser");

// create sdk instance
const sdk = new EspaniconSDK();
// get methods that you need
const { getTxResult, getScoreApi } = sdk;

// get tx result and parse logs
async function parseEventsFromArrayOfTxHashes(arrayOfHashes) {
  const result = [];
  try {
    const mapOfContracts = {};
    // loop arrayOfHashes
    for (const event of arrayOfHashes) {
      // get tx result from hash
      const logs = await getTxResult(event.hash);

      // create parsedLogs array
      const parsedLogs = [];

      // loop eventLogs
      for (const eachLog of logs.eventLogs) {
        if (!mapOfContracts[eachLog.scoreAddress]) {
          // get abi
          const abi = await getScoreApi(eachLog.scoreAddress);
          mapOfContracts[eachLog.scoreAddress] = abi;
        }
        // parse log
        const parsed = txEventParser(
          eachLog,
          mapOfContracts[eachLog.scoreAddress]
        );

        // save to parsedLogs
        parsedLogs.push(parsed);
      }
      // save to result
      result.push({
        hash: event.hash,
        logs: parsedLogs
      });
    }
  } catch (e) {
    // print error
    console.log("Error running main()", e);
  }

  return result;
}

function customPrint(result) {
  // print result. Dont worry about the code here,
  // it is just for printing the result.
  const breakLine2 = "----------------------------------------";
  const breakLine = "========================================";
  for (const each of result) {
    console.log(breakLine);
    console.log(`hash: ${each.hash}`);
    for (const eachLog of each.logs) {
      console.log(breakLine2);
      console.log("> eventlog:");
      for (const eachLogKey in eachLog) {
        if (eachLogKey !== "params") {
          console.log(`${eachLogKey}: ${eachLog[eachLogKey]}`);
        } else {
          for (const eachParam of eachLog.params) {
            console.log(eachParam);
          }
        }
      }
    }
    console.log(breakLine);
  }
}

function getParamsTypeValueTuple(parsedArrayOfEvents) {
  const result = {
    typesOfParams: [],
    typeValueTuple: []
  };
  for (const eachParsedObject of parsedArrayOfEvents) {
    const { logs } = eachParsedObject;
    for (const event of logs) {
      for (const eachParam of event.params) {
        if (!result.typesOfParams.includes(eachParam.type)) {
          result.typesOfParams.push(eachParam.type);
          result.typeValueTuple.push({
            type: eachParam.type,
            value: eachParam.value
          });
        }
      }
    }
  }
  return result;
}

module.exports = {
  parseEventsFromArrayOfTxHashes,
  getParamsTypeValueTuple,
  customPrint
};
