//Deqiq cavablar 
const ceratinAnswers = [

	"1Okey, then wolfs are starting to atack, I am not wolf because If i am wolf every body can understand it", 
	"1Firstly me?? It will not be good chocies for wolfes",
	 "1You are wolf but you do not know to I am not eatable man",
	 "1But that will start to change to objection rather than shock",
	 "1If you're trying to feign shock or anger,  ",
	 "'1How dare you ask me that?' ",
	 "Pe1ople accused of something they're trying to hide will start out feigning outrage –",
	 "it'1s much harder to do over a long period",
	 "Play1ers with these roles use their own night-phase to discover something about other players",
	 "Thoug1h the standard game now includes the basic Detective" ]

//Subheli suallar ucun cavablar
const maybeAnswers = [
	'B2ro you say may be but you should be sure for it can you understand',
	'My2 friend you may be wolf too you do not mixed people mind pls',
	'The2 British farthing is a continuation of the farthing series begun in silver under the',
	'Fart2hings of 1719–1724 are slightly larger, at 22–23 millimetres, but are of the same weight',
	'2George I died in 1727, the same year as Newton, and the kings son King George II succeeded to the throne'
]
//'Can be'-li suallar
const canbeAnswers = [
	'3The history of coins in Great Britain can be traced back to the second century BC when they were introduced by Celtic',
	' 3After the Romans began their invasion of Britain in AD 43, they set up mints across the land',
	'nc3luding in London which produced Roman coins for some 40 years before closing',
	'3In 31279, the country numerous mints were unified under a single system whereby control',
	'3In 13630, some time before the outbreak of the English Civil War,'
]

//Zarafatlara cavablar
const jokingAnswers = [
	'4You are so rihgt guy :)))',
	'4wtf :D',
	'4I was died from lough : ))))))',
	'4 You are soo interesting man :)'
]

//Bot olmasina subhe edildiyi zamanki cavablar
const susbectingAnswers = [
	'I am not bot man',
	'My father thinks like you',
	'Heyy is it jok man?',
	'No you? i tkink yes :)'
]

// Yola vermek
const getawayAnswers = [
	'okey it does not matter',
	'Okey guy dont worry be happy',
	'Really, only game',
	'You are so great '
]

//Ad cavablari
const nameAnswers = [
	'Thanks, my name is Jack',
	'Sure, my name is Alex',
	'Realy, my name is Anna',
	'All right, my name is Mia'
]

//Hal evhal tutmaq
const howAnswers = [
	'Thanks, bro what do you do?',
	'Sure, everything is good you?',
	'Realy, i am good you bro?',
	'All right, yes everything is good'
]

//'Nece elemisene cavab verir'
const howdoAnswers = [
	'Thanks, I do not know really?',
	'I am not sure man?',
	'Every thing can be bro?',
	'I do not know it man'
]

	function genereteMessage(message) {

		
		//Cumlede wolf sozunun islenub islenmediyini tapmaq
		if(message.indexOf("wolf") > -1 || message.indexOf('ww') > -1) {  

			//Subheli suallari tapmaq
			if(message.indexOf('may') > -1 || message.indexOf('may be') > -1 || message.indexOf('maybe') > -1 
			|| message.indexOf('might be') > -1 || message.indexOf('mightbe') > -1) {

				var x = Math.floor((Math.random() * 5))
				console.log(maybeAnswers[x])
			 }

			 //Sert suallari tapmq
			else if(message.indexOf('i think') > -1 || message.indexOf('ithink') > -1 ) {

				var y = Math.floor((Math.random() * 10))
				console.log(ceratinAnswers[y])
			 }

			  //"Can be"-li suallara cavab 
			else if(message.indexOf('can be') > -1 || message.indexOf('canbe') > -1 ) {

				var z = Math.floor((Math.random() * 5))
				console.log(canbeAnswers[z])
			 }

			 //Zarafatlara cavab 
			else if(message.indexOf(':)') > -1 || message.indexOf(': )') > -1 || message.indexOf(':D') > -1 || message.indexOf(': D') > -1) {

				var d = Math.floor((Math.random() * 4))
				console.log(jokingAnswers[d])
			 }

	  }

	  //Zarafatlara cavab 
	  else if(message.indexOf('you are bot?') > -1 || message.indexOf('bot ?') > -1 || message.indexOf('bot?') > -1 || message.indexOf('are bot?') > -1) {

		var b = Math.floor((Math.random() * 4))
		console.log(susbectingAnswers[b])
	 }


	 //Yola vermek 
	 else if(message.indexOf('name') > -1 || message.indexOf('What is you name ?') > -1 || message.indexOf('name?') > -1 || message.indexOf('your name?') > -1) {

		var a = Math.floor((Math.random() * 4))
		console.log(nameAnswers[a])
	 }

	 //Necesen
	 else if(message.indexOf('how') > -1) {

		var a = Math.floor((Math.random() * 4))
		console.log(nameAnswers[a])

		if (message.indexOf('you') > -1) {

			if (message.indexOf('are') > -1) {
				var e = Math.floor((Math.random() * 4))
				console.log(howAnswers[e])
			}
		}

		else if (message.indexOf('do') > -1) {
			var h = Math.floor((Math.random() * 4))
			console.log(howdoAnswers[h])
		}
	 }

	 else {
		var c = Math.floor((Math.random() * 4))
		console.log(getawayAnswers[c])
	 }
	}

	genereteMessage('how are you?')
