/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export type NFTCollateralStruct = {
  amount: PromiseOrValue<BigNumberish>;
  currency: PromiseOrValue<string>;
};

export type NFTCollateralStructOutput = [BigNumber, string] & {
  amount: BigNumber;
  currency: string;
};

export type NFTListingStruct = {
  listedOn: PromiseOrValue<BigNumberish>;
  tknAddress: PromiseOrValue<string>;
  tknId: PromiseOrValue<BigNumberish>;
  compliance: PromiseOrValue<string>;
  dailyFee: PromiseOrValue<BigNumberish>;
  returnCondition: PromiseOrValue<BigNumberish>;
  expiry: PromiseOrValue<BigNumberish>;
  collateral: NFTCollateralStruct;
};

export type NFTListingStructOutput = [
  BigNumber,
  string,
  BigNumber,
  string,
  BigNumber,
  number,
  BigNumber,
  NFTCollateralStructOutput
] & {
  listedOn: BigNumber;
  tknAddress: string;
  tknId: BigNumber;
  compliance: string;
  dailyFee: BigNumber;
  returnCondition: number;
  expiry: BigNumber;
  collateral: NFTCollateralStructOutput;
};

export interface NFTLoanVaultInterface extends utils.Interface {
  functions: {
    "borrow(address,(uint256,address,uint256,string,uint256,uint8,uint256,(uint256,string)),uint256)": FunctionFragment;
    "borrowedOn(address,(uint256,address,uint256,string,uint256,uint8,uint256,(uint256,string)),uint256,uint256,uint256,uint256,int256,uint256,address,uint8,uint256)": FunctionFragment;
    "borrowers(uint256)": FunctionFragment;
    "loanedNFT(address,uint256)": FunctionFragment;
    "loanedNFTCount(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "borrow"
      | "borrowedOn"
      | "borrowers"
      | "loanedNFT"
      | "loanedNFTCount"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "borrow",
    values: [
      PromiseOrValue<string>,
      NFTListingStruct,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowedOn",
    values: [
      PromiseOrValue<string>,
      NFTListingStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "loanedNFT",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "loanedNFTCount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrowedOn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrowers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "loanedNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "loanedNFTCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface NFTLoanVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTLoanVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    borrow(
      borrower: PromiseOrValue<string>,
      listing: NFTListingStruct,
      loanExpiry: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    borrowedOn(
      borrower: PromiseOrValue<string>,
      listing: NFTListingStruct,
      loanExpiry: PromiseOrValue<BigNumberish>,
      borroweOn: PromiseOrValue<BigNumberish>,
      price1: PromiseOrValue<BigNumberish>,
      price2: PromiseOrValue<BigNumberish>,
      pl: PromiseOrValue<BigNumberish>,
      returnTknId: PromiseOrValue<BigNumberish>,
      returnedCollectionAdress: PromiseOrValue<string>,
      loanStatus: PromiseOrValue<BigNumberish>,
      returnedOn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    borrowers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    loanedNFT(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        NFTListingStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        number,
        BigNumber
      ] & {
        borrowedOn: BigNumber;
        listing: NFTListingStructOutput;
        sold: BigNumber;
        paid: BigNumber;
        PL: BigNumber;
        loanExpiry: BigNumber;
        returnedTknId: BigNumber;
        returnedCollectionAddress: string;
        status: number;
        returnedOn: BigNumber;
      }
    >;

    loanedNFTCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  borrow(
    borrower: PromiseOrValue<string>,
    listing: NFTListingStruct,
    loanExpiry: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  borrowedOn(
    borrower: PromiseOrValue<string>,
    listing: NFTListingStruct,
    loanExpiry: PromiseOrValue<BigNumberish>,
    borroweOn: PromiseOrValue<BigNumberish>,
    price1: PromiseOrValue<BigNumberish>,
    price2: PromiseOrValue<BigNumberish>,
    pl: PromiseOrValue<BigNumberish>,
    returnTknId: PromiseOrValue<BigNumberish>,
    returnedCollectionAdress: PromiseOrValue<string>,
    loanStatus: PromiseOrValue<BigNumberish>,
    returnedOn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  borrowers(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  loanedNFT(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      NFTListingStructOutput,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      number,
      BigNumber
    ] & {
      borrowedOn: BigNumber;
      listing: NFTListingStructOutput;
      sold: BigNumber;
      paid: BigNumber;
      PL: BigNumber;
      loanExpiry: BigNumber;
      returnedTknId: BigNumber;
      returnedCollectionAddress: string;
      status: number;
      returnedOn: BigNumber;
    }
  >;

  loanedNFTCount(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    borrow(
      borrower: PromiseOrValue<string>,
      listing: NFTListingStruct,
      loanExpiry: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    borrowedOn(
      borrower: PromiseOrValue<string>,
      listing: NFTListingStruct,
      loanExpiry: PromiseOrValue<BigNumberish>,
      borroweOn: PromiseOrValue<BigNumberish>,
      price1: PromiseOrValue<BigNumberish>,
      price2: PromiseOrValue<BigNumberish>,
      pl: PromiseOrValue<BigNumberish>,
      returnTknId: PromiseOrValue<BigNumberish>,
      returnedCollectionAdress: PromiseOrValue<string>,
      loanStatus: PromiseOrValue<BigNumberish>,
      returnedOn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    borrowers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    loanedNFT(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        NFTListingStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        number,
        BigNumber
      ] & {
        borrowedOn: BigNumber;
        listing: NFTListingStructOutput;
        sold: BigNumber;
        paid: BigNumber;
        PL: BigNumber;
        loanExpiry: BigNumber;
        returnedTknId: BigNumber;
        returnedCollectionAddress: string;
        status: number;
        returnedOn: BigNumber;
      }
    >;

    loanedNFTCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    borrow(
      borrower: PromiseOrValue<string>,
      listing: NFTListingStruct,
      loanExpiry: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    borrowedOn(
      borrower: PromiseOrValue<string>,
      listing: NFTListingStruct,
      loanExpiry: PromiseOrValue<BigNumberish>,
      borroweOn: PromiseOrValue<BigNumberish>,
      price1: PromiseOrValue<BigNumberish>,
      price2: PromiseOrValue<BigNumberish>,
      pl: PromiseOrValue<BigNumberish>,
      returnTknId: PromiseOrValue<BigNumberish>,
      returnedCollectionAdress: PromiseOrValue<string>,
      loanStatus: PromiseOrValue<BigNumberish>,
      returnedOn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    borrowers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    loanedNFT(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    loanedNFTCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    borrow(
      borrower: PromiseOrValue<string>,
      listing: NFTListingStruct,
      loanExpiry: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    borrowedOn(
      borrower: PromiseOrValue<string>,
      listing: NFTListingStruct,
      loanExpiry: PromiseOrValue<BigNumberish>,
      borroweOn: PromiseOrValue<BigNumberish>,
      price1: PromiseOrValue<BigNumberish>,
      price2: PromiseOrValue<BigNumberish>,
      pl: PromiseOrValue<BigNumberish>,
      returnTknId: PromiseOrValue<BigNumberish>,
      returnedCollectionAdress: PromiseOrValue<string>,
      loanStatus: PromiseOrValue<BigNumberish>,
      returnedOn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    borrowers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    loanedNFT(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    loanedNFTCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}