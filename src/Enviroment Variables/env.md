# Learn Javascript

## Enviroment Variables (.env | env)

__  __

## Explanation

Enviroment variables are variables that are set outside of the program. They are used to store sensitive data such as API keys, passwords, and other information that should not be stored in the program. Enviroment variables are set in a file called `.env` or `env`. The `.env` file should be added to the `.gitignore` file so it is not uploaded to GitHub. The `.env` file should be in the root directory of the project. The `.env` file should be in the following format: ``KEY=VALUE``.
But, can they can **ALSO** be built into node, and accessed with the `process.env` object. This is useful for things like port numbers, and other things that are not sensitive.


| Syntax | Description |
| --- | --- |
| `KEY=VALUE` | Enviroment variable with one property |


## Example

```js
process.env.NODE_ENV = 'production';

console.log(process.env.NODE_ENV); 

```


