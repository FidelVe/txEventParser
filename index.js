// This is a sample code to parse event logs from transaction hashes.
// for ease of use the espanicon-sdk is used, it has a method to get the
// transaction result and a method to get the abi of the score.
// For the case of the tracker frontend, the transaction hashes are obtained
// from the tracker backend, and the abi is obtained from the tracker backend.

const {
  parseEventsFromArrayOfTxHashes,
  customPrint
} = require("./utils/utils");
const eventList = require("./utils/eventList");

async function main() {
  const parsedEvents = await parseEventsFromArrayOfTxHashes(eventList);
  customPrint(parsedEvents);
}

main();
