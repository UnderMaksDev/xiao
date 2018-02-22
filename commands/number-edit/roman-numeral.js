const { Command } = require('discord.js-commando');
const numerals = require('../../assets/json/roman-numeral');

module.exports = class RomanNumeralCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'roman-numeral',
			aliases: ['roman'],
			group: 'number-edit',
			memberName: 'roman-numeral',
			description: 'Converts a number to roman numerals.',
			args: [
				{
					key: 'number',
					prompt: 'What number would you like to convert to roman numerals?',
					type: 'integer',
					max: 4999
				}
			]
		});
	}

	run(msg, { number }) {
		let result = '';
		for (const [numeral, value] of Object.entries(numerals)) {
			while (number >= value) {
				result += numeral;
				number -= value;
			}
		}
		return msg.say(result);
	}
};