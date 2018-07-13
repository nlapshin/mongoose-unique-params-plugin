let _ = require("lodash");
let objectDeepIteration = require("object-deep-iteration");

module.exports = function UniqueParams(schema) {
	schema.statics.uniqueParams = function() {
		let input = this.schema.obj;
		let output = {};

		objectDeepIteration(input, function(obj, path) {
			if (obj.unique === true) {
				_.set(output, path, true);
			}
		});

		return output;
	};

	return schema;
};
