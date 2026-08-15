#software/networking/application-layer 
Often, it is not particularly useful to work with IP and TCP directly. Instead, there exists libraries for working at the application layer, with protocols like HTTP, WebSockets and XMLRPC.

While the exact syntax and libraries are not important, as unlike the [Berkely sockets](Berkeley%20Sockets.md) API, there is no standard implementation or 'way of doing things' beyond the actual network requests. For instance, a HTTP client/server can be created in many different methods, with the only similarities being the support of sending/receiving HTTP `GET`, `PUT`, `POST`, `DELETE`, etc. methods.

Websockets is a a common web standard that is based on TCP ([and soon QUIC](https://datatracker.ietf.org/doc/rfc9220/)). It is used to provide a simple way of doing client/server communication on the web that supports many different data types including JSON, XML, blobs and more.

RPC (Remote Procedure Calling) is a type of protocol which allows for a device to receive instructions to call functions/procedures based on commands given remotely. This differs to using a REST API using HTTP by exposing methods and arguments in ways more closely linked to the program and hardware being used to run them, rather than requiring translation to go through a REST API.