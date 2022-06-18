// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Hello {
  string message = "Hello, world";
  function setMessage(string memory msg_) public {
    message = msg_;
  }

  function getMessage() public view returns (string memory) {
    return message;
  }
  
}
