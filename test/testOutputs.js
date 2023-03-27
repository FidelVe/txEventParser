const outputs = [
  {
    origin: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
    params: [{ name: "_value", type: "int", value: "0x4fefa17b7240000" }],
    methodName: "TaxCollectedForTreasury"
  },
  {
    origin: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
    params: [{ name: "_value", type: "int", value: "0xefcee47256c0000" }],
    methodName: "TaxCollectedForLP"
  },
  {
    origin: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
    params: [{ name: "_value", type: "int", value: "0x127260579084ec4" }],
    methodName: "AmountOfsICXToPair"
  },
  {
    origin: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
    params: [{ name: "_value", type: "int", value: "0xb2b1a662499aae2563" }],
    methodName: "AmountInTreasury"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      {
        name: "_token",
        type: "Address",
        value: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56"
      },
      {
        name: "_owner",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0xefcee47256c0000" }
    ],
    methodName: "Deposit"
  },
  {
    origin: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      { name: "_value", type: "int", value: "0xefcee47256c0000" },
      {
        name: "_data",
        type: "bytes",
        value: "0x7b226d6574686f64223a225f6465706f736974227d"
      }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cx2609b924e33ef00b648a409245c7ea394c467824",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      { name: "_value", type: "int", value: "0x127260579084ec4" },
      {
        name: "_data",
        type: "bytes",
        value: "0x7b226d6574686f64223a225f6465706f736974227d"
      }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      {
        name: "_token",
        type: "Address",
        value: "cx2609b924e33ef00b648a409245c7ea394c467824"
      },
      {
        name: "_owner",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0x127260579084ec4" }
    ],
    methodName: "Deposit"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      { name: "_id", type: "int", value: "0x30" },
      {
        name: "_owner",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0x4084154109e3519" },
      { name: "_base", type: "int", value: "0xefcee47256c0000" },
      { name: "_quote", type: "int", value: "0x11cca8ded80a621" }
    ],
    methodName: "Add"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      {
        name: "_operator",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      {
        name: "_from",
        type: "Address",
        value: "hx0000000000000000000000000000000000000000"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_id", type: "int", value: "0x30" },
      { name: "_value", type: "int", value: "0x4084154109e3519" }
    ],
    methodName: "TransferSingle"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      {
        name: "_token",
        type: "Address",
        value: "cx2609b924e33ef00b648a409245c7ea394c467824"
      },
      {
        name: "_owner",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0xa5b778b87a8a3" }
    ],
    methodName: "Withdraw"
  },
  {
    origin: "cx2609b924e33ef00b648a409245c7ea394c467824",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0xa5b778b87a8a3" },
      { name: "_data", type: "bytes", value: "0x4e6f6e65" }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
    params: [
      {
        name: "_tokenAddres",
        type: "Address",
        value: "cx2609b924e33ef00b648a409245c7ea394c467824"
      },
      {
        name: "_sender",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      { name: "_value", type: "int", value: "0xa5b778b87a8a3" }
    ],
    methodName: "DepositToken"
  },
  {
    origin: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "hxaa7a2e3b9bae545b590c3c74c5d12c060210a97e"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0xc7d713b49da00000" },
      {
        name: "_data",
        type: "bytes",
        value: "0x7b226d6574686f64223a227461784465706f736974227d"
      }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
    params: [
      { name: "_type", type: "str", value: "SELL" },
      { name: "_valueBefore", type: "int", value: "0x8fa29629d14b00000" },
      { name: "_taxApplied", type: "int", value: "0xc7d713b49da00000" },
      {
        name: "_originatorAddress",
        type: "Address",
        value: "hxaa7a2e3b9bae545b590c3c74c5d12c060210a97e"
      }
    ],
    methodName: "TaxApplied"
  },
  {
    origin: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
    params: [{ name: "_value", type: "int", value: "0x1262a294b670000" }],
    methodName: "TaxCollectedForTreasury"
  },
  {
    origin: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
    params: [{ name: "_value", type: "int", value: "0x3727e7be2350000" }],
    methodName: "TaxCollectedForLP"
  },
  {
    origin: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
    params: [{ name: "_value", type: "int", value: "0x43e2584c7a3b13" }],
    methodName: "AmountOfsICXToPair"
  },
  {
    origin: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
    params: [{ name: "_value", type: "int", value: "0xb2b1b0bdc12635ce06" }],
    methodName: "AmountInTreasury"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      {
        name: "_token",
        type: "Address",
        value: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56"
      },
      {
        name: "_owner",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0x3727e7be2350000" }
    ],
    methodName: "Deposit"
  },
  {
    origin: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      { name: "_value", type: "int", value: "0x3727e7be2350000" },
      {
        name: "_data",
        type: "bytes",
        value: "0x7b226d6574686f64223a225f6465706f736974227d"
      }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cx2609b924e33ef00b648a409245c7ea394c467824",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      { name: "_value", type: "int", value: "0x43e2584c7a3b13" },
      {
        name: "_data",
        type: "bytes",
        value: "0x7b226d6574686f64223a225f6465706f736974227d"
      }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      {
        name: "_token",
        type: "Address",
        value: "cx2609b924e33ef00b648a409245c7ea394c467824"
      },
      {
        name: "_owner",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0x43e2584c7a3b13" }
    ],
    methodName: "Deposit"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      { name: "_id", type: "int", value: "0x30" },
      {
        name: "_owner",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0xed6b2f7eb3bf66" },
      { name: "_base", type: "int", value: "0x3727e7be2350000" },
      { name: "_quote", type: "int", value: "0x418081ec62b591" }
    ],
    methodName: "Add"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      {
        name: "_operator",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      {
        name: "_from",
        type: "Address",
        value: "hx0000000000000000000000000000000000000000"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_id", type: "int", value: "0x30" },
      { name: "_value", type: "int", value: "0xed6b2f7eb3bf66" }
    ],
    methodName: "TransferSingle"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      {
        name: "_token",
        type: "Address",
        value: "cx2609b924e33ef00b648a409245c7ea394c467824"
      },
      {
        name: "_owner",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0x261d660178582" }
    ],
    methodName: "Withdraw"
  },
  {
    origin: "cx2609b924e33ef00b648a409245c7ea394c467824",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0x261d660178582" },
      { name: "_data", type: "bytes", value: "0x4e6f6e65" }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cxed0f02a1a61b483bd366021d68af8469414b7be8",
    params: [
      {
        name: "_tokenAddres",
        type: "Address",
        value: "cx2609b924e33ef00b648a409245c7ea394c467824"
      },
      {
        name: "_sender",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      { name: "_value", type: "int", value: "0x261d660178582" }
    ],
    methodName: "DepositToken"
  },
  {
    origin: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxed0f02a1a61b483bd366021d68af8469414b7be8"
      },
      { name: "_value", type: "int", value: "0x2df69673c8180000" },
      {
        name: "_data",
        type: "bytes",
        value: "0x7b226d6574686f64223a227461784465706f736974227d"
      }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
    params: [
      { name: "_type", type: "str", value: "BUY" },
      { name: "_valueBefore", type: "int", value: "0x8cc32cc294c980000" },
      { name: "_taxApplied", type: "int", value: "0x2df69673c8180000" },
      {
        name: "_originatorAddress",
        type: "Address",
        value: "hxaa7a2e3b9bae545b590c3c74c5d12c060210a97e"
      }
    ],
    methodName: "TaxApplied"
  },
  {
    origin: "cx2609b924e33ef00b648a409245c7ea394c467824",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      {
        name: "_to",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      { name: "_value", type: "int", value: "0xa69f7760252d5f25" },
      { name: "_data", type: "bytes", value: "0x4e6f6e65" }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cx2609b924e33ef00b648a409245c7ea394c467824",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      {
        name: "_to",
        type: "Address",
        value: "cx5faae53c4dbd1fbe4a2eb4aab6565030f10da5c6"
      },
      { name: "_value", type: "int", value: "0x4028d2c014adc4" },
      { name: "_data", type: "bytes", value: "0x4e6f6e65" }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      { name: "_id", type: "int", value: "0x30" },
      {
        name: "_baseToken",
        type: "Address",
        value: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56"
      },
      {
        name: "_fromToken",
        type: "Address",
        value: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56"
      },
      {
        name: "_toToken",
        type: "Address",
        value: "cx2609b924e33ef00b648a409245c7ea394c467824"
      },
      {
        name: "_sender",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      {
        name: "_receiver",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      { name: "_fromValue", type: "int", value: "0x8cc32cc294c980000" },
      { name: "_toValue", type: "int", value: "0xa69f7760252d5f25" },
      { name: "_timestamp", type: "int", value: "0x5f795a3c6fb46" },
      { name: "_lpFees", type: "int", value: "0x360d81d3ef68000" },
      { name: "_balnFees", type: "int", value: "0x360d81d3ef68000" },
      { name: "_poolBase", type: "int", value: "0x87a12855cd3b1808bad9" },
      { name: "_poolQuote", type: "int", value: "0xa0fd40546b93f4d505a" },
      { name: "_endingPrice", type: "int", value: "0x1078fe3b536dc81" },
      {
        name: "_effectiveFillPrice",
        type: "int",
        value: "0xbb951a584ec8a259"
      }
    ],
    methodName: "Swap"
  },
  {
    origin: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      { name: "_value", type: "int", value: "0x8cc32cc294c980000" },
      {
        name: "_data",
        type: "bytes",
        value:
          "0x7b226d6574686f64223a225f73776170222c22706172616d73223a7b22746f546f6b656e223a22637832363039623932346533336566303062363438613430393234356337656133393463343637383234227d7d"
      }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cx2609b924e33ef00b648a409245c7ea394c467824",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      {
        name: "_to",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      { name: "_value", type: "int", value: "0xa69f7760252d5f25" },
      {
        name: "_data",
        type: "bytes",
        value: "0x7b226d6574686f64223a225f737761705f696378227d"
      }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      { name: "_id", type: "int", value: "0x1" },
      {
        name: "_baseToken",
        type: "Address",
        value: "cx2609b924e33ef00b648a409245c7ea394c467824"
      },
      {
        name: "_fromToken",
        type: "Address",
        value: "cx2609b924e33ef00b648a409245c7ea394c467824"
      },
      {
        name: "_toToken",
        type: "Address",
        value: "hx0000000000000000000000000000000000000000"
      },
      {
        name: "_sender",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      {
        name: "_receiver",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      { name: "_fromValue", type: "int", value: "0xa69f7760252d5f25" },
      { name: "_toValue", type: "int", value: "0xc17d413c935bdbbe" },
      { name: "_timestamp", type: "int", value: "0x5f795a3c6fb46" },
      { name: "_lpFees", type: "int", value: "0x12a96987b23e6cf" },
      { name: "_balnFees", type: "int", value: "0x7ff765eba1ac0f" },
      { name: "_poolBase", type: "int", value: "0x27d9387ec67e62b7585c0" },
      { name: "_poolQuote", type: "int", value: "0x0" },
      { name: "_endingPrice", type: "int", value: "0x10473a2e0af949cb" },
      {
        name: "_effectiveFillPrice",
        type: "int",
        value: "0x101d8e13fb81090e"
      }
    ],
    methodName: "Swap"
  },
  {
    origin: "cx10d59e8103ab44635190bd4139dbfd682fa2d07e",
    params: [
      {
        name: "_user",
        type: "Address",
        value: "hx1e79bb8aaf75d34d618d80db8485f5bedcb67735"
      },
      { name: "_source", type: "str", value: "sICX/ICX" },
      { name: "_value", type: "int", value: "0xf7409d699f305b" }
    ],
    methodName: "RewardsAccrued"
  },
  {
    origin: "cx2609b924e33ef00b648a409245c7ea394c467824",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      {
        name: "_to",
        type: "Address",
        value: "cx5faae53c4dbd1fbe4a2eb4aab6565030f10da5c6"
      },
      { name: "_value", type: "int", value: "0x7ff765eba1ac0f" },
      { name: "_data", type: "bytes", value: "0x4e6f6e65" }
    ],
    methodName: "Transfer"
  },
  {
    origin: "cxa0af3165c08318e988cb30993b3048335b94af6c",
    params: [
      {
        name: "null",
        type: "Address",
        value: "cxa0af3165c08318e988cb30993b3048335b94af6c"
      },
      {
        name: "null",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      { name: "null", type: "int", value: "0xc17d413c935bdbbe" }
    ],
    methodName: "ICXTransfer"
  },
  {
    origin: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
    params: [
      {
        name: "null",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      {
        name: "null",
        type: "Address",
        value: "hxaa7a2e3b9bae545b590c3c74c5d12c060210a97e"
      },
      { name: "null", type: "int", value: "0xc17d413c935bdbbe" }
    ],
    methodName: "ICXTransfer"
  },
  {
    origin: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231",
    params: [
      {
        name: "from",
        type: "Address",
        value: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56"
      },
      { name: "fromAmount", type: "int", value: "0x8fa29629d14b00000" },
      {
        name: "to",
        type: "Address",
        value: "hx0000000000000000000000000000000000000000"
      },
      { name: "toAmount", type: "int", value: "0xc17d413c935bdbbe" }
    ],
    methodName: "Route"
  },
  {
    origin: "cx2aa9b28a657e3121b75d3d4fe65e569398645d56",
    params: [
      {
        name: "_from",
        type: "Address",
        value: "hxaa7a2e3b9bae545b590c3c74c5d12c060210a97e"
      },
      {
        name: "_to",
        type: "Address",
        value: "cx21e94c08c03daee80c25d8ee3ea22a20786ec231"
      },
      { name: "_value", type: "int", value: "0x8fa29629d14b00000" },
      {
        name: "_data",
        type: "bytes",
        value:
          "0x7b226d6574686f64223a225f73776170222c22706172616d73223a7b22746f546f6b656e223a22637830303030303030303030303030303030303030303030303030303030303030303030303030303030222c226d696e696d756d52656365697665223a223133393332353536303831343235373338353936222c2270617468223a5b22637832363039623932346533336566303062363438613430393234356337656133393463343637383234222c6e756c6c5d7d7d"
      }
    ],
    methodName: "Transfer"
  }
];

module.exports = {
  outputs
};
