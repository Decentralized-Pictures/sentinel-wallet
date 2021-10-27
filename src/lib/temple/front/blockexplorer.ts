import { useMemo } from "react";

import {
  isKnownChainId,
  TempleChainId,
  useChainId,
  useStorage,
} from "lib/temple/front";

export type BlockExplorerId = "dcpkt" ;

type BaseUrls = { account?: string; transaction: string };

export type BlockExplorer = {
  id: BlockExplorerId;
  name: string;
  baseUrls: Map<TempleChainId, BaseUrls>;
};

export const BLOCK_EXPLORERS: BlockExplorer[] = [
  {
    id: "dcpkt",
    name: "dcpKT",
    baseUrls: new Map([
      [
        TempleChainId.Mainnet,
        {
          account: "https://explorer.tlnt.net",
          transaction: "https://explorer.tlnt.net",
        },
      ],
    ]),
  },
];

const BLOCK_EXPLORER_STORAGE_KEY = "block_explorer";

export function useBlockExplorer() {
  const [explorerId, setExplorerId] = useStorage<BlockExplorerId>(
    BLOCK_EXPLORER_STORAGE_KEY,
    "dcpkt"
  );
  const explorer = useMemo(
    () => BLOCK_EXPLORERS.find(({ id }) => id === explorerId)!,
    [explorerId]
  );
  return {
    explorer,
    setExplorerId,
  };
}

export function useExplorerBaseUrls() {
  const chainId = useChainId();
  const { explorer } = useBlockExplorer();
  return useMemo<Partial<BaseUrls>>(() => {
    if (chainId && isKnownChainId(chainId)) {
      const fallbackBaseUrls =
        BLOCK_EXPLORERS.find((explorer) =>
          explorer.baseUrls.get(chainId)
        )?.baseUrls.get(chainId) ?? {};
      return explorer.baseUrls.get(chainId) ?? fallbackBaseUrls;
    }
    return {};
  }, [chainId, explorer]);
}
