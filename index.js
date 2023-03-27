// This is a sample code to parse event logs from transaction hashes.
// for ease of use the espanicon-sdk is used, it has a method to get the
// transaction result and a method to get the abi of the score.
// For the case of the tracker frontend, the transaction hashes are obtained
// from the tracker backend, and the abi is obtained from the tracker backend.

// import espanicon-sdk
const EspaniconSDK = require("@espanicon/espanicon-sdk");
// import txEventParser
const { txEventParser } = require("./txEventParser");

// create sdk instance
const sdk = new EspaniconSDK();
// get methods that you need
const { getTxResult, getScoreApi } = sdk;

// array of sample transaction hashes
const eventList = [
  {
    hash: "0xabaa9a86a955750733b877b2bd034ef295c8d26d84e9efc2dd2d235d59d5982f"
  }
];

// main function
// get tx result and parse logs
async function main() {
  const result = [];
  try {
    // create result array

    // loop eventList
    for (const event of eventList) {
      // get tx result from hash
      const logs = await getTxResult(event.hash);

      // create parsedLogs array
      const parsedLogs = [];

      // loop eventLogs
      for (const eachLog of logs.eventLogs) {
        // // get abi
        const abi = await getScoreApi(eachLog.scoreAddress);

        // parse log
        const parsed = txEventParser(eachLog, abi);

        // save to parsedLogs
        parsedLogs.push(parsed);
      }
      // save to result
      result.push({
        hash: event.hash,
        logs: parsedLogs
      });
    }

    // print result. Dont worry about the code here, it is just for printing the result.
    for (const each of result) {
      console.log("hash: ", each.hash);
      for (const eachLog of each.logs) {
        console.log("log");
        for (const eachLogKey in eachLog) {
          if (eachLogKey !== "result") {
            console.log(eachLogKey);
            console.log(eachLog[eachLogKey]);
          } else {
            console.log(eachLogKey);
            console.log(JSON.stringify(eachLog[eachLogKey]));
          }
        }
      }
    }
  } catch (e) {
    // print error
    console.log("Error running main()", e);
  }

  console.log("result", result);
}

main();
