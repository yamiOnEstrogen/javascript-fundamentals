# Learn Javascript

## Buffers

__  __

## Explanation

Buffers are used to store binary data. They are similar to arrays of integers but correspond to raw memory allocations outside the V8 heap. Buffers are created using the `Buffer` class.


| Syntax | Description |
| --- | --- |
| `Buffer.alloc(size)` | Creates a buffer of size bytes |
| `Buffer.allocUnsafe(size)` | Creates a buffer of size bytes. The contents of the new buffer are initialized to zero. |
| `Buffer.allocUnsafeSlow(size)` | Creates a buffer of size bytes. The contents of the new buffer are initialized to zero. |
| `Buffer.from(array)` | Creates a buffer from an array of integers |
| `Buffer.from(string[, encoding])` | Creates a buffer from a string |

## Example

```js

// Create a buffer of size 10
Buffer.alloc(10);

// Create a buffer from an array of integers

Buffer.from([1, 2, 3]);

// Create a buffer from a string

Buffer.from('Hello World', 'utf8');

```
