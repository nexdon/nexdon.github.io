window.botCommand = {
    test: function (id) {
        send(':' + id + ' This is a test message!');
    }, cat: function (id) {
        send(':' + id + ' http://i.imgur.com/BqceIC5.gif');
    }, gandalf: function (id) {
        send(':' + id + ' http://i.imgur.com/HxuZr0e.gif');
    }, listcommands: function (id) {
        var commands = [];
        for (var command in botCommand) {
            if (botCommand.hasOwnProperty(command)) {
                commands.push(command);
            }
        }
        send(':' + id + ' The commands are: `' + commands.join('`, `') + '`');
    }, echo: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Nothing to echo!');
        } else {
            send(':' + id + ' `' + args + '`');
        }
    }, kill: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Nothing to kill!');
        } else {
            send(':' + id + ' killed ' + args);
        }
    }, imagetext: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Please add text!');
        } else {
            send(':' + id + ' **[Here is your image text](http://dummyimage.com/1000x500/000/fff?text=' + encodeURIComponent(args) + ")**.");
        }
    }, slap: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Slap who?');
        } else {
            send(':' + id + ' *Slaps @' + toPingFormat(args) + '!*');
        }
    }, rules: function () {
        send('Read rules at http://yourphotomake.info/rules.');
    }, sniper: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Nothing to kill with a sniper!');
        } else {
            send(':' + id + '  (　-_･) ︻デ═一 ▸       @' + toPingFormat(args) + ' [ @' + toPingFormat(args) + ' was killed by a sniper! ]')
        }
    }
};
