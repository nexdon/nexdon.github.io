if (!localStorage.catLang) localStorage.catLang = {};
if (!localStorage.pirateLang) localStorage.pirateLang = {};

window.bigWords = {
    '0': [
        '▒██████▒',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '▒██████▒',
        '▒▒▒▒▒▒▒▒'
    ],
    '1': [
        '▒██▒▒',
        '█▒█▒▒',
        '▒▒█▒▒',
        '▒▒█▒▒',
        '▒▒█▒▒',
        '▒▒█▒▒',
        '▒▒█▒▒',
        '▒▒▒▒▒'
    ],
    '2': [
        '█████▒',
        '▒▒▒▒▒█',
        '▒▒▒██▒',
        '▒▒██▒▒',
        '▒█▒▒▒▒',
        '█▒▒▒▒▒',
        '██████',
        '▒▒▒▒▒▒'
    ],
    '3': [
        '█████',
        '▒▒▒▒█',
        '▒▒▒▒█',
        '█████',
        '▒▒▒▒█',
        '▒▒▒▒█',
        '█████',
        '▒▒▒▒▒'
    ],
    '4': [
        '▒▒▒▒██▒',
        '▒▒▒█▒█▒',
        '▒▒█▒▒█▒',
        '▒█▒▒▒█▒',
        '███████',
        '▒▒▒▒▒█▒',
        '▒▒▒▒▒█▒',
        '▒▒▒▒▒▒▒'
    ],
    '5': [
        '███████',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '███████',
        '▒▒▒▒▒▒█',
        '▒▒▒▒▒▒█',
        '███████',
        '▒▒▒▒▒▒▒'
    ],
    '6': [
        '███████',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '███████',
        '█▒▒▒▒▒█',
        '█▒▒▒▒▒█',
        '███████',
        '▒▒▒▒▒▒▒'
    ],
    '7': [
        '███████',
        '▒▒▒▒▒▒█',
        '▒▒▒▒▒▒█',
        '▒▒▒▒▒▒█',
        '▒▒▒▒▒▒█',
        '▒▒▒▒▒▒█',
        '▒▒▒▒▒▒█',
        '▒▒▒▒▒▒▒'
    ],
    '8': [
        '███████',
        '█▒▒▒▒▒█',
        '█▒▒▒▒▒█',
        '███████',
        '█▒▒▒▒▒█',
        '█▒▒▒▒▒█',
        '███████',
        '▒▒▒▒▒▒▒'
    ],
    '9': [
        '███████',
        '█▒▒▒▒▒█',
        '█▒▒▒▒▒█',
        '███████',
        '▒▒▒▒▒▒█',
        '▒▒▒▒▒▒█',
        '███████',
        '▒▒▒▒▒▒▒'
    ],
    'a': [
        '▒▒▒▒▒▒█▒▒▒▒▒▒',
        '▒▒▒▒▒█▒█▒▒▒▒▒',
        '▒▒▒▒█▒▒▒█▒▒▒▒',
        '▒▒▒█▒▒▒▒▒█▒▒▒',
        '▒▒█████████▒▒',
        '▒█▒▒▒▒▒▒▒▒▒█▒',
        '█▒▒▒▒▒▒▒▒▒▒▒█',
        '▒▒▒▒▒▒▒▒▒▒▒▒▒'
    ],
    'b': [
        '██████▒▒',
        '█▒▒▒▒█▒▒',
        '█▒▒▒▒█▒▒',
        '████████',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '████████',
        '▒▒▒▒▒▒▒▒'
    ],
    'c': [
        '████████',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒',
        '█▒▒▒▒▒▒▒',
        '█▒▒▒▒▒▒▒',
        '█▒▒▒▒▒▒█',
        '████████',
        '▒▒▒▒▒▒▒▒'
    ],
    'd': [
        '███████▒',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '███████▒',
        '▒▒▒▒▒▒▒▒'
    ],
    'e': [
        '███████',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '██████▒',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '███████',
        '▒▒▒▒▒▒▒'
    ],
    'f': [
        '███████',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '███████',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '▒▒▒▒▒▒▒'
    ],
    'g': [
        '█████████',
        '█▒▒▒▒▒▒▒▒',
        '█▒▒▒▒▒▒▒▒',
        '█▒▒▒▒▒███',
        '█▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒█',
        '█████████',
        '▒▒▒▒▒▒▒▒▒'
    ],
    'h': [
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '████████',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒█',
        '▒▒▒▒▒▒▒▒'
    ],
    'i': [
        '████',
        '▒██▒',
        '▒██▒',
        '▒██▒',
        '▒██▒',
        '▒██▒',
        '████',
        '▒▒▒▒'
    ],
    'j': [
        '▒▒▒▒▒█',
        '▒▒▒▒▒█',
        '▒▒▒▒▒█',
        '▒▒▒▒▒█',
        '▒▒▒▒▒█',
        '█▒▒▒▒█',
        '██████',
        '▒▒▒▒▒▒'
    ],
    'k': [
        '█▒▒▒█',
        '█▒▒█▒',
        '█▒█▒▒',
        '██▒▒▒',
        '█▒█▒▒',
        '█▒▒█▒',
        '█▒▒▒█',
        '▒▒▒▒▒'
    ],
    'l': [
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒█',
        '███████',
        '▒▒▒▒▒▒▒'
    ],
    'm': [
        '██▒▒▒▒▒▒▒▒▒▒▒██',
        '█▒█▒▒▒▒▒▒▒▒▒█▒█',
        '█▒▒█▒▒▒▒▒▒▒█▒▒█',
        '█▒▒▒█▒▒▒▒▒█▒▒▒█',
        '█▒▒▒▒█▒▒▒█▒▒▒▒█',
        '█▒▒▒▒▒███▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒▒▒▒▒▒▒█',
        '▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒'
    ],
    'n': [
        '██▒▒▒▒▒▒█',
        '█▒█▒▒▒▒▒█',
        '█▒▒█▒▒▒▒█',
        '█▒▒▒█▒▒▒█',
        '█▒▒▒▒█▒▒█',
        '█▒▒▒▒▒█▒█',
        '█▒▒▒▒▒▒██',
        '▒▒▒▒▒▒▒▒▒'
    ],
    'o': [
        '█████████',
        '█▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒█',
        '█████████',
        '▒▒▒▒▒▒▒▒▒'
    ],
    'p': [
        '███████',
        '█▒▒▒▒▒█',
        '█▒▒▒▒▒█',
        '███████',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '▒▒▒▒▒▒▒'
    ],
    'q': [
        '█████████▒',
        '█▒▒▒▒▒▒▒█▒',
        '█▒▒▒▒▒▒▒█▒',
        '█▒▒▒▒▒▒▒█▒',
        '█▒▒▒▒▒█▒█▒',
        '█████████▒',
        '▒▒▒▒▒▒▒▒██',
        '▒▒▒▒▒▒▒▒▒▒'
    ],
    'r': [
        '██████▒▒',
        '█▒▒▒▒▒█▒',
        '█▒▒▒▒▒█▒',
        '██████▒▒',
        '█▒▒▒▒█▒▒',
        '█▒▒▒▒▒█▒',
        '█▒▒▒▒▒▒█',
        '▒▒▒▒▒▒▒▒'
    ],
    's': [
        '████████',
        '█▒▒▒▒▒▒▒',
        '█▒▒▒▒▒▒▒',
        '████████',
        '▒▒▒▒▒▒▒█',
        '▒▒▒▒▒▒▒█',
        '████████',
        '▒▒▒▒▒▒▒▒'
    ],
    't': [
        '██████████',
        '▒▒▒▒██▒▒▒▒',
        '▒▒▒▒██▒▒▒▒',
        '▒▒▒▒██▒▒▒▒',
        '▒▒▒▒██▒▒▒▒',
        '▒▒▒▒██▒▒▒▒',
        '▒▒▒▒██▒▒▒▒',
        '▒▒▒▒▒▒▒▒▒▒'
    ],
    'u': [
        '█▒▒▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒▒▒▒▒█',
        '███████████',
        '▒▒▒▒▒▒▒▒▒▒▒'
    ],
    'v': [
        '█▒▒▒▒▒▒▒▒▒▒▒█',
        '▒█▒▒▒▒▒▒▒▒▒█▒',
        '▒▒█▒▒▒▒▒▒▒█▒▒',
        '▒▒▒█▒▒▒▒▒█▒▒▒',
        '▒▒▒▒█▒▒▒█▒▒▒▒',
        '▒▒▒▒▒█▒█▒▒▒▒▒',
        '▒▒▒▒▒▒█▒▒▒▒▒▒',
        '▒▒▒▒▒▒▒▒▒▒▒▒▒'
    ],
    'w': [
        '█▒▒▒▒▒▒▒▒▒▒▒▒▒█',
        '█▒▒▒▒▒███▒▒▒▒▒█',
        '█▒▒▒▒█▒▒▒█▒▒▒▒█',
        '█▒▒▒█▒▒▒▒▒█▒▒▒█',
        '█▒▒█▒▒▒▒▒▒▒█▒▒█',
        '█▒█▒▒▒▒▒▒▒▒▒█▒█',
        '██▒▒▒▒▒▒▒▒▒▒▒██',
        '▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒'
    ],
    'x': [
        '██▒▒▒▒██',
        '▒██▒▒██▒',
        '▒▒████▒▒',
        '▒▒▒██▒▒▒',
        '▒▒████▒▒',
        '▒██▒▒██▒',
        '██▒▒▒▒██',
        '▒▒▒▒▒▒▒▒'
    ],
    'y': [
        '██▒▒▒██',
        '▒██▒██▒',
        '▒▒███▒▒',
        '▒▒▒█▒▒▒',
        '▒▒▒█▒▒▒',
        '▒▒▒█▒▒▒',
        '▒▒▒█▒▒▒',
        '▒▒▒▒▒▒▒'
    ],
    'z': [
        '█████',
        '▒▒▒▒█',
        '▒▒▒█▒',
        '▒▒█▒▒',
        '▒█▒▒▒',
        '█▒▒▒▒',
        '█████',
        '▒▒▒▒▒'
    ], ' ': [
        '▒▒▒',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒'
    ],
    ',': [
        '▒',
        '▒',
        '▒',
        '▒',
        '▒',
        '▒',
        '█',
        '█'
    ],
    '!': [
        '█',
        '█',
        '█',
        '█',
        '█',
        '▒',
        '█',
        '▒'
    ],
    '.': [
        '▒',
        '▒',
        '▒',
        '▒',
        '▒',
        '▒',
        '█',
        '▒'
    ],
    '-': [
        '▒▒▒▒▒',
        '▒▒▒▒▒',
        '▒▒▒▒▒',
        '▒▒▒▒▒',
        '█████',
        '▒▒▒▒▒',
        '▒▒▒▒▒',
        '▒▒▒▒▒'
    ],
    '_': [
        '▒▒▒▒▒▒▒',
        '▒▒▒▒▒▒▒',
        '▒▒▒▒▒▒▒',
        '▒▒▒▒▒▒▒',
        '▒▒▒▒▒▒▒',
        '▒▒▒▒▒▒▒',
        '███████',
        '▒▒▒▒▒▒▒'
    ],
    '+': [
        '▒▒▒▒▒',
        '▒▒▒▒▒',
        '▒▒▒▒▒',
        '▒▒█▒▒',
        '█████',
        '▒▒█▒▒',
        '▒▒▒▒▒',
        '▒▒▒▒▒'
    ],
    '=': [
        '▒▒▒▒▒',
        '▒▒▒▒▒',
        '▒▒▒▒▒',
        '█████',
        '▒▒▒▒▒',
        '█████',
        '▒▒▒▒▒',
        '▒▒▒▒▒'
    ],
    '@': [
        '███████',
        '█▒▒▒▒▒█',
        '█▒▒▒▒▒█',
        '█▒███▒█',
        '█▒█▒█▒█',
        '█▒█▒█▒█',
        '█▒████▒',
        '▒▒▒▒▒▒▒'
    ],
    '*': [
        '▒▒▒',
        '█▒█',
        '▒█▒',
        '█▒█',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒'
    ],
    '#': [
        '▒▒▒█▒▒█▒▒▒',
        '▒▒▒█▒▒█▒▒▒',
        '██████████',
        '▒▒▒█▒▒█▒▒▒',
        '▒▒▒█▒▒█▒▒▒',
        '██████████',
        '▒▒▒█▒▒█▒▒▒',
        '▒▒▒█▒▒█▒▒▒'
    ],
    '(': [
        '▒█',
        '█▒',
        '█▒',
        '█▒',
        '█▒',
        '█▒',
        '█▒',
        '▒█'
    ],
    ')': [
        '█▒',
        '▒█',
        '▒█',
        '▒█',
        '▒█',
        '▒█',
        '▒█',
        '█▒'
    ],
    '[': [
        '███',
        '█▒▒',
        '█▒▒',
        '█▒▒',
        '█▒▒',
        '█▒▒',
        '█▒▒',
        '███'
    ],
    ']': [
        '███',
        '▒▒█',
        '▒▒█',
        '▒▒█',
        '▒▒█',
        '▒▒█',
        '▒▒█',
        '███'
    ],
    ';': [
        '▒',
        '▒',
        '█',
        '▒',
        '▒',
        '▒',
        '█',
        '█'
    ],
    ':': [
        '▒',
        '█',
        '▒',
        '▒',
        '█',
        '▒',
        '▒',
        '▒'
    ],
    '/': [
        '▒▒▒▒▒▒█',
        '▒▒▒▒▒█▒',
        '▒▒▒▒█▒▒',
        '▒▒▒█▒▒▒',
        '▒▒█▒▒▒▒',
        '▒█▒▒▒▒▒',
        '█▒▒▒▒▒▒',
        '▒▒▒▒▒▒▒'
    ],
    '?': [
        '█████',
        '▒▒▒▒█',
        '▒▒▒▒█',
        '▒████',
        '▒█▒▒▒',
        '▒▒▒▒▒',
        '▒█▒▒▒',
        '▒▒▒▒▒'
    ],
    '"': [
        '█▒█',
        '█▒█',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒',
        '▒▒▒'
    ]
};

