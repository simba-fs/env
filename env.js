const dotenv = require('dotenv');

/**
 *	init env with default value
 *	@param {Object} defaultValue - env in key-value pair
 *	@return {Object} process.env
 */
function init(defaultValue){
	dotenv.config();
	for(let i in defaultValue){
		if(!process.env[i]) process.env[i] = defaultValue[i];
	}
	return process.env;
}

module.exports = {
	...dotenv,
	init
};
