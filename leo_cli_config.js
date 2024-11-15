'use strict';
const leoaws = require("leo-aws");

module.exports = {
	publish: [
		{
			leoaws: {
				profile: 'default',
				region: 'us-east-1'
			},
			public: true
		}
	]
};
