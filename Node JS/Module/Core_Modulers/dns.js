//The DNS (Domain Name System) module in Node.js provides functions for performing DNS lookups and other DNS-related operations, 
  //such as resolving domain names to IP addresses and retrieving DNS record information.

const dns = require('dns');

dns.lookup('www.example.com', (err, address, family) => {
  if (err) throw err;
  console.log('IP Address:', address);
  console.log('Address Family:', family);
});


