pragma solidity >=0.4.22 <0.6.0;

contract Inbox {
    
    string public message;
    
      constructor(string memory initalMessage ) public {
        
        message = initalMessage;
    }
    
    function setMessage(string memory newMessage ) public {
        message = newMessage;
    }
    
   
}
