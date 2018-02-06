# egg-dotenv

Loads environment variables from .env

## Install

```bash
$ npm i egg-dotenv --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.dotenv = {
  enable: true,
  package: 'egg-dotenv',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.dotenv = {
};
```

Refer to [dotenv](https://github.com/motdotla/dotenv#options) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
