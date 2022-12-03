require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    georli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/b7mQGPs3PDSxrr8FL2VfFLrnS4PESDE7',
      accounts: ['fda08b34ee53acc0d2a8e0cb9a43c7bb9efea0f5d358a5cfa63d6370fed73c6a'],
    },
  },
};