var helpTexts = {
    cowSay: '`use +cowSay <text> to send a cow message.`',
    kill: '`use +kill <username> to kill someone.`',
    cat: '`use +cat to send a cat gif.`',
    gandalf: '`use +gandalf to send a gandalf gif.`',
    listcommands: '`use +listcommands to list all commands.`',
    echo: '`type +echo <text> in chat and NBOT will repeat that message.`',
    imagetext: '`use +imagetext <text> to create a text image.`',
    catLang: '`use +catLang <text> to translate to lolcat language.`',
    bigLogo: '`to send a huge NBOT logo just type +bigLogo in chat.`',
    bigText: '`use +bigText <text> to send a message with huge letters.`',
    slap: '`use +slap <username> to slap someone.`',
    time: '`use +time to see current time.`',
    sniper: '`use +sniper to kill someone with a sniper.`',
    help: '`use +help <command>, not +help help.`'
};
var memes = {
    trollface: 'http://www.memes.at/faces/troll_face.jpg',
    yes: 'http://i3.kym-cdn.com/photos/images/newsfeed/000/208/666/yes..jpg',
    no: 'http://i0.kym-cdn.com/entries/icons/original/000/007/423/untitle.JPG',
    okay: 'http://www.memes.at/faces/okay_guy.jpg'
};

