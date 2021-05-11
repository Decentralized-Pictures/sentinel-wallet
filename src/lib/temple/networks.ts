import { TempleNetwork } from "lib/temple/types";
import { getMessage } from "lib/i18n";

export const NETWORKS: TempleNetwork[] = [
  {
    id: "mainnet",
    name: getMessage("tezosMainnet"),
    nameI18nKey: "tezosMainnet",
    description: "T4L3NT mainnet",
    lambdaContract: "KT1CPuTzwC7h7uLXd5WQmpMFso1HxrLBUtpE",
    type: "main",
    rpcBaseURL: "http://tlnt-chain-rpc-lb-db7a45bbebced7f1.elb.us-west-2.amazonaws.com:8733",
    color: "#83b300",
    disabled: false,
  },
  
];
