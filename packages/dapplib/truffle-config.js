require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remove coach guess kite metal giant'; 
let testAccounts = [
"0x7a8b8fdd745722c6fb8a67c6c0dcb0d8b90dcfbcea60b997f941096945978ef4",
"0x260ac10021e3cf9f2f64176eb8abffcf8df4444cff58838eab7d9f07ba37d154",
"0x30947e05dbf0cbb417576a3cbb62d71698520ee982d789a0290b9579e71624dd",
"0xb621436fe36a463010f71472e3e9b3b4c5120b2dddde677e17080c5258b46a9f",
"0xb9ebaeb4bf9a32c8f20c93179e6ad8a23b5d6d391f54b85b61f35ced1c459aeb",
"0xe849d8f29b46af66e2c2048f0fd0cc2e98d9f53b4ddfcc224d1579b26e2c930e",
"0x0a071387f6e6dabcac2f9495688eea5c069c7b7e6f369c8be01825aae273b40a",
"0xfa8845f3d0a797905c3b3e1185eaad086b5a3c0a8c20088ab2e35c14da5e2689",
"0x0042a33f2936bfc2e14e7fcb7d2b8457cd9266381f9d575d4cacc03f9f12f6a2",
"0xfb80c3a0c1d6cdc115a371223fc05573d079319cff3005aa1892455710b8e4d7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