function getBlock(text) {
    var out = [];
    for (var i = 0; i < 8; i++) {
        var toPush = '';
        text.split(/(.)/).forEach(function (e) {
            if (!e) return;
            toPush += '▒▒' + bigWords[e.toLowerCase()][i] + '▒▒';
        });
        out.push(toPush);
    }
    return out.join('\n');
}

window.botCommand = {
    cat: function (id) {
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
            send(':' + id + ' **[Here is your image text](http://dummyimage.com/1000x500/000/fff?text=' + encodeURIComponent(args) + ')**.');
        }
    }, slap: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Slap who?');
        } else {
            send(':' + id + ' *Slaps @' + toPingFormat(args) + '!*');
        }
    }, time: function (id) {
        send(':' + id + ' **Time:** ' + new Date());
    }, sniper: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Nothing to kill with a sniper!');
        } else {
            send(':' + id + '  **(　-_･)** ︻デ═一 ▸ `\u0008     \u0008` @' + toPingFormat(args) + ' [ @' + toPingFormat(args) + ' was killed by a sniper! ]')
        }
    }, cowSay: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Mooooo, nothing to say???');
        } else {
            $.get('http://allow-any-origin.appspot.com/http://cowsay.morecode.org/say?message=' + encodeURI(args) + '&format=text').success(function (data) {
                var translated = data;
                send(':' + id + '\n' + '`    ' + translated + '`');
            });
        }
    }, help: function (id, args) {
        args = args || '';
        if (!args.trim()) send(':' + id + ' Hmmm. I dunno what you want help with. Do `+help command`'); else {
            if (!botCommand[args]) send(':' + id + ' No such command bro.'); else {
                if (!helpTexts[args]) send(':' + id + ' Sorry, the help for that command is not done yet!'); else
                    send(':' + id + ' ' + helpTexts[args])
            }
        }
    }, meme: function (id, args) {
        args = args || '';
        if (!args.trim()) send(':' + id + ' `I dunno what u want, use +meme <meme>`'); else {
            if (!memes[args]) send(':' + id + ' `There is no ' + args + ' meme! Do` +meme list `to list memes!`'); else
            send(':' + id + ' ' + memes[args])
        }
    }, bigLogo: function () {
        var logo = '▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒█████▒▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒████████████▒▒▒▒▒██████████████▒▒███████████████████▒▒▒\n\
▒▒▒██████▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒███▒▒▒▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒███▒▒▒▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒███▒▒▒▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒███▒▒▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒███▒▒▒▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒███▒▒▒▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒███▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒███▒▒▒▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒▒███▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒███▒▒▒▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒▒▒███▒▒▒▒▒▒▒███▒▒███████████████▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒▒▒▒███▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒███▒▒███▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒▒▒▒▒▒███▒▒▒▒███▒▒███▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒███▒▒███▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒▒▒▒▒▒▒▒███▒▒███▒▒███▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒▒▒▒▒▒▒▒▒███████▒▒███▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒▒▒▒▒▒▒▒▒▒██████▒▒███▒▒▒▒▒▒▒▒▒███▒▒███▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒███▒▒▒▒▒▒▒▒▒▒▒▒▒▒█████▒▒███████████████▒▒██████████████▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒\n\
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒';
        send(logo);
    }, bigWord: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Nothing!');
            return;
        }
        try {
            var bigWord = getBlock(args);
            send(bigWord.split('\n').map(function (e) {
                return '    ' + e;
            }).join('\n'));
        } catch (e) {
            send(':' + id + ' Sorry, your word contains unsupported characters!');
        }
    }, catLang: function (id, args) {
        args = args || '';
        if (!args.trim()) args = 'What? Nothing???';
        if (!!localStorage.catLang[args]) {
            send(':' + id + ' ' + localStorage.catLang[args]);
        } else
            $.get('http://allow-any-origin.appspot.com/http://speaklolcat.com/?from=' + encodeURI(args)).success(function (data) {
                var translated = new DOMParser().parseFromString(data, 'text/html').querySelector("#to").textContent;
                send(':' + id + ' ' + translated);
                localStorage.catLang[args] = translated;
            });
    }, pirateLang: function (id, args) {
        args = args || '';
        if (!args.trim()) args = 'Nothing to say on pirate lang???';
        if (!!localStorage.pirateLang[args]) {
            send(':' + id + ' ' + localStorage.pirateLang[args]);
        } else
            $.get('http://allow-any-origin.appspot.com/http://isithackday.com/arrpi.php?text=' + encodeURI(args)).success(function (data) {
                var translated = new DOMParser().parseFromString(data, 'text/html').querySelector("body").textContent;
                send(':' + id + ' ' + translated);
                localStorage.pirateLang[args] = translated;
            });
    }
};
