var { assert } = require("chai");

var mongoose = require('mongoose');
var plugin = require("./index");

describe('mongoose-unique-params-plugin', function() {

	it('it should return list of unique params for simple schema', function() {
		var schema = new mongoose.Schema({
		    name: { type: String, unique: true },
		    title: { type: String},
		    flags: {
		    	checked: { type: Boolean, unique: true }
		    }
		});

		schema.plugin(plugin);

		var model = mongoose.model("test", schema);

		assert.deepEqual(model.uniqueParams(), {
			name: true, flags: { checked: true }
		});
	});
})
