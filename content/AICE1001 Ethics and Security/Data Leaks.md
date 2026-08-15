#ethics-security/data
A data leak is the unauthorised exposure of data, often due to poor design, human error, or malicious activity. This commonly due to technical failures, process failures or direct attacks exploiting the lack of security in a system, whether that is intentional or due to negligence or accident. Making sure that data leaks don't happen is incredibly important, as letting one happen can cause loss of trust and legal implications, on top of any moral/ethical implications.
### Why do data leaks happen?
##### Weak System Design
- Poor Authentication
	- Failure to verify an email
	- Poor strength passwords
- Unencrypted Databases
	- Storing customer data in plaintext
- Insecure APIs
	- No role-limited access
	- Unvalidated requests
##### Overly Permissive Access
- Overly spread admin rights
- Overly permissive roles
- No access logs
- Unrestricted file sharing
##### Neglected Data Lifecycle
- Old Backups
	- Indefinite Storage
	- No password
	- Not encrypted
- No data deletion policy
- Orphaned / Deprecated / 'Sunsetted' systems
	- Not properly removing old systems
##### Human Error
- Misconfiguration of systems
- Typos
	- Mistyping emails and sending them to the wrong person
- Weak security practices
	- Code re-use
### How to prevent data leaks
- Minimise data collection
- Be secure by design
- Audit systems regularly
- Encrypt data
- Plan for when a data breach will happen
- Anonymise data
- Test for potential entry points/methods of leaking.