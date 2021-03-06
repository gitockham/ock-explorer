# OCKHAM Explorer 3.0

<p align="center">
    <img src="/banner.png" />
</p>

> Designed and developed from the ground-up, using lean & fast developmental frameworks (Tailwind CSS & Vue.JS).

[![Build Status](https://badgen.now.sh/circleci/github/gitockham/ock-explorer)](https://circleci.com/gh/gitockham/ock-explorer)
[![Codecov](https://badgen.now.sh/codecov/c/github/gitockham/ock-explorer)](https://codecov.io/gh/gitockham/ock-explorer)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

You can access it at [https://explorer.ockham.consulting/](https://explorer.ockham.consulting/).

## Build Setup

### 1. Clone the repository

```bash
git clone https://github.com/gitockham/ock-explorer
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Build for Production

#### 3.1 Mainnet

```bash
yarn build:mainnet
```

#### 3.2 Devnet

```bash
yarn build:devnet
```

#### 3.3 Testnet

```bash
yarn build:testnet
```

#### 3.4 Custom

```bash
yarn build --network my-custom-network
```

#### 3.5 GitHub Pages

If you are going to host your explorer instance on GitHub Pages you will need to specify your base url in most cases as GitHub Pages serves repositories from sub-directories instead of sub-domains.

```bash
yarn build --base https://username.github.io/repository/
```

A running instance of the explorer on GitHub Pages can be found at https://gitockham.github.io/.

> This step is not required if you are hosting the explorer on your "root" repository which is usually your username https://username.github.io/.

#### 3.6 Run Express Server

You can run the explorer as an express server. This makes it a little more light-weight but not needing to have services such as apache or nginx.

```bash
EXPLORER_HOST="127.0.0.1" EXPLORER_PORT="4200" node express-server.js
```

> Keep in mind that this requires you to run your own server and a running instance of nginx.

### 4. Development

#### 4.1 Mainnet

```bash
yarn dev # or yarn dev:mainnet
```

#### 4.2 Devnet

```bash
yarn dev:devnet
```

#### 4.3 Custom

```bash
yarn dev --env.network=custom
```

### 5. History Mode

If you wish to remove the `/#/` from your URLs you can follow those steps https://router.vuejs.org/en/essentials/history-mode.html.

#### 5.1 Build

```bash
yarn build:mainnet --history
```

#### 5.2 Development

```bash
yarn dev --env.routerMode=history
```

## Testing

``` bash
$ yarn test
```

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@ockham.consulting. All security vulnerabilities will be promptly addressed.

## Contributing

* If you find any bugs, submit an [issue](../../issues) or open a [pull-request](../../pulls), helping us catch and fix them.
* Engage with other users and developers on the [OCKHAM Slack](https://ockham.consulting/slack/).
* Join our [gitter](https://gitter.im/ock-developers/Lobby).
* [Contribute bounties](https://github.com/gitockham/bounty-program).

## Credits

- [Brian Faust](https://github.com/faustbrian)
- [Lúcio Rubens](https://github.com/luciorubeens)
- [Alex Barnsley](https://github.com/alexbarnsley)
- [Luc Talrico](https://github.com/gitockham)
- [All Contributors](../../contributors)

## License

[MIT](LICENSE) © [OCKHAM CONSULTING INSTITUTE](https://ockham.consulting)
