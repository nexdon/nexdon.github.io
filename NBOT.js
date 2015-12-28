function send(text, cb) {
    $.post('/chats/' + $("input[name='room']").val() + '/messages/new',
        {
            text: text,
            fkey: fkey().fkey
        }).success(function () {
        if (cb) cb();
    });
}

$(function () {
    $('head').append(
        $('<style>').text(
            '.nbot {' +
            'position: relative;' +
            'width: 350px;' +
            'height: auto;' +
            'border: 3px solid #333;' +
            'background-color: #333' +
            '}' +
            '' +
            '.ntitle {' +
            'color: #fff; ' +
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
            'color: #fff; ' +
            'position: absolute; ' +
            'font-weight: normal; ' +
            'margin-left: 0px;' +
            ' margin-top: 0px; ' +
            'transition: 0.2s;' +
            '}' +
            ' .nitem:hover {' +
            'background-color: #fff;' +
            ' color: #333; ' +
            'text-decoration: none;' +
            ' font-weight: normal;' +
            '}' +
            ' .nbot > input {' +
            'background: #333;' +
            ' color: #fff;' +
            ' border: 2px solid #fff;' +
            '}' +
            '.visit-cms {' +
            'position: absolute;' +
            ' top: 0px; ' +
<<<<<<< HEAD
            'right: 30px;' +
=======
            'right: 0px;' +
>>>>>>> 12d8e0bd241059c31f72728d3947268604db4d1b
            '}'
        ));

    $('#roomtitle').append($('<div class="nbot">').append(
        $('<span class="ntitle">').text('NBOT')
    ).append(
        $('<a class="nitem visit-cms">').attr('href', 'http://yourphotomake.info/cms/admin735').attr('target', '_blank').text('Visit CMS')
    ).append($('<br>')).append(
        $('<a class="nitem">').click(function () {
<<<<<<< HEAD
            send('Read rules at http://yourphotomake.info/rules.');
        }).text('Rules Message')
    ).append($('<br>')).append(
        $('<a class="nitem">').click(function () {
            send('Hi there, welcome to PHP, MYSQL, HTML, CSS, JS, JQ!');
        }).text('Welcome Message')
    ).append($('<br>')).append(
        $('<input id="ntb" type="text" placeholder="Your bold message">')
=======
            send('**[NBOT]** Read rules at http://yourphotomake.info/rules.');
        }).text('Rules Message')
    ).append($('<br>')).append(
        $('<a class="nitem">').click(function () {
            send('**[NBOT]** Hi there, welcome to PHP, MYSQL, HTML, CSS, JS, JQ!');
        }).text('Welcome Message')
    ).append($('<br>')).append(
        $('<input id="ntb" type="text" placeholder="Your message">')
>>>>>>> 12d8e0bd241059c31f72728d3947268604db4d1b
    ).append(
        $('<input type="button" value="Send">').click(function () {
            send($('#ntb').val());
            $('#ntb').val('');
        })
    ));

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
                            console.log('Message posted: ' + eventJson['content']);
                        } else if (eventJson['event_type'] == 3) {
                            var username = eventJson['user_name'];
<<<<<<< HEAD
                            send('Hello, @' + username.replace(/[!@#\$%^&*\()\{}\[\]|\\;:'",\./?<>~`_+=]/g, '') + '! If you have not read the rules, please do so.', function () {
                                send('Read rules at http://yourphotomake.info/rules.');
                                function testCommand() { return "Test!"; };
                                var commands = { "test": testCommand };
                                    if (eventJson['event_type'] == 1) {
                                        console.log('Message posted: ' + eventJson['content']);
                                        var content = eventJson['content'];
                                        if (content.startsWith("+")) { // your prefix
                                            var command = content.split(' ')[0];
                                            command = command.slice(1);
                                            var commandFunc = commands[command];
                                            if (commandFunc !== undefined) {
                                                var output = commandFunc();
                                                send(output);
                                                }
                                            }
                                        }
                                    }
=======
                            send('**[NBOT]** Hello, @' + username.replace(/[!@#\$%^&*\()\{}\[\]|\\;:'",\./?<>~`_+=]/g, '') + '! If you have not read the rules, please do so.', function () {
                                send('**[NBOT]** Read rules at http://yourphotomake.info/rules.');
>>>>>>> 12d8e0bd241059c31f72728d3947268604db4d1b
                            });
                        }
                    }
                }
            }
        };
        nbotWS.onclose = function () {
            console.log('Socket closed!');
        };
        
    });

});
