window.sendStack = 0;

function send(text, cb, errored, throttleTime) {
    if (text.length > 500 && text.indexOf('\n') == -1) {
        // Message too long!
        send(text += '\n     ');
        return;
    }
    throttleTime = throttleTime || 0;
    if (sendStack > 5 || throttleTime > 10) {
        $.post('/users/usermessage/' + CHAT.CURRENT_USER_ID, {
            fkey: fkey().fkey,
            message: 'Hey! Stop spamming, I\'m being throttled for ' + throttleTime + ' seconds with ' + sendStack + ' more messages to send. This is an automated status text and will be cleared when the message stack is cleared. Love, @Uni.'
        });
    }
    $.post('/chats/' + $("input[name='room']").val() + '/messages/new', {
        text: text,
        fkey: fkey().fkey
    }).success(function () {
        if (sendStack > 0 && errored) sendStack--; // Remove this error from the send stack.
        console.log(sendStack);
        if (sendStack === 0) {
            //Send stack cleared! No more throttling for now!
            $.post('/users/usermessage/' + CHAT.CURRENT_USER_ID, {
                fkey: fkey().fkey,
                message: 'Yay! Send stack is cleared!'
            });
        }
        if (cb) cb();
    }).error(function (jQXHR, error, reason) {
        if (reason === 'Conflict') {
            var data = jQXHR.responseText;
            if (!!data.match(/You can perform this action again in \d+ seconds/)) {
                console.log('Throttled for ' + parseInt(data.match(/\d+/)[0]) * 1000 + ' ms, waiting.');
                var id = setTimeout(function () {
                    if (!errored)
                        sendStack++;
                    send(text, cb, true, data.match(/\d+/)[0]);
                }, parseInt(data.match(/\d+/)[0]) * 1000 + 100);
            }
        }
    });
}

function toPingFormat(user) {
    return user.replace(/[ !@#\$%^&*\()\{}\[\]|\\;:'",\./?<>~`_+=]/g, '');
}

function setupWS() {
    $.post('/ws-auth', {fkey: fkey().fkey, roomid: $("input[name='room']").val()}).success(function (data) {
            window.nbotWS = new WebSocket(data.url + '?l=' + +new Date);
            roomId = $("input[name='room']").val();
            nbotWS.onmessage = function (e) {
                var parsed = JSON.parse(e.data);
                if (parsed['r' + roomId] !== undefined) {
                    var roomJson = parsed['r' + roomId];
                    if (roomJson['e'] !== undefined) {
                        var eventJsons = roomJson['e'];
                        for (var i = 0; i < eventJsons.length; i++) {
                            var eventJson = eventJsons[i];
                            if (eventJson['event_type'] == 1) {
                                console.log('Message posted: ' + $('<a>').html(eventJson['content']).text());
                                var message = $('<a>').html(eventJson['content']).text();
                                if (!!message.match(/^\+\w+ ?.+$/)) {
                                    var commandParts = message.split(/^\+(\w+) ?(.+)?$/).filter(function (e) {
                                        return !!e;
                                    });
                                    var command = commandParts[0];
                                    if (!botCommand[command]) {
                                        var keys = Object.keys(botCommand), matches = Array(2), cmd = command, ix = 0, hh = 0;
                                        for (var i = 0; i < keys.length; i++) {
                                            var k = keys[i];
                                            matches[i] = 0;
                                            for (var j = 1; j <= cmd.length; j++)
                                                if (~k.indexOf(cmd[j - 1])) matches[i] += 1;
                                        }
                                        for (i = 1; i <= matches.length; i++)
                                            if (matches[i] > hh)
                                                ix = i, hh = matches[i];
                                        send(':'+eventJson['message_id']+' Command **+' + command + '** not found, did you mean **+' + keys[ix] + '**?');
                                        return;
                                    }
                                    var args = undefined;
                                    if (!!commandParts[1]) args = $('<a>').html(commandParts[1]).text();
                                    var id = eventJson['message_id'];
                                    botCommand[command](id, args, eventJson['user_name']);
                                }
                            }
                            else if (eventJson['event_type'] == 3) {
                                var username = eventJson['user_name'];
                                send('', function () {
                                    send(''); //I removed auto message.
                                });
                            }
                        }
                    }
                }
            };
            nbotWS.onclose = function () {
                console.log('Socket closed!');
            };

        }
    );

}
var onload = function () {
    $.get('http://nexdon.github.io/NBOT-Commands.js').done(function (data) {
        eval(data);
    });
    if (!window.nbotWS) {
        $('head').append(
            $('<style>').text(
                '.nbot {' +
                'position: relative;' +
                'width: 350px;' +
                'height: auto;' +
                'border: 3px solid #fff;' +
                'background-color: #fff' +
                '}' +
                '' +
                '.ntitle {' +
                'color: #333; ' +
                'font-size: 20px;' +
                ' font-weight: bold;' +
                ' margin-bottom: 0px; ' +
                'border-bottom: 1px solid white;' +
                '}' +
                '.ntitle:hover {' +
                'text-decoration: none;' +
                '}' +
                ' .nitem {' +
                'cursor: pointer;' +
                ' font-size: 15px; ' +
                'color: #333; ' +
                'position: absolute; ' +
                'font-weight: normal; ' +
                'margin-left: 0px;' +
                ' margin-top: 0px; ' +
                'transition: 0.2s;' +
                '}' +
                ' .nitem:hover {' +
                'background-color: #fff;' +
                ' color: #000; ' +
                'text-decoration: none;' +
                ' font-weight: normal;' +
                '}' +
                ' .nbot > input {' +
                'background: #fff;' +
                ' color: #333;' +
                ' border: 2px solid #333;' +
                '}' +
                '.visit-cms {' +
                'position: absolute;' +
                ' top: 0px; ' +
                'right: 30px;' +
                '}'
            ));

        $('#roomtitle').append($('<div class="nbot">').append(
            $('<span class="ntitle">').text('NBOT')
        ).append(
            $('<a class="nitem visit-cms">').attr('href', 'http://yourphotomake.info/cms/admin735').attr('target', '_blank').text('Visit CMS')
        ).append($('<br>')).append(
            $('<a class="nitem">').click(function () {
                send('Read rules at http://yourphotomake.info/rules.');
            }).text('Rules Message')
        ).append($('<br>')).append(
            $('<a class="nitem">').click(function () {
                send('Hi there, welcome to PHP, MYSQL, HTML, CSS, JS, JQ!');
            }).text('Welcome Message')
        ).append($('<br>')).append(
            $('<input id="ntb" type="text" placeholder="Your bold message">')
        ).append(
            $('<input type="button" value="Send">').click(function () {
                send($('#ntb').val());
                $('#ntb').val('');
            })
        ));

        setupWS();
    } else {
        nbotWS.close();
        nbotWS = false;
        setupWS();
    }
};
$(onload);
