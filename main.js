var inquirer = require('inquirer');
var fs = require('fs');

var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

function cardCreate(){
	inquirer.prompt({
		type: 'list',
		name: 'cards',
		message:'Select a card type',
		choices: ['BasicCard', 'ClozeCard']
	}).then(function(data){
		//check for card type
		if (data.cards === 'BasicCard'){
			return inquirer.prompt([
			{
				type: 'input',
				name: 'front',
				message: 'Front of card:'
			},
			{
				type: 'input',
				name: 'back',
				message:'Back of card:'
			}]);
		} else {
			return inquirer.prompt([
          	{
              type: 'input',
              name: 'text',
              message: 'What do you want on your card?'
          	},
          	{
              type: 'input',
              name: 'cloze',
              message: 'What would you like deleted from your cloze card?'
         	 }
      		]);
		};//end of else
	}).then(function(data) {
		// card type
	    if (data.front && data.back) {
	      var basic = new BasicCard(data.front, data.back);
	      basic.create();
	      console.log("Basic card created");
	      cardCreate();
	    } else if (data.text && data.cloze) {
	      var cloze = new ClozeCard(data.text, data.cloze);
	      cloze.create();
	      console.log("Cloze card created");
	      cardCreate();
	    } else {
	      console.log("Both sides are required");
	      cardCreate();
	    }
  	})//end of function(data)
  	.catch(function(err) {
    console.log(err);
  });
};

cardCreate(); //run card create function again