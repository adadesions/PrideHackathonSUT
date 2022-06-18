const prideToken = artifacts.require("PrideToken");

module.exports = function (deployer) {
  deployer.deploy(prideToken, 50000000);
};
