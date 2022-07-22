/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { NFTFinder, NFTFinderInterface } from "../../contracts/NFTFinder";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "listedOn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tknAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tknId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "compliance",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "dailyFee",
            type: "uint256",
          },
          {
            internalType: "enum ReturnCondition",
            name: "returnCondition",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "currency",
                type: "string",
              },
            ],
            internalType: "struct NFTCollateral",
            name: "collateral",
            type: "tuple",
          },
        ],
        internalType: "struct NFTListing",
        name: "listing",
        type: "tuple",
      },
    ],
    name: "getMatch",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "listedOn",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tknAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tknId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "compliance",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "dailyFee",
                type: "uint256",
              },
              {
                internalType: "enum ReturnCondition",
                name: "returnCondition",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "expiry",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                  {
                    internalType: "string",
                    name: "currency",
                    type: "string",
                  },
                ],
                internalType: "struct NFTCollateral",
                name: "collateral",
                type: "tuple",
              },
            ],
            internalType: "struct NFTListing",
            name: "listing",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "tknAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tknId",
            type: "uint256",
          },
        ],
        internalType: "struct NFTRecommendation",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "listedOn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tknAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tknId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "compliance",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "dailyFee",
            type: "uint256",
          },
          {
            internalType: "enum ReturnCondition",
            name: "returnCondition",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "currency",
                type: "string",
              },
            ],
            internalType: "struct NFTCollateral",
            name: "collateral",
            type: "tuple",
          },
        ],
        internalType: "struct NFTListing",
        name: "listing",
        type: "tuple",
      },
    ],
    name: "getMatchingTknId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "recommendation",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "listedOn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tknAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tknId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "compliance",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "dailyFee",
            type: "uint256",
          },
          {
            internalType: "enum ReturnCondition",
            name: "returnCondition",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "currency",
                type: "string",
              },
            ],
            internalType: "struct NFTCollateral",
            name: "collateral",
            type: "tuple",
          },
        ],
        internalType: "struct NFTListing",
        name: "listing",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "tknAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tknId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "listedOn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tknAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tknId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "compliance",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "dailyFee",
            type: "uint256",
          },
          {
            internalType: "enum ReturnCondition",
            name: "returnCondition",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "currency",
                type: "string",
              },
            ],
            internalType: "struct NFTCollateral",
            name: "collateral",
            type: "tuple",
          },
        ],
        internalType: "struct NFTListing",
        name: "listing",
        type: "tuple",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "listedOn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tknAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tknId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "compliance",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "dailyFee",
            type: "uint256",
          },
          {
            internalType: "enum ReturnCondition",
            name: "returnCondition",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "currency",
                type: "string",
              },
            ],
            internalType: "struct NFTCollateral",
            name: "collateral",
            type: "tuple",
          },
        ],
        internalType: "struct NFTListing",
        name: "listing",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "recommendedCollection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "recommendedId",
        type: "uint256",
      },
    ],
    name: "updateMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611ab28061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a2f3c1601161005b578063a2f3c16014610115578063c9e960e114610147578063f2fde38b14610163578063f7b1a9aa1461017f57610088565b806358afb74c1461008d578063715018a6146100bd5780638da5cb5b146100c757806394777907146100e5575b600080fd5b6100a760048036038101906100a29190611246565b61019b565b6040516100b491906116ab565b60405180910390f35b6100c56101b1565b005b6100cf6101c5565b6040516100dc91906115f0565b60405180910390f35b6100ff60048036038101906100fa9190611246565b6101ee565b60405161010c9190611689565b60405180910390f35b61012f600480360381019061012a91906112fe565b61059c565b60405161013e9392919061164b565b60405180910390f35b610161600480360381019061015c9190611246565b6107ec565b005b61017d60048036038101906101789190611219565b610a55565b005b6101996004803603810190610194919061128f565b610ad9565b005b60006101a6826101ee565b604001519050919050565b6101b9610d45565b6101c36000610dc3565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101f6610e8f565b60005b60018054905081101561056057826020015173ffffffffffffffffffffffffffffffffffffffff166001828154811061023557610234611925565b5b906000526020600020906009020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156102b2575082604001516001828154811061029e5761029d611925565b5b906000526020600020906009020160020154145b1561054d57600260008281526020019081526020016000206040518060600160405290816000820160405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382018054610360906117ec565b80601f016020809104026020016040519081016040528092919081815260200182805461038c906117ec565b80156103d95780601f106103ae576101008083540402835291602001916103d9565b820191906000526020600020905b8154815290600101906020018083116103bc57829003601f168201915b50505050508152602001600482015481526020016005820160009054906101000a900460ff166001811115610411576104106118c7565b5b6001811115610423576104226118c7565b5b815260200160068201548152602001600782016040518060400160405290816000820154815260200160018201805461045b906117ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610487906117ec565b80156104d45780601f106104a9576101008083540402835291602001916104d4565b820191906000526020600020905b8154815290600101906020018083116104b757829003601f168201915b5050505050815250508152505081526020016009820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600a82015481525050915050610597565b80806105589061184f565b9150506101f9565b506040518060600160405280838152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090505b919050565b60026020528060005260406000206000915090508060000160405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461063a906117ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610666906117ec565b80156106b35780601f10610688576101008083540402835291602001916106b3565b820191906000526020600020905b81548152906001019060200180831161069657829003601f168201915b50505050508152602001600482015481526020016005820160009054906101000a900460ff1660018111156106eb576106ea6118c7565b5b60018111156106fd576106fc6118c7565b5b8152602001600682015481526020016007820160405180604001604052908160008201548152602001600182018054610735906117ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610761906117ec565b80156107ae5780601f10610783576101008083540402835291602001916107ae565b820191906000526020600020905b81548152906001019060200180831161079157829003601f168201915b50505050508152505081525050908060090160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600a0154905083565b6000805b60018054905081101561092e57826020015173ffffffffffffffffffffffffffffffffffffffff166001828154811061082c5761082b611925565b5b906000526020600020906009020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156108a9575082604001516001828154811061089557610894611925565b5b906000526020600020906009020160020154145b80156108dd57508260800151600182815481106108c9576108c8611925565b5b906000526020600020906009020160040154145b801561091157508260c00151600182815481106108fd576108fc611925565b5b906000526020600020906009020160060154145b1561091b57600191505b80806109269061184f565b9150506107f0565b5080610a515760018290806001815401808255809150506001900390600052602060002090600902016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190805190602001906109d7929190610ecc565b506080820151816004015560a08201518160050160006101000a81548160ff02191690836001811115610a0d57610a0c6118c7565b5b021790555060c0820151816006015560e082015181600701600082015181600001556020820151816001019080519060200190610a4b929190610ecc565b50505050505b5050565b610a5d610d45565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610acd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac49061160b565b60405180910390fd5b610ad681610dc3565b50565b60005b600180549050811015610d3f57836020015173ffffffffffffffffffffffffffffffffffffffff1660018281548110610b1857610b17611925565b5b906000526020600020906009020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015610b955750836040015160018281548110610b8157610b80611925565b5b906000526020600020906009020160020154145b15610d2c5760405180606001604052808581526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815250600260008381526020019081526020016000206000820151816000016000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019080519060200190610c5e929190610ecc565b506080820151816004015560a08201518160050160006101000a81548160ff02191690836001811115610c9457610c936118c7565b5b021790555060c0820151816006015560e082015181600701600082015181600001556020820151816001019080519060200190610cd2929190610ecc565b505050505060208201518160090160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600a01559050505b8080610d379061184f565b915050610adc565b50505050565b610d4d610e87565b73ffffffffffffffffffffffffffffffffffffffff16610d6b6101c5565b73ffffffffffffffffffffffffffffffffffffffff1614610dc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db89061162b565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6040518060600160405280610ea2610f52565b8152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b828054610ed8906117ec565b90600052602060002090601f016020900481019282610efa5760008555610f41565b82601f10610f1357805160ff1916838001178555610f41565b82800160010185558215610f41579182015b82811115610f40578251825591602001919060010190610f25565b5b509050610f4e9190610fc5565b5090565b60405180610100016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001606081526020016000815260200160006001811115610fab57610faa6118c7565b5b815260200160008152602001610fbf610fe2565b81525090565b5b80821115610fde576000816000905550600101610fc6565b5090565b604051806040016040528060008152602001606081525090565b600061100f61100a846116eb565b6116c6565b90508281526020810184848401111561102b5761102a611992565b5b6110368482856117aa565b509392505050565b60008135905061104d81611a3e565b92915050565b60008135905061106281611a55565b92915050565b600082601f83011261107d5761107c611983565b5b813561108d848260208601610ffc565b91505092915050565b6000604082840312156110ac576110ab611988565b5b6110b660406116c6565b905060006110c684828501611204565b600083015250602082013567ffffffffffffffff8111156110ea576110e961198d565b5b6110f684828501611068565b60208301525092915050565b6000610100828403121561111957611118611988565b5b6111246101006116c6565b9050600061113484828501611204565b60008301525060206111488482850161103e565b602083015250604061115c84828501611204565b604083015250606082013567ffffffffffffffff8111156111805761117f61198d565b5b61118c84828501611068565b60608301525060806111a084828501611204565b60808301525060a06111b484828501611053565b60a08301525060c06111c884828501611204565b60c08301525060e082013567ffffffffffffffff8111156111ec576111eb61198d565b5b6111f884828501611096565b60e08301525092915050565b60008135905061121381611a65565b92915050565b60006020828403121561122f5761122e61199c565b5b600061123d8482850161103e565b91505092915050565b60006020828403121561125c5761125b61199c565b5b600082013567ffffffffffffffff81111561127a57611279611997565b5b61128684828501611102565b91505092915050565b6000806000606084860312156112a8576112a761199c565b5b600084013567ffffffffffffffff8111156112c6576112c5611997565b5b6112d286828701611102565b93505060206112e38682870161103e565b92505060406112f486828701611204565b9150509250925092565b6000602082840312156113145761131361199c565b5b600061132284828501611204565b91505092915050565b61133481611749565b82525050565b61134381611749565b82525050565b61135281611798565b82525050565b60006113638261171c565b61136d8185611727565b935061137d8185602086016117b9565b611386816119a1565b840191505092915050565b600061139e602683611738565b91506113a9826119b2565b604082019050919050565b60006113c1602083611738565b91506113cc82611a01565b602082019050919050565b60006040830160008301516113ef60008601826115d2565b50602083015184820360208601526114078282611358565b9150508091505092915050565b60006101008301600083015161142d60008601826115d2565b506020830151611440602086018261132b565b50604083015161145360408601826115d2565b506060830151848203606086015261146b8282611358565b915050608083015161148060808601826115d2565b5060a083015161149360a0860182611349565b5060c08301516114a660c08601826115d2565b5060e083015184820360e08601526114be82826113d7565b9150508091505092915050565b6000610100830160008301516114e460008601826115d2565b5060208301516114f7602086018261132b565b50604083015161150a60408601826115d2565b50606083015184820360608601526115228282611358565b915050608083015161153760808601826115d2565b5060a083015161154a60a0860182611349565b5060c083015161155d60c08601826115d2565b5060e083015184820360e086015261157582826113d7565b9150508091505092915050565b6000606083016000830151848203600086015261159f8282611414565b91505060208301516115b4602086018261132b565b5060408301516115c760408601826115d2565b508091505092915050565b6115db8161178e565b82525050565b6115ea8161178e565b82525050565b6000602082019050611605600083018461133a565b92915050565b6000602082019050818103600083015261162481611391565b9050919050565b60006020820190508181036000830152611644816113b4565b9050919050565b6000606082019050818103600083015261166581866114cb565b9050611674602083018561133a565b61168160408301846115e1565b949350505050565b600060208201905081810360008301526116a38184611582565b905092915050565b60006020820190506116c060008301846115e1565b92915050565b60006116d06116e1565b90506116dc828261181e565b919050565b6000604051905090565b600067ffffffffffffffff82111561170657611705611954565b5b61170f826119a1565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006117548261176e565b9050919050565b600081905061176982611a2a565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006117a38261175b565b9050919050565b82818337600083830152505050565b60005b838110156117d75780820151818401526020810190506117bc565b838111156117e6576000848401525b50505050565b6000600282049050600182168061180457607f821691505b60208210811415611818576118176118f6565b5b50919050565b611827826119a1565b810181811067ffffffffffffffff8211171561184657611845611954565b5b80604052505050565b600061185a8261178e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561188d5761188c611898565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60028110611a3b57611a3a6118c7565b5b50565b611a4781611749565b8114611a5257600080fd5b50565b60028110611a6257600080fd5b50565b611a6e8161178e565b8114611a7957600080fd5b5056fea2646970667358221220bdb97a9078b3a6eb29907726eef11f5493063bd8526807fece93953a597dc5e064736f6c63430008070033";

type NFTFinderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTFinderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTFinder__factory extends ContractFactory {
  constructor(...args: NFTFinderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTFinder> {
    return super.deploy(overrides || {}) as Promise<NFTFinder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTFinder {
    return super.attach(address) as NFTFinder;
  }
  override connect(signer: Signer): NFTFinder__factory {
    return super.connect(signer) as NFTFinder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTFinderInterface {
    return new utils.Interface(_abi) as NFTFinderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTFinder {
    return new Contract(address, _abi, signerOrProvider) as NFTFinder;
  }
}
