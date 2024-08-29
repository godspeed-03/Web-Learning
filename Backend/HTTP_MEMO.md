### 1xx : Information Response
- 100 : Continue — Server received request from Headers. After, Client should send Body.
- 101 : Switching Protocol — Notice server change Protocol
- 103 : Processing— Server received request and processing
- 103 : Early Hints — Return the response of some Headers before all information is sent

### 2xx : Successful
- 200 : OK
- 201 : Created
- 202 : Accepted
- 203 : Non-Authoritative Information
- 204 : No Content
- 205 : Reset Content
- 206 : Partial Content
- 207 : Multi-Status
- 208 : Already Reported
- 226 : IM Used — Server has successfully processed the resource request. and the response showed all the results. or part of the resource

### 3xx : Redirection
- 300 : Multiple Choice — Multiple resource for Client
- 301 : Moved Permanently
- 302 : Found
- 303 : See Other
- 304 : Not Modified
- 305 : Use Proxy
- 306 : Switch Proxy (Permanent)
- 307 : Temporary Redirect
- 308 : Permanent Redirect (Experimental)

### 4xx : Client Side Error
- 400 : Bad Request
- 401 : Unauthorized
- 402 : Payment Required
- 403 : Forbidden
- 404 : Not Found
- 405 : Method Not Allowed
- 406 : Not Acceptable
- 407 : Proxy Authentication Required
- 408 : Request Timeout
- 409 : Conflict
- 410 : Gone
- 411 : Length Required
- 412 : Precondition Failed
- 413 : Request Entity Too Large (Payload Too Large)
- 414 : Request URI Too Long
- 415 : Unsupported Media Type
- 416 : Requested Range Not Satisfiable
- 417 : Expectation Failed
- 417 : I’m a teapot (Easter Egg)
- 421 : Misdirected Request
- 422 : Unprocessable Entity
- 423 : Locked
- 424 : Failed Dependency
- 425 : Too Early
- 426 : Upgrade Required
- 428 : Precondition Required
- 429 : Too Many Requests
- 431 : Request Header Fields Too Large
- 451 : Unavailable For Legal Reasons

### 5xx : Server Side Error
- 500 : Internal Server Error
- 501 : Not Implemented
- 502 : Bad Gateway
- 503 : Service Unavailable
- 504 : Gateway Timeout
- 505 : HTTP Version Not Supported
- 506 : Variant Also Negotiates
- 507 : Insufficient Storage
- 508 : Loop Detected
- 510 : Not Extended
- 511 : Network Authentication Require