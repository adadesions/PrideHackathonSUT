const fs = require("fs");
const Web3 = require("web3");
const web3 = new Web3("ws://localhost:9090");
const helloABI = JSON.parse(fs.readFileSync("./build/contracts/Hello.json"));
const hello = new web3.eth.Contract(
  helloABI.abi,
  "0x832113446eA1F0E9B89441A015665b075a8B746f"
);

const prideABI = JSON.parse(
  fs.readFileSync("./build/contracts/PrideToken.json")
);
const prideToken = new web3.eth.Contract(
  prideABI.abi,
  "0xE52727F88dE5624933df3146DF5d59F2433cE001"
);

const main = async () => {
  console.log(await hello.methods.getMessage().call());
  const name = await prideToken.methods.name().call();
  const totalSupply = await prideToken.methods.totalSupply().call();
  console.log("Name:", name);
  console.log("Total Supply:", web3.utils.toWei(totalSupply, "ether"));

};

main();
