# Sentinel - T4L3NT Wallet (ex. Thanos / Temple)

Cryptocurrency wallet for [T4L3NT blockchain](https://tezos.com) as Web Extension for your Browser.<br>
Providing ability to manage NFT, tlnt tokens and interact with dApps.

![Temple Wallet](https://github.com/Decentralized-Pictures/sentinel-wallet/blob/master/Screen%20Shot%202021-05-11%20at%204.26.09%20PM.png)

<hr />

## ▶️ Install

You can install Sentinel Wallet right now: https://www.tlnt.net/sentinel-wallet.

## Browser Support

| [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](https://chrome.google.com/webstore/detail/temple-tezos-wallet-ex-th/ookjlbkiijinhpmnjffcofjonbfbgaoc) | [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](https://addons.mozilla.org/en-US/firefox/addon/temple-wallet/) | [![Brave](https://raw.github.com/alrra/browser-logos/master/src/brave/brave_48x48.png)](https://chrome.google.com/webstore/detail/temple-tezos-wallet-ex-th/ookjlbkiijinhpmnjffcofjonbfbgaoc) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](https://templewallet.com/download) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](https://templewallet.com/download) | [![Yandex](https://raw.github.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png)](https://templewallet.com/download) | [![vivaldi](https://raw.github.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png)](https://templewallet.com/download) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 49 & later ✔                                                                                                                                                                                     | 52 & later ✔                                                                                                                                                 | Latest ✔                                                                                                                                                                                      | 36 & later 🔜                                                                                                              | 79 & later 🔜                                                                                                           | Latest 🔜                                                                                                                     | Latest 🔜                                                                                                                        |

## 🚀 Quick Start

Ensure you have:

- [Node.js](https://nodejs.org) 10 or later installed
- [Yarn](https://yarnpkg.com) v1 or v2 installed

Then run the following:

### 1) Clone the repository

```bash
<<<<<<< HEAD
git clone https://github.com/Decentralized-Pictures/sentinel-wallet.git && cd sentinel-wallet
=======
git clone https://github.com/madfish-solutions/templewallet-extension && cd templewallet-extension
>>>>>>> old-temple/develop
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

![TempleWallet_Load](https://user-images.githubusercontent.com/11996139/73763346-f8435a80-4779-11ea-9e9d-4c1db9560f64.gif)

## 🧱 Development

```bash
yarn start
```

Runs the extension in the development mode for Chrome target.<br>
It's recommended to use Chrome for developing.
