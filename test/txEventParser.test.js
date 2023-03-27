const { inputs } = require("./testInputs");
const { outputs } = require("./testOutputs");
const { txEventParser } = require("../txEventParser");
const assert = require("assert");

describe("Unit tests for txEventParser(log, abi)", () => {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const output = outputs[i];

    const parsed = txEventParser(input.log, input.abi);

    console.log("input", input);
    console.log("output", output);
    console.log("parsed", parsed);
    it("should parse the event", () => {
      assert.deepEqual(parsed, output);
    });
  }
});
