const inputs = [
  {
    log: {
      scoreAddress: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      indexed: ["TaxCollectedForTreasury(int)", "0x4fefa17b7240000"],
      data: []
    },
    abi: [
      {
        inputs: [],
        name: "FundsInsICXTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FundsInFRMDTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "PoolICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FRMDPrice",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_token", type: "Address" }],
        name: "PoolTokenBalance",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FrmdTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "sICXTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedDexAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedRouterAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalanceMultiCallAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetsICXTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedRouterAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedDexAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalanceMultiCallAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetCraftEscrowAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "TransferToken",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "DepositICXToTreasury",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessNodeRewardLPDeposit",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessMonthlyLPDeposit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountInTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountOfsICXToPair",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositICX",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_tokenAddres", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositToken",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForLP",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "SendICXReward",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_token", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "SendTokenReward",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      indexed: ["TaxCollectedForLP(int)", "0xefcee47256c0000"],
      data: []
    },
    abi: [
      {
        inputs: [],
        name: "FundsInsICXTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FundsInFRMDTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "PoolICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FRMDPrice",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_token", type: "Address" }],
        name: "PoolTokenBalance",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FrmdTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "sICXTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedDexAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedRouterAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalanceMultiCallAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetsICXTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedRouterAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedDexAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalanceMultiCallAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetCraftEscrowAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "TransferToken",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "DepositICXToTreasury",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessNodeRewardLPDeposit",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessMonthlyLPDeposit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountInTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountOfsICXToPair",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositICX",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_tokenAddres", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositToken",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForLP",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "SendICXReward",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_token", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "SendTokenReward",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      indexed: ["AmountOfsICXToPair(int)", "0x127260579084ec4"],
      data: []
    },
    abi: [
      {
        inputs: [],
        name: "FundsInsICXTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FundsInFRMDTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "PoolICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FRMDPrice",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_token", type: "Address" }],
        name: "PoolTokenBalance",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FrmdTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "sICXTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedDexAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedRouterAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalanceMultiCallAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetsICXTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedRouterAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedDexAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalanceMultiCallAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetCraftEscrowAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "TransferToken",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "DepositICXToTreasury",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessNodeRewardLPDeposit",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessMonthlyLPDeposit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountInTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountOfsICXToPair",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositICX",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_tokenAddres", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositToken",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForLP",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "SendICXReward",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_token", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "SendTokenReward",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      indexed: ["AmountInTreasury(int)", "0xb2b1a662499aae2563"],
      data: []
    },
    abi: [
      {
        inputs: [],
        name: "FundsInsICXTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FundsInFRMDTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "PoolICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FRMDPrice",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_token", type: "Address" }],
        name: "PoolTokenBalance",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FrmdTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "sICXTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedDexAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedRouterAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalanceMultiCallAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetsICXTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedRouterAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedDexAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalanceMultiCallAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetCraftEscrowAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "TransferToken",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "DepositICXToTreasury",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessNodeRewardLPDeposit",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessMonthlyLPDeposit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountInTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountOfsICXToPair",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositICX",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_tokenAddres", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositToken",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForLP",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "SendICXReward",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_token", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "SendTokenReward",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "Deposit(Address,Address,int)",
        "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      ],
      data: ["0xefcee47256c0000"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "0xefcee47256c0000"
      ],
      data: ["0x7b226d6574686f64223a225f6465706f736974227d"]
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "stake",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_time", type: "int" }],
        name: "setUnstakingPeriod",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFramdNodeAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getUnstakingPeriod",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getCurrentBlockTime",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "stakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "unstakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "availableBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalStakedBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "stakingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setStakingEnabled", outputs: [], type: "function" },
      {
        inputs: [],
        name: "taxingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setTaxingEnabled", outputs: [], type: "function" },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "detailsBalanceOf",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "IsClaimable",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBuyTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSellTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedRouter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedDex",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setTreasury",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setSellTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setBuyTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_type", type: "str" },
          { name: "_valueBefore", type: "int" },
          { name: "_taxApplied", type: "int" },
          { name: "_originatorAddress", type: "Address" }
        ],
        name: "TaxApplied",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "MessageLog",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2609b924e33ef00b648a409245c7ea394c467824",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "0x127260579084ec4"
      ],
      data: ["0x7b226d6574686f64223a225f6465706f736974227d"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setMinter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getMinter",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mint",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mintTo",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" }
        ],
        name: "burnFrom",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getPeg",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setStaking",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getStaking",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setEmergencyManager",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getEmergencyManager",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "priceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "lastPriceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "Deposit(Address,Address,int)",
        "cx2609b924e33ef00b648a409245c7ea394c467824",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      ],
      data: ["0x127260579084ec4"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "Add(int,Address,int,int,int)",
        "0x30",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "0x4084154109e3519"
      ],
      data: ["0xefcee47256c0000", "0x11cca8ded80a621"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "TransferSingle(Address,Address,Address,int,int)",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "hx0000000000000000000000000000000000000000",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      ],
      data: ["0x30", "0x4084154109e3519"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "Withdraw(Address,Address,int)",
        "cx2609b924e33ef00b648a409245c7ea394c467824",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      ],
      data: ["0xa5b778b87a8a3"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2609b924e33ef00b648a409245c7ea394c467824",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "0xa5b778b87a8a3"
      ],
      data: ["0x4e6f6e65"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setMinter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getMinter",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mint",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mintTo",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" }
        ],
        name: "burnFrom",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getPeg",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setStaking",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getStaking",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setEmergencyManager",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getEmergencyManager",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "priceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "lastPriceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      indexed: [
        "DepositToken(Address,Address,int)",
        "cx2609b924e33ef00b648a409245c7ea394c467824"
      ],
      data: ["cxa0af3165c08318e988cb30993b3048335b94af6c", "0xa5b778b87a8a3"]
    },
    abi: [
      {
        inputs: [],
        name: "FundsInsICXTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FundsInFRMDTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "PoolICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FRMDPrice",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_token", type: "Address" }],
        name: "PoolTokenBalance",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FrmdTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "sICXTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedDexAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedRouterAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalanceMultiCallAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetsICXTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedRouterAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedDexAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalanceMultiCallAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetCraftEscrowAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "TransferToken",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "DepositICXToTreasury",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessNodeRewardLPDeposit",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessMonthlyLPDeposit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountInTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountOfsICXToPair",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositICX",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_tokenAddres", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositToken",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForLP",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "SendICXReward",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_token", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "SendTokenReward",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "hxaa7a2e3b9bae545b590c3c74c5d12c060210a97e",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "0xc7d713b49da00000"
      ],
      data: ["0x7b226d6574686f64223a227461784465706f736974227d"]
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "stake",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_time", type: "int" }],
        name: "setUnstakingPeriod",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFramdNodeAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getUnstakingPeriod",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getCurrentBlockTime",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "stakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "unstakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "availableBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalStakedBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "stakingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setStakingEnabled", outputs: [], type: "function" },
      {
        inputs: [],
        name: "taxingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setTaxingEnabled", outputs: [], type: "function" },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "detailsBalanceOf",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "IsClaimable",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBuyTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSellTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedRouter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedDex",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setTreasury",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setSellTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setBuyTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_type", type: "str" },
          { name: "_valueBefore", type: "int" },
          { name: "_taxApplied", type: "int" },
          { name: "_originatorAddress", type: "Address" }
        ],
        name: "TaxApplied",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "MessageLog",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
      indexed: ["TaxApplied(str,int,int,Address)"],
      data: [
        "SELL",
        "0x8fa29629d14b00000",
        "0xc7d713b49da00000",
        "hxaa7a2e3b9bae545b590c3c74c5d12c060210a97e"
      ]
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "stake",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_time", type: "int" }],
        name: "setUnstakingPeriod",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFramdNodeAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getUnstakingPeriod",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getCurrentBlockTime",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "stakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "unstakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "availableBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalStakedBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "stakingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setStakingEnabled", outputs: [], type: "function" },
      {
        inputs: [],
        name: "taxingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setTaxingEnabled", outputs: [], type: "function" },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "detailsBalanceOf",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "IsClaimable",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBuyTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSellTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedRouter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedDex",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setTreasury",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setSellTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setBuyTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_type", type: "str" },
          { name: "_valueBefore", type: "int" },
          { name: "_taxApplied", type: "int" },
          { name: "_originatorAddress", type: "Address" }
        ],
        name: "TaxApplied",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "MessageLog",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      indexed: ["TaxCollectedForTreasury(int)", "0x1262a294b670000"],
      data: []
    },
    abi: [
      {
        inputs: [],
        name: "FundsInsICXTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FundsInFRMDTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "PoolICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FRMDPrice",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_token", type: "Address" }],
        name: "PoolTokenBalance",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FrmdTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "sICXTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedDexAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedRouterAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalanceMultiCallAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetsICXTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedRouterAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedDexAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalanceMultiCallAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetCraftEscrowAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "TransferToken",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "DepositICXToTreasury",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessNodeRewardLPDeposit",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessMonthlyLPDeposit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountInTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountOfsICXToPair",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositICX",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_tokenAddres", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositToken",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForLP",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "SendICXReward",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_token", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "SendTokenReward",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      indexed: ["TaxCollectedForLP(int)", "0x3727e7be2350000"],
      data: []
    },
    abi: [
      {
        inputs: [],
        name: "FundsInsICXTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FundsInFRMDTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "PoolICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FRMDPrice",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_token", type: "Address" }],
        name: "PoolTokenBalance",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FrmdTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "sICXTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedDexAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedRouterAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalanceMultiCallAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetsICXTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedRouterAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedDexAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalanceMultiCallAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetCraftEscrowAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "TransferToken",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "DepositICXToTreasury",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessNodeRewardLPDeposit",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessMonthlyLPDeposit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountInTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountOfsICXToPair",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositICX",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_tokenAddres", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositToken",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForLP",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "SendICXReward",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_token", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "SendTokenReward",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      indexed: ["AmountOfsICXToPair(int)", "0x43e2584c7a3b13"],
      data: []
    },
    abi: [
      {
        inputs: [],
        name: "FundsInsICXTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FundsInFRMDTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "PoolICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FRMDPrice",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_token", type: "Address" }],
        name: "PoolTokenBalance",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FrmdTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "sICXTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedDexAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedRouterAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalanceMultiCallAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetsICXTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedRouterAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedDexAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalanceMultiCallAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetCraftEscrowAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "TransferToken",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "DepositICXToTreasury",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessNodeRewardLPDeposit",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessMonthlyLPDeposit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountInTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountOfsICXToPair",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositICX",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_tokenAddres", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositToken",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForLP",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "SendICXReward",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_token", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "SendTokenReward",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      indexed: ["AmountInTreasury(int)", "0xb2b1b0bdc12635ce06"],
      data: []
    },
    abi: [
      {
        inputs: [],
        name: "FundsInsICXTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FundsInFRMDTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "PoolICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FRMDPrice",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_token", type: "Address" }],
        name: "PoolTokenBalance",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FrmdTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "sICXTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedDexAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedRouterAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalanceMultiCallAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetsICXTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedRouterAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedDexAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalanceMultiCallAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetCraftEscrowAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "TransferToken",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "DepositICXToTreasury",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessNodeRewardLPDeposit",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessMonthlyLPDeposit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountInTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountOfsICXToPair",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositICX",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_tokenAddres", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositToken",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForLP",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "SendICXReward",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_token", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "SendTokenReward",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "Deposit(Address,Address,int)",
        "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      ],
      data: ["0x3727e7be2350000"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "0x3727e7be2350000"
      ],
      data: ["0x7b226d6574686f64223a225f6465706f736974227d"]
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "stake",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_time", type: "int" }],
        name: "setUnstakingPeriod",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFramdNodeAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getUnstakingPeriod",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getCurrentBlockTime",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "stakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "unstakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "availableBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalStakedBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "stakingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setStakingEnabled", outputs: [], type: "function" },
      {
        inputs: [],
        name: "taxingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setTaxingEnabled", outputs: [], type: "function" },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "detailsBalanceOf",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "IsClaimable",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBuyTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSellTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedRouter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedDex",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setTreasury",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setSellTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setBuyTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_type", type: "str" },
          { name: "_valueBefore", type: "int" },
          { name: "_taxApplied", type: "int" },
          { name: "_originatorAddress", type: "Address" }
        ],
        name: "TaxApplied",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "MessageLog",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2609b924e33ef00b648a409245c7ea394c467824",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "0x43e2584c7a3b13"
      ],
      data: ["0x7b226d6574686f64223a225f6465706f736974227d"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setMinter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getMinter",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mint",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mintTo",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" }
        ],
        name: "burnFrom",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getPeg",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setStaking",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getStaking",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setEmergencyManager",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getEmergencyManager",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "priceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "lastPriceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "Deposit(Address,Address,int)",
        "cx2609b924e33ef00b648a409245c7ea394c467824",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      ],
      data: ["0x43e2584c7a3b13"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "Add(int,Address,int,int,int)",
        "0x30",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "0xed6b2f7eb3bf66"
      ],
      data: ["0x3727e7be2350000", "0x418081ec62b591"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "TransferSingle(Address,Address,Address,int,int)",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "hx0000000000000000000000000000000000000000",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      ],
      data: ["0x30", "0xed6b2f7eb3bf66"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "Withdraw(Address,Address,int)",
        "cx2609b924e33ef00b648a409245c7ea394c467824",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      ],
      data: ["0x261d660178582"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2609b924e33ef00b648a409245c7ea394c467824",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "0x261d660178582"
      ],
      data: ["0x4e6f6e65"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setMinter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getMinter",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mint",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mintTo",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" }
        ],
        name: "burnFrom",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getPeg",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setStaking",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getStaking",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setEmergencyManager",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getEmergencyManager",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "priceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "lastPriceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
      indexed: [
        "DepositToken(Address,Address,int)",
        "cx2609b924e33ef00b648a409245c7ea394c467824"
      ],
      data: ["cxa0af3165c08318e988cb30993b3048335b94af6c", "0x261d660178582"]
    },
    abi: [
      {
        inputs: [],
        name: "FundsInsICXTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FundsInFRMDTreasury",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "PoolICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FRMDPrice",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_token", type: "Address" }],
        name: "PoolTokenBalance",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "FrmdTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "sICXTokenAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedDexAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalancedRouterAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "BalanceMultiCallAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetsICXTokenAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedRouterAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalancedDexAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetBalanceMultiCallAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetCraftEscrowAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "SetFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "TransferToken",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "DepositICXToTreasury",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessNodeRewardLPDeposit",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "ProcessMonthlyLPDeposit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountInTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "AmountOfsICXToPair",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositICX",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_tokenAddres", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "DepositToken",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForTreasury",
        type: "eventlog"
      },
      {
        inputs: [{ indexed: "0x1", name: "_value", type: "int" }],
        name: "TaxCollectedForLP",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "SendICXReward",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_reciever", type: "Address" },
          { name: "_token", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "SendTokenReward",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "cxed0f02a1a61b483bd366021d68af8469414b7be8",
        "0x2df69673c8180000"
      ],
      data: ["0x7b226d6574686f64223a227461784465706f736974227d"]
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "stake",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_time", type: "int" }],
        name: "setUnstakingPeriod",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFramdNodeAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getUnstakingPeriod",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getCurrentBlockTime",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "stakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "unstakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "availableBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalStakedBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "stakingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setStakingEnabled", outputs: [], type: "function" },
      {
        inputs: [],
        name: "taxingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setTaxingEnabled", outputs: [], type: "function" },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "detailsBalanceOf",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "IsClaimable",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBuyTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSellTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedRouter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedDex",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setTreasury",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setSellTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setBuyTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_type", type: "str" },
          { name: "_valueBefore", type: "int" },
          { name: "_taxApplied", type: "int" },
          { name: "_originatorAddress", type: "Address" }
        ],
        name: "TaxApplied",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "MessageLog",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
      indexed: ["TaxApplied(str,int,int,Address)"],
      data: [
        "BUY",
        "0x8cc32cc294c980000",
        "0x2df69673c8180000",
        "hxaa7a2e3b9bae545b590c3c74c5d12c060210a97e"
      ]
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "stake",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_time", type: "int" }],
        name: "setUnstakingPeriod",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFramdNodeAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getUnstakingPeriod",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getCurrentBlockTime",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "stakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "unstakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "availableBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalStakedBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "stakingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setStakingEnabled", outputs: [], type: "function" },
      {
        inputs: [],
        name: "taxingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setTaxingEnabled", outputs: [], type: "function" },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "detailsBalanceOf",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "IsClaimable",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBuyTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSellTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedRouter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedDex",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setTreasury",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setSellTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setBuyTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_type", type: "str" },
          { name: "_valueBefore", type: "int" },
          { name: "_taxApplied", type: "int" },
          { name: "_originatorAddress", type: "Address" }
        ],
        name: "TaxApplied",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "MessageLog",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2609b924e33ef00b648a409245c7ea394c467824",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "0xa69f7760252d5f25"
      ],
      data: ["0x4e6f6e65"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setMinter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getMinter",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mint",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mintTo",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" }
        ],
        name: "burnFrom",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getPeg",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setStaking",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getStaking",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setEmergencyManager",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getEmergencyManager",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "priceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "lastPriceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2609b924e33ef00b648a409245c7ea394c467824",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "cx5faae53c4dbd1fbe4a2eb4aab6565030f10da5c6",
        "0x4028d2c014adc4"
      ],
      data: ["0x4e6f6e65"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setMinter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getMinter",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mint",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mintTo",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" }
        ],
        name: "burnFrom",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getPeg",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setStaking",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getStaking",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setEmergencyManager",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getEmergencyManager",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "priceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "lastPriceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "Swap(int,Address,Address,Address,Address,Address,int,int,int,int,int,int,int,int,int)",
        "0x30",
        "cx2aa9b28a657e3121b75d3d4fe65e569398645d56"
      ],
      data: [
        "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
        "cx2609b924e33ef00b648a409245c7ea394c467824",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "0x8cc32cc294c980000",
        "0xa69f7760252d5f25",
        "0x5f795a3c6fb46",
        "0x360d81d3ef68000",
        "0x360d81d3ef68000",
        "0x87a12855cd3b1808bad9",
        "0xa0fd40546b93f4d505a",
        "0x1078fe3b536dc81",
        "0xbb951a584ec8a259"
      ]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "0x8cc32cc294c980000"
      ],
      data: [
        "0x7b226d6574686f64223a225f73776170222c22706172616d73223a7b22746f546f6b656e223a22637832363039623932346533336566303062363438613430393234356337656133393463343637383234227d7d"
      ]
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "stake",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_time", type: "int" }],
        name: "setUnstakingPeriod",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFramdNodeAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getUnstakingPeriod",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getCurrentBlockTime",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "stakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "unstakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "availableBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalStakedBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "stakingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setStakingEnabled", outputs: [], type: "function" },
      {
        inputs: [],
        name: "taxingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setTaxingEnabled", outputs: [], type: "function" },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "detailsBalanceOf",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "IsClaimable",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBuyTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSellTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedRouter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedDex",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setTreasury",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setSellTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setBuyTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_type", type: "str" },
          { name: "_valueBefore", type: "int" },
          { name: "_taxApplied", type: "int" },
          { name: "_originatorAddress", type: "Address" }
        ],
        name: "TaxApplied",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "MessageLog",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2609b924e33ef00b648a409245c7ea394c467824",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "0xa69f7760252d5f25"
      ],
      data: ["0x7b226d6574686f64223a225f737761705f696378227d"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setMinter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getMinter",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mint",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mintTo",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" }
        ],
        name: "burnFrom",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getPeg",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setStaking",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getStaking",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setEmergencyManager",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getEmergencyManager",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "priceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "lastPriceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "Swap(int,Address,Address,Address,Address,Address,int,int,int,int,int,int,int,int,int)",
        "0x1",
        "cx2609b924e33ef00b648a409245c7ea394c467824"
      ],
      data: [
        "cx2609b924e33ef00b648a409245c7ea394c467824",
        "hx0000000000000000000000000000000000000000",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "0xa69f7760252d5f25",
        "0xc17d413c935bdbbe",
        "0x5f795a3c6fb46",
        "0x12a96987b23e6cf",
        "0x7ff765eba1ac0f",
        "0x27d9387ec67e62b7585c0",
        "0x0",
        "0x10473a2e0af949cb",
        "0x101d8e13fb81090e"
      ]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx10d59e8103ab44635190bd4139dbfd682fa2d07e",
      indexed: [
        "RewardsAccrued(Address,str,int)",
        "hx1e79bb8aaf75d34d618d80db8485f5bedcb67735",
        "sICX/ICX"
      ],
      data: ["0xf7409d699f305b"]
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_day", type: "int" }],
        name: "getEmission",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_holders", type: "[]Address" }],
        name: "getBalnHoldings",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_holder", type: "Address" }],
        name: "getBalnHolding",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDataSourceNames",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_address", type: "Address" }
        ],
        name: "addNewDataSource",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "name", type: "str" },
          { name: "sourceType", type: "int" },
          { name: "weight", type: "int" }
        ],
        name: "addDataSource",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_address", type: "Address" },
          { name: "sourceType", type: "int" }
        ],
        name: "createDataSource",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getDataSources",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_day", type: "int" }],
        name: "getDataSourcesAt",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSourceVoteData",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getSourceData",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_user", type: "Address" }
        ],
        name: "getWorkingBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "user", type: "Address" },
          { default: null, name: "sources", type: "[]str" }
        ],
        name: "getBoostData",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "distribute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [{ name: "sources", type: "[]str" }],
        name: "boost",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: null, name: "sources", type: "[]str" }],
        name: "claimRewards",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getAPY",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_source", type: "Address" }],
        name: "addDataProvider",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getDataProviders",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_source", type: "Address" }],
        name: "removeDataProvider",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_totalSupply", type: "int" },
          { name: "_user", type: "Address" },
          { name: "_balance", type: "int" }
        ],
        name: "updateRewardsData",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_totalSupply", type: "int" },
          {
            fields: [
              { name: "_user", type: "Address" },
              { name: "_balance", type: "int" }
            ],
            name: "_data",
            type: "[]struct"
          }
        ],
        name: "updateBatchRewardsData",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_totalSupply", type: "int" },
          { name: "_user", type: "Address" },
          { name: "_balance", type: "int" }
        ],
        name: "updateBalanceAndSupply",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_totalSupply", type: "int" },
          {
            fields: [
              { name: "_user", type: "Address" },
              { name: "_balance", type: "int" }
            ],
            name: "_data",
            type: "[]struct"
          }
        ],
        name: "updateBalanceAndSupplyBatch",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "user", type: "Address" }],
        name: "onKick",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "user", type: "Address" },
          { name: "sources", type: "[]str" }
        ],
        name: "kick",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "user", type: "Address" },
          { name: "balance", type: "int" }
        ],
        name: "onBalanceUpdate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "weight", type: "int" }],
        name: "setBoostWeight",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getBoostWeight",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "user", type: "Address" }],
        name: "getUserSources",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "name", type: "str" },
          { name: "votable", type: "bool" }
        ],
        name: "setVotable",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "addType",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "typeId", type: "int" },
          { name: "weight", type: "int" }
        ],
        name: "changeTypeWeight",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "day", type: "int" }],
        name: "setMigrateToVotingDay",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getMigrateToVotingDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "name", type: "str" },
          { name: "percentage", type: "int" }
        ],
        name: "setPlatformDistPercentage",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "name", type: "str" },
          { name: "percentage", type: "int" }
        ],
        name: "setFixedSourcePercentage",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getDistributionPercentages",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "checkpoint", outputs: [], type: "function" },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "checkpointSource",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }, { name: "time", type: "int" }],
        name: "updateRelativeSourceWeight",
        outputs: [{ type: "int" }],
        type: "function"
      },
      {
        inputs: [
          { name: "name", type: "str" },
          { default: "0x0", name: "time", type: "int" }
        ],
        name: "getRelativeSourceWeight",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "name", type: "str" },
          { name: "userWeight", type: "int" }
        ],
        name: "voteForSource",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "isVotable",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "sourceName", type: "str" },
          { default: "0x0", name: "time", type: "int" }
        ],
        name: "getSourceWeight",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "typeId", type: "int" }],
        name: "getCurrentTypeWeight",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getTotalWeight",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "typeId", type: "int" }],
        name: "getWeightsSumPerType",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "user", type: "Address" },
          { name: "source", type: "str" }
        ],
        name: "getUserSlope",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "user", type: "Address" },
          { name: "source", type: "str" }
        ],
        name: "getLastUserVote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getTypeId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "typeId", type: "int" }],
        name: "getTypeName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "sourceName", type: "str" }],
        name: "getSourceType",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "user", type: "Address" }],
        name: "getUserVoteData",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setGovernance",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getGovernance",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setAdmin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getAdmin",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBaln",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getBaln",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBoostedBaln",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getBoostedBaln",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBwt",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getBwt",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setReserve",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getReserve",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setDaofund",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getDaofund",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_timestamp", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_address", type: "Address" },
          { name: "_amount", type: "int" }
        ],
        name: "RewardsClaimed",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_day", type: "int" },
          { indexed: "0x1", name: "_name", type: "str" },
          { name: "_dist", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "Report",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_user", type: "Address" },
          { indexed: "0x1", name: "_source", type: "str" },
          { name: "_value", type: "int" }
        ],
        name: "RewardsAccrued",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "vote_name", type: "str" },
          { indexed: "0x1", name: "vote", type: "bool" },
          { name: "voter", type: "Address" },
          { name: "stake", type: "int" },
          { name: "total_for", type: "int" },
          { name: "total_against", type: "int" }
        ],
        name: "VoteCast",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "typeName", type: "str" },
          { indexed: "0x1", name: "typeId", type: "int" }
        ],
        name: "AddType",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "typeId", type: "int" },
          { name: "time", type: "int" },
          { name: "weight", type: "int" },
          { name: "totalWeight", type: "int" }
        ],
        name: "NewTypeWeight",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "sourceName", type: "str" },
          { indexed: "0x1", name: "user", type: "Address" },
          { name: "weight", type: "int" },
          { name: "time", type: "int" }
        ],
        name: "VoteForSource",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "sourceName", type: "str" },
          { name: "typeId", type: "int" },
          { name: "weight", type: "int" }
        ],
        name: "NewSource",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "getRecipients",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getRecipientsSplit",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "distStatus",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_day", type: "int" }],
        name: "recipientAt",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "recipient_name", type: "str" },
              { name: "dist_percent", type: "int" }
            ],
            name: "_recipient_list",
            type: "[]struct"
          }
        ],
        name: "updateBalTokenDistPercentage",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "removeDataSource",
        outputs: [],
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2609b924e33ef00b648a409245c7ea394c467824",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "cx5faae53c4dbd1fbe4a2eb4aab6565030f10da5c6",
        "0x7ff765eba1ac0f"
      ],
      data: ["0x4e6f6e65"]
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setMinter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getMinter",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mint",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "mintTo",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_amount", type: "int" }
        ],
        name: "burnFrom",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getPeg",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setStaking",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getStaking",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setEmergencyManager",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getEmergencyManager",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "priceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "lastPriceInLoop",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cxa0af3165c08318e988cb30993b3048335b94af6c",
      indexed: [
        "ICXTransfer(Address,Address,int)",
        "cxa0af3165c08318e988cb30993b3048335b94af6c",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "0xc17d413c935bdbbe"
      ],
      data: []
    },
    abi: [
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { name: "_fromToken", type: "Address" },
          { name: "_toToken", type: "Address" },
          { name: "_sender", type: "Address" },
          { name: "_receiver", type: "Address" },
          { name: "_fromValue", type: "int" },
          { name: "_toValue", type: "int" },
          { name: "_timestamp", type: "int" },
          { name: "_lpFees", type: "int" },
          { name: "_balnFees", type: "int" },
          { name: "_poolBase", type: "int" },
          { name: "_poolQuote", type: "int" },
          { name: "_endingPrice", type: "int" },
          { name: "_effectiveFillPrice", type: "int" }
        ],
        name: "Swap",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_baseToken", type: "Address" },
          { indexed: "0x1", name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" }
        ],
        name: "MarketAdded",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Add",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_id", type: "int" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_base", type: "int" },
          { name: "_quote", type: "int" }
        ],
        name: "Remove",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Deposit",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_token", type: "Address" },
          { indexed: "0x1", name: "_owner", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "Withdraw",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_owner", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" }
        ],
        name: "ClaimSicxEarnings",
        type: "eventlog"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_operator", type: "Address" },
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" }
        ],
        name: "TransferSingle",
        type: "eventlog"
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "updateAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "name", type: "str" }],
        name: "getAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "turnDexOn", outputs: [], type: "function" },
      {
        inputs: [],
        name: "getDexOn",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolLpFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setPoolBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxConversionFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "setIcxBalnFee",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFees",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }, { name: "_name", type: "str" }],
        name: "setMarketName",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolName",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "addQuoteCoin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "isQuoteCoinAllowed",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getDay",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_delta_time", type: "int" }],
        name: "setTimeOffset",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getTimeOffset",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "snap", type: "int" },
          { name: "batch_size", type: "int" }
        ],
        name: "precompute",
        outputs: [{ type: "bool" }],
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenAddress", type: "Address" },
          { name: "_user", type: "Address" }
        ],
        name: "getDeposit",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_user", type: "Address" }],
        name: "getSicxEarnings",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_token1Address", type: "Address" },
          { name: "_token2Address", type: "Address" }
        ],
        name: "getPoolId",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNonce",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getNamedPools",
        outputs: [{ type: "list" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "lookupPid",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_token", type: "Address" }
        ],
        name: "getPoolTotal",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolBase",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolQuote",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getQuotePriceInBase",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getBasePriceInQuote",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBalnPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSicxBnusdPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getLPBnusdValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPrice",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_name", type: "str" }],
        name: "getPriceByName",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "getICXBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "getPoolStats",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_base", type: "Address" },
          { name: "_quote", type: "Address" }
        ],
        name: "getPoolStatsForPair",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalDexAddresses",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_owner", type: "Address" }
        ],
        name: "getBalanceAndSupply",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "str" },
          { name: "_snapshot_id", type: "int" }
        ],
        name: "getTotalValue",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_permission", type: "bool" }
        ],
        name: "permit",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_poolId", type: "int" },
          { name: "_addresses", type: "[]Address" }
        ],
        name: "addLpAddresses",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_id", type: "int" }
        ],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_id", type: "int" }],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          {
            fields: [
              { name: "_address", type: "Address" },
              { name: "_votes_in_per", type: "int" }
            ],
            name: "prepDelegations",
            type: "[]struct"
          }
        ],
        name: "delegate",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "version",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      { inputs: [], name: "cancelSicxicxOrder", outputs: [], type: "function" },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_id", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_token", type: "Address" },
          { name: "_value", type: "int" }
        ],
        name: "withdraw",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_owner", type: "Address" },
          { name: "_token", type: "Address" }
        ],
        name: "depositOfUser",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { default: "0x0", name: "_withdraw", type: "bool" }
        ],
        name: "remove",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_baseToken", type: "Address" },
          { name: "_quoteToken", type: "Address" },
          { name: "_baseValue", type: "int" },
          { name: "_quoteValue", type: "int" },
          { default: "0x0", name: "_withdraw_unused", type: "bool" }
        ],
        name: "add",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ default: "0x0", name: "_value", type: "int" }],
        name: "withdrawSicxEarnings",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_operator", type: "Address" },
          { name: "_from", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "onIRC31Received",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_account", type: "Address" },
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "balanceOfAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalSupplyAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_id", type: "int" },
          { name: "_snapshot_id", type: "int" },
          { default: "0x0", name: "_twa", type: "bool" }
        ],
        name: "totalBalnAt",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
      indexed: [
        "ICXTransfer(Address,Address,int)",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "hxaa7a2e3b9bae545b590c3c74c5d12c060210a97e",
        "0xc17d413c935bdbbe"
      ],
      data: []
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setGovernance",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getGovernance",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_admin", type: "Address" }],
        name: "setAdmin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getAdmin",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_dex", type: "Address" }],
        name: "setDex",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getDex",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setSicx",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getSicx",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setStaking",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getStaking",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_path", type: "[]Address" },
          { default: "0x0", name: "_minReceive", type: "int" }
        ],
        name: "route",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { indexed: "0x1", name: "from", type: "Address" },
          { name: "fromAmount", type: "int" },
          { name: "to", type: "Address" },
          { name: "toAmount", type: "int" }
        ],
        name: "Route",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
      indexed: [
        "Route(Address,int,Address,int)",
        "cx2aa9b28a657e3121b75d3d4fe65e569398645d56"
      ],
      data: [
        "0x8fa29629d14b00000",
        "hx0000000000000000000000000000000000000000",
        "0xc17d413c935bdbbe"
      ]
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setGovernance",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getGovernance",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_admin", type: "Address" }],
        name: "setAdmin",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getAdmin",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_dex", type: "Address" }],
        name: "setDex",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getDex",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setSicx",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getSicx",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setStaking",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getStaking",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_path", type: "[]Address" },
          { default: "0x0", name: "_minReceive", type: "int" }
        ],
        name: "route",
        outputs: [],
        payable: "0x1",
        type: "function"
      },
      {
        inputs: [
          { name: "_from", type: "Address" },
          { name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "tokenFallback",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "fallback",
        outputs: [],
        payable: "0x1",
        type: "fallback"
      },
      {
        inputs: [
          { indexed: "0x1", name: "from", type: "Address" },
          { name: "fromAmount", type: "int" },
          { name: "to", type: "Address" },
          { name: "toAmount", type: "int" }
        ],
        name: "Route",
        type: "eventlog"
      }
    ]
  },
  {
    log: {
      scoreAddress: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
      indexed: [
        "Transfer(Address,Address,int,bytes)",
        "hxaa7a2e3b9bae545b590c3c74c5d12c060210a97e",
        "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
        "0x8fa29629d14b00000"
      ],
      data: [
        "0x7b226d6574686f64223a225f73776170222c22706172616d73223a7b22746f546f6b656e223a22637830303030303030303030303030303030303030303030303030303030303030303030303030303030222c226d696e696d756d52656365697665223a223133393332353536303831343235373338353936222c2270617468223a5b22637832363039623932346533336566303062363438613430393234356337656133393463343637383234222c6e756c6c5d7d7d"
      ]
    },
    abi: [
      {
        inputs: [],
        name: "name",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ type: "str" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "balanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [
          { indexed: "0x1", name: "_from", type: "Address" },
          { indexed: "0x1", name: "_to", type: "Address" },
          { indexed: "0x1", name: "_value", type: "int" },
          { name: "_data", type: "bytes" }
        ],
        name: "Transfer",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_amount", type: "int" }],
        name: "burn",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_to", type: "Address" },
          { name: "_value", type: "int" },
          { default: null, name: "_data", type: "bytes" }
        ],
        name: "transfer",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_value", type: "int" }],
        name: "stake",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_time", type: "int" }],
        name: "setUnstakingPeriod",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setFramdNodeAddress",
        outputs: [],
        type: "function"
      },
      {
        inputs: [],
        name: "getFramdNodeAddress",
        outputs: [{ type: "Address" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getUnstakingPeriod",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getCurrentBlockTime",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "stakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "unstakedBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "availableBalanceOf",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "totalStakedBalance",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "stakingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setStakingEnabled", outputs: [], type: "function" },
      {
        inputs: [],
        name: "taxingEnabled",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      { inputs: [], name: "setTaxingEnabled", outputs: [], type: "function" },
      {
        inputs: [{ name: "_owner", type: "Address" }],
        name: "detailsBalanceOf",
        outputs: [{ type: "dict" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "IsClaimable",
        outputs: [{ type: "bool" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getBuyTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [],
        name: "getSellTaxRate",
        outputs: [{ type: "int" }],
        readonly: "0x1",
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedRouter",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setBalancedDex",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "setTreasury",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setSellTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [{ name: "_perc", type: "int" }],
        name: "setBuyTax",
        outputs: [],
        type: "function"
      },
      {
        inputs: [
          { name: "_type", type: "str" },
          { name: "_valueBefore", type: "int" },
          { name: "_taxApplied", type: "int" },
          { name: "_originatorAddress", type: "Address" }
        ],
        name: "TaxApplied",
        type: "eventlog"
      },
      {
        inputs: [{ name: "_address", type: "Address" }],
        name: "MessageLog",
        type: "eventlog"
      }
    ]
  }
];

module.exports = {
  inputs
};
