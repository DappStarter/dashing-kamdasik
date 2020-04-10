require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note pulse color good argue surge stumble'; 
let testAccounts = [
"0x531b4d4a23c7a367e19f1d67d84a0807c6f7e3a66c9999d036d7fcbe8965a257",
"0xdba2079aed165ed70586e4067ee6414131c269ac812a7220ccfff922830777b7",
"0x25e5fa5e501f8219d89018a9c77ada525976872c0512d4dfc50ded4edb3c711c",
"0x2352d4ae0f769b0600a68c77bce01147c0c0a49f20623e6c95b557fad778c692",
"0x262e9f3074d700d07e132958afd905a103e545897fe04bbf596b24a8ec146c85",
"0x624afdd030706924e701aa398ff88f5e2d2950ec640633fbf73206ae92f486be",
"0xdc34ca7afc43fff5353219dfdab3b25aefd36b6e7930f5f908b84b8bac1c423c",
"0xb08bde97c20b6850c16eee7bea25e78314d81203b00a0792be7546307cd4f0f0",
"0x33a5fa4b72ab976753f97860ce76e96a16eb09310c011a47c7a45ce8a1dae64b",
"0x20ed35e23e2aac7439afc466c58ba2650a6f16ea7490ee5917f3c94e3b7c220e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
