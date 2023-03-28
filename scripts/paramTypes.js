const {
  parseEventsFromArrayOfTxHashes,
  getParamsTypeValueTuple
} = require("../utils/utils");
const eventList = require("../utils/eventList");

async function main() {
  const events = await parseEventsFromArrayOfTxHashes(eventList);
  const paramsTypeValueTuple = getParamsTypeValueTuple(events);
  console.log(paramsTypeValueTuple);
}

main();
