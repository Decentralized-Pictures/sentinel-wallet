import { TempleChainId, TempleNetwork } from 'lib/temple/types';

// const formatDateToRPCFormat = (date: Date) => date.toLocaleDateString('en-GB').split('/').reverse().join('-');

// const getLastMonday = (date = new Date()) => {
//   const dateCopy = new Date(date.getTime() - 604800000);
//
//   const nextMonday = new Date(dateCopy.setDate(dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7)));
//
//   return formatDateToRPCFormat(nextMonday);
// };

export const NETWORK_IDS = new Map<string, string>([
  [TempleChainId.Mainnet, 'mainnet'],
  [TempleChainId.Ghostnet, 'ghostnet'],
  [TempleChainId.Jakartanet, 'jakartanet'],
  [TempleChainId.Limanet, 'limanet']
]);

export const NETWORKS: TempleNetwork[] = [
  {
    id: 'mainnet',
    name: 'T4L3NT Mainnet',
    description: 'Decentralized pictures Betanet',
    type: 'dcp',
    rpcBaseURL: 'https://rpc.decentralized.pictures',
    color: '#047857',
    disabled: false
  },
  {
    id: 't4l3nt-testnet',
    name: 'T4L3NT Testnet',
    description: 'Decentralized pictures testnet',
    type: 'dcp',
    rpcBaseURL: 'https://staging-rpc.decentralized.pictures/',
    color: '#131380',
    disabled: false
  }
];
