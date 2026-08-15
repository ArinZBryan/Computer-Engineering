#software/networking/application-layer
The _Berkeley sockets API_ is a standard API that exists across many languages and platforms for making and receiving network requests. The original C API defines the following functions in its main header, `sys/socket.h`:
- `int socket(int domain, _socket_type type, int protocol)`
- `int bind(int fd, const struct sockaddr* addr, socklen_t len)`
- `int listen(int fd, int N)`
- `int accept(int fd, struct sockaddr* addr, socklen_t* addr_len)`
- `int connect(int fd, const struct sockaddr* addr, socklen_t len)`
- `ssize_t send(int fd, const void* buf, size_t n, int flags)`
- `ssize_t recv (int fd, void* buf, size_t n, int flags);`
- `int close(int fd)` (defined by `unistd.h`)
The struct `sockaddr` is a stand-in of equal size for `sockaddr_in` and `sockaddr_in6` defined in `netinet/in.h`.

This course primarily uses python's `socket` library, which uses the same terminology and forwards calls to the platform's native C sockets library. Thus, you get equivalences like:

| C API         | C Header       | Python API                                                                          |
| ------------- | -------------- | ----------------------------------------------------------------------------------- |
| `socket`      | `sys/socket.h` | `socket.socket` (class)                                                             |
| `bind`        | `sys/socket.h` | `socket.socket.bind` (instance method)                                              |
| `listen`      | `sys/socket.h` | `socket.socket.listen` (instance method)                                            |
| `accept`      | `sys/socket.h` | `socket.socket.accept` (instance method)                                            |
| `connect`     | `sys/socket.h` | `socket.socket.connect` (instance method)                                           |
| `send`        | `sys/socket.h` | `socket.socket.send` (instance method)<br>`socket.socket.sendall` (instance method) |
| `recv`        | `sys/socket.h` | `socket.socket.recv` (instance method)                                              |
| `close`       | `unistd.h`     | `socket.close` (function)                                                           |
| `AP_INET`     | `sys/socket.h` | `socket.AF_INET`                                                                    |
| `AP_INET6`    | `sys/socket.h` | `socket.AF_INET6`                                                                   |
| `SOCK_STREAM` | `sys/socket.h` | `socket.SOCK_STREAM`                                                                |
| `SOCK_DGRAM`  | `sys/socket.h` | `socket.SOCK_DGRAM`                                                                 |
For simplicity, all code snippets given from here are for the python library, but a similar flow applies to the C library, albeit with more boilerplate in C.

### Acting as a server using TCP
```python
import socket

# accept communication from any IP address
HOST = ''  

# accept communication on TCP port 5000
PORT = 5000 

# create a socket using IPv6 and TCP as the protocols
# use AF_INET instead of AF_INET6 for IPv4 instead of IPv6
with socket.socket(socket.AF_INET6, socket.SOCK_STREAM) as s:
	# bind the socket to communicate at the host,port combination 
	# specified
	s.bind((HOST, PORT)) 
	
	# wait for 1 TCP connection to be created (SYN)
	s.listen(1) 
	
	# accept the TCP connection (SYN+ACK)
	conn, addr = s.accept() 
	with conn: 
		print('Connection from:', addr) 
		while True: 
			# receive 1024 bytes from the TCP connection
			data = conn.recv(1024) 
			if not data: 
				# send all data back via TCP connection
				break conn.sendall(data) 
```
### Acting as a client using TCP
```python
import socket 

# The host (this is local host). Use 127.0.0.1 when using IPv4
HOST = '::1' 

# The same port we used above
PORT = 5000 

# create a socket using IPv6 and TCP as the protocols
# use AF_INET instead of AF_INET6 for IPv4 instead of IPv6
with socket.socket(socket.AF_INET6, socket.SOCK_STREAM) as s: 
	# connect our socket to a remote socket (at localhost) using
	# TCP port 5000
	s.connect((HOST, PORT)) 
	
	# send the data using the TCP connection
	s.sendall(b'Hello, world') 
	
	# receive 1024 bytes back from the TCP connection
	data = s.recv(1024) 
	print('Received: ', repr(data))
```
### Sending Data Using UDP
```python
import socket

HOST = "::1"
PORT = 5005
MESSAGE = b"Hello, World!"

sock = socket.socket(socket.AF_INET6, socket.SOCK_DGRAM)
sock.sendto(MESSAGE, (HOST, PORT))
```
### Receiving Data Using UDP
```python
import socket

HOST = "::1"
PORT = 5005

sock = socket.socket(socket.AF_INET6, socket.SOCK_DGRAM)
sock.bind((HOST, PORT))

# continually recieve blocks of 1024 bytes
while True:
	data, addr = sock.recvfrom(1024)
	print(data)
```