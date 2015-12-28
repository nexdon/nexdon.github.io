var wsAuthRequest = new XMLHttpRequest();
var roomId = 1; // change this if necessary
wsAuthRequest.onreadystatechange = function() {
    if (wsAuthRequest.readyState == XMLHttpRequest.DONE) {
        console.log(wsAuthRequest.responseText);
        var json = JSON.parse(wsAuthRequest.responseText);
        var wsUrl = json['url'] + "?l=" + Date.now();
        var socket = new WebSocket(wsUrl);
        socket.onopen = function() { console.log('Socket opened!'); }
        socket.onmessage = function(e) {
            var parsed = JSON.parse(e.data);
            if (parsed['r' + roomId] !== undefined) {
                var roomJson = parsed['r' + roomId];
                if (roomJson['e'] !== undefined) {
                    var eventJsons = roomJson['e'];
                    for (var i = 0; i < eventJsons.length; i++) {
                        var eventJson = eventJsons[i];
                        if (eventJson['event_type'] == 1) {
                            console.log('Message posted: ' + eventJson['content']);
                        }
                    }
                }
            }
        };
        socket.onclose = function() { console.log('Socket closed!'); }
    }
};
var params = "roomid=" + roomId + "&fkey=" + fkey().fkey
wsAuthRequest.open("POST", "http://chat.stackexchange.com/ws-auth"); // change chat server if necessary
wsAuthRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
wsAuthRequest.setRequestHeader("Content-length", params.length);
wsAuthRequest.setRequestHeader("Connection", "close");
wsAuthRequest.send(params);
if (eventJson['event_type'] == 1) {
                        console.log('Message posted: ' + eventJson['content']);
} else if (eventJson['event_type'] == 3) {
	var username = eventJson['user_name'];
	$.post('http://chat.stackoverflow.com/chats/' + $("input[name='room']").val() + '/messages/new', {text: ' welcome to ' + $("roomname").text(), fkey: fkey().fkey});
}
function say1() {
	$.post('http://chat.stackoverflow.com/chats/' + $("input[name='room']").val() + '/messages/new', {
			text: '**[NBOT]** Read rules at http://yourphotomake.info/rules.', 
			fkey: fkey().fkey});
}
function say2() {
	$.post('http://chat.stackoverflow.com/chats/' + $("input[name='room']").val() + '/messages/new', {
			text: '**[NBOT]** Hi there, welcome to PHP, MYSQL, HTML, CSS, JS, JQ!', 
			fkey: fkey().fkey});
}
function say() {
	$.post('http://chat.stackoverflow.com/chats/' + $("input[name='room']").val() + '/messages/new', {
			text: '**[NBOT]** ' + document.getElementById('ntb').value, 
			fkey: fkey().fkey});
}

var divy = document.createElement('div');
divy.className = 'nbot';
divy.innerHTML = '<style>.nbot {position: relative; width: 350px; height: auto; border: 3px solid #333; background-color: #333;} .ntitle {color: #fff; font-size: 20px; font-weight: bold; margin-bottom: 0px; border-bottom: 1px solid white;} .ntitle:hover {text-decoration: none;} .nitem {cursor: pointer; font-size: 15px; color: #fff; position: absolute; font-weight: normal; margin-left: 0px; margin-top: 0px; transition: 0.2s;} .nitem:hover {background-color: #fff; color: #333; text-decoration: none; font-weight: normal;} input {background: #333; color: #fff; border: 2px solid #fff;}</style><a class="ntitle">NBOT</a> <a href="http://yourphotomake.info/cms/admin735" target="_blank" class="nitem" style="position: absolute; top: 0px; right: 0px;">VISIT CMS</a><br><a class="nitem" onclick="say1();">Rules message</a><br><a class="nitem" onclick="say2()">Welcome message</a><br><input id="ntb" type="text" placeholder="Your message"><input type="button" onclick="say()" value="Send">';
document.getElementById('roomtitle').appendChild(divy);
