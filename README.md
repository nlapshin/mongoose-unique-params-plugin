# mongoose-unique-params-plugin

This plugin adds a static function that analyzes the model and allows you to get a list of keys that are unique

# Install

```sh
npm i mongoose-unique-params-plugin
```

# Usage

```js

const plugin = require("mongoose-unique-params-plugin");

let schema = new mongoose.Schema({
    name: { type: String, unique: true },
    title: { type: String},
    flags: {
    	checked: { type: Boolean, unique: true }
    }
});

schema.plugin(plugin);

let model = mongoose.model("test", schema);

console.log(model.uniqueParams()) // { name: true, flags: { checked: true } }

```

# License

MIT © nlapshin
