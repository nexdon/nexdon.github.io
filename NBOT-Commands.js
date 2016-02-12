if (!localStorage.catLang) localStorage.catLang = {};
if (!localStorage.pirateLang) localStorage.pirateLang = {};
if (!localStorage.time) localStorage.time = {};

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
    help: '`use +help <command>, not +help help.`',
    meme: '`use +meme <meme> to display meme or +meme list to list memes.`',
    rmeme: '`use +rmeme to display random meme.`',
    greet: '`use +greet to say hello to someone.`',
    nbot: '`NBOT is SE chatbot created by UNIKITTY2.0 and NiKoLaPrO.`',
    online: '`use +online to display online users.`',
    description: '`use +description to display room descripton.`'
};
var memes = {
    trollface: 'http://www.memes.at/faces/troll_face.jpg',
    yes: 'http://i3.kym-cdn.com/photos/images/newsfeed/000/208/666/yes..jpg',
    no: 'http://i0.kym-cdn.com/entries/icons/original/000/007/423/untitle.JPG',
    okay: 'http://www.memes.at/faces/okay_guy.jpg',
    me_gusta: 'http://pre05.deviantart.net/b6f5/th/pre/f/2011/285/4/c/me_gusta_by_rober_raik-d4clrpu.png',
    me_gusta_creepy: 'http://www.memes.at/faces/me_gusta_creepy.jpg',
    me_gangsta: 'http://www.memes.at/faces/me_gangsta.jpg',
    ich_mag: 'http://www.memes.at/faces/ich_mag_gusta.jpg',
    me_gusta_facedance: 'http://www.memes.at/faces/me_gusta_facedance_low.gif',
    mother_of_gusta: 'http://www.memes.at/faces/mother_of_gusta.jpg',
    troll_gusta: 'http://www.memes.at/faces/troll_gusta.jpg',
    me_trollista: 'http://i.imgur.com/r711BhC.png',
    indeed: 'http://www.memes.at/faces/indeed.jpg',
    facepalm: 'http://www.memes.at/faces/facepalm_picard.jpg',
    spiderman: 'http://www.memes.at/faces/spiderpman.jpg',
    badass: 'http://www.memes.at/faces/got_a_badass.jpg',
    you_dont_say: 'http://www.memes.at/faces/you_dont_say.jpg',
    troll_dance: 'http://www.memes.at/faces/troll_dancing.gif',
    so_hardcore: 'http://www.memes.at/faces/so_hardcore.jpg',
    genius: 'http://www.memes.at/faces/genius.jpg',
    not_bad: 'http://www.memes.at/faces/obama_not_bad.jpg',
    ba_dum_no: 'http://i3.kym-cdn.com/photos/images/original/000/585/635/90d.png',
    ba_dum_tsss: 'http://i2.kym-cdn.com/photos/images/newsfeed/000/038/677/badumtss.png',
    crying: 'http://www.memes.at/faces/crying.jpg',
    derp: 'http://www.memes.at/faces/herp_derp.jpg',
    kitten: 'http://www.memes.at/faces/kitteh_smile.jpg',
    sir: 'http://www.memes.at/faces/like_a_sir.jpg',
    jesus: 'http://www.memes.at/faces/jesus.jpg',
    jackie_chan: 'http://www.memes.at/faces/jackie_chan.jpg',
    challenge_accepted: 'http://www.memes.at/faces/challenge_accepted.jpg',
    lol: 'http://www.memes.at/faces/lol_crazy.jpg',
    gtfo: 'http://www.memes.at/faces/gtfo.jpg',
    slap: 'http://www.memes.at/faces/slap.gif',
    omega_troll: 'http://www.memes.at/faces/omega_troll.jpg',
    gasp: 'http://www.memes.at/faces/gasp.jpg',
    cat_gasp: 'http://www.memes.at/faces/gaspcat_with_glasses.jpg',
    troll_rapper: 'http://www.memes.at/faces/rapper.gif',
    wut: 'http://www.memes.at/faces/wut.jpg',
    cereal_guy: 'http://www.memes.at/faces/cereal_guy_original.jpg',
    cereal_guy_spitting: 'http://www.memes.at/faces/cereal_guy_spitting.jpg',
    gusta_okay: 'http://www.memes.at/faces/me_gusta_vs_okay.gif',
    u_jelly: 'http://www.memes.at/faces/u_jelly_low.jpg',
    u_mad: 'http://www.memes.at/faces/u_mad_troll.gif',
    kill: 'http://www.memes.at/faces/kill.gif',
    bitch_please: 'http://www.memes.at/faces/fuck_that_yao_ming.jpg',
    fap: 'http://www.memes.at/faces/fap.jpg',
    like_a_boss: 'https://s-media-cache-ak0.pinimg.com/236x/fe/69/dd/fe69dd59dfe5eecefb3f3b9baebc635a.jpg',
    knife_self: 'http://www.memes.at/faces/knife_self.jpg',
    haters_gonna_hate: 'http://www.memes.at/faces/haters_gonna_hate_animation.gif',
    fuck_yeah: 'http://www.memes.at/faces/fuck_yeah.jpg',
    boring_cat: 'http://data.whicdn.com/images/48039365/large.gif',
    forever_alone: 'http://www.memes.at/faces/forever_alone_clean.jpg',
    forever_alone_dance: 'http://www.memes.at/faces/forever_alone_dancing.gif',
    high: 'http://www.memes.at/faces/high.jpg',
    nyan_cat: 'http://www.memes.at/faces/nyancat.gif',
    pretty_badass: 'http://www.memes.at/faces/pretty_badass.jpg',
    maximum_trolling: 'http://www.memes.at/faces/maximum_trolling.gif',
    trolling: 'http://www.memes.at/faces/troll_typing_animation.gif',
    desk_flip: 'http://www.memes.at/faces/desk_flip.jpg',
    pokerface: 'http://www.memes.at/faces/pokerface_2_clean.jpg',
    seriously: 'http://www.memes.at/faces/seriously.jpg',
    kappa: 'http://i.imgur.com/nINsy5C.png',
    art: 'http://www.boredpanda.com/blog/wp-content/uploads/2014/04/modern-photo-remakes-famous-paintings-1.jpg',
    list: 'trollface \n yes \n no \n okay \n me_gusta \n me_gusta_creepy \n me_gangsta \n me_gusta_creepy \n ich_mag \n me_gusta_facedance \n mother_of_gusta \n troll_gusta \n me_trollista \n indeed \n facepalm \n spiderman \n badass \n you_dont_say \n troll_dance \n so_hardcore \n genius \n not_bad \n ba_dum_no \n ba_dum_tsss \n crying \n derp \n kitten \n sir \n jesus \n jackie_chan \n challenge_accepted \n lol \n gtfo \n slap \n omega_troll \n gasp \n cat_gasp \n troll_rapper \n wut \n cereal_guy \n cereal_guy_spitting \n gusta_okay \n u_jelly \n u_mad \n kill \n bitch_please \n fap \n like_a_boss \n knife_self \n haters_gonna_hate \n fuck_yeah \n boring_cat \n forever_alone \n forever_alone_dance \n high \n nyan_cat \n pretty_badass \n maximum_trolling \n trolling \n desk_flip \n pokerface \n kappa'
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
    }, greet: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Please enter name!');
        } else {
            send('Hello '+ args + '!');
        }
    }, description: function (id) {
        send(':' + id + ' ' + $('#roomdesc').text());
    }, echo: function (id, args) {
        args = args || '';
        var arr = new Array();
        $("#present-users").children('li.present-user').each(function(){ arr.push($(this).find('img')[0].title); });
        var random = arr[Math.floor( Math.random() * arr.length )];
        if (!args.trim()) {
            send(':' + id + ' Nothing to echo!');
        } else {
            send(':' + id + ' ' + args.replace(/\$random\$/g, function() { return arr[Math.floor(Math.random() * arr.length)] }));
        }
    }, online: function (id) {
        var arr = new Array();
        $("#present-users").children('li.present-user').each(function(){ arr.push($(this).find('img')[0].title); });
        send(':' + id + ' **Online users:** ' + arr.join(', ').replace(/NBOT/g, 'NBOT (Me)') + '.');
    }, kill: function (id, args) {
        args = args || '';
        var arr = new Array();
        $("#present-users").children('li.present-user').each(function(){ arr.push($(this).find('img')[0].title); });
        var random = arr[Math.floor( Math.random() * arr.length )];
        var random2 = arr[Math.floor( Math.random() * arr.length )];
        var kills = [
            ' killed ' + args + ' with a shoe!',
            ' ' + args + ' tried to fly.',
            ' killed ' + args + ' with a tail.',
            ' ' + args + ' is killed in a storm. `(cat storm)`',
            ' ' + args + ' is killed by ' + random2,
            ' ' + args + ' is killed by santa meows!',
            ' ' + args + ' kissed ' + random2 + "'s sword!",
            ' ' + args + ' tried to swim in lava.',
            ' ' + args + ' touched pikachu!',
            ' ' + args + ' is killed by a sheep.',
            ' ' + args + ' tried to kill ' + random2 + ', bad move.',
            ' ' + args + ' said something bad about Chuck Norris...',
            ' ' + args + ' jumped off the bridge. (during drought)',
            ' ' + args + ' drowned, he tried to find spongebob.',
            ' ' + args + ' committed suicide. (thanks to ' + random2 + ')',
            ' ' + args + ' tried to kill death!'
        ];
        var killsr = [
            ' killed ' + random + ' with a shoe!',
            ' ' + args + ' tried to fly.',
            ' killed ' + random + ' with a tail.',
            ' ' + random + ' is killed in a storm. `(cat storm)`',
            ' ' + random + ' is killed by ' + random2 + '.',
            ' ' + random + ' is killed by santa meows!',
            ' ' + random + ' kissed ' + random2 + "'s sword!",
            ' ' + random + ' tried to swim in lava.',
            ' ' + random + ' touched pikachu!',
            ' ' + random + ' is killed by a sheep.',
            ' ' + random + ' tried to kill ' + random2 + ', bad move.',
            ' ' + random + ' said something bad about Chuck Norris...',
            ' ' + random + ' jumped off the bridge. (during drought)',
            ' ' + random + ' drowned, he tried to find spongebob.',
            ' ' + random + ' committed suicide. (thanks to ' + random2 + ')',
            ' ' + random + ' tried to kill death!'
        ];
        if (!args.trim()) {
            send(':' + id + ' Nothing to kill!');
        } else if (args == 'random') {
            send(':' + id + killsr[Math.floor(Math.random()*killsr.length)]);
        } else {
            send(':' + id + kills[Math.floor(Math.random()*kills.length)]);
        }
    }, blame: function (id, args) {
        args = args || '';
        var arr = new Array();
        $("#present-users").children('li.present-user').each(function(){ arr.push($(this).find('img')[0].title); });
        var random = arr[Math.floor( Math.random() * arr.length )];
        var random2 = arr[Math.floor( Math.random() * arr.length )];
        var blame = [
            ' for throwing brick at ' + random2 + '!',
            ', he became a dog!',
            ' for playing mario withouth ' + random2 + '!',
            ', he became a troll!',
            ' for being just like ' + random2 + '!',
            ' for trying to kill ' + random2 + '.',
            ', he lost his tail!',
            ', he ate ' + random2 + "'s banana!",
            ' for blaming someone!',
            ' for nothing.',
            ' for being sexy!',
            ' for being alien!',
            ', bad doggy!'
        ];
        if (!args.trim()) {
            send(':' + id + ' Blame who??');
        } else if (args == 'random') {
            send(':' + id + ' blame ' + random + blame[Math.floor(Math.random()*blame.length)]);
        } else {
            send(':' + id + ' blame ' + args + blame[Math.floor(Math.random()*blame.length)]);
        }
    }, imagetext: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Please add text!');
        } else {
            send(':' + id + ' http://dummyimage.com/1000x500/000/fff?text=' + encodeURIComponent(args).replace(/ /g,'%20') + '&.jpg');
        }
    }, lmgtfy: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Please add text!');
        } else {
            send(':' + id + ' **lmgtfy:** http://lmgtfy.com/?q=' + encodeURIComponent(args).replace(/ /g,'%20'));
        }
    }, slap: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Slap who?');
        } else {
            send(':' + id + ' *Slaps @' + toPingFormat(args) + '!*');
        }
    }, sniper: function (id, args) {
        args = args || '';
        var meters = Math.round(Math.random()*1000) + 1;
        if (!args.trim()) {
            send(':' + id + ' Nothing to kill with a sniper!');
        } else {
            send(':' + id + '  **(　-_･)** ︻デ═一 ▸ `\u0008     \u0008` @' + toPingFormat(args) + ' [' + meters + ' meters]')
        }
    }, cowSay: function (id, args) {
        args = args || '';
        if (!args.trim()) {
            send(':' + id + ' Mooooo, nothing to say???');
        } else {
            $.get('http://allow-any-origin.appspot.com/http://cowsay.morecode.org/say?message=' + encodeURI(args) + '&format=text').success(function (data) {
                var translated = data;
                send('`' + translated + '`');
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
            if (!memes[args]) send(':' + id + ' http://i.imgur.com/W6J1NCR.gif'); else
            send(':' + id + ' ' + memes[args])
        }
    }, rmeme: function (id) {
        var keys = Object.keys(memes);
        send(':' + id + ' ' + memes[keys[ keys.length * Math.random() << 0]]);
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
