# txEventParser

`txEventParser` is a method for parsing eventlogs in a transaction into a more readable format.

Examples:
```js
const parsedLog = await txEventParser(log, scoreApi);
console.log(parsedLog);
{
...
 result: {
   methodName: "Transfer",
   params: [
     {
       name: "from",
       type: "address",
       value: "hx000000.."
     },
     {
     name: "to",
     type: "address",
     value: "hx000000.."
     },
     {
     name: "value",
     type: "int",
     value: "10000000
     }
   ]
 }
}
```

With a tx hash used as a sample the results will the following params:
* `origin`: score contract that generated the eventlog
* `params`: an array of params for the eventlog, each entry in the array is a param and has `name`, `value` and `type` keys.
* `methodName`: the name of the eventlog function being executed.

```json
{
  "hashSample": "0xabaa9a86a955750733b877b2bd034ef295c8d26d84e9efc2dd2d235d59d5982f",
  "results": [
    "result1": {
      "origin": "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      "params": [
        {
          "name": "_value",
          "type": "int",
          "value": "0x4fefa17b7240000"
        }
      ],
      "methodName": "TaxCollectedForTreasury"
    },
    "result2": {
      "origin": "cxa0af3165c08318e988cb30993b3048335b94af6c",
      "params": [
        {
          "name": "_token",
          "type": "Address",
          "value": "cx2aa9b28a657e3121b75d3d4fe65e569398645d56"
        },
        {
          "name": "_owner",
          "type": "Address",
          "value": "cxed0f02a1a61b483bd366021d68af8469414b7be8"
        },
        {
          "name": "_value",
          "type": "int",
          "value": "0xefcee47256c0000"
        }
      ],
      "methodName":"Deposit"
    },
    "result3": {
      "origin": "cxa0af3165c08318e988cb30993b3048335b94af6c",
      "params": [
        {
          "name": "_operator",
          "type": "Address",
          "value": "cxed0f02a1a61b483bd366021d68af8469414b7be8"
        },
        {
          "name": "_from",
          "type": "Address", "value": "hx0000000000000000000000000000000000000000"
        },
        {
          "name": "_to",
          "type": "Address",
          "value": "cxed0f02a1a61b483bd366021d68af8469414b7be8"
        },
        {
          "name": "_id",
          "type": "int",
          "value": "0x30"
        },
        {
          "name": "_value",
          "type": "int",
          "value": "0x4084154109e3519"
        }
      ],
      "methodName": "TransferSingle"
    },
    "result4": {
      "origin": "cxa0af3165c08318e988cb30993b3048335b94af6c",
      "params": [
        {
          "name": "null",
          "type": "Address",
          "value": "cxa0af3165c08318e988cb30993b3048335b94af6c"
        },
        {
          "name": "null",
          "type": "Address",
          "value": "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
        },
        {
          "name": "null",
          "type": "int",
          "value":
          "0xc17d413c935bdbbe"
        }
      ],
      "methodName": "ICXTransfer"
    }
  ]
}
```

In the cases that the `name` of a param is `null` the ABI of that contract doesnt have a method with `name === methodName` so the default value is set to `null`.

## Installation

Clone the github repo and run `npm install` inside the repo folder.
