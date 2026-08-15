#ethics-security/data
Encryption is the process of transforming **plaintext** into **cyphertext** using algorithms and **encryption keys**. The term *plaintext* refers to the input data to an encryption algorithm that can be read as-is by whatever program that is made to consume it. The term *cyphertext* refers to the data output by the encryption algorithm, that is, without the requisite decryption key, complete gibberish. *Encryption keys* (also decryption keys) are pieces of data needed to encrypt or decrypt some other data using an encryption algorithm.
### Encryption Algorithms
Encryption algorithms fall into one of two types: symmetric and asymmetric. Symmetric encryption algorithms use the same key to both encrypt and decrypt the data, as opposed to asymmetric encryptions, which use different keys for both encryption and decryption. Below are some famous and commonly used (well, not all of them) encryption algorithms.
- RSA (Asymmetric)
- ECC (Asymmetric)
- DES (Symmetric)
- AES (Symmetric)
- Caesar Cypher (Symmetric)
Generally, when we want high-performance, or need to encrypt large volumes of data, the use of symmetric algorithms is preferable, but this comes with the downside that a secure communication channel is required before any encryption can take place. To get such a secure c
channel, the use of asymmetric encryption is required.
### What do we use encryption for?
- Secure Communication
- Data privacy and protection
- Establishing identities
- Trusting content has not been tampered with
- Trusting content has not been corrupted
### Rest vs Transit
Data may need to be encrypted in two places, when it is being stored (at rest) and when it is being transmitted (in transit). Almost always, data is encrypted in transit, but often is just left as plaintext when at rest. This is not as secure as encrypting the data at rest too and also usually violates the user's expectations if they require a password to access the data to begin with.
### Strength
When evaluating an encryption algorithm, there are four major points that algorithms are judged on:
- Key Length
	- Size of key (in bits)
- Robustness
	- Withstand attacks such as a brute force attack
- Performance
	- Encryption time
	- Decryption time
	- Latency
	- Resource consumption
		- CPU time
		- Memory usage
- Compliance
	- Regulatory and standards compliance for a particular use case
However good an encryption algorithm is, it can still be made worse by making a few simple mistakes
- Wrong/insecure settings
- Key mismanagement
- Key leaking
- Humans
