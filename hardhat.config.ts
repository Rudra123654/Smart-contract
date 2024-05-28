import "@nomiclabs/hardhat-waffle";
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";

const SEPOLIA_ETH_URL = process.env.SEPOLIA_ETH_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  networks: {
    sepoliaeth: {
      url: SEPOLIA_ETH_URL,
      accounts: [PRIVATE_KEY], 
    },
  },
};

export default config;


// import "@nomiclabs/hardhat-waffle";
// import "dotenv/config";
// import { HardhatUserConfig } from "hardhat/config";

// const MAINNET_URL = process.env.MAINNET_URL as string;
// const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

// const config: HardhatUserConfig = {
//   solidity: "0.8.11",
//   networks: {
//     mainnet: {
//       url: MAINNET_URL,
//       accounts: [PRIVATE_KEY],
//     },
//   },
// };

// export default config;
