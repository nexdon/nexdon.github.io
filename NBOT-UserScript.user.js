// ==UserScript==
// @name NBOT Autocomplete
// @description NBot Script
// @downloadURL https://http://nexdon.github.io/NBOT-UserScript.user.js
// @match http://chat.stackoverflow.com/rooms/97149/*
// @version 1.0.1
// ==/UserScript==

function findAutocompleteCommandNames(name) {
    var possible = [];
    for (var x in botCommand) {
        if (botCommand.hasOwnProperty(x)) {
            if (x.startsWith(name))
                possible.push(x);
        }
    }
    return possible;
}

$(function () {
    if (!location.pathname.match(/\/rooms\/97149\/[\w\-]+/)) return;
    // Is in target room!
    console.log('In NBOT room!');
    $('head').append($('<style>').text(
        '#nbot-command-names {' +
        'position: absolute;' +
        'max-with: calc(100vw - 200px);' +
        'bottom: 0;' +
        '}' +
        '#nbot-tabcomplete {' +
        'text-align: left;' +
        '}' +
        '' +
        '.nbot-chosen {' +
        'box-shadow: 0 0 2px rgba(0,0,0,0.8) !important;' +
        'border-color: #000 !important;' +
        'color: #fff !important;' +
        'background-color: #000 !important;' +
        '}' +
        '#nbot-tabcomplete > li {' +
        'display: inline-block;' +
        'background-color: #fff;' +
        'color: #000;' +
        'padding: 2px 5px 2px 2px;' +
        'margin: 5px 5px 0 0;' +
        'border: 1px solid #888;' +
        'box-shadow: 0 0 2px rgba(0,0,0,0.3);' +
        'cursor: pointer;' +
        'height: 18px;' +
        'white-space: nowrap;' +
        '}' +
        '' +
        '#nbot-tabcomplete > li > * {' +
        'vertical-align: middle' +
        '}' +
        ''
    ));
    $.get('http://nexdon.github.io/NBOT-Commands.js').done(function (data) {
        eval(data);
    });
    $('#input-area').css('height', 90);

    $('#tabcomplete-container').css('bottom', 87);

    $($('#bubble').append(
        $('<div>').attr('id', 'nbot-command-names').append($('<ul>').attr('id', 'nbot-tabcomplete'))
    ));

    $('#input').keydown(function (e) {
        if (e.keyCode === 9 && e.shiftKey) {
            e.preventDefault();
            var chosen = $('.nbot-chosen');
            chosen.removeClass('nbot-chosen');
            if (chosen.length === 0 && $('.nbot-possible-command').length !== 0) {
                $($('#nbot-tabcomplete').children()[0]).addClass('nbot-chosen').click();
            } else {
                var children = [];
                $('#nbot-tabcomplete').children().each(function (i, e) {
                    children.push(e);
                });
                if (children.indexOf(chosen[0]) === children.length - 1) {
                    $($('.nbot-possible-command').get(0)).addClass('nbot-chosen').click();
                } else {
                    $(children[children.indexOf(chosen[0]) + 1]).addClass('nbot-chosen').click();
                }
            }
        } else if (e.keyCode === 13) {
            $('.nbot-possible-command').remove();
        }
    });

    function checkAutocomplete() {
        $('#nbot-tabcomplete').children().remove();
        if ($('#input').val().match(/^\+\w+ ?.*$/) !== null) {
            console.log('It\'s a command!');
            var parts = $('#input').val().split(/^\+(\w+) ?(.*)$/).filter(function (e) {
                return !!e;
            });
            var command = parts[0];
            var args = parts[1];
            var possibleCommands = findAutocompleteCommandNames(command);
            possibleCommands.forEach(function (commandFound) {
                var li = $('<li>').attr('class', 'nbot-possible-command').text(commandFound).click(function () {
                    $('#input').val('+' + commandFound + (!!args ? ' ' + args : ''));
                    $('#input')[0].selectionStart = $('#input')[0].selectionEnd = commandFound.length + 1;
                    $('#input').focus();
                    $('.nbot-possible-command').removeClass('nbot-chosen');
                    li.addClass('nbot-chosen');
                });
                if (commandFound === command)
                    li.addClass('nbot-chosen');
                $('#nbot-tabcomplete').append(li);
            });
        }
    }

    $('#input').on('input', function (e) {
        checkAutocomplete();
    });
});