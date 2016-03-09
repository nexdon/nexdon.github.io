function send(text) {
	API.sendChat(text);
}
API.on(API.USER_JOIN, function(data){
	send('User ' + data.username + ' joined.')
});
API.on(API.USER_LEAVE, function(data){
	send('User ' + data.username + ' left.')
});
API.on(API.CHAT, function(data){
	var msg = data.message;
	var name = data.un;
	var woot = $('#woot');
	var ping = '@' + name + ' ';
	var args = undefined;
	
	// BOT COMMANDS
	var commands = {
		woot: function() {
			if(woot.hasClass('disabled')) {
				send(ping + 'woot button is disabled.');
			}
			else if (woot.hasClass('active')) {
				send(ping + 'wooted already.');
			}
			else {
				woot.click();
				send(ping + 'successfully wooted!');
			}
		},
		kill: function(args) {
			args = args || '';
			if (args == 0) {
				send(ping + 'kill what?');
			}
			else {
				send(ping + 'killed ' + args + '!');
			}
		},
		id: function(){
			send(ping + 'your ID is: ' + data.uid);
		},
		
	}
	
	// SEND SCRIPT
	var commandParts = msg.split(/^\+(\w+) ?(.+)?$/).filter(function (e) {
    	return !!e;
    });
	var command = commandParts[0];
	if (!!commandParts[1]) args = $('<a>').html(commandParts[1]).text();
	commands[command](args);
	
})
