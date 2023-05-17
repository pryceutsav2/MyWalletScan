import axios from 'axios';

const RPC_MAP = {
    "ethereum": "https://eth-mainnet.g.alchemy.com/v2/SvumKLJYPsh2rQv7JLDPx9aIuuuKefKg",
    "optimism": "https://opt-mainnet.g.alchemy.com/v2/EEDR0uVqOyT-6xAMw2utl13294SkA9X8",
    "arbitrum": "https://arb-mainnet.g.alchemy.com/v2/jdaGenmkd6sBDNSO2YCdOoDU2catv0Fl",
    "polygon": "https://polygon-mainnet.g.alchemy.com/v2/_Tsya0b1jCumzNQa63yLVHkvYG1VHHSv",
    "bsc": "https://bscrpc.com"
};

async function getEthBalance(walletAddress, network) {
    try {
        let rpcLink = RPC_MAP[network];
        if (!rpcLink) {
            return "Error: Invalid Network Name";
        }
        const response = await axios.post(rpcLink, {
            jsonrpc: "2.0",
            method: "eth_getBalance",
            params: [walletAddress, "latest"],
            id: 1
        });
        let balance = response.data.result;
        return (parseInt(balance, 16) / 10 ** 18).toFixed(3);
    } catch (error) {
        console.error(error);
        return "Error";
    }
}

export default getEthBalance;
