# Learn Javascript

## Classes

__  __

## Explanation

Classes are a template for creating objects. They encapsulate data with code to work on that data.

| Type | Description |
| :--- | :--- |
| `class` | Declares a class. |
| `contructor` | Declares a class constructor. |
| `super` | Calls the parent constructor. |
| `extends` | Creates a class which is a child of another class. |
| `static` | Declares a static method for a class. |
| `get` | Declares a getter method for an object. |
| `set` | Declares a setter method for an object. |




## Example

```javascript
class example {
    constructor() {
        this.name = "example";
    }

    getName() {
        return this.name;
    }
    
    setName(name) {
        this.name = name;
    }

}

module.exports = example;
```

