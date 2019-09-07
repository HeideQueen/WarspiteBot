const jokes = require('knock-knock-jokes');

module.exports = {
	name: 'joke',
	description: 'silly knock knock jokes',
	execute(message, args) {
		const joke = jokes();
        message.channel.send(joke);
	},
};