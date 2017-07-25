var fs = require('fs');

function BasicCard(front, back){
	this.front = front;
	this.back = back;

	this.create = function(){
		var cardData ={
			type:'basic',
			front: this.front,
			back: this.back
		};
		writeFile(cardData);
	};

	function writeFile(cardData) {
  		fs.appendFile('./log.txt', "\r\n" + JSON.stringify(cardData), 'utf8', function (error, data) {
   		});
	};
};

module.exports = BasicCard;