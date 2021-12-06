# Sentinel - T4L3NT Wallet

Cryptocurrency wallet for [T4L3NT blockchain](https://tlnt.net) as Web Extension for your Browser.<br>
Providing ability to manage NFT, tlnt tokens and interact with dApps.

![Sentinel Wallet](public/misc/Untitled-1.png)

<hr />

## ▶️ Install

You can install Sentinel Wallet right now: https://www.tlnt.net/sentinel-wallet.

## Browser Support

| [![Chrome](public/misc/Untitled-2.png)](https://chrome.google.com/webstore/detail/temple-tezos-wallet-ex-th/ookjlbkiijinhpmnjffcofjonbfbgaoc) | [![Firefox](public/misc/Untitled-3.png)](https://addons.mozilla.org/en-US/firefox/addon/temple-wallet/) | [![Brave](public/misc/Untitled-4.png)](https://chrome.google.com/webstore/detail/temple-tezos-wallet-ex-th/ookjlbkiijinhpmnjffcofjonbfbgaoc) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](https://templewallet.com/download) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](https://templewallet.com/download) | [![Yandex](https://raw.github.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png)](https://templewallet.com/download) | [![vivaldi](https://raw.github.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png)](https://templewallet.com/download) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 49 & later ✔                                                                                                                                                                                     | 52 & later 🔜                                                                                                                                                 | Latest 🔜                                                                                                                                                                                      | 36 & later 🔜                                                                                                              | 79 & later 🔜                                                                                                           | Latest 🔜                                                                                                                     | Latest 🔜                                                                                                                        |

## 🚀 Quick Start

Ensure you have:

- [Node.js](https://nodejs.org) 10 or later installed
- [Yarn](https://yarnpkg.com) v1 or v2 installed

Then run the following:

### 1) Clone the repository

```bash
git clone https://github.com/Decentralized-Pictures/sentinel-wallet.git && cd sentinel-wallet
```

### 2) Install dependencies

```bash
yarn
```

### 3) Build

Builds the extension for production to the `dist` folder.<br>
It correctly bundles in production mode and optimizes the build for the best performance.

```bash
# for Chrome by default
yarn build
```

Optional for different browsers:

```bash
# for Chrome directly
yarn build:chrome
# for Firefox directly
yarn build:firefox
# for Opera directly
yarn build:opera

# for all at once
yarn build-all
```

### 4) Load extension to your Browser

![SentinelWallet_Load](https://user-images.githubusercontent.com/11996139/73763346-f8435a80-4779-11ea-9e9d-4c1db9560f64.gif)

## 🧱 Development

```bash
yarn start
```

Runs the extension in the development mode for Chrome target.<br>
It's recommended to use Chrome for developing.
