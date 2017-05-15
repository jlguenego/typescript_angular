module.exports = function(config) {
	'use strict';

	config.set({

		basePath: '../../../',

		files: [
			{
				pattern: 'app/24_karma/app/*.ts'
			},
			{
				pattern: 'app/24_karma/test/unit/**/*.ts'
			}
		],

		preprocessors: {
			'**/*.ts': ['karma-typescript'],
		},

		frameworks: ['jasmine', 'karma-typescript'],

		browsers: ['Chrome'],

		karmaTypescriptConfig: {
            tsconfig: "app/24_karma/test/tsconfig.json"
        },


	});
};
