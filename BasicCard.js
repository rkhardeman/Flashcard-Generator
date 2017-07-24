var fs = require('fs');

function BasicCard(front, back){
	this.front = front;
	this.back = back;

	this.create = function(){
		var data ={
			type:'basic',
			front: this.front,
			back: this.back
		};
		writeFile(cardWrite);
	};

	function writeFile(cardWrite) {
  		fs.appendFile('./log.txt', "\r\n" + JSON.stringify(cardData), 'utf8', function (error, data) {
   		});
	};
};

module.exports = BasicCard;