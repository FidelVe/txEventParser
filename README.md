# txEventParser

`txEventParser` is a method for parsing eventlogs in a transaction into a more readable format.

Example:
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

## Installation

Clone the github repo and run `npm install` inside the repo folder.
