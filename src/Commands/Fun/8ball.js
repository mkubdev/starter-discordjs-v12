const Command = require('../../Structures/Command');

const answers = [
	'Maybe.',
	'Certainly not.',
	'I hope so.',
	'Not in your wildest dreams.',
	'There is a good chance.',
	'Quite likely.',
	'I think so.',
	'I hope not.',
	'I hope so.',
	'Never!',
	'Fuhgeddaboudit.',
	'Ahaha! Really?!?',
	'Pfft.',
	'Sorry, bucko.',
	'Hell, yes.',
	'Hell to the no.',
	'The future is bleak.',
	'The future is uncertain.',
	'I would rather not say.',
	'Who cares?',
	'Possibly.',
	'Never, ever, ever.',
	'There is a small chance.',
	'Yes!'
];

const answers_fr = [
	'Peux-être.',
	'Certainement pas.',
	'Qui s\'en fou ?',
	'J\'éspère.',
	'Oui !',
	'Ta gueule !',
	'Désolé aujourd\'hui, je suis en grève. #CGT bro',
	'Possible.',
	'La vie est pleine de questions...',
	'Je sais pas frère.',
	'Mais naaaaaaaaaaaaaaan?! Sérieeeeeeeeeeeeeeeeeux?'
]

module.exports = class extends Command {

	async run(msg, ...question) {
		return msg.reply(question.join(' ').endsWith('?') ?
			`🎱 ${answers_fr[Math.floor(Math.random() * answers_fr.length)]}` :
			'🎱 That doesn\'t seem to be a question, please try again!');
	}

};
