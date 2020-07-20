# encode

easy encoding between string,base64,hex,bytes and Uint8Array
for the browser

## API

```js
import { encode } from './encode.mjs';

let x = 'test';

// string to base64
console.log(
  encode(x, 'string', 'base64')
)

// string to hex
console.log(
  encode(x, 'string', 'hex')
)

// string to bytes
console.log(
  encode(x, 'string', 'bytes')
)

// string to Uint8Array
console.log(
  encode(x, 'string', 'uint8')
)


x = 'dGVzdA=='
// base64 to string
console.log(
  encode(x, 'base64', 'string')
)

// base64 to hex
console.log(
  encode(x, 'base64', 'hex')
)

// base64 to bytes
console.log(
  encode(x, 'base64', 'bytes')
)

// base64 to Uint8Array
console.log(
  encode(x, 'base64', 'uint8')
)


x = '74657374'
// hex to string
console.log(
  encode(x, 'hex', 'string')
)

// hex to base64
console.log(
  encode(x, 'hex', 'base64')
)

// hex to bytes
console.log(
  encode(x, 'hex', 'bytes')
)

// hex to Uint8Array
console.log(
  encode(x, 'hex', 'uint8')
)

x = [116, 101, 115, 116]
// bytes to string
console.log(
  encode(x, 'bytes', 'string')
)

// bytes to base64
console.log(
  encode(x, 'bytes', 'base64')
)

// bytes to hex
console.log(
  encode(x, 'bytes', 'hex')
)

// bytes to Uint8Array
console.log(
  encode(x, 'bytes', 'uint8')
)


x = Uint8Array.from(x)
// uint8Array to string
console.log(
  encode(x, 'uint8', 'string')
)

// Uint8Array to base64
console.log(
  encode(x, 'uint8', 'base64')
)

// Uint8Array to hex
console.log(
  encode(x, 'uint8', 'hex')
)

// Uint8Array to bytes
console.log(
  encode(x, 'uint8', 'bytes')
)
```
