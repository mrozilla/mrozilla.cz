// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const emoji = [
  {
    codepoint:   [0x1f600],
    description: 'grinning face',
  },
  {
    codepoint:   [0x1f603],
    description: 'grinning face with big eyes',
  },
  {
    codepoint:   [0x1f604],
    description: 'grinning face with smiling eyes',
  },
  {
    codepoint:   [0x1f601],
    description: 'beaming face with smiling eyes',
  },
  {
    codepoint:   [0x1f606],
    description: 'grinning squinting face',
  },
  {
    codepoint:   [0x1f605],
    description: 'grinning face with sweat',
  },
  {
    codepoint:   [0x1f923],
    description: 'rolling on the floor laughing',
  },
  {
    codepoint:   [0x1f602],
    description: 'face with tears of joy',
  },
  {
    codepoint:   [0x1f642],
    description: 'slightly smiling face',
  },
  {
    codepoint:   [0x1f643],
    description: 'upside-down face',
  },
  {
    codepoint:   [0x1f609],
    description: 'winking face',
  },
  {
    codepoint:   [0x1f60a],
    description: 'smiling face with smiling eyes',
  },
  {
    codepoint:   [0x1f607],
    description: 'smiling face with halo',
  },
  {
    codepoint:   [0x1f970],
    description: '⊛ smiling face with 3 hearts',
  },
  {
    codepoint:   [0x1f60d],
    description: 'smiling face with heart-eyes',
  },
  {
    codepoint:   [0x1f929],
    description: 'star-struck',
  },
  {
    codepoint:   [0x1f618],
    description: 'face blowing a kiss',
  },
  {
    codepoint:   [0x1f617],
    description: 'kissing face',
  },
  {
    codepoint:   [0x263a],
    description: 'smiling face',
  },
  {
    codepoint:   [0x1f61a],
    description: 'kissing face with closed eyes',
  },
  {
    codepoint:   [0x1f619],
    description: 'kissing face with smiling eyes',
  },
  {
    codepoint:   [0x1f60b],
    description: 'face savoring food',
  },
  {
    codepoint:   [0x1f61b],
    description: 'face with tongue',
  },
  {
    codepoint:   [0x1f61c],
    description: 'winking face with tongue',
  },
  {
    codepoint:   [0x1f92a],
    description: 'zany face',
  },
  {
    codepoint:   [0x1f61d],
    description: 'squinting face with tongue',
  },
  {
    codepoint:   [0x1f911],
    description: 'money-mouth face',
  },
  {
    codepoint:   [0x1f917],
    description: 'hugging face',
  },
  {
    codepoint:   [0x1f92d],
    description: 'face with hand over mouth',
  },
  {
    codepoint:   [0x1f92b],
    description: 'shushing face',
  },
  {
    codepoint:   [0x1f914],
    description: 'thinking face',
  },
  {
    codepoint:   [0x1f910],
    description: 'zipper-mouth face',
  },
  {
    codepoint:   [0x1f928],
    description: 'face with raised eyebrow',
  },
  {
    codepoint:   [0x1f610],
    description: 'neutral face',
  },
  {
    codepoint:   [0x1f611],
    description: 'expressionless face',
  },
  {
    codepoint:   [0x1f636],
    description: 'face without mouth',
  },
  {
    codepoint:   [0x1f60f],
    description: 'smirking face',
  },
  {
    codepoint:   [0x1f612],
    description: 'unamused face',
  },
  {
    codepoint:   [0x1f644],
    description: 'face with rolling eyes',
  },
  {
    codepoint:   [0x1f62c],
    description: 'grimacing face',
  },
  {
    codepoint:   [0x1f925],
    description: 'lying face',
  },
  {
    codepoint:   [0x1f60c],
    description: 'relieved face',
  },
  {
    codepoint:   [0x1f614],
    description: 'pensive face',
  },
  {
    codepoint:   [0x1f62a],
    description: 'sleepy face',
  },
  {
    codepoint:   [0x1f924],
    description: 'drooling face',
  },
  {
    codepoint:   [0x1f634],
    description: 'sleeping face',
  },
  {
    codepoint:   [0x1f637],
    description: 'face with medical mask',
  },
  {
    codepoint:   [0x1f912],
    description: 'face with thermometer',
  },
  {
    codepoint:   [0x1f915],
    description: 'face with head-bandage',
  },
  {
    codepoint:   [0x1f922],
    description: 'nauseated face',
  },
  {
    codepoint:   [0x1f92e],
    description: 'face vomiting',
  },
  {
    codepoint:   [0x1f927],
    description: 'sneezing face',
  },
  {
    codepoint:   [0x1f975],
    description: '⊛ hot face',
  },
  {
    codepoint:   [0x1f976],
    description: '⊛ cold face',
  },
  {
    codepoint:   [0x1f974],
    description: '⊛ woozy face',
  },
  {
    codepoint:   [0x1f635],
    description: 'dizzy face',
  },
  {
    codepoint:   [0x1f92f],
    description: 'exploding head',
  },
  {
    codepoint:   [0x1f920],
    description: 'cowboy hat face',
  },
  {
    codepoint:   [0x1f973],
    description: '⊛ partying face',
  },
  {
    codepoint:   [0x1f60e],
    description: 'smiling face with sunglasses',
  },
  {
    codepoint:   [0x1f913],
    description: 'nerd face',
  },
  {
    codepoint:   [0x1f9d0],
    description: 'face with monocle',
  },
  {
    codepoint:   [0x1f615],
    description: 'confused face',
  },
  {
    codepoint:   [0x1f61f],
    description: 'worried face',
  },
  {
    codepoint:   [0x1f641],
    description: 'slightly frowning face',
  },
  {
    codepoint:   [0x2639],
    description: 'frowning face',
  },
  {
    codepoint:   [0x1f62e],
    description: 'face with open mouth',
  },
  {
    codepoint:   [0x1f62f],
    description: 'hushed face',
  },
  {
    codepoint:   [0x1f632],
    description: 'astonished face',
  },
  {
    codepoint:   [0x1f633],
    description: 'flushed face',
  },
  {
    codepoint:   [0x1f97a],
    description: '⊛ pleading face',
  },
  {
    codepoint:   [0x1f626],
    description: 'frowning face with open mouth',
  },
  {
    codepoint:   [0x1f627],
    description: 'anguished face',
  },
  {
    codepoint:   [0x1f628],
    description: 'fearful face',
  },
  {
    codepoint:   [0x1f630],
    description: 'anxious face with sweat',
  },
  {
    codepoint:   [0x1f625],
    description: 'sad but relieved face',
  },
  {
    codepoint:   [0x1f622],
    description: 'crying face',
  },
  {
    codepoint:   [0x1f62d],
    description: 'loudly crying face',
  },
  {
    codepoint:   [0x1f631],
    description: 'face screaming in fear',
  },
  {
    codepoint:   [0x1f616],
    description: 'confounded face',
  },
  {
    codepoint:   [0x1f623],
    description: 'persevering face',
  },
  {
    codepoint:   [0x1f61e],
    description: 'disappointed face',
  },
  {
    codepoint:   [0x1f613],
    description: 'downcast face with sweat',
  },
  {
    codepoint:   [0x1f629],
    description: 'weary face',
  },
  {
    codepoint:   [0x1f62b],
    description: 'tired face',
  },
  {
    codepoint:   [0x1f624],
    description: 'face with steam from nose',
  },
  {
    codepoint:   [0x1f621],
    description: 'pouting face',
  },
  {
    codepoint:   [0x1f620],
    description: 'angry face',
  },
  {
    codepoint:   [0x1f92c],
    description: 'face with symbols on mouth',
  },
  {
    codepoint:   [0x1f608],
    description: 'smiling face with horns',
  },
  {
    codepoint:   [0x1f47f],
    description: 'angry face with horns',
  },
  {
    codepoint:   [0x1f480],
    description: 'skull',
  },
  {
    codepoint:   [0x2620],
    description: 'skull and crossbones',
  },
  {
    codepoint:   [0x1f4a9],
    description: 'pile of poo',
  },
  {
    codepoint:   [0x1f921],
    description: 'clown face',
  },
  {
    codepoint:   [0x1f479],
    description: 'ogre',
  },
  {
    codepoint:   [0x1f47a],
    description: 'goblin',
  },
  {
    codepoint:   [0x1f47b],
    description: 'ghost',
  },
  {
    codepoint:   [0x1f47d],
    description: 'alien',
  },
  {
    codepoint:   [0x1f47e],
    description: 'alien monster',
  },
  {
    codepoint:   [0x1f916],
    description: 'robot face',
  },
  {
    codepoint:   [0x1f63a],
    description: 'grinning cat face',
  },
  {
    codepoint:   [0x1f638],
    description: 'grinning cat face with smiling eyes',
  },
  {
    codepoint:   [0x1f639],
    description: 'cat face with tears of joy',
  },
  {
    codepoint:   [0x1f63b],
    description: 'smiling cat face with heart-eyes',
  },
  {
    codepoint:   [0x1f63c],
    description: 'cat face with wry smile',
  },
  {
    codepoint:   [0x1f63d],
    description: 'kissing cat face',
  },
  {
    codepoint:   [0x1f640],
    description: 'weary cat face',
  },
  {
    codepoint:   [0x1f63f],
    description: 'crying cat face',
  },
  {
    codepoint:   [0x1f63e],
    description: 'pouting cat face',
  },
  {
    codepoint:   [0x1f648],
    description: 'see-no-evil monkey',
  },
  {
    codepoint:   [0x1f649],
    description: 'hear-no-evil monkey',
  },
  {
    codepoint:   [0x1f64a],
    description: 'speak-no-evil monkey',
  },
  {
    codepoint:   [0x1f48b],
    description: 'kiss mark',
  },
  {
    codepoint:   [0x1f48c],
    description: 'love letter',
  },
  {
    codepoint:   [0x1f498],
    description: 'heart with arrow',
  },
  {
    codepoint:   [0x1f49d],
    description: 'heart with ribbon',
  },
  {
    codepoint:   [0x1f496],
    description: 'sparkling heart',
  },
  {
    codepoint:   [0x1f497],
    description: 'growing heart',
  },
  {
    codepoint:   [0x1f493],
    description: 'beating heart',
  },
  {
    codepoint:   [0x1f49e],
    description: 'revolving hearts',
  },
  {
    codepoint:   [0x1f495],
    description: 'two hearts',
  },
  {
    codepoint:   [0x1f49f],
    description: 'heart decoration',
  },
  {
    codepoint:   [0x2763],
    description: 'heavy heart exclamation',
  },
  {
    codepoint:   [0x1f494],
    description: 'broken heart',
  },
  {
    codepoint:   [0x2764],
    description: 'red heart',
  },
  {
    codepoint:   [0x1f9e1],
    description: 'orange heart',
  },
  {
    codepoint:   [0x1f49b],
    description: 'yellow heart',
  },
  {
    codepoint:   [0x1f49a],
    description: 'green heart',
  },
  {
    codepoint:   [0x1f499],
    description: 'blue heart',
  },
  {
    codepoint:   [0x1f49c],
    description: 'purple heart',
  },
  {
    codepoint:   [0x1f5a4],
    description: 'black heart',
  },
  {
    codepoint:   [0x1f4af],
    description: 'hundred points',
  },
  {
    codepoint:   [0x1f4a2],
    description: 'anger symbol',
  },
  {
    codepoint:   [0x1f4a5],
    description: 'collision',
  },
  {
    codepoint:   [0x1f4ab],
    description: 'dizzy',
  },
  {
    codepoint:   [0x1f4a6],
    description: 'sweat droplets',
  },
  {
    codepoint:   [0x1f4a8],
    description: 'dashing away',
  },
  {
    codepoint:   [0x1f573],
    description: 'hole',
  },
  {
    codepoint:   [0x1f4a3],
    description: 'bomb',
  },
  {
    codepoint:   [0x1f4ac],
    description: 'speech balloon',
  },
  {
    codepoint:   [0x1f441, 0xfe0f, 0x200d, 0x1f5e8, 0xfe0f],
    description: 'eye in speech bubble',
  },
  {
    codepoint:   [0x1f5e8],
    description: 'left speech bubble',
  },
  {
    codepoint:   [0x1f5ef],
    description: 'right anger bubble',
  },
  {
    codepoint:   [0x1f4ad],
    description: 'thought balloon',
  },
  {
    codepoint:   [0x1f4a4],
    description: 'zzz',
  },
  {
    codepoint:   [0x1f44b],
    description: 'waving hand',
  },
  {
    codepoint:   [0x1f91a],
    description: 'raised back of hand',
  },
  {
    codepoint:   [0x1f590],
    description: 'hand with fingers splayed',
  },
  {
    codepoint:   [0x270b],
    description: 'raised hand',
  },
  {
    codepoint:   [0x1f596],
    description: 'vulcan salute',
  },
  {
    codepoint:   [0x1f44c],
    description: 'OK hand',
  },
  {
    codepoint:   [0x270c],
    description: 'victory hand',
  },
  {
    codepoint:   [0x1f91e],
    description: 'crossed fingers',
  },
  {
    codepoint:   [0x1f91f],
    description: 'love-you gesture',
  },
  {
    codepoint:   [0x1f918],
    description: 'sign of the horns',
  },
  {
    codepoint:   [0x1f919],
    description: 'call me hand',
  },
  {
    codepoint:   [0x1f448],
    description: 'backhand index pointing left',
  },
  {
    codepoint:   [0x1f449],
    description: 'backhand index pointing right',
  },
  {
    codepoint:   [0x1f446],
    description: 'backhand index pointing up',
  },
  {
    codepoint:   [0x1f595],
    description: 'middle finger',
  },
  {
    codepoint:   [0x1f447],
    description: 'backhand index pointing down',
  },
  {
    codepoint:   [0x261d],
    description: 'index pointing up',
  },
  {
    codepoint:   [0x1f44d],
    description: 'thumbs up',
  },
  {
    codepoint:   [0x1f44e],
    description: 'thumbs down',
  },
  {
    codepoint:   [0x270a],
    description: 'raised fist',
  },
  {
    codepoint:   [0x1f44a],
    description: 'oncoming fist',
  },
  {
    codepoint:   [0x1f91b],
    description: 'left-facing fist',
  },
  {
    codepoint:   [0x1f91c],
    description: 'right-facing fist',
  },
  {
    codepoint:   [0x1f44f],
    description: 'clapping hands',
  },
  {
    codepoint:   [0x1f64c],
    description: 'raising hands',
  },
  {
    codepoint:   [0x1f450],
    description: 'open hands',
  },
  {
    codepoint:   [0x1f932],
    description: 'palms up together',
  },
  {
    codepoint:   [0x1f91d],
    description: 'handshake',
  },
  {
    codepoint:   [0x1f64f],
    description: 'folded hands',
  },
  {
    codepoint:   [0x270d],
    description: 'writing hand',
  },
  {
    codepoint:   [0x1f485],
    description: 'nail polish',
  },
  {
    codepoint:   [0x1f933],
    description: 'selfie',
  },
  {
    codepoint:   [0x1f4aa],
    description: 'flexed biceps',
  },
  {
    codepoint:   [0x1f9b5],
    description: '⊛ leg',
  },
  {
    codepoint:   [0x1f9b6],
    description: '⊛ foot',
  },
  {
    codepoint:   [0x1f442],
    description: 'ear',
  },
  {
    codepoint:   [0x1f443],
    description: 'nose',
  },
  {
    codepoint:   [0x1f9e0],
    description: 'brain',
  },
  {
    codepoint:   [0x1f9b7],
    description: '⊛ tooth',
  },
  {
    codepoint:   [0x1f9b4],
    description: '⊛ bone',
  },
  {
    codepoint:   [0x1f440],
    description: 'eyes',
  },
  {
    codepoint:   [0x1f441],
    description: 'eye',
  },
  {
    codepoint:   [0x1f445],
    description: 'tongue',
  },
  {
    codepoint:   [0x1f444],
    description: 'mouth',
  },
  {
    codepoint:   [0x1f476],
    description: 'baby',
  },
  {
    codepoint:   [0x1f9d2],
    description: 'child',
  },
  {
    codepoint:   [0x1f466],
    description: 'boy',
  },
  {
    codepoint:   [0x1f467],
    description: 'girl',
  },
  {
    codepoint:   [0x1f9d1],
    description: 'person',
  },
  {
    codepoint:   [0x1f471],
    description: 'person: blond hair',
  },
  {
    codepoint:   [0x1f468],
    description: 'man',
  },
  {
    codepoint:   [0x1f471, 0x200d, 0x2642, 0xfe0f],
    description: 'man: blond hair',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f9b0],
    description: '⊛ man: red hair',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f9b1],
    description: '⊛ man: curly hair',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f9b3],
    description: '⊛ man: white hair',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f9b2],
    description: '⊛ man: bald',
  },
  {
    codepoint:   [0x1f9d4],
    description: 'man: beard',
  },
  {
    codepoint:   [0x1f469],
    description: 'woman',
  },
  {
    codepoint:   [0x1f471, 0x200d, 0x2640, 0xfe0f],
    description: 'woman: blond hair',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f9b0],
    description: '⊛ woman: red hair',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f9b1],
    description: '⊛ woman: curly hair',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f9b3],
    description: '⊛ woman: white hair',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f9b2],
    description: '⊛ woman: bald',
  },
  {
    codepoint:   [0x1f9d3],
    description: 'older person',
  },
  {
    codepoint:   [0x1f474],
    description: 'old man',
  },
  {
    codepoint:   [0x1f475],
    description: 'old woman',
  },
  {
    codepoint:   [0x1f64d],
    description: 'person frowning',
  },
  {
    codepoint:   [0x1f64d, 0x200d, 0x2642, 0xfe0f],
    description: 'man frowning',
  },
  {
    codepoint:   [0x1f64d, 0x200d, 0x2640, 0xfe0f],
    description: 'woman frowning',
  },
  {
    codepoint:   [0x1f64e],
    description: 'person pouting',
  },
  {
    codepoint:   [0x1f64e, 0x200d, 0x2642, 0xfe0f],
    description: 'man pouting',
  },
  {
    codepoint:   [0x1f64e, 0x200d, 0x2640, 0xfe0f],
    description: 'woman pouting',
  },
  {
    codepoint:   [0x1f645],
    description: 'person gesturing NO',
  },
  {
    codepoint:   [0x1f645, 0x200d, 0x2642, 0xfe0f],
    description: 'man gesturing NO',
  },
  {
    codepoint:   [0x1f645, 0x200d, 0x2640, 0xfe0f],
    description: 'woman gesturing NO',
  },
  {
    codepoint:   [0x1f646],
    description: 'person gesturing OK',
  },
  {
    codepoint:   [0x1f646, 0x200d, 0x2642, 0xfe0f],
    description: 'man gesturing OK',
  },
  {
    codepoint:   [0x1f646, 0x200d, 0x2640, 0xfe0f],
    description: 'woman gesturing OK',
  },
  {
    codepoint:   [0x1f481],
    description: 'person tipping hand',
  },
  {
    codepoint:   [0x1f481, 0x200d, 0x2642, 0xfe0f],
    description: 'man tipping hand',
  },
  {
    codepoint:   [0x1f481, 0x200d, 0x2640, 0xfe0f],
    description: 'woman tipping hand',
  },
  {
    codepoint:   [0x1f64b],
    description: 'person raising hand',
  },
  {
    codepoint:   [0x1f64b, 0x200d, 0x2642, 0xfe0f],
    description: 'man raising hand',
  },
  {
    codepoint:   [0x1f64b, 0x200d, 0x2640, 0xfe0f],
    description: 'woman raising hand',
  },
  {
    codepoint:   [0x1f647],
    description: 'person bowing',
  },
  {
    codepoint:   [0x1f647, 0x200d, 0x2642, 0xfe0f],
    description: 'man bowing',
  },
  {
    codepoint:   [0x1f647, 0x200d, 0x2640, 0xfe0f],
    description: 'woman bowing',
  },
  {
    codepoint:   [0x1f926],
    description: 'person facepalming',
  },
  {
    codepoint:   [0x1f926, 0x200d, 0x2642, 0xfe0f],
    description: 'man facepalming',
  },
  {
    codepoint:   [0x1f926, 0x200d, 0x2640, 0xfe0f],
    description: 'woman facepalming',
  },
  {
    codepoint:   [0x1f937],
    description: 'person shrugging',
  },
  {
    codepoint:   [0x1f937, 0x200d, 0x2642, 0xfe0f],
    description: 'man shrugging',
  },
  {
    codepoint:   [0x1f937, 0x200d, 0x2640, 0xfe0f],
    description: 'woman shrugging',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x2695, 0xfe0f],
    description: 'man health worker',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x2695, 0xfe0f],
    description: 'woman health worker',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f393],
    description: 'man student',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f393],
    description: 'woman student',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f3eb],
    description: 'man teacher',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f3eb],
    description: 'woman teacher',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x2696, 0xfe0f],
    description: 'man judge',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x2696, 0xfe0f],
    description: 'woman judge',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f33e],
    description: 'man farmer',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f33e],
    description: 'woman farmer',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f373],
    description: 'man cook',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f373],
    description: 'woman cook',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f527],
    description: 'man mechanic',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f527],
    description: 'woman mechanic',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f3ed],
    description: 'man factory worker',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f3ed],
    description: 'woman factory worker',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f4bc],
    description: 'man office worker',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f4bc],
    description: 'woman office worker',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f52c],
    description: 'man scientist',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f52c],
    description: 'woman scientist',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f4bb],
    description: 'man technologist',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f4bb],
    description: 'woman technologist',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f3a4],
    description: 'man singer',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f3a4],
    description: 'woman singer',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f3a8],
    description: 'man artist',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f3a8],
    description: 'woman artist',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x2708, 0xfe0f],
    description: 'man pilot',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x2708, 0xfe0f],
    description: 'woman pilot',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f680],
    description: 'man astronaut',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f680],
    description: 'woman astronaut',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f692],
    description: 'man firefighter',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f692],
    description: 'woman firefighter',
  },
  {
    codepoint:   [0x1f46e],
    description: 'police officer',
  },
  {
    codepoint:   [0x1f46e, 0x200d, 0x2642, 0xfe0f],
    description: 'man police officer',
  },
  {
    codepoint:   [0x1f46e, 0x200d, 0x2640, 0xfe0f],
    description: 'woman police officer',
  },
  {
    codepoint:   [0x1f575],
    description: 'detective',
  },
  {
    codepoint:   [0x1f575, 0xfe0f, 0x200d, 0x2642, 0xfe0f],
    description: 'man detective',
  },
  {
    codepoint:   [0x1f575, 0xfe0f, 0x200d, 0x2640, 0xfe0f],
    description: 'woman detective',
  },
  {
    codepoint:   [0x1f482],
    description: 'guard',
  },
  {
    codepoint:   [0x1f482, 0x200d, 0x2642, 0xfe0f],
    description: 'man guard',
  },
  {
    codepoint:   [0x1f482, 0x200d, 0x2640, 0xfe0f],
    description: 'woman guard',
  },
  {
    codepoint:   [0x1f477],
    description: 'construction worker',
  },
  {
    codepoint:   [0x1f477, 0x200d, 0x2642, 0xfe0f],
    description: 'man construction worker',
  },
  {
    codepoint:   [0x1f477, 0x200d, 0x2640, 0xfe0f],
    description: 'woman construction worker',
  },
  {
    codepoint:   [0x1f934],
    description: 'prince',
  },
  {
    codepoint:   [0x1f478],
    description: 'princess',
  },
  {
    codepoint:   [0x1f473],
    description: 'person wearing turban',
  },
  {
    codepoint:   [0x1f473, 0x200d, 0x2642, 0xfe0f],
    description: 'man wearing turban',
  },
  {
    codepoint:   [0x1f473, 0x200d, 0x2640, 0xfe0f],
    description: 'woman wearing turban',
  },
  {
    codepoint:   [0x1f472],
    description: 'man with Chinese cap',
  },
  {
    codepoint:   [0x1f9d5],
    description: 'woman with headscarf',
  },
  {
    codepoint:   [0x1f935],
    description: 'man in tuxedo',
  },
  {
    codepoint:   [0x1f470],
    description: 'bride with veil',
  },
  {
    codepoint:   [0x1f930],
    description: 'pregnant woman',
  },
  {
    codepoint:   [0x1f931],
    description: 'breast-feeding',
  },
  {
    codepoint:   [0x1f47c],
    description: 'baby angel',
  },
  {
    codepoint:   [0x1f385],
    description: 'Santa Claus',
  },
  {
    codepoint:   [0x1f936],
    description: 'Mrs. Claus',
  },
  {
    codepoint:   [0x1f9b8],
    description: '⊛ superhero',
  },
  {
    codepoint:   [0x1f9b8, 0x200d, 0x2642, 0xfe0f],
    description: '⊛ man superhero',
  },
  {
    codepoint:   [0x1f9b8, 0x200d, 0x2640, 0xfe0f],
    description: '⊛ woman superhero',
  },
  {
    codepoint:   [0x1f9b9],
    description: '⊛ supervillain',
  },
  {
    codepoint:   [0x1f9b9, 0x200d, 0x2642, 0xfe0f],
    description: '⊛ man supervillain',
  },
  {
    codepoint:   [0x1f9b9, 0x200d, 0x2640, 0xfe0f],
    description: '⊛ woman supervillain',
  },
  {
    codepoint:   [0x1f9d9],
    description: 'mage',
  },
  {
    codepoint:   [0x1f9d9, 0x200d, 0x2642, 0xfe0f],
    description: 'man mage',
  },
  {
    codepoint:   [0x1f9d9, 0x200d, 0x2640, 0xfe0f],
    description: 'woman mage',
  },
  {
    codepoint:   [0x1f9da],
    description: 'fairy',
  },
  {
    codepoint:   [0x1f9da, 0x200d, 0x2642, 0xfe0f],
    description: 'man fairy',
  },
  {
    codepoint:   [0x1f9da, 0x200d, 0x2640, 0xfe0f],
    description: 'woman fairy',
  },
  {
    codepoint:   [0x1f9db],
    description: 'vampire',
  },
  {
    codepoint:   [0x1f9db, 0x200d, 0x2642, 0xfe0f],
    description: 'man vampire',
  },
  {
    codepoint:   [0x1f9db, 0x200d, 0x2640, 0xfe0f],
    description: 'woman vampire',
  },
  {
    codepoint:   [0x1f9dc],
    description: 'merperson',
  },
  {
    codepoint:   [0x1f9dc, 0x200d, 0x2642, 0xfe0f],
    description: 'merman',
  },
  {
    codepoint:   [0x1f9dc, 0x200d, 0x2640, 0xfe0f],
    description: 'mermaid',
  },
  {
    codepoint:   [0x1f9dd],
    description: 'elf',
  },
  {
    codepoint:   [0x1f9dd, 0x200d, 0x2642, 0xfe0f],
    description: 'man elf',
  },
  {
    codepoint:   [0x1f9dd, 0x200d, 0x2640, 0xfe0f],
    description: 'woman elf',
  },
  {
    codepoint:   [0x1f9de],
    description: 'genie',
  },
  {
    codepoint:   [0x1f9de, 0x200d, 0x2642, 0xfe0f],
    description: 'man genie',
  },
  {
    codepoint:   [0x1f9de, 0x200d, 0x2640, 0xfe0f],
    description: 'woman genie',
  },
  {
    codepoint:   [0x1f9df],
    description: 'zombie',
  },
  {
    codepoint:   [0x1f9df, 0x200d, 0x2642, 0xfe0f],
    description: 'man zombie',
  },
  {
    codepoint:   [0x1f9df, 0x200d, 0x2640, 0xfe0f],
    description: 'woman zombie',
  },
  {
    codepoint:   [0x1f486],
    description: 'person getting massage',
  },
  {
    codepoint:   [0x1f486, 0x200d, 0x2642, 0xfe0f],
    description: 'man getting massage',
  },
  {
    codepoint:   [0x1f486, 0x200d, 0x2640, 0xfe0f],
    description: 'woman getting massage',
  },
  {
    codepoint:   [0x1f487],
    description: 'person getting haircut',
  },
  {
    codepoint:   [0x1f487, 0x200d, 0x2642, 0xfe0f],
    description: 'man getting haircut',
  },
  {
    codepoint:   [0x1f487, 0x200d, 0x2640, 0xfe0f],
    description: 'woman getting haircut',
  },
  {
    codepoint:   [0x1f6b6],
    description: 'person walking',
  },
  {
    codepoint:   [0x1f6b6, 0x200d, 0x2642, 0xfe0f],
    description: 'man walking',
  },
  {
    codepoint:   [0x1f6b6, 0x200d, 0x2640, 0xfe0f],
    description: 'woman walking',
  },
  {
    codepoint:   [0x1f3c3],
    description: 'person running',
  },
  {
    codepoint:   [0x1f3c3, 0x200d, 0x2642, 0xfe0f],
    description: 'man running',
  },
  {
    codepoint:   [0x1f3c3, 0x200d, 0x2640, 0xfe0f],
    description: 'woman running',
  },
  {
    codepoint:   [0x1f483],
    description: 'woman dancing',
  },
  {
    codepoint:   [0x1f57a],
    description: 'man dancing',
  },
  {
    codepoint:   [0x1f574],
    description: 'man in suit levitating',
  },
  {
    codepoint:   [0x1f46f],
    description: 'people with bunny ears',
  },
  {
    codepoint:   [0x1f46f, 0x200d, 0x2642, 0xfe0f],
    description: 'men with bunny ears',
  },
  {
    codepoint:   [0x1f46f, 0x200d, 0x2640, 0xfe0f],
    description: 'women with bunny ears',
  },
  {
    codepoint:   [0x1f9d6],
    description: 'person in steamy room',
  },
  {
    codepoint:   [0x1f9d6, 0x200d, 0x2642, 0xfe0f],
    description: 'man in steamy room',
  },
  {
    codepoint:   [0x1f9d6, 0x200d, 0x2640, 0xfe0f],
    description: 'woman in steamy room',
  },
  {
    codepoint:   [0x1f9d7],
    description: 'person climbing',
  },
  {
    codepoint:   [0x1f9d7, 0x200d, 0x2642, 0xfe0f],
    description: 'man climbing',
  },
  {
    codepoint:   [0x1f9d7, 0x200d, 0x2640, 0xfe0f],
    description: 'woman climbing',
  },
  {
    codepoint:   [0x1f93a],
    description: 'person fencing',
  },
  {
    codepoint:   [0x1f3c7],
    description: 'horse racing',
  },
  {
    codepoint:   [0x26f7],
    description: 'skier',
  },
  {
    codepoint:   [0x1f3c2],
    description: 'snowboarder',
  },
  {
    codepoint:   [0x1f3cc],
    description: 'person golfing',
  },
  {
    codepoint:   [0x1f3cc, 0xfe0f, 0x200d, 0x2642, 0xfe0f],
    description: 'man golfing',
  },
  {
    codepoint:   [0x1f3cc, 0xfe0f, 0x200d, 0x2640, 0xfe0f],
    description: 'woman golfing',
  },
  {
    codepoint:   [0x1f3c4],
    description: 'person surfing',
  },
  {
    codepoint:   [0x1f3c4, 0x200d, 0x2642, 0xfe0f],
    description: 'man surfing',
  },
  {
    codepoint:   [0x1f3c4, 0x200d, 0x2640, 0xfe0f],
    description: 'woman surfing',
  },
  {
    codepoint:   [0x1f6a3],
    description: 'person rowing boat',
  },
  {
    codepoint:   [0x1f6a3, 0x200d, 0x2642, 0xfe0f],
    description: 'man rowing boat',
  },
  {
    codepoint:   [0x1f6a3, 0x200d, 0x2640, 0xfe0f],
    description: 'woman rowing boat',
  },
  {
    codepoint:   [0x1f3ca],
    description: 'person swimming',
  },
  {
    codepoint:   [0x1f3ca, 0x200d, 0x2642, 0xfe0f],
    description: 'man swimming',
  },
  {
    codepoint:   [0x1f3ca, 0x200d, 0x2640, 0xfe0f],
    description: 'woman swimming',
  },
  {
    codepoint:   [0x26f9],
    description: 'person bouncing ball',
  },
  {
    codepoint:   [0x26f9, 0xfe0f, 0x200d, 0x2642, 0xfe0f],
    description: 'man bouncing ball',
  },
  {
    codepoint:   [0x26f9, 0xfe0f, 0x200d, 0x2640, 0xfe0f],
    description: 'woman bouncing ball',
  },
  {
    codepoint:   [0x1f3cb],
    description: 'person lifting weights',
  },
  {
    codepoint:   [0x1f3cb, 0xfe0f, 0x200d, 0x2642, 0xfe0f],
    description: 'man lifting weights',
  },
  {
    codepoint:   [0x1f3cb, 0xfe0f, 0x200d, 0x2640, 0xfe0f],
    description: 'woman lifting weights',
  },
  {
    codepoint:   [0x1f6b4],
    description: 'person biking',
  },
  {
    codepoint:   [0x1f6b4, 0x200d, 0x2642, 0xfe0f],
    description: 'man biking',
  },
  {
    codepoint:   [0x1f6b4, 0x200d, 0x2640, 0xfe0f],
    description: 'woman biking',
  },
  {
    codepoint:   [0x1f6b5],
    description: 'person mountain biking',
  },
  {
    codepoint:   [0x1f6b5, 0x200d, 0x2642, 0xfe0f],
    description: 'man mountain biking',
  },
  {
    codepoint:   [0x1f6b5, 0x200d, 0x2640, 0xfe0f],
    description: 'woman mountain biking',
  },
  {
    codepoint:   [0x1f938],
    description: 'person cartwheeling',
  },
  {
    codepoint:   [0x1f938, 0x200d, 0x2642, 0xfe0f],
    description: 'man cartwheeling',
  },
  {
    codepoint:   [0x1f938, 0x200d, 0x2640, 0xfe0f],
    description: 'woman cartwheeling',
  },
  {
    codepoint:   [0x1f93c],
    description: 'people wrestling',
  },
  {
    codepoint:   [0x1f93c, 0x200d, 0x2642, 0xfe0f],
    description: 'men wrestling',
  },
  {
    codepoint:   [0x1f93c, 0x200d, 0x2640, 0xfe0f],
    description: 'women wrestling',
  },
  {
    codepoint:   [0x1f93d],
    description: 'person playing water polo',
  },
  {
    codepoint:   [0x1f93d, 0x200d, 0x2642, 0xfe0f],
    description: 'man playing water polo',
  },
  {
    codepoint:   [0x1f93d, 0x200d, 0x2640, 0xfe0f],
    description: 'woman playing water polo',
  },
  {
    codepoint:   [0x1f93e],
    description: 'person playing handball',
  },
  {
    codepoint:   [0x1f93e, 0x200d, 0x2642, 0xfe0f],
    description: 'man playing handball',
  },
  {
    codepoint:   [0x1f93e, 0x200d, 0x2640, 0xfe0f],
    description: 'woman playing handball',
  },
  {
    codepoint:   [0x1f939],
    description: 'person juggling',
  },
  {
    codepoint:   [0x1f939, 0x200d, 0x2642, 0xfe0f],
    description: 'man juggling',
  },
  {
    codepoint:   [0x1f939, 0x200d, 0x2640, 0xfe0f],
    description: 'woman juggling',
  },
  {
    codepoint:   [0x1f9d8],
    description: 'person in lotus position',
  },
  {
    codepoint:   [0x1f9d8, 0x200d, 0x2642, 0xfe0f],
    description: 'man in lotus position',
  },
  {
    codepoint:   [0x1f9d8, 0x200d, 0x2640, 0xfe0f],
    description: 'woman in lotus position',
  },
  {
    codepoint:   [0x1f6c0],
    description: 'person taking bath',
  },
  {
    codepoint:   [0x1f6cc],
    description: 'person in bed',
  },
  {
    codepoint:   [0x1f46b],
    description: 'man and woman holding hands',
  },
  {
    codepoint:   [0x1f46c],
    description: 'two men holding hands',
  },
  {
    codepoint:   [0x1f46d],
    description: 'two women holding hands',
  },
  {
    codepoint:   [0x1f48f],
    description: 'kiss',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x2764, 0xfe0f, 0x200d, 0x1f48b, 0x200d, 0x1f468],
    description: 'kiss: woman, man',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x2764, 0xfe0f, 0x200d, 0x1f48b, 0x200d, 0x1f468],
    description: 'kiss: man, man',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x2764, 0xfe0f, 0x200d, 0x1f48b, 0x200d, 0x1f469],
    description: 'kiss: woman, woman',
  },
  {
    codepoint:   [0x1f491],
    description: 'couple with heart',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x2764, 0xfe0f, 0x200d, 0x1f468],
    description: 'couple with heart: woman, man',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x2764, 0xfe0f, 0x200d, 0x1f468],
    description: 'couple with heart: man, man',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x2764, 0xfe0f, 0x200d, 0x1f469],
    description: 'couple with heart: woman, woman',
  },
  {
    codepoint:   [0x1f46a],
    description: 'family',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f469, 0x200d, 0x1f466],
    description: 'family: man, woman, boy',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f469, 0x200d, 0x1f467],
    description: 'family: man, woman, girl',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f469, 0x200d, 0x1f467, 0x200d, 0x1f466],
    description: 'family: man, woman, girl, boy',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f469, 0x200d, 0x1f466, 0x200d, 0x1f466],
    description: 'family: man, woman, boy, boy',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f469, 0x200d, 0x1f467, 0x200d, 0x1f467],
    description: 'family: man, woman, girl, girl',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f468, 0x200d, 0x1f466],
    description: 'family: man, man, boy',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f468, 0x200d, 0x1f467],
    description: 'family: man, man, girl',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f468, 0x200d, 0x1f467, 0x200d, 0x1f466],
    description: 'family: man, man, girl, boy',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f468, 0x200d, 0x1f466, 0x200d, 0x1f466],
    description: 'family: man, man, boy, boy',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f468, 0x200d, 0x1f467, 0x200d, 0x1f467],
    description: 'family: man, man, girl, girl',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f469, 0x200d, 0x1f466],
    description: 'family: woman, woman, boy',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f469, 0x200d, 0x1f467],
    description: 'family: woman, woman, girl',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f469, 0x200d, 0x1f467, 0x200d, 0x1f466],
    description: 'family: woman, woman, girl, boy',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f469, 0x200d, 0x1f466, 0x200d, 0x1f466],
    description: 'family: woman, woman, boy, boy',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f469, 0x200d, 0x1f467, 0x200d, 0x1f467],
    description: 'family: woman, woman, girl, girl',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f466],
    description: 'family: man, boy',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f466, 0x200d, 0x1f466],
    description: 'family: man, boy, boy',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f467],
    description: 'family: man, girl',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f467, 0x200d, 0x1f466],
    description: 'family: man, girl, boy',
  },
  {
    codepoint:   [0x1f468, 0x200d, 0x1f467, 0x200d, 0x1f467],
    description: 'family: man, girl, girl',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f466],
    description: 'family: woman, boy',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f466, 0x200d, 0x1f466],
    description: 'family: woman, boy, boy',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f467],
    description: 'family: woman, girl',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f467, 0x200d, 0x1f466],
    description: 'family: woman, girl, boy',
  },
  {
    codepoint:   [0x1f469, 0x200d, 0x1f467, 0x200d, 0x1f467],
    description: 'family: woman, girl, girl',
  },
  {
    codepoint:   [0x1f5e3],
    description: 'speaking head',
  },
  {
    codepoint:   [0x1f464],
    description: 'bust in silhouette',
  },
  {
    codepoint:   [0x1f465],
    description: 'busts in silhouette',
  },
  {
    codepoint:   [0x1f463],
    description: 'footprints',
  },
  {
    codepoint:   [0x1f9b0],
    description: '⊛ red hair',
  },
  {
    codepoint:   [0x1f9b1],
    description: '⊛ curly hair',
  },
  {
    codepoint:   [0x1f9b3],
    description: '⊛ white hair',
  },
  {
    codepoint:   [0x1f9b2],
    description: '⊛ bald',
  },
  {
    codepoint:   [0x2640],
    description: 'female sign',
  },
  {
    codepoint:   [0x2642],
    description: 'male sign',
  },
  {
    codepoint:   [0x1f435],
    description: 'monkey face',
  },
  {
    codepoint:   [0x1f412],
    description: 'monkey',
  },
  {
    codepoint:   [0x1f98d],
    description: 'gorilla',
  },
  {
    codepoint:   [0x1f436],
    description: 'dog face',
  },
  {
    codepoint:   [0x1f415],
    description: 'dog',
  },
  {
    codepoint:   [0x1f429],
    description: 'poodle',
  },
  {
    codepoint:   [0x1f43a],
    description: 'wolf face',
  },
  {
    codepoint:   [0x1f98a],
    description: 'fox face',
  },
  {
    codepoint:   [0x1f99d],
    description: '⊛ raccoon',
  },
  {
    codepoint:   [0x1f431],
    description: 'cat face',
  },
  {
    codepoint:   [0x1f408],
    description: 'cat',
  },
  {
    codepoint:   [0x1f981],
    description: 'lion face',
  },
  {
    codepoint:   [0x1f42f],
    description: 'tiger face',
  },
  {
    codepoint:   [0x1f405],
    description: 'tiger',
  },
  {
    codepoint:   [0x1f406],
    description: 'leopard',
  },
  {
    codepoint:   [0x1f434],
    description: 'horse face',
  },
  {
    codepoint:   [0x1f40e],
    description: 'horse',
  },
  {
    codepoint:   [0x1f984],
    description: 'unicorn face',
  },
  {
    codepoint:   [0x1f993],
    description: 'zebra',
  },
  {
    codepoint:   [0x1f98c],
    description: 'deer',
  },
  {
    codepoint:   [0x1f42e],
    description: 'cow face',
  },
  {
    codepoint:   [0x1f402],
    description: 'ox',
  },
  {
    codepoint:   [0x1f403],
    description: 'water buffalo',
  },
  {
    codepoint:   [0x1f404],
    description: 'cow',
  },
  {
    codepoint:   [0x1f437],
    description: 'pig face',
  },
  {
    codepoint:   [0x1f416],
    description: 'pig',
  },
  {
    codepoint:   [0x1f417],
    description: 'boar',
  },
  {
    codepoint:   [0x1f43d],
    description: 'pig nose',
  },
  {
    codepoint:   [0x1f40f],
    description: 'ram',
  },
  {
    codepoint:   [0x1f411],
    description: 'ewe',
  },
  {
    codepoint:   [0x1f410],
    description: 'goat',
  },
  {
    codepoint:   [0x1f42a],
    description: 'camel',
  },
  {
    codepoint:   [0x1f42b],
    description: 'two-hump camel',
  },
  {
    codepoint:   [0x1f999],
    description: '⊛ llama',
  },
  {
    codepoint:   [0x1f992],
    description: 'giraffe',
  },
  {
    codepoint:   [0x1f418],
    description: 'elephant',
  },
  {
    codepoint:   [0x1f98f],
    description: 'rhinoceros',
  },
  {
    codepoint:   [0x1f99b],
    description: '⊛ hippopotamus',
  },
  {
    codepoint:   [0x1f42d],
    description: 'mouse face',
  },
  {
    codepoint:   [0x1f401],
    description: 'mouse',
  },
  {
    codepoint:   [0x1f400],
    description: 'rat',
  },
  {
    codepoint:   [0x1f439],
    description: 'hamster face',
  },
  {
    codepoint:   [0x1f430],
    description: 'rabbit face',
  },
  {
    codepoint:   [0x1f407],
    description: 'rabbit',
  },
  {
    codepoint:   [0x1f43f],
    description: 'chipmunk',
  },
  {
    codepoint:   [0x1f994],
    description: 'hedgehog',
  },
  {
    codepoint:   [0x1f987],
    description: 'bat',
  },
  {
    codepoint:   [0x1f43b],
    description: 'bear face',
  },
  {
    codepoint:   [0x1f428],
    description: 'koala',
  },
  {
    codepoint:   [0x1f43c],
    description: 'panda face',
  },
  {
    codepoint:   [0x1f998],
    description: '⊛ kangaroo',
  },
  {
    codepoint:   [0x1f9a1],
    description: '⊛ badger',
  },
  {
    codepoint:   [0x1f43e],
    description: 'paw prints',
  },
  {
    codepoint:   [0x1f983],
    description: 'turkey',
  },
  {
    codepoint:   [0x1f414],
    description: 'chicken',
  },
  {
    codepoint:   [0x1f413],
    description: 'rooster',
  },
  {
    codepoint:   [0x1f423],
    description: 'hatching chick',
  },
  {
    codepoint:   [0x1f424],
    description: 'baby chick',
  },
  {
    codepoint:   [0x1f425],
    description: 'front-facing baby chick',
  },
  {
    codepoint:   [0x1f426],
    description: 'bird',
  },
  {
    codepoint:   [0x1f427],
    description: 'penguin',
  },
  {
    codepoint:   [0x1f54a],
    description: 'dove',
  },
  {
    codepoint:   [0x1f985],
    description: 'eagle',
  },
  {
    codepoint:   [0x1f986],
    description: 'duck',
  },
  {
    codepoint:   [0x1f9a2],
    description: '⊛ swan',
  },
  {
    codepoint:   [0x1f989],
    description: 'owl',
  },
  {
    codepoint:   [0x1f99a],
    description: '⊛ peacock',
  },
  {
    codepoint:   [0x1f99c],
    description: '⊛ parrot',
  },
  {
    codepoint:   [0x1f438],
    description: 'frog face',
  },
  {
    codepoint:   [0x1f40a],
    description: 'crocodile',
  },
  {
    codepoint:   [0x1f422],
    description: 'turtle',
  },
  {
    codepoint:   [0x1f98e],
    description: 'lizard',
  },
  {
    codepoint:   [0x1f40d],
    description: 'snake',
  },
  {
    codepoint:   [0x1f432],
    description: 'dragon face',
  },
  {
    codepoint:   [0x1f409],
    description: 'dragon',
  },
  {
    codepoint:   [0x1f995],
    description: 'sauropod',
  },
  {
    codepoint:   [0x1f996],
    description: 'T-Rex',
  },
  {
    codepoint:   [0x1f433],
    description: 'spouting whale',
  },
  {
    codepoint:   [0x1f40b],
    description: 'whale',
  },
  {
    codepoint:   [0x1f42c],
    description: 'dolphin',
  },
  {
    codepoint:   [0x1f41f],
    description: 'fish',
  },
  {
    codepoint:   [0x1f420],
    description: 'tropical fish',
  },
  {
    codepoint:   [0x1f421],
    description: 'blowfish',
  },
  {
    codepoint:   [0x1f988],
    description: 'shark',
  },
  {
    codepoint:   [0x1f419],
    description: 'octopus',
  },
  {
    codepoint:   [0x1f41a],
    description: 'spiral shell',
  },
  {
    codepoint:   [0x1f40c],
    description: 'snail',
  },
  {
    codepoint:   [0x1f98b],
    description: 'butterfly',
  },
  {
    codepoint:   [0x1f41b],
    description: 'bug',
  },
  {
    codepoint:   [0x1f41c],
    description: 'ant',
  },
  {
    codepoint:   [0x1f41d],
    description: 'honeybee',
  },
  {
    codepoint:   [0x1f41e],
    description: 'lady beetle',
  },
  {
    codepoint:   [0x1f997],
    description: 'cricket',
  },
  {
    codepoint:   [0x1f577],
    description: 'spider',
  },
  {
    codepoint:   [0x1f578],
    description: 'spider web',
  },
  {
    codepoint:   [0x1f982],
    description: 'scorpion',
  },
  {
    codepoint:   [0x1f99f],
    description: '⊛ mosquito',
  },
  {
    codepoint:   [0x1f9a0],
    description: '⊛ microbe',
  },
  {
    codepoint:   [0x1f490],
    description: 'bouquet',
  },
  {
    codepoint:   [0x1f338],
    description: 'cherry blossom',
  },
  {
    codepoint:   [0x1f4ae],
    description: 'white flower',
  },
  {
    codepoint:   [0x1f3f5],
    description: 'rosette',
  },
  {
    codepoint:   [0x1f339],
    description: 'rose',
  },
  {
    codepoint:   [0x1f940],
    description: 'wilted flower',
  },
  {
    codepoint:   [0x1f33a],
    description: 'hibiscus',
  },
  {
    codepoint:   [0x1f33b],
    description: 'sunflower',
  },
  {
    codepoint:   [0x1f33c],
    description: 'blossom',
  },
  {
    codepoint:   [0x1f337],
    description: 'tulip',
  },
  {
    codepoint:   [0x1f331],
    description: 'seedling',
  },
  {
    codepoint:   [0x1f332],
    description: 'evergreen tree',
  },
  {
    codepoint:   [0x1f333],
    description: 'deciduous tree',
  },
  {
    codepoint:   [0x1f334],
    description: 'palm tree',
  },
  {
    codepoint:   [0x1f335],
    description: 'cactus',
  },
  {
    codepoint:   [0x1f33e],
    description: 'sheaf of rice',
  },
  {
    codepoint:   [0x1f33f],
    description: 'herb',
  },
  {
    codepoint:   [0x2618],
    description: 'shamrock',
  },
  {
    codepoint:   [0x1f340],
    description: 'four leaf clover',
  },
  {
    codepoint:   [0x1f341],
    description: 'maple leaf',
  },
  {
    codepoint:   [0x1f342],
    description: 'fallen leaf',
  },
  {
    codepoint:   [0x1f343],
    description: 'leaf fluttering in wind',
  },
  {
    codepoint:   [0x1f347],
    description: 'grapes',
  },
  {
    codepoint:   [0x1f348],
    description: 'melon',
  },
  {
    codepoint:   [0x1f349],
    description: 'watermelon',
  },
  {
    codepoint:   [0x1f34a],
    description: 'tangerine',
  },
  {
    codepoint:   [0x1f34b],
    description: 'lemon',
  },
  {
    codepoint:   [0x1f34c],
    description: 'banana',
  },
  {
    codepoint:   [0x1f34d],
    description: 'pineapple',
  },
  {
    codepoint:   [0x1f96d],
    description: '⊛ mango',
  },
  {
    codepoint:   [0x1f34e],
    description: 'red apple',
  },
  {
    codepoint:   [0x1f34f],
    description: 'green apple',
  },
  {
    codepoint:   [0x1f350],
    description: 'pear',
  },
  {
    codepoint:   [0x1f351],
    description: 'peach',
  },
  {
    codepoint:   [0x1f352],
    description: 'cherries',
  },
  {
    codepoint:   [0x1f353],
    description: 'strawberry',
  },
  {
    codepoint:   [0x1f95d],
    description: 'kiwi fruit',
  },
  {
    codepoint:   [0x1f345],
    description: 'tomato',
  },
  {
    codepoint:   [0x1f965],
    description: 'coconut',
  },
  {
    codepoint:   [0x1f951],
    description: 'avocado',
  },
  {
    codepoint:   [0x1f346],
    description: 'eggplant',
  },
  {
    codepoint:   [0x1f954],
    description: 'potato',
  },
  {
    codepoint:   [0x1f955],
    description: 'carrot',
  },
  {
    codepoint:   [0x1f33d],
    description: 'ear of corn',
  },
  {
    codepoint:   [0x1f336],
    description: 'hot pepper',
  },
  {
    codepoint:   [0x1f952],
    description: 'cucumber',
  },
  {
    codepoint:   [0x1f96c],
    description: '⊛ leafy green',
  },
  {
    codepoint:   [0x1f966],
    description: 'broccoli',
  },
  {
    codepoint:   [0x1f344],
    description: 'mushroom',
  },
  {
    codepoint:   [0x1f95c],
    description: 'peanuts',
  },
  {
    codepoint:   [0x1f330],
    description: 'chestnut',
  },
  {
    codepoint:   [0x1f35e],
    description: 'bread',
  },
  {
    codepoint:   [0x1f950],
    description: 'croissant',
  },
  {
    codepoint:   [0x1f956],
    description: 'baguette bread',
  },
  {
    codepoint:   [0x1f968],
    description: 'pretzel',
  },
  {
    codepoint:   [0x1f96f],
    description: '⊛ bagel',
  },
  {
    codepoint:   [0x1f95e],
    description: 'pancakes',
  },
  {
    codepoint:   [0x1f9c0],
    description: 'cheese wedge',
  },
  {
    codepoint:   [0x1f356],
    description: 'meat on bone',
  },
  {
    codepoint:   [0x1f357],
    description: 'poultry leg',
  },
  {
    codepoint:   [0x1f969],
    description: 'cut of meat',
  },
  {
    codepoint:   [0x1f953],
    description: 'bacon',
  },
  {
    codepoint:   [0x1f354],
    description: 'hamburger',
  },
  {
    codepoint:   [0x1f35f],
    description: 'french fries',
  },
  {
    codepoint:   [0x1f355],
    description: 'pizza',
  },
  {
    codepoint:   [0x1f32d],
    description: 'hot dog',
  },
  {
    codepoint:   [0x1f96a],
    description: 'sandwich',
  },
  {
    codepoint:   [0x1f32e],
    description: 'taco',
  },
  {
    codepoint:   [0x1f32f],
    description: 'burrito',
  },
  {
    codepoint:   [0x1f959],
    description: 'stuffed flatbread',
  },
  {
    codepoint:   [0x1f95a],
    description: 'egg',
  },
  {
    codepoint:   [0x1f373],
    description: 'cooking',
  },
  {
    codepoint:   [0x1f958],
    description: 'shallow pan of food',
  },
  {
    codepoint:   [0x1f372],
    description: 'pot of food',
  },
  {
    codepoint:   [0x1f963],
    description: 'bowl with spoon',
  },
  {
    codepoint:   [0x1f957],
    description: 'green salad',
  },
  {
    codepoint:   [0x1f37f],
    description: 'popcorn',
  },
  {
    codepoint:   [0x1f9c2],
    description: '⊛ salt',
  },
  {
    codepoint:   [0x1f96b],
    description: 'canned food',
  },
  {
    codepoint:   [0x1f371],
    description: 'bento box',
  },
  {
    codepoint:   [0x1f358],
    description: 'rice cracker',
  },
  {
    codepoint:   [0x1f359],
    description: 'rice ball',
  },
  {
    codepoint:   [0x1f35a],
    description: 'cooked rice',
  },
  {
    codepoint:   [0x1f35b],
    description: 'curry rice',
  },
  {
    codepoint:   [0x1f35c],
    description: 'steaming bowl',
  },
  {
    codepoint:   [0x1f35d],
    description: 'spaghetti',
  },
  {
    codepoint:   [0x1f360],
    description: 'roasted sweet potato',
  },
  {
    codepoint:   [0x1f362],
    description: 'oden',
  },
  {
    codepoint:   [0x1f363],
    description: 'sushi',
  },
  {
    codepoint:   [0x1f364],
    description: 'fried shrimp',
  },
  {
    codepoint:   [0x1f365],
    description: 'fish cake with swirl',
  },
  {
    codepoint:   [0x1f96e],
    description: '⊛ moon cake',
  },
  {
    codepoint:   [0x1f361],
    description: 'dango',
  },
  {
    codepoint:   [0x1f95f],
    description: 'dumpling',
  },
  {
    codepoint:   [0x1f960],
    description: 'fortune cookie',
  },
  {
    codepoint:   [0x1f961],
    description: 'takeout box',
  },
  {
    codepoint:   [0x1f980],
    description: 'crab',
  },
  {
    codepoint:   [0x1f99e],
    description: '⊛ lobster',
  },
  {
    codepoint:   [0x1f990],
    description: 'shrimp',
  },
  {
    codepoint:   [0x1f991],
    description: 'squid',
  },
  {
    codepoint:   [0x1f366],
    description: 'soft ice cream',
  },
  {
    codepoint:   [0x1f367],
    description: 'shaved ice',
  },
  {
    codepoint:   [0x1f368],
    description: 'ice cream',
  },
  {
    codepoint:   [0x1f369],
    description: 'doughnut',
  },
  {
    codepoint:   [0x1f36a],
    description: 'cookie',
  },
  {
    codepoint:   [0x1f382],
    description: 'birthday cake',
  },
  {
    codepoint:   [0x1f370],
    description: 'shortcake',
  },
  {
    codepoint:   [0x1f9c1],
    description: '⊛ cupcake',
  },
  {
    codepoint:   [0x1f967],
    description: 'pie',
  },
  {
    codepoint:   [0x1f36b],
    description: 'chocolate bar',
  },
  {
    codepoint:   [0x1f36c],
    description: 'candy',
  },
  {
    codepoint:   [0x1f36d],
    description: 'lollipop',
  },
  {
    codepoint:   [0x1f36e],
    description: 'custard',
  },
  {
    codepoint:   [0x1f36f],
    description: 'honey pot',
  },
  {
    codepoint:   [0x1f37c],
    description: 'baby bottle',
  },
  {
    codepoint:   [0x1f95b],
    description: 'glass of milk',
  },
  {
    codepoint:   [0x2615],
    description: 'hot beverage',
  },
  {
    codepoint:   [0x1f375],
    description: 'teacup without handle',
  },
  {
    codepoint:   [0x1f376],
    description: 'sake',
  },
  {
    codepoint:   [0x1f37e],
    description: 'bottle with popping cork',
  },
  {
    codepoint:   [0x1f377],
    description: 'wine glass',
  },
  {
    codepoint:   [0x1f378],
    description: 'cocktail glass',
  },
  {
    codepoint:   [0x1f379],
    description: 'tropical drink',
  },
  {
    codepoint:   [0x1f37a],
    description: 'beer mug',
  },
  {
    codepoint:   [0x1f37b],
    description: 'clinking beer mugs',
  },
  {
    codepoint:   [0x1f942],
    description: 'clinking glasses',
  },
  {
    codepoint:   [0x1f943],
    description: 'tumbler glass',
  },
  {
    codepoint:   [0x1f964],
    description: 'cup with straw',
  },
  {
    codepoint:   [0x1f962],
    description: 'chopsticks',
  },
  {
    codepoint:   [0x1f37d],
    description: 'fork and knife with plate',
  },
  {
    codepoint:   [0x1f374],
    description: 'fork and knife',
  },
  {
    codepoint:   [0x1f944],
    description: 'spoon',
  },
  {
    codepoint:   [0x1f52a],
    description: 'kitchen knife',
  },
  {
    codepoint:   [0x1f3fa],
    description: 'amphora',
  },
  {
    codepoint:   [0x1f30d],
    description: 'globe showing Europe-Africa',
  },
  {
    codepoint:   [0x1f30e],
    description: 'globe showing Americas',
  },
  {
    codepoint:   [0x1f30f],
    description: 'globe showing Asia-Australia',
  },
  {
    codepoint:   [0x1f310],
    description: 'globe with meridians',
  },
  {
    codepoint:   [0x1f5fa],
    description: 'world map',
  },
  {
    codepoint:   [0x1f5fe],
    description: 'map of Japan',
  },
  {
    codepoint:   [0x1f9ed],
    description: '⊛ compass',
  },
  {
    codepoint:   [0x1f3d4],
    description: 'snow-capped mountain',
  },
  {
    codepoint:   [0x26f0],
    description: 'mountain',
  },
  {
    codepoint:   [0x1f30b],
    description: 'volcano',
  },
  {
    codepoint:   [0x1f5fb],
    description: 'mount fuji',
  },
  {
    codepoint:   [0x1f3d5],
    description: 'camping',
  },
  {
    codepoint:   [0x1f3d6],
    description: 'beach with umbrella',
  },
  {
    codepoint:   [0x1f3dc],
    description: 'desert',
  },
  {
    codepoint:   [0x1f3dd],
    description: 'desert island',
  },
  {
    codepoint:   [0x1f3de],
    description: 'national park',
  },
  {
    codepoint:   [0x1f3df],
    description: 'stadium',
  },
  {
    codepoint:   [0x1f3db],
    description: 'classical building',
  },
  {
    codepoint:   [0x1f3d7],
    description: 'building construction',
  },
  {
    codepoint:   [0x1f9f1],
    description: '⊛ brick',
  },
  {
    codepoint:   [0x1f3d8],
    description: 'houses',
  },
  {
    codepoint:   [0x1f3da],
    description: 'derelict house',
  },
  {
    codepoint:   [0x1f3e0],
    description: 'house',
  },
  {
    codepoint:   [0x1f3e1],
    description: 'house with garden',
  },
  {
    codepoint:   [0x1f3e2],
    description: 'office building',
  },
  {
    codepoint:   [0x1f3e3],
    description: 'Japanese post office',
  },
  {
    codepoint:   [0x1f3e4],
    description: 'post office',
  },
  {
    codepoint:   [0x1f3e5],
    description: 'hospital',
  },
  {
    codepoint:   [0x1f3e6],
    description: 'bank',
  },
  {
    codepoint:   [0x1f3e8],
    description: 'hotel',
  },
  {
    codepoint:   [0x1f3e9],
    description: 'love hotel',
  },
  {
    codepoint:   [0x1f3ea],
    description: 'convenience store',
  },
  {
    codepoint:   [0x1f3eb],
    description: 'school',
  },
  {
    codepoint:   [0x1f3ec],
    description: 'department store',
  },
  {
    codepoint:   [0x1f3ed],
    description: 'factory',
  },
  {
    codepoint:   [0x1f3ef],
    description: 'Japanese castle',
  },
  {
    codepoint:   [0x1f3f0],
    description: 'castle',
  },
  {
    codepoint:   [0x1f492],
    description: 'wedding',
  },
  {
    codepoint:   [0x1f5fc],
    description: 'Tokyo tower',
  },
  {
    codepoint:   [0x1f5fd],
    description: 'Statue of Liberty',
  },
  {
    codepoint:   [0x26ea],
    description: 'church',
  },
  {
    codepoint:   [0x1f54c],
    description: 'mosque',
  },
  {
    codepoint:   [0x1f54d],
    description: 'synagogue',
  },
  {
    codepoint:   [0x26e9],
    description: 'shinto shrine',
  },
  {
    codepoint:   [0x1f54b],
    description: 'kaaba',
  },
  {
    codepoint:   [0x26f2],
    description: 'fountain',
  },
  {
    codepoint:   [0x26fa],
    description: 'tent',
  },
  {
    codepoint:   [0x1f301],
    description: 'foggy',
  },
  {
    codepoint:   [0x1f303],
    description: 'night with stars',
  },
  {
    codepoint:   [0x1f3d9],
    description: 'cityscape',
  },
  {
    codepoint:   [0x1f304],
    description: 'sunrise over mountains',
  },
  {
    codepoint:   [0x1f305],
    description: 'sunrise',
  },
  {
    codepoint:   [0x1f306],
    description: 'cityscape at dusk',
  },
  {
    codepoint:   [0x1f307],
    description: 'sunset',
  },
  {
    codepoint:   [0x1f309],
    description: 'bridge at night',
  },
  {
    codepoint:   [0x2668],
    description: 'hot springs',
  },
  {
    codepoint:   [0x1f30c],
    description: 'milky way',
  },
  {
    codepoint:   [0x1f3a0],
    description: 'carousel horse',
  },
  {
    codepoint:   [0x1f3a1],
    description: 'ferris wheel',
  },
  {
    codepoint:   [0x1f3a2],
    description: 'roller coaster',
  },
  {
    codepoint:   [0x1f488],
    description: 'barber pole',
  },
  {
    codepoint:   [0x1f3aa],
    description: 'circus tent',
  },
  {
    codepoint:   [0x1f682],
    description: 'locomotive',
  },
  {
    codepoint:   [0x1f683],
    description: 'railway car',
  },
  {
    codepoint:   [0x1f684],
    description: 'high-speed train',
  },
  {
    codepoint:   [0x1f685],
    description: 'bullet train',
  },
  {
    codepoint:   [0x1f686],
    description: 'train',
  },
  {
    codepoint:   [0x1f687],
    description: 'metro',
  },
  {
    codepoint:   [0x1f688],
    description: 'light rail',
  },
  {
    codepoint:   [0x1f689],
    description: 'station',
  },
  {
    codepoint:   [0x1f68a],
    description: 'tram',
  },
  {
    codepoint:   [0x1f69d],
    description: 'monorail',
  },
  {
    codepoint:   [0x1f69e],
    description: 'mountain railway',
  },
  {
    codepoint:   [0x1f68b],
    description: 'tram car',
  },
  {
    codepoint:   [0x1f68c],
    description: 'bus',
  },
  {
    codepoint:   [0x1f68d],
    description: 'oncoming bus',
  },
  {
    codepoint:   [0x1f68e],
    description: 'trolleybus',
  },
  {
    codepoint:   [0x1f690],
    description: 'minibus',
  },
  {
    codepoint:   [0x1f691],
    description: 'ambulance',
  },
  {
    codepoint:   [0x1f692],
    description: 'fire engine',
  },
  {
    codepoint:   [0x1f693],
    description: 'police car',
  },
  {
    codepoint:   [0x1f694],
    description: 'oncoming police car',
  },
  {
    codepoint:   [0x1f695],
    description: 'taxi',
  },
  {
    codepoint:   [0x1f696],
    description: 'oncoming taxi',
  },
  {
    codepoint:   [0x1f697],
    description: 'automobile',
  },
  {
    codepoint:   [0x1f698],
    description: 'oncoming automobile',
  },
  {
    codepoint:   [0x1f699],
    description: 'sport utility vehicle',
  },
  {
    codepoint:   [0x1f69a],
    description: 'delivery truck',
  },
  {
    codepoint:   [0x1f69b],
    description: 'articulated lorry',
  },
  {
    codepoint:   [0x1f69c],
    description: 'tractor',
  },
  {
    codepoint:   [0x1f3ce],
    description: 'racing car',
  },
  {
    codepoint:   [0x1f3cd],
    description: 'motorcycle',
  },
  {
    codepoint:   [0x1f6f5],
    description: 'motor scooter',
  },
  {
    codepoint:   [0x1f6b2],
    description: 'bicycle',
  },
  {
    codepoint:   [0x1f6f4],
    description: 'kick scooter',
  },
  {
    codepoint:   [0x1f6f9],
    description: '⊛ skateboard',
  },
  {
    codepoint:   [0x1f68f],
    description: 'bus stop',
  },
  {
    codepoint:   [0x1f6e3],
    description: 'motorway',
  },
  {
    codepoint:   [0x1f6e4],
    description: 'railway track',
  },
  {
    codepoint:   [0x1f6e2],
    description: 'oil drum',
  },
  {
    codepoint:   [0x26fd],
    description: 'fuel pump',
  },
  {
    codepoint:   [0x1f6a8],
    description: 'police car light',
  },
  {
    codepoint:   [0x1f6a5],
    description: 'horizontal traffic light',
  },
  {
    codepoint:   [0x1f6a6],
    description: 'vertical traffic light',
  },
  {
    codepoint:   [0x1f6d1],
    description: 'stop sign',
  },
  {
    codepoint:   [0x1f6a7],
    description: 'construction',
  },
  {
    codepoint:   [0x2693],
    description: 'anchor',
  },
  {
    codepoint:   [0x26f5],
    description: 'sailboat',
  },
  {
    codepoint:   [0x1f6f6],
    description: 'canoe',
  },
  {
    codepoint:   [0x1f6a4],
    description: 'speedboat',
  },
  {
    codepoint:   [0x1f6f3],
    description: 'passenger ship',
  },
  {
    codepoint:   [0x26f4],
    description: 'ferry',
  },
  {
    codepoint:   [0x1f6e5],
    description: 'motor boat',
  },
  {
    codepoint:   [0x1f6a2],
    description: 'ship',
  },
  {
    codepoint:   [0x2708],
    description: 'airplane',
  },
  {
    codepoint:   [0x1f6e9],
    description: 'small airplane',
  },
  {
    codepoint:   [0x1f6eb],
    description: 'airplane departure',
  },
  {
    codepoint:   [0x1f6ec],
    description: 'airplane arrival',
  },
  {
    codepoint:   [0x1f4ba],
    description: 'seat',
  },
  {
    codepoint:   [0x1f681],
    description: 'helicopter',
  },
  {
    codepoint:   [0x1f69f],
    description: 'suspension railway',
  },
  {
    codepoint:   [0x1f6a0],
    description: 'mountain cableway',
  },
  {
    codepoint:   [0x1f6a1],
    description: 'aerial tramway',
  },
  {
    codepoint:   [0x1f6f0],
    description: 'satellite',
  },
  {
    codepoint:   [0x1f680],
    description: 'rocket',
  },
  {
    codepoint:   [0x1f6f8],
    description: 'flying saucer',
  },
  {
    codepoint:   [0x1f6ce],
    description: 'bellhop bell',
  },
  {
    codepoint:   [0x1f9f3],
    description: '⊛ luggage',
  },
  {
    codepoint:   [0x231b],
    description: 'hourglass done',
  },
  {
    codepoint:   [0x23f3],
    description: 'hourglass not done',
  },
  {
    codepoint:   [0x231a],
    description: 'watch',
  },
  {
    codepoint:   [0x23f0],
    description: 'alarm clock',
  },
  {
    codepoint:   [0x23f1],
    description: 'stopwatch',
  },
  {
    codepoint:   [0x23f2],
    description: 'timer clock',
  },
  {
    codepoint:   [0x1f570],
    description: 'mantelpiece clock',
  },
  {
    codepoint:   [0x1f55b],
    description: 'twelve o’clock',
  },
  {
    codepoint:   [0x1f567],
    description: 'twelve-thirty',
  },
  {
    codepoint:   [0x1f550],
    description: 'one o’clock',
  },
  {
    codepoint:   [0x1f55c],
    description: 'one-thirty',
  },
  {
    codepoint:   [0x1f551],
    description: 'two o’clock',
  },
  {
    codepoint:   [0x1f55d],
    description: 'two-thirty',
  },
  {
    codepoint:   [0x1f552],
    description: 'three o’clock',
  },
  {
    codepoint:   [0x1f55e],
    description: 'three-thirty',
  },
  {
    codepoint:   [0x1f553],
    description: 'four o’clock',
  },
  {
    codepoint:   [0x1f55f],
    description: 'four-thirty',
  },
  {
    codepoint:   [0x1f554],
    description: 'five o’clock',
  },
  {
    codepoint:   [0x1f560],
    description: 'five-thirty',
  },
  {
    codepoint:   [0x1f555],
    description: 'six o’clock',
  },
  {
    codepoint:   [0x1f561],
    description: 'six-thirty',
  },
  {
    codepoint:   [0x1f556],
    description: 'seven o’clock',
  },
  {
    codepoint:   [0x1f562],
    description: 'seven-thirty',
  },
  {
    codepoint:   [0x1f557],
    description: 'eight o’clock',
  },
  {
    codepoint:   [0x1f563],
    description: 'eight-thirty',
  },
  {
    codepoint:   [0x1f558],
    description: 'nine o’clock',
  },
  {
    codepoint:   [0x1f564],
    description: 'nine-thirty',
  },
  {
    codepoint:   [0x1f559],
    description: 'ten o’clock',
  },
  {
    codepoint:   [0x1f565],
    description: 'ten-thirty',
  },
  {
    codepoint:   [0x1f55a],
    description: 'eleven o’clock',
  },
  {
    codepoint:   [0x1f566],
    description: 'eleven-thirty',
  },
  {
    codepoint:   [0x1f311],
    description: 'new moon',
  },
  {
    codepoint:   [0x1f312],
    description: 'waxing crescent moon',
  },
  {
    codepoint:   [0x1f313],
    description: 'first quarter moon',
  },
  {
    codepoint:   [0x1f314],
    description: 'waxing gibbous moon',
  },
  {
    codepoint:   [0x1f315],
    description: 'full moon',
  },
  {
    codepoint:   [0x1f316],
    description: 'waning gibbous moon',
  },
  {
    codepoint:   [0x1f317],
    description: 'last quarter moon',
  },
  {
    codepoint:   [0x1f318],
    description: 'waning crescent moon',
  },
  {
    codepoint:   [0x1f319],
    description: 'crescent moon',
  },
  {
    codepoint:   [0x1f31a],
    description: 'new moon face',
  },
  {
    codepoint:   [0x1f31b],
    description: 'first quarter moon face',
  },
  {
    codepoint:   [0x1f31c],
    description: 'last quarter moon face',
  },
  {
    codepoint:   [0x1f321],
    description: 'thermometer',
  },
  {
    codepoint:   [0x2600],
    description: 'sun',
  },
  {
    codepoint:   [0x1f31d],
    description: 'full moon face',
  },
  {
    codepoint:   [0x1f31e],
    description: 'sun with face',
  },
  {
    codepoint:   [0x2b50],
    description: 'star',
  },
  {
    codepoint:   [0x1f31f],
    description: 'glowing star',
  },
  {
    codepoint:   [0x1f320],
    description: 'shooting star',
  },
  {
    codepoint:   [0x2601],
    description: 'cloud',
  },
  {
    codepoint:   [0x26c5],
    description: 'sun behind cloud',
  },
  {
    codepoint:   [0x26c8],
    description: 'cloud with lightning and rain',
  },
  {
    codepoint:   [0x1f324],
    description: 'sun behind small cloud',
  },
  {
    codepoint:   [0x1f325],
    description: 'sun behind large cloud',
  },
  {
    codepoint:   [0x1f326],
    description: 'sun behind rain cloud',
  },
  {
    codepoint:   [0x1f327],
    description: 'cloud with rain',
  },
  {
    codepoint:   [0x1f328],
    description: 'cloud with snow',
  },
  {
    codepoint:   [0x1f329],
    description: 'cloud with lightning',
  },
  {
    codepoint:   [0x1f32a],
    description: 'tornado',
  },
  {
    codepoint:   [0x1f32b],
    description: 'fog',
  },
  {
    codepoint:   [0x1f32c],
    description: 'wind face',
  },
  {
    codepoint:   [0x1f300],
    description: 'cyclone',
  },
  {
    codepoint:   [0x1f308],
    description: 'rainbow',
  },
  {
    codepoint:   [0x1f302],
    description: 'closed umbrella',
  },
  {
    codepoint:   [0x2602],
    description: 'umbrella',
  },
  {
    codepoint:   [0x2614],
    description: 'umbrella with rain drops',
  },
  {
    codepoint:   [0x26f1],
    description: 'umbrella on ground',
  },
  {
    codepoint:   [0x26a1],
    description: 'high voltage',
  },
  {
    codepoint:   [0x2744],
    description: 'snowflake',
  },
  {
    codepoint:   [0x2603],
    description: 'snowman',
  },
  {
    codepoint:   [0x26c4],
    description: 'snowman without snow',
  },
  {
    codepoint:   [0x2604],
    description: 'comet',
  },
  {
    codepoint:   [0x1f525],
    description: 'fire',
  },
  {
    codepoint:   [0x1f4a7],
    description: 'droplet',
  },
  {
    codepoint:   [0x1f30a],
    description: 'water wave',
  },
  {
    codepoint:   [0x1f383],
    description: 'jack-o-lantern',
  },
  {
    codepoint:   [0x1f384],
    description: 'Christmas tree',
  },
  {
    codepoint:   [0x1f386],
    description: 'fireworks',
  },
  {
    codepoint:   [0x1f387],
    description: 'sparkler',
  },
  {
    codepoint:   [0x1f9e8],
    description: '⊛ firecracker',
  },
  {
    codepoint:   [0x2728],
    description: 'sparkles',
  },
  {
    codepoint:   [0x1f388],
    description: 'balloon',
  },
  {
    codepoint:   [0x1f389],
    description: 'party popper',
  },
  {
    codepoint:   [0x1f38a],
    description: 'confetti ball',
  },
  {
    codepoint:   [0x1f38b],
    description: 'tanabata tree',
  },
  {
    codepoint:   [0x1f38d],
    description: 'pine decoration',
  },
  {
    codepoint:   [0x1f38e],
    description: 'Japanese dolls',
  },
  {
    codepoint:   [0x1f38f],
    description: 'carp streamer',
  },
  {
    codepoint:   [0x1f390],
    description: 'wind chime',
  },
  {
    codepoint:   [0x1f391],
    description: 'moon viewing ceremony',
  },
  {
    codepoint:   [0x1f9e7],
    description: '⊛ red envelope',
  },
  {
    codepoint:   [0x1f380],
    description: 'ribbon',
  },
  {
    codepoint:   [0x1f381],
    description: 'wrapped gift',
  },
  {
    codepoint:   [0x1f397],
    description: 'reminder ribbon',
  },
  {
    codepoint:   [0x1f39f],
    description: 'admission tickets',
  },
  {
    codepoint:   [0x1f3ab],
    description: 'ticket',
  },
  {
    codepoint:   [0x1f396],
    description: 'military medal',
  },
  {
    codepoint:   [0x1f3c6],
    description: 'trophy',
  },
  {
    codepoint:   [0x1f3c5],
    description: 'sports medal',
  },
  {
    codepoint:   [0x1f947],
    description: '1st place medal',
  },
  {
    codepoint:   [0x1f948],
    description: '2nd place medal',
  },
  {
    codepoint:   [0x1f949],
    description: '3rd place medal',
  },
  {
    codepoint:   [0x26bd],
    description: 'soccer ball',
  },
  {
    codepoint:   [0x26be],
    description: 'baseball',
  },
  {
    codepoint:   [0x1f94e],
    description: '⊛ softball',
  },
  {
    codepoint:   [0x1f3c0],
    description: 'basketball',
  },
  {
    codepoint:   [0x1f3d0],
    description: 'volleyball',
  },
  {
    codepoint:   [0x1f3c8],
    description: 'american football',
  },
  {
    codepoint:   [0x1f3c9],
    description: 'rugby football',
  },
  {
    codepoint:   [0x1f3be],
    description: 'tennis',
  },
  {
    codepoint:   [0x1f94f],
    description: '⊛ flying disc',
  },
  {
    codepoint:   [0x1f3b3],
    description: 'bowling',
  },
  {
    codepoint:   [0x1f3cf],
    description: 'cricket game',
  },
  {
    codepoint:   [0x1f3d1],
    description: 'field hockey',
  },
  {
    codepoint:   [0x1f3d2],
    description: 'ice hockey',
  },
  {
    codepoint:   [0x1f94d],
    description: '⊛ lacrosse',
  },
  {
    codepoint:   [0x1f3d3],
    description: 'ping pong',
  },
  {
    codepoint:   [0x1f3f8],
    description: 'badminton',
  },
  {
    codepoint:   [0x1f94a],
    description: 'boxing glove',
  },
  {
    codepoint:   [0x1f94b],
    description: 'martial arts uniform',
  },
  {
    codepoint:   [0x1f945],
    description: 'goal net',
  },
  {
    codepoint:   [0x26f3],
    description: 'flag in hole',
  },
  {
    codepoint:   [0x26f8],
    description: 'ice skate',
  },
  {
    codepoint:   [0x1f3a3],
    description: 'fishing pole',
  },
  {
    codepoint:   [0x1f3bd],
    description: 'running shirt',
  },
  {
    codepoint:   [0x1f3bf],
    description: 'skis',
  },
  {
    codepoint:   [0x1f6f7],
    description: 'sled',
  },
  {
    codepoint:   [0x1f94c],
    description: 'curling stone',
  },
  {
    codepoint:   [0x1f3af],
    description: 'direct hit',
  },
  {
    codepoint:   [0x1f3b1],
    description: 'pool 8 ball',
  },
  {
    codepoint:   [0x1f52e],
    description: 'crystal ball',
  },
  {
    codepoint:   [0x1f9ff],
    description: '⊛ nazar amulet',
  },
  {
    codepoint:   [0x1f3ae],
    description: 'video game',
  },
  {
    codepoint:   [0x1f579],
    description: 'joystick',
  },
  {
    codepoint:   [0x1f3b0],
    description: 'slot machine',
  },
  {
    codepoint:   [0x1f3b2],
    description: 'game die',
  },
  {
    codepoint:   [0x1f9e9],
    description: '⊛ jigsaw',
  },
  {
    codepoint:   [0x1f9f8],
    description: '⊛ teddy bear',
  },
  {
    codepoint:   [0x2660],
    description: 'spade suit',
  },
  {
    codepoint:   [0x2665],
    description: 'heart suit',
  },
  {
    codepoint:   [0x2666],
    description: 'diamond suit',
  },
  {
    codepoint:   [0x2663],
    description: 'club suit',
  },
  {
    codepoint:   [0x265f],
    description: '⊛ chess pawn',
  },
  {
    codepoint:   [0x1f0cf],
    description: 'joker',
  },
  {
    codepoint:   [0x1f004],
    description: 'mahjong red dragon',
  },
  {
    codepoint:   [0x1f3b4],
    description: 'flower playing cards',
  },
  {
    codepoint:   [0x1f3ad],
    description: 'performing arts',
  },
  {
    codepoint:   [0x1f5bc],
    description: 'framed picture',
  },
  {
    codepoint:   [0x1f3a8],
    description: 'artist palette',
  },
  {
    codepoint:   [0x1f9f5],
    description: '⊛ thread',
  },
  {
    codepoint:   [0x1f9f6],
    description: '⊛ yarn',
  },
  {
    codepoint:   [0x1f453],
    description: 'glasses',
  },
  {
    codepoint:   [0x1f576],
    description: 'sunglasses',
  },
  {
    codepoint:   [0x1f97d],
    description: '⊛ goggles',
  },
  {
    codepoint:   [0x1f97c],
    description: '⊛ lab coat',
  },
  {
    codepoint:   [0x1f454],
    description: 'necktie',
  },
  {
    codepoint:   [0x1f455],
    description: 't-shirt',
  },
  {
    codepoint:   [0x1f456],
    description: 'jeans',
  },
  {
    codepoint:   [0x1f9e3],
    description: 'scarf',
  },
  {
    codepoint:   [0x1f9e4],
    description: 'gloves',
  },
  {
    codepoint:   [0x1f9e5],
    description: 'coat',
  },
  {
    codepoint:   [0x1f9e6],
    description: 'socks',
  },
  {
    codepoint:   [0x1f457],
    description: 'dress',
  },
  {
    codepoint:   [0x1f458],
    description: 'kimono',
  },
  {
    codepoint:   [0x1f459],
    description: 'bikini',
  },
  {
    codepoint:   [0x1f45a],
    description: 'woman’s clothes',
  },
  {
    codepoint:   [0x1f45b],
    description: 'purse',
  },
  {
    codepoint:   [0x1f45c],
    description: 'handbag',
  },
  {
    codepoint:   [0x1f45d],
    description: 'clutch bag',
  },
  {
    codepoint:   [0x1f6cd],
    description: 'shopping bags',
  },
  {
    codepoint:   [0x1f392],
    description: 'backpack',
  },
  {
    codepoint:   [0x1f45e],
    description: 'man’s shoe',
  },
  {
    codepoint:   [0x1f45f],
    description: 'running shoe',
  },
  {
    codepoint:   [0x1f97e],
    description: '⊛ hiking boot',
  },
  {
    codepoint:   [0x1f97f],
    description: '⊛ flat shoe',
  },
  {
    codepoint:   [0x1f460],
    description: 'high-heeled shoe',
  },
  {
    codepoint:   [0x1f461],
    description: 'woman’s sandal',
  },
  {
    codepoint:   [0x1f462],
    description: 'woman’s boot',
  },
  {
    codepoint:   [0x1f451],
    description: 'crown',
  },
  {
    codepoint:   [0x1f452],
    description: 'woman’s hat',
  },
  {
    codepoint:   [0x1f3a9],
    description: 'top hat',
  },
  {
    codepoint:   [0x1f393],
    description: 'graduation cap',
  },
  {
    codepoint:   [0x1f9e2],
    description: 'billed cap',
  },
  {
    codepoint:   [0x26d1],
    description: 'rescue worker’s helmet',
  },
  {
    codepoint:   [0x1f4ff],
    description: 'prayer beads',
  },
  {
    codepoint:   [0x1f484],
    description: 'lipstick',
  },
  {
    codepoint:   [0x1f48d],
    description: 'ring',
  },
  {
    codepoint:   [0x1f48e],
    description: 'gem stone',
  },
  {
    codepoint:   [0x1f507],
    description: 'muted speaker',
  },
  {
    codepoint:   [0x1f508],
    description: 'speaker low volume',
  },
  {
    codepoint:   [0x1f509],
    description: 'speaker medium volume',
  },
  {
    codepoint:   [0x1f50a],
    description: 'speaker high volume',
  },
  {
    codepoint:   [0x1f4e2],
    description: 'loudspeaker',
  },
  {
    codepoint:   [0x1f4e3],
    description: 'megaphone',
  },
  {
    codepoint:   [0x1f4ef],
    description: 'postal horn',
  },
  {
    codepoint:   [0x1f514],
    description: 'bell',
  },
  {
    codepoint:   [0x1f515],
    description: 'bell with slash',
  },
  {
    codepoint:   [0x1f3bc],
    description: 'musical score',
  },
  {
    codepoint:   [0x1f3b5],
    description: 'musical note',
  },
  {
    codepoint:   [0x1f3b6],
    description: 'musical notes',
  },
  {
    codepoint:   [0x1f399],
    description: 'studio microphone',
  },
  {
    codepoint:   [0x1f39a],
    description: 'level slider',
  },
  {
    codepoint:   [0x1f39b],
    description: 'control knobs',
  },
  {
    codepoint:   [0x1f3a4],
    description: 'microphone',
  },
  {
    codepoint:   [0x1f3a7],
    description: 'headphone',
  },
  {
    codepoint:   [0x1f4fb],
    description: 'radio',
  },
  {
    codepoint:   [0x1f3b7],
    description: 'saxophone',
  },
  {
    codepoint:   [0x1f3b8],
    description: 'guitar',
  },
  {
    codepoint:   [0x1f3b9],
    description: 'musical keyboard',
  },
  {
    codepoint:   [0x1f3ba],
    description: 'trumpet',
  },
  {
    codepoint:   [0x1f3bb],
    description: 'violin',
  },
  {
    codepoint:   [0x1f941],
    description: 'drum',
  },
  {
    codepoint:   [0x1f4f1],
    description: 'mobile phone',
  },
  {
    codepoint:   [0x1f4f2],
    description: 'mobile phone with arrow',
  },
  {
    codepoint:   [0x260e],
    description: 'telephone',
  },
  {
    codepoint:   [0x1f4de],
    description: 'telephone receiver',
  },
  {
    codepoint:   [0x1f4df],
    description: 'pager',
  },
  {
    codepoint:   [0x1f4e0],
    description: 'fax machine',
  },
  {
    codepoint:   [0x1f50b],
    description: 'battery',
  },
  {
    codepoint:   [0x1f50c],
    description: 'electric plug',
  },
  {
    codepoint:   [0x1f4bb],
    description: 'laptop computer',
  },
  {
    codepoint:   [0x1f5a5],
    description: 'desktop computer',
  },
  {
    codepoint:   [0x1f5a8],
    description: 'printer',
  },
  {
    codepoint:   [0x2328],
    description: 'keyboard',
  },
  {
    codepoint:   [0x1f5b1],
    description: 'computer mouse',
  },
  {
    codepoint:   [0x1f5b2],
    description: 'trackball',
  },
  {
    codepoint:   [0x1f4bd],
    description: 'computer disk',
  },
  {
    codepoint:   [0x1f4be],
    description: 'floppy disk',
  },
  {
    codepoint:   [0x1f4bf],
    description: 'optical disk',
  },
  {
    codepoint:   [0x1f4c0],
    description: 'dvd',
  },
  {
    codepoint:   [0x1f9ee],
    description: '⊛ abacus',
  },
  {
    codepoint:   [0x1f3a5],
    description: 'movie camera',
  },
  {
    codepoint:   [0x1f39e],
    description: 'film frames',
  },
  {
    codepoint:   [0x1f4fd],
    description: 'film projector',
  },
  {
    codepoint:   [0x1f3ac],
    description: 'clapper board',
  },
  {
    codepoint:   [0x1f4fa],
    description: 'television',
  },
  {
    codepoint:   [0x1f4f7],
    description: 'camera',
  },
  {
    codepoint:   [0x1f4f8],
    description: 'camera with flash',
  },
  {
    codepoint:   [0x1f4f9],
    description: 'video camera',
  },
  {
    codepoint:   [0x1f4fc],
    description: 'videocassette',
  },
  {
    codepoint:   [0x1f50d],
    description: 'magnifying glass tilted left',
  },
  {
    codepoint:   [0x1f50e],
    description: 'magnifying glass tilted right',
  },
  {
    codepoint:   [0x1f56f],
    description: 'candle',
  },
  {
    codepoint:   [0x1f4a1],
    description: 'light bulb',
  },
  {
    codepoint:   [0x1f526],
    description: 'flashlight',
  },
  {
    codepoint:   [0x1f3ee],
    description: 'red paper lantern',
  },
  {
    codepoint:   [0x1f4d4],
    description: 'notebook with decorative cover',
  },
  {
    codepoint:   [0x1f4d5],
    description: 'closed book',
  },
  {
    codepoint:   [0x1f4d6],
    description: 'open book',
  },
  {
    codepoint:   [0x1f4d7],
    description: 'green book',
  },
  {
    codepoint:   [0x1f4d8],
    description: 'blue book',
  },
  {
    codepoint:   [0x1f4d9],
    description: 'orange book',
  },
  {
    codepoint:   [0x1f4da],
    description: 'books',
  },
  {
    codepoint:   [0x1f4d3],
    description: 'notebook',
  },
  {
    codepoint:   [0x1f4d2],
    description: 'ledger',
  },
  {
    codepoint:   [0x1f4c3],
    description: 'page with curl',
  },
  {
    codepoint:   [0x1f4dc],
    description: 'scroll',
  },
  {
    codepoint:   [0x1f4c4],
    description: 'page facing up',
  },
  {
    codepoint:   [0x1f4f0],
    description: 'newspaper',
  },
  {
    codepoint:   [0x1f5de],
    description: 'rolled-up newspaper',
  },
  {
    codepoint:   [0x1f4d1],
    description: 'bookmark tabs',
  },
  {
    codepoint:   [0x1f516],
    description: 'bookmark',
  },
  {
    codepoint:   [0x1f3f7],
    description: 'label',
  },
  {
    codepoint:   [0x1f4b0],
    description: 'money bag',
  },
  {
    codepoint:   [0x1f4b4],
    description: 'yen banknote',
  },
  {
    codepoint:   [0x1f4b5],
    description: 'dollar banknote',
  },
  {
    codepoint:   [0x1f4b6],
    description: 'euro banknote',
  },
  {
    codepoint:   [0x1f4b7],
    description: 'pound banknote',
  },
  {
    codepoint:   [0x1f4b8],
    description: 'money with wings',
  },
  {
    codepoint:   [0x1f4b3],
    description: 'credit card',
  },
  {
    codepoint:   [0x1f9fe],
    description: '⊛ receipt',
  },
  {
    codepoint:   [0x1f4b9],
    description: 'chart increasing with yen',
  },
  {
    codepoint:   [0x1f4b1],
    description: 'currency exchange',
  },
  {
    codepoint:   [0x1f4b2],
    description: 'heavy dollar sign',
  },
  {
    codepoint:   [0x2709],
    description: 'envelope',
  },
  {
    codepoint:   [0x1f4e7],
    description: 'e-mail',
  },
  {
    codepoint:   [0x1f4e8],
    description: 'incoming envelope',
  },
  {
    codepoint:   [0x1f4e9],
    description: 'envelope with arrow',
  },
  {
    codepoint:   [0x1f4e4],
    description: 'outbox tray',
  },
  {
    codepoint:   [0x1f4e5],
    description: 'inbox tray',
  },
  {
    codepoint:   [0x1f4e6],
    description: 'package',
  },
  {
    codepoint:   [0x1f4eb],
    description: 'closed mailbox with raised flag',
  },
  {
    codepoint:   [0x1f4ea],
    description: 'closed mailbox with lowered flag',
  },
  {
    codepoint:   [0x1f4ec],
    description: 'open mailbox with raised flag',
  },
  {
    codepoint:   [0x1f4ed],
    description: 'open mailbox with lowered flag',
  },
  {
    codepoint:   [0x1f4ee],
    description: 'postbox',
  },
  {
    codepoint:   [0x1f5f3],
    description: 'ballot box with ballot',
  },
  {
    codepoint:   [0x270f],
    description: 'pencil',
  },
  {
    codepoint:   [0x2712],
    description: 'black nib',
  },
  {
    codepoint:   [0x1f58b],
    description: 'fountain pen',
  },
  {
    codepoint:   [0x1f58a],
    description: 'pen',
  },
  {
    codepoint:   [0x1f58c],
    description: 'paintbrush',
  },
  {
    codepoint:   [0x1f58d],
    description: 'crayon',
  },
  {
    codepoint:   [0x1f4dd],
    description: 'memo',
  },
  {
    codepoint:   [0x1f4bc],
    description: 'briefcase',
  },
  {
    codepoint:   [0x1f4c1],
    description: 'file folder',
  },
  {
    codepoint:   [0x1f4c2],
    description: 'open file folder',
  },
  {
    codepoint:   [0x1f5c2],
    description: 'card index dividers',
  },
  {
    codepoint:   [0x1f4c5],
    description: 'calendar',
  },
  {
    codepoint:   [0x1f4c6],
    description: 'tear-off calendar',
  },
  {
    codepoint:   [0x1f5d2],
    description: 'spiral notepad',
  },
  {
    codepoint:   [0x1f5d3],
    description: 'spiral calendar',
  },
  {
    codepoint:   [0x1f4c7],
    description: 'card index',
  },
  {
    codepoint:   [0x1f4c8],
    description: 'chart increasing',
  },
  {
    codepoint:   [0x1f4c9],
    description: 'chart decreasing',
  },
  {
    codepoint:   [0x1f4ca],
    description: 'bar chart',
  },
  {
    codepoint:   [0x1f4cb],
    description: 'clipboard',
  },
  {
    codepoint:   [0x1f4cc],
    description: 'pushpin',
  },
  {
    codepoint:   [0x1f4cd],
    description: 'round pushpin',
  },
  {
    codepoint:   [0x1f4ce],
    description: 'paperclip',
  },
  {
    codepoint:   [0x1f587],
    description: 'linked paperclips',
  },
  {
    codepoint:   [0x1f4cf],
    description: 'straight ruler',
  },
  {
    codepoint:   [0x1f4d0],
    description: 'triangular ruler',
  },
  {
    codepoint:   [0x2702],
    description: 'scissors',
  },
  {
    codepoint:   [0x1f5c3],
    description: 'card file box',
  },
  {
    codepoint:   [0x1f5c4],
    description: 'file cabinet',
  },
  {
    codepoint:   [0x1f5d1],
    description: 'wastebasket',
  },
  {
    codepoint:   [0x1f512],
    description: 'locked',
  },
  {
    codepoint:   [0x1f513],
    description: 'unlocked',
  },
  {
    codepoint:   [0x1f50f],
    description: 'locked with pen',
  },
  {
    codepoint:   [0x1f510],
    description: 'locked with key',
  },
  {
    codepoint:   [0x1f511],
    description: 'key',
  },
  {
    codepoint:   [0x1f5dd],
    description: 'old key',
  },
  {
    codepoint:   [0x1f528],
    description: 'hammer',
  },
  {
    codepoint:   [0x26cf],
    description: 'pick',
  },
  {
    codepoint:   [0x2692],
    description: 'hammer and pick',
  },
  {
    codepoint:   [0x1f6e0],
    description: 'hammer and wrench',
  },
  {
    codepoint:   [0x1f5e1],
    description: 'dagger',
  },
  {
    codepoint:   [0x2694],
    description: 'crossed swords',
  },
  {
    codepoint:   [0x1f52b],
    description: 'pistol',
  },
  {
    codepoint:   [0x1f3f9],
    description: 'bow and arrow',
  },
  {
    codepoint:   [0x1f6e1],
    description: 'shield',
  },
  {
    codepoint:   [0x1f527],
    description: 'wrench',
  },
  {
    codepoint:   [0x1f529],
    description: 'nut and bolt',
  },
  {
    codepoint:   [0x2699],
    description: 'gear',
  },
  {
    codepoint:   [0x1f5dc],
    description: 'clamp',
  },
  {
    codepoint:   [0x2696],
    description: 'balance scale',
  },
  {
    codepoint:   [0x1f517],
    description: 'link',
  },
  {
    codepoint:   [0x26d3],
    description: 'chains',
  },
  {
    codepoint:   [0x1f9f0],
    description: '⊛ toolbox',
  },
  {
    codepoint:   [0x1f9f2],
    description: '⊛ magnet',
  },
  {
    codepoint:   [0x2697],
    description: 'alembic',
  },
  {
    codepoint:   [0x1f9ea],
    description: '⊛ test tube',
  },
  {
    codepoint:   [0x1f9eb],
    description: '⊛ petri dish',
  },
  {
    codepoint:   [0x1f9ec],
    description: '⊛ dna',
  },
  {
    codepoint:   [0x1f52c],
    description: 'microscope',
  },
  {
    codepoint:   [0x1f52d],
    description: 'telescope',
  },
  {
    codepoint:   [0x1f4e1],
    description: 'satellite antenna',
  },
  {
    codepoint:   [0x1f489],
    description: 'syringe',
  },
  {
    codepoint:   [0x1f48a],
    description: 'pill',
  },
  {
    codepoint:   [0x1f6aa],
    description: 'door',
  },
  {
    codepoint:   [0x1f6cf],
    description: 'bed',
  },
  {
    codepoint:   [0x1f6cb],
    description: 'couch and lamp',
  },
  {
    codepoint:   [0x1f6bd],
    description: 'toilet',
  },
  {
    codepoint:   [0x1f6bf],
    description: 'shower',
  },
  {
    codepoint:   [0x1f6c1],
    description: 'bathtub',
  },
  {
    codepoint:   [0x1f9f4],
    description: '⊛ lotion bottle',
  },
  {
    codepoint:   [0x1f9f7],
    description: '⊛ safety pin',
  },
  {
    codepoint:   [0x1f9f9],
    description: '⊛ broom',
  },
  {
    codepoint:   [0x1f9fa],
    description: '⊛ basket',
  },
  {
    codepoint:   [0x1f9fb],
    description: '⊛ roll of paper',
  },
  {
    codepoint:   [0x1f9fc],
    description: '⊛ soap',
  },
  {
    codepoint:   [0x1f9fd],
    description: '⊛ sponge',
  },
  {
    codepoint:   [0x1f9ef],
    description: '⊛ fire extinguisher',
  },
  {
    codepoint:   [0x1f6d2],
    description: 'shopping cart',
  },
  {
    codepoint:   [0x1f6ac],
    description: 'cigarette',
  },
  {
    codepoint:   [0x26b0],
    description: 'coffin',
  },
  {
    codepoint:   [0x26b1],
    description: 'funeral urn',
  },
  {
    codepoint:   [0x1f5ff],
    description: 'moai',
  },
  {
    codepoint:   [0x1f3e7],
    description: 'ATM sign',
  },
  {
    codepoint:   [0x1f6ae],
    description: 'litter in bin sign',
  },
  {
    codepoint:   [0x1f6b0],
    description: 'potable water',
  },
  {
    codepoint:   [0x267f],
    description: 'wheelchair symbol',
  },
  {
    codepoint:   [0x1f6b9],
    description: 'men’s room',
  },
  {
    codepoint:   [0x1f6ba],
    description: 'women’s room',
  },
  {
    codepoint:   [0x1f6bb],
    description: 'restroom',
  },
  {
    codepoint:   [0x1f6bc],
    description: 'baby symbol',
  },
  {
    codepoint:   [0x1f6be],
    description: 'water closet',
  },
  {
    codepoint:   [0x1f6c2],
    description: 'passport control',
  },
  {
    codepoint:   [0x1f6c3],
    description: 'customs',
  },
  {
    codepoint:   [0x1f6c4],
    description: 'baggage claim',
  },
  {
    codepoint:   [0x1f6c5],
    description: 'left luggage',
  },
  {
    codepoint:   [0x26a0],
    description: 'warning',
  },
  {
    codepoint:   [0x1f6b8],
    description: 'children crossing',
  },
  {
    codepoint:   [0x26d4],
    description: 'no entry',
  },
  {
    codepoint:   [0x1f6ab],
    description: 'prohibited',
  },
  {
    codepoint:   [0x1f6b3],
    description: 'no bicycles',
  },
  {
    codepoint:   [0x1f6ad],
    description: 'no smoking',
  },
  {
    codepoint:   [0x1f6af],
    description: 'no littering',
  },
  {
    codepoint:   [0x1f6b1],
    description: 'non-potable water',
  },
  {
    codepoint:   [0x1f6b7],
    description: 'no pedestrians',
  },
  {
    codepoint:   [0x1f4f5],
    description: 'no mobile phones',
  },
  {
    codepoint:   [0x1f51e],
    description: 'no one under eighteen',
  },
  {
    codepoint:   [0x2622],
    description: 'radioactive',
  },
  {
    codepoint:   [0x2623],
    description: 'biohazard',
  },
  {
    codepoint:   [0x2b06],
    description: 'up arrow',
  },
  {
    codepoint:   [0x2197],
    description: 'up-right arrow',
  },
  {
    codepoint:   [0x27a1],
    description: 'right arrow',
  },
  {
    codepoint:   [0x2198],
    description: 'down-right arrow',
  },
  {
    codepoint:   [0x2b07],
    description: 'down arrow',
  },
  {
    codepoint:   [0x2199],
    description: 'down-left arrow',
  },
  {
    codepoint:   [0x2b05],
    description: 'left arrow',
  },
  {
    codepoint:   [0x2196],
    description: 'up-left arrow',
  },
  {
    codepoint:   [0x2195],
    description: 'up-down arrow',
  },
  {
    codepoint:   [0x2194],
    description: 'left-right arrow',
  },
  {
    codepoint:   [0x21a9],
    description: 'right arrow curving left',
  },
  {
    codepoint:   [0x21aa],
    description: 'left arrow curving right',
  },
  {
    codepoint:   [0x2934],
    description: 'right arrow curving up',
  },
  {
    codepoint:   [0x2935],
    description: 'right arrow curving down',
  },
  {
    codepoint:   [0x1f503],
    description: 'clockwise vertical arrows',
  },
  {
    codepoint:   [0x1f504],
    description: 'counterclockwise arrows button',
  },
  {
    codepoint:   [0x1f519],
    description: 'BACK arrow',
  },
  {
    codepoint:   [0x1f51a],
    description: 'END arrow',
  },
  {
    codepoint:   [0x1f51b],
    description: 'ON! arrow',
  },
  {
    codepoint:   [0x1f51c],
    description: 'SOON arrow',
  },
  {
    codepoint:   [0x1f51d],
    description: 'TOP arrow',
  },
  {
    codepoint:   [0x1f6d0],
    description: 'place of worship',
  },
  {
    codepoint:   [0x269b],
    description: 'atom symbol',
  },
  {
    codepoint:   [0x1f549],
    description: 'om',
  },
  {
    codepoint:   [0x2721],
    description: 'star of David',
  },
  {
    codepoint:   [0x2638],
    description: 'wheel of dharma',
  },
  {
    codepoint:   [0x262f],
    description: 'yin yang',
  },
  {
    codepoint:   [0x271d],
    description: 'latin cross',
  },
  {
    codepoint:   [0x2626],
    description: 'orthodox cross',
  },
  {
    codepoint:   [0x262a],
    description: 'star and crescent',
  },
  {
    codepoint:   [0x262e],
    description: 'peace symbol',
  },
  {
    codepoint:   [0x1f54e],
    description: 'menorah',
  },
  {
    codepoint:   [0x1f52f],
    description: 'dotted six-pointed star',
  },
  {
    codepoint:   [0x2648],
    description: 'Aries',
  },
  {
    codepoint:   [0x2649],
    description: 'Taurus',
  },
  {
    codepoint:   [0x264a],
    description: 'Gemini',
  },
  {
    codepoint:   [0x264b],
    description: 'Cancer',
  },
  {
    codepoint:   [0x264c],
    description: 'Leo',
  },
  {
    codepoint:   [0x264d],
    description: 'Virgo',
  },
  {
    codepoint:   [0x264e],
    description: 'Libra',
  },
  {
    codepoint:   [0x264f],
    description: 'Scorpio',
  },
  {
    codepoint:   [0x2650],
    description: 'Sagittarius',
  },
  {
    codepoint:   [0x2651],
    description: 'Capricorn',
  },
  {
    codepoint:   [0x2652],
    description: 'Aquarius',
  },
  {
    codepoint:   [0x2653],
    description: 'Pisces',
  },
  {
    codepoint:   [0x26ce],
    description: 'Ophiuchus',
  },
  {
    codepoint:   [0x1f500],
    description: 'shuffle tracks button',
  },
  {
    codepoint:   [0x1f501],
    description: 'repeat button',
  },
  {
    codepoint:   [0x1f502],
    description: 'repeat single button',
  },
  {
    codepoint:   [0x25b6],
    description: 'play button',
  },
  {
    codepoint:   [0x23e9],
    description: 'fast-forward button',
  },
  {
    codepoint:   [0x23ed],
    description: 'next track button',
  },
  {
    codepoint:   [0x23ef],
    description: 'play or pause button',
  },
  {
    codepoint:   [0x25c0],
    description: 'reverse button',
  },
  {
    codepoint:   [0x23ea],
    description: 'fast reverse button',
  },
  {
    codepoint:   [0x23ee],
    description: 'last track button',
  },
  {
    codepoint:   [0x1f53c],
    description: 'upwards button',
  },
  {
    codepoint:   [0x23eb],
    description: 'fast up button',
  },
  {
    codepoint:   [0x1f53d],
    description: 'downwards button',
  },
  {
    codepoint:   [0x23ec],
    description: 'fast down button',
  },
  {
    codepoint:   [0x23f8],
    description: 'pause button',
  },
  {
    codepoint:   [0x23f9],
    description: 'stop button',
  },
  {
    codepoint:   [0x23fa],
    description: 'record button',
  },
  {
    codepoint:   [0x23cf],
    description: 'eject button',
  },
  {
    codepoint:   [0x1f3a6],
    description: 'cinema',
  },
  {
    codepoint:   [0x1f505],
    description: 'dim button',
  },
  {
    codepoint:   [0x1f506],
    description: 'bright button',
  },
  {
    codepoint:   [0x1f4f6],
    description: 'antenna bars',
  },
  {
    codepoint:   [0x1f4f3],
    description: 'vibration mode',
  },
  {
    codepoint:   [0x1f4f4],
    description: 'mobile phone off',
  },
  {
    codepoint:   [0x2695],
    description: 'medical symbol',
  },
  {
    codepoint:   [0x267e],
    description: '⊛ infinity',
  },
  {
    codepoint:   [0x267b],
    description: 'recycling symbol',
  },
  {
    codepoint:   [0x269c],
    description: 'fleur-de-lis',
  },
  {
    codepoint:   [0x1f531],
    description: 'trident emblem',
  },
  {
    codepoint:   [0x1f4db],
    description: 'name badge',
  },
  {
    codepoint:   [0x1f530],
    description: 'Japanese symbol for beginner',
  },
  {
    codepoint:   [0x2b55],
    description: 'heavy large circle',
  },
  {
    codepoint:   [0x2705],
    description: 'white heavy check mark',
  },
  {
    codepoint:   [0x2611],
    description: 'ballot box with check',
  },
  {
    codepoint:   [0x2714],
    description: 'heavy check mark',
  },
  {
    codepoint:   [0x2716],
    description: 'heavy multiplication x',
  },
  {
    codepoint:   [0x274c],
    description: 'cross mark',
  },
  {
    codepoint:   [0x274e],
    description: 'cross mark button',
  },
  {
    codepoint:   [0x2795],
    description: 'heavy plus sign',
  },
  {
    codepoint:   [0x2796],
    description: 'heavy minus sign',
  },
  {
    codepoint:   [0x2797],
    description: 'heavy division sign',
  },
  {
    codepoint:   [0x27b0],
    description: 'curly loop',
  },
  {
    codepoint:   [0x27bf],
    description: 'double curly loop',
  },
  {
    codepoint:   [0x303d],
    description: 'part alternation mark',
  },
  {
    codepoint:   [0x2733],
    description: 'eight-spoked asterisk',
  },
  {
    codepoint:   [0x2734],
    description: 'eight-pointed star',
  },
  {
    codepoint:   [0x2747],
    description: 'sparkle',
  },
  {
    codepoint:   [0x203c],
    description: 'double exclamation mark',
  },
  {
    codepoint:   [0x2049],
    description: 'exclamation question mark',
  },
  {
    codepoint:   [0x2753],
    description: 'question mark',
  },
  {
    codepoint:   [0x2754],
    description: 'white question mark',
  },
  {
    codepoint:   [0x2755],
    description: 'white exclamation mark',
  },
  {
    codepoint:   [0x2757],
    description: 'exclamation mark',
  },
  {
    codepoint:   [0x3030],
    description: 'wavy dash',
  },
  {
    codepoint:   [0x00a9],
    description: 'copyright',
  },
  {
    codepoint:   [0x00ae],
    description: 'registered',
  },
  {
    codepoint:   [0x2122],
    description: 'trade mark',
  },
  {
    codepoint:   [0x0023, 0xfe0f, 0x20e3],
    description: 'keycap: #',
  },
  {
    codepoint:   [0x002a, 0xfe0f, 0x20e3],
    description: 'keycap: *',
  },
  {
    codepoint:   [0x0030, 0xfe0f, 0x20e3],
    description: 'keycap: 0',
  },
  {
    codepoint:   [0x0031, 0xfe0f, 0x20e3],
    description: 'keycap: 1',
  },
  {
    codepoint:   [0x0032, 0xfe0f, 0x20e3],
    description: 'keycap: 2',
  },
  {
    codepoint:   [0x0033, 0xfe0f, 0x20e3],
    description: 'keycap: 3',
  },
  {
    codepoint:   [0x0034, 0xfe0f, 0x20e3],
    description: 'keycap: 4',
  },
  {
    codepoint:   [0x0035, 0xfe0f, 0x20e3],
    description: 'keycap: 5',
  },
  {
    codepoint:   [0x0036, 0xfe0f, 0x20e3],
    description: 'keycap: 6',
  },
  {
    codepoint:   [0x0037, 0xfe0f, 0x20e3],
    description: 'keycap: 7',
  },
  {
    codepoint:   [0x0038, 0xfe0f, 0x20e3],
    description: 'keycap: 8',
  },
  {
    codepoint:   [0x0039, 0xfe0f, 0x20e3],
    description: 'keycap: 9',
  },
  {
    codepoint:   [0x1f51f],
    description: 'keycap: 10',
  },
  {
    codepoint:   [0x1f520],
    description: 'input latin uppercase',
  },
  {
    codepoint:   [0x1f521],
    description: 'input latin lowercase',
  },
  {
    codepoint:   [0x1f522],
    description: 'input numbers',
  },
  {
    codepoint:   [0x1f523],
    description: 'input symbols',
  },
  {
    codepoint:   [0x1f524],
    description: 'input latin letters',
  },
  {
    codepoint:   [0x1f170],
    description: 'A button (blood type)',
  },
  {
    codepoint:   [0x1f18e],
    description: 'AB button (blood type)',
  },
  {
    codepoint:   [0x1f171],
    description: 'B button (blood type)',
  },
  {
    codepoint:   [0x1f191],
    description: 'CL button',
  },
  {
    codepoint:   [0x1f192],
    description: 'COOL button',
  },
  {
    codepoint:   [0x1f193],
    description: 'FREE button',
  },
  {
    codepoint:   [0x2139],
    description: 'information',
  },
  {
    codepoint:   [0x1f194],
    description: 'ID button',
  },
  {
    codepoint:   [0x24c2],
    description: 'circled M',
  },
  {
    codepoint:   [0x1f195],
    description: 'NEW button',
  },
  {
    codepoint:   [0x1f196],
    description: 'NG button',
  },
  {
    codepoint:   [0x1f17e],
    description: 'O button (blood type)',
  },
  {
    codepoint:   [0x1f197],
    description: 'OK button',
  },
  {
    codepoint:   [0x1f17f],
    description: 'P button',
  },
  {
    codepoint:   [0x1f198],
    description: 'SOS button',
  },
  {
    codepoint:   [0x1f199],
    description: 'UP! button',
  },
  {
    codepoint:   [0x1f19a],
    description: 'VS button',
  },
  {
    codepoint:   [0x1f201],
    description: 'Japanese “here” button',
  },
  {
    codepoint:   [0x1f202],
    description: 'Japanese “service charge” button',
  },
  {
    codepoint:   [0x1f237],
    description: 'Japanese “monthly amount” button',
  },
  {
    codepoint:   [0x1f236],
    description: 'Japanese “not free of charge” button',
  },
  {
    codepoint:   [0x1f22f],
    description: 'Japanese “reserved” button',
  },
  {
    codepoint:   [0x1f250],
    description: 'Japanese “bargain” button',
  },
  {
    codepoint:   [0x1f239],
    description: 'Japanese “discount” button',
  },
  {
    codepoint:   [0x1f21a],
    description: 'Japanese “free of charge” button',
  },
  {
    codepoint:   [0x1f232],
    description: 'Japanese “prohibited” button',
  },
  {
    codepoint:   [0x1f251],
    description: 'Japanese “acceptable” button',
  },
  {
    codepoint:   [0x1f238],
    description: 'Japanese “application” button',
  },
  {
    codepoint:   [0x1f234],
    description: 'Japanese “passing grade” button',
  },
  {
    codepoint:   [0x1f233],
    description: 'Japanese “vacancy” button',
  },
  {
    codepoint:   [0x3297],
    description: 'Japanese “congratulations” button',
  },
  {
    codepoint:   [0x3299],
    description: 'Japanese “secret” button',
  },
  {
    codepoint:   [0x1f23a],
    description: 'Japanese “open for business” button',
  },
  {
    codepoint:   [0x1f235],
    description: 'Japanese “no vacancy” button',
  },
  {
    codepoint:   [0x1f534],
    description: 'red circle',
  },
  {
    codepoint:   [0x1f535],
    description: 'blue circle',
  },
  {
    codepoint:   [0x26aa],
    description: 'white circle',
  },
  {
    codepoint:   [0x26ab],
    description: 'black circle',
  },
  {
    codepoint:   [0x2b1c],
    description: 'white large square',
  },
  {
    codepoint:   [0x2b1b],
    description: 'black large square',
  },
  {
    codepoint:   [0x25fc],
    description: 'black medium square',
  },
  {
    codepoint:   [0x25fb],
    description: 'white medium square',
  },
  {
    codepoint:   [0x25fd],
    description: 'white medium-small square',
  },
  {
    codepoint:   [0x25fe],
    description: 'black medium-small square',
  },
  {
    codepoint:   [0x25ab],
    description: 'white small square',
  },
  {
    codepoint:   [0x25aa],
    description: 'black small square',
  },
  {
    codepoint:   [0x1f536],
    description: 'large orange diamond',
  },
  {
    codepoint:   [0x1f537],
    description: 'large blue diamond',
  },
  {
    codepoint:   [0x1f538],
    description: 'small orange diamond',
  },
  {
    codepoint:   [0x1f539],
    description: 'small blue diamond',
  },
  {
    codepoint:   [0x1f53a],
    description: 'red triangle pointed up',
  },
  {
    codepoint:   [0x1f53b],
    description: 'red triangle pointed down',
  },
  {
    codepoint:   [0x1f4a0],
    description: 'diamond with a dot',
  },
  {
    codepoint:   [0x1f518],
    description: 'radio button',
  },
  {
    codepoint:   [0x1f532],
    description: 'black square button',
  },
  {
    codepoint:   [0x1f533],
    description: 'white square button',
  },
  {
    codepoint:   [0x1f3c1],
    description: 'chequered flag',
  },
  {
    codepoint:   [0x1f6a9],
    description: 'triangular flag',
  },
  {
    codepoint:   [0x1f38c],
    description: 'crossed flags',
  },
  {
    codepoint:   [0x1f3f4],
    description: 'black flag',
  },
  {
    codepoint:   [0x1f3f3],
    description: 'white flag',
  },
  {
    codepoint:   [0x1f3f3, 0xfe0f, 0x200d, 0x1f308],
    description: 'rainbow flag',
  },
  {
    codepoint:   [0x1f3f4, 0x200d, 0x2620, 0xfe0f],
    description: '⊛ pirate flag',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1e8],
    description: 'flag: Ascension Island',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1e9],
    description: 'flag: Andorra',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1ea],
    description: 'flag: United Arab Emirates',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1eb],
    description: 'flag: Afghanistan',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1ec],
    description: 'flag: Antigua & Barbuda',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1ee],
    description: 'flag: Anguilla',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1f1],
    description: 'flag: Albania',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1f2],
    description: 'flag: Armenia',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1f4],
    description: 'flag: Angola',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1f6],
    description: 'flag: Antarctica',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1f7],
    description: 'flag: Argentina',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1f8],
    description: 'flag: American Samoa',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1f9],
    description: 'flag: Austria',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1fa],
    description: 'flag: Australia',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1fc],
    description: 'flag: Aruba',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1fd],
    description: 'flag: Åland Islands',
  },
  {
    codepoint:   [0x1f1e6, 0x1f1ff],
    description: 'flag: Azerbaijan',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1e6],
    description: 'flag: Bosnia & Herzegovina',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1e7],
    description: 'flag: Barbados',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1e9],
    description: 'flag: Bangladesh',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1ea],
    description: 'flag: Belgium',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1eb],
    description: 'flag: Burkina Faso',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1ec],
    description: 'flag: Bulgaria',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1ed],
    description: 'flag: Bahrain',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1ee],
    description: 'flag: Burundi',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1ef],
    description: 'flag: Benin',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1f1],
    description: 'flag: St. Barthélemy',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1f2],
    description: 'flag: Bermuda',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1f3],
    description: 'flag: Brunei',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1f4],
    description: 'flag: Bolivia',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1f6],
    description: 'flag: Caribbean Netherlands',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1f7],
    description: 'flag: Brazil',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1f8],
    description: 'flag: Bahamas',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1f9],
    description: 'flag: Bhutan',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1fb],
    description: 'flag: Bouvet Island',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1fc],
    description: 'flag: Botswana',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1fe],
    description: 'flag: Belarus',
  },
  {
    codepoint:   [0x1f1e7, 0x1f1ff],
    description: 'flag: Belize',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1e6],
    description: 'flag: Canada',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1e8],
    description: 'flag: Cocos (Keeling) Islands',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1e9],
    description: 'flag: Congo - Kinshasa',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1eb],
    description: 'flag: Central African Republic',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1ec],
    description: 'flag: Congo - Brazzaville',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1ed],
    description: 'flag: Switzerland',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1ee],
    description: 'flag: Côte d’Ivoire',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1f0],
    description: 'flag: Cook Islands',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1f1],
    description: 'flag: Chile',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1f2],
    description: 'flag: Cameroon',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1f3],
    description: 'flag: China',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1f4],
    description: 'flag: Colombia',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1f5],
    description: 'flag: Clipperton Island',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1f7],
    description: 'flag: Costa Rica',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1fa],
    description: 'flag: Cuba',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1fb],
    description: 'flag: Cape Verde',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1fc],
    description: 'flag: Curaçao',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1fd],
    description: 'flag: Christmas Island',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1fe],
    description: 'flag: Cyprus',
  },
  {
    codepoint:   [0x1f1e8, 0x1f1ff],
    description: 'flag: Czechia',
  },
  {
    codepoint:   [0x1f1e9, 0x1f1ea],
    description: 'flag: Germany',
  },
  {
    codepoint:   [0x1f1e9, 0x1f1ec],
    description: 'flag: Diego Garcia',
  },
  {
    codepoint:   [0x1f1e9, 0x1f1ef],
    description: 'flag: Djibouti',
  },
  {
    codepoint:   [0x1f1e9, 0x1f1f0],
    description: 'flag: Denmark',
  },
  {
    codepoint:   [0x1f1e9, 0x1f1f2],
    description: 'flag: Dominica',
  },
  {
    codepoint:   [0x1f1e9, 0x1f1f4],
    description: 'flag: Dominican Republic',
  },
  {
    codepoint:   [0x1f1e9, 0x1f1ff],
    description: 'flag: Algeria',
  },
  {
    codepoint:   [0x1f1ea, 0x1f1e6],
    description: 'flag: Ceuta & Melilla',
  },
  {
    codepoint:   [0x1f1ea, 0x1f1e8],
    description: 'flag: Ecuador',
  },
  {
    codepoint:   [0x1f1ea, 0x1f1ea],
    description: 'flag: Estonia',
  },
  {
    codepoint:   [0x1f1ea, 0x1f1ec],
    description: 'flag: Egypt',
  },
  {
    codepoint:   [0x1f1ea, 0x1f1ed],
    description: 'flag: Western Sahara',
  },
  {
    codepoint:   [0x1f1ea, 0x1f1f7],
    description: 'flag: Eritrea',
  },
  {
    codepoint:   [0x1f1ea, 0x1f1f8],
    description: 'flag: Spain',
  },
  {
    codepoint:   [0x1f1ea, 0x1f1f9],
    description: 'flag: Ethiopia',
  },
  {
    codepoint:   [0x1f1ea, 0x1f1fa],
    description: 'flag: European Union',
  },
  {
    codepoint:   [0x1f1eb, 0x1f1ee],
    description: 'flag: Finland',
  },
  {
    codepoint:   [0x1f1eb, 0x1f1ef],
    description: 'flag: Fiji',
  },
  {
    codepoint:   [0x1f1eb, 0x1f1f0],
    description: 'flag: Falkland Islands',
  },
  {
    codepoint:   [0x1f1eb, 0x1f1f2],
    description: 'flag: Micronesia',
  },
  {
    codepoint:   [0x1f1eb, 0x1f1f4],
    description: 'flag: Faroe Islands',
  },
  {
    codepoint:   [0x1f1eb, 0x1f1f7],
    description: 'flag: France',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1e6],
    description: 'flag: Gabon',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1e7],
    description: 'flag: United Kingdom',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1e9],
    description: 'flag: Grenada',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1ea],
    description: 'flag: Georgia',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1eb],
    description: 'flag: French Guiana',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1ec],
    description: 'flag: Guernsey',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1ed],
    description: 'flag: Ghana',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1ee],
    description: 'flag: Gibraltar',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1f1],
    description: 'flag: Greenland',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1f2],
    description: 'flag: Gambia',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1f3],
    description: 'flag: Guinea',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1f5],
    description: 'flag: Guadeloupe',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1f6],
    description: 'flag: Equatorial Guinea',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1f7],
    description: 'flag: Greece',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1f8],
    description: 'flag: South Georgia & South Sandwich Islands',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1f9],
    description: 'flag: Guatemala',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1fa],
    description: 'flag: Guam',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1fc],
    description: 'flag: Guinea-Bissau',
  },
  {
    codepoint:   [0x1f1ec, 0x1f1fe],
    description: 'flag: Guyana',
  },
  {
    codepoint:   [0x1f1ed, 0x1f1f0],
    description: 'flag: Hong Kong SAR China',
  },
  {
    codepoint:   [0x1f1ed, 0x1f1f2],
    description: 'flag: Heard & McDonald Islands',
  },
  {
    codepoint:   [0x1f1ed, 0x1f1f3],
    description: 'flag: Honduras',
  },
  {
    codepoint:   [0x1f1ed, 0x1f1f7],
    description: 'flag: Croatia',
  },
  {
    codepoint:   [0x1f1ed, 0x1f1f9],
    description: 'flag: Haiti',
  },
  {
    codepoint:   [0x1f1ed, 0x1f1fa],
    description: 'flag: Hungary',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1e8],
    description: 'flag: Canary Islands',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1e9],
    description: 'flag: Indonesia',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1ea],
    description: 'flag: Ireland',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1f1],
    description: 'flag: Israel',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1f2],
    description: 'flag: Isle of Man',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1f3],
    description: 'flag: India',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1f4],
    description: 'flag: British Indian Ocean Territory',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1f6],
    description: 'flag: Iraq',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1f7],
    description: 'flag: Iran',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1f8],
    description: 'flag: Iceland',
  },
  {
    codepoint:   [0x1f1ee, 0x1f1f9],
    description: 'flag: Italy',
  },
  {
    codepoint:   [0x1f1ef, 0x1f1ea],
    description: 'flag: Jersey',
  },
  {
    codepoint:   [0x1f1ef, 0x1f1f2],
    description: 'flag: Jamaica',
  },
  {
    codepoint:   [0x1f1ef, 0x1f1f4],
    description: 'flag: Jordan',
  },
  {
    codepoint:   [0x1f1ef, 0x1f1f5],
    description: 'flag: Japan',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1ea],
    description: 'flag: Kenya',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1ec],
    description: 'flag: Kyrgyzstan',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1ed],
    description: 'flag: Cambodia',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1ee],
    description: 'flag: Kiribati',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1f2],
    description: 'flag: Comoros',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1f3],
    description: 'flag: St. Kitts & Nevis',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1f5],
    description: 'flag: North Korea',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1f7],
    description: 'flag: South Korea',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1fc],
    description: 'flag: Kuwait',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1fe],
    description: 'flag: Cayman Islands',
  },
  {
    codepoint:   [0x1f1f0, 0x1f1ff],
    description: 'flag: Kazakhstan',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1e6],
    description: 'flag: Laos',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1e7],
    description: 'flag: Lebanon',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1e8],
    description: 'flag: St. Lucia',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1ee],
    description: 'flag: Liechtenstein',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1f0],
    description: 'flag: Sri Lanka',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1f7],
    description: 'flag: Liberia',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1f8],
    description: 'flag: Lesotho',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1f9],
    description: 'flag: Lithuania',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1fa],
    description: 'flag: Luxembourg',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1fb],
    description: 'flag: Latvia',
  },
  {
    codepoint:   [0x1f1f1, 0x1f1fe],
    description: 'flag: Libya',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1e6],
    description: 'flag: Morocco',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1e8],
    description: 'flag: Monaco',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1e9],
    description: 'flag: Moldova',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1ea],
    description: 'flag: Montenegro',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1eb],
    description: 'flag: St. Martin',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1ec],
    description: 'flag: Madagascar',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1ed],
    description: 'flag: Marshall Islands',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1f0],
    description: 'flag: Macedonia',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1f1],
    description: 'flag: Mali',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1f2],
    description: 'flag: Myanmar (Burma)',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1f3],
    description: 'flag: Mongolia',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1f4],
    description: 'flag: Macau SAR China',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1f5],
    description: 'flag: Northern Mariana Islands',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1f6],
    description: 'flag: Martinique',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1f7],
    description: 'flag: Mauritania',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1f8],
    description: 'flag: Montserrat',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1f9],
    description: 'flag: Malta',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1fa],
    description: 'flag: Mauritius',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1fb],
    description: 'flag: Maldives',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1fc],
    description: 'flag: Malawi',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1fd],
    description: 'flag: Mexico',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1fe],
    description: 'flag: Malaysia',
  },
  {
    codepoint:   [0x1f1f2, 0x1f1ff],
    description: 'flag: Mozambique',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1e6],
    description: 'flag: Namibia',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1e8],
    description: 'flag: New Caledonia',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1ea],
    description: 'flag: Niger',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1eb],
    description: 'flag: Norfolk Island',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1ec],
    description: 'flag: Nigeria',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1ee],
    description: 'flag: Nicaragua',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1f1],
    description: 'flag: Netherlands',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1f4],
    description: 'flag: Norway',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1f5],
    description: 'flag: Nepal',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1f7],
    description: 'flag: Nauru',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1fa],
    description: 'flag: Niue',
  },
  {
    codepoint:   [0x1f1f3, 0x1f1ff],
    description: 'flag: New Zealand',
  },
  {
    codepoint:   [0x1f1f4, 0x1f1f2],
    description: 'flag: Oman',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1e6],
    description: 'flag: Panama',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1ea],
    description: 'flag: Peru',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1eb],
    description: 'flag: French Polynesia',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1ec],
    description: 'flag: Papua New Guinea',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1ed],
    description: 'flag: Philippines',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1f0],
    description: 'flag: Pakistan',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1f1],
    description: 'flag: Poland',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1f2],
    description: 'flag: St. Pierre & Miquelon',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1f3],
    description: 'flag: Pitcairn Islands',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1f7],
    description: 'flag: Puerto Rico',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1f8],
    description: 'flag: Palestinian Territories',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1f9],
    description: 'flag: Portugal',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1fc],
    description: 'flag: Palau',
  },
  {
    codepoint:   [0x1f1f5, 0x1f1fe],
    description: 'flag: Paraguay',
  },
  {
    codepoint:   [0x1f1f6, 0x1f1e6],
    description: 'flag: Qatar',
  },
  {
    codepoint:   [0x1f1f7, 0x1f1ea],
    description: 'flag: Réunion',
  },
  {
    codepoint:   [0x1f1f7, 0x1f1f4],
    description: 'flag: Romania',
  },
  {
    codepoint:   [0x1f1f7, 0x1f1f8],
    description: 'flag: Serbia',
  },
  {
    codepoint:   [0x1f1f7, 0x1f1fa],
    description: 'flag: Russia',
  },
  {
    codepoint:   [0x1f1f7, 0x1f1fc],
    description: 'flag: Rwanda',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1e6],
    description: 'flag: Saudi Arabia',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1e7],
    description: 'flag: Solomon Islands',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1e8],
    description: 'flag: Seychelles',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1e9],
    description: 'flag: Sudan',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1ea],
    description: 'flag: Sweden',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1ec],
    description: 'flag: Singapore',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1ed],
    description: 'flag: St. Helena',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1ee],
    description: 'flag: Slovenia',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1ef],
    description: 'flag: Svalbard & Jan Mayen',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1f0],
    description: 'flag: Slovakia',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1f1],
    description: 'flag: Sierra Leone',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1f2],
    description: 'flag: San Marino',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1f3],
    description: 'flag: Senegal',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1f4],
    description: 'flag: Somalia',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1f7],
    description: 'flag: Suriname',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1f8],
    description: 'flag: South Sudan',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1f9],
    description: 'flag: São Tomé & Príncipe',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1fb],
    description: 'flag: El Salvador',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1fd],
    description: 'flag: Sint Maarten',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1fe],
    description: 'flag: Syria',
  },
  {
    codepoint:   [0x1f1f8, 0x1f1ff],
    description: 'flag: Swaziland',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1e6],
    description: 'flag: Tristan da Cunha',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1e8],
    description: 'flag: Turks & Caicos Islands',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1e9],
    description: 'flag: Chad',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1eb],
    description: 'flag: French Southern Territories',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1ec],
    description: 'flag: Togo',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1ed],
    description: 'flag: Thailand',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1ef],
    description: 'flag: Tajikistan',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1f0],
    description: 'flag: Tokelau',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1f1],
    description: 'flag: Timor-Leste',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1f2],
    description: 'flag: Turkmenistan',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1f3],
    description: 'flag: Tunisia',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1f4],
    description: 'flag: Tonga',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1f7],
    description: 'flag: Turkey',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1f9],
    description: 'flag: Trinidad & Tobago',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1fb],
    description: 'flag: Tuvalu',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1fc],
    description: 'flag: Taiwan',
  },
  {
    codepoint:   [0x1f1f9, 0x1f1ff],
    description: 'flag: Tanzania',
  },
  {
    codepoint:   [0x1f1fa, 0x1f1e6],
    description: 'flag: Ukraine',
  },
  {
    codepoint:   [0x1f1fa, 0x1f1ec],
    description: 'flag: Uganda',
  },
  {
    codepoint:   [0x1f1fa, 0x1f1f2],
    description: 'flag: U.S. Outlying Islands',
  },
  {
    codepoint:   [0x1f1fa, 0x1f1f3],
    description: 'flag: United Nations',
  },
  {
    codepoint:   [0x1f1fa, 0x1f1f8],
    description: 'flag: United States',
  },
  {
    codepoint:   [0x1f1fa, 0x1f1fe],
    description: 'flag: Uruguay',
  },
  {
    codepoint:   [0x1f1fa, 0x1f1ff],
    description: 'flag: Uzbekistan',
  },
  {
    codepoint:   [0x1f1fb, 0x1f1e6],
    description: 'flag: Vatican City',
  },
  {
    codepoint:   [0x1f1fb, 0x1f1e8],
    description: 'flag: St. Vincent & Grenadines',
  },
  {
    codepoint:   [0x1f1fb, 0x1f1ea],
    description: 'flag: Venezuela',
  },
  {
    codepoint:   [0x1f1fb, 0x1f1ec],
    description: 'flag: British Virgin Islands',
  },
  {
    codepoint:   [0x1f1fb, 0x1f1ee],
    description: 'flag: U.S. Virgin Islands',
  },
  {
    codepoint:   [0x1f1fb, 0x1f1f3],
    description: 'flag: Vietnam',
  },
  {
    codepoint:   [0x1f1fb, 0x1f1fa],
    description: 'flag: Vanuatu',
  },
  {
    codepoint:   [0x1f1fc, 0x1f1eb],
    description: 'flag: Wallis & Futuna',
  },
  {
    codepoint:   [0x1f1fc, 0x1f1f8],
    description: 'flag: Samoa',
  },
  {
    codepoint:   [0x1f1fd, 0x1f1f0],
    description: 'flag: Kosovo',
  },
  {
    codepoint:   [0x1f1fe, 0x1f1ea],
    description: 'flag: Yemen',
  },
  {
    codepoint:   [0x1f1fe, 0x1f1f9],
    description: 'flag: Mayotte',
  },
  {
    codepoint:   [0x1f1ff, 0x1f1e6],
    description: 'flag: South Africa',
  },
  {
    codepoint:   [0x1f1ff, 0x1f1f2],
    description: 'flag: Zambia',
  },
  {
    codepoint:   [0x1f1ff, 0x1f1fc],
    description: 'flag: Zimbabwe',
  },
  {
    codepoint:   [0x1f3f4, 0xe0067, 0xe0062, 0xe0065, 0xe006e, 0xe0067, 0xe007f],
    description: 'flag: England',
  },
  {
    codepoint:   [0x1f3f4, 0xe0067, 0xe0062, 0xe0073, 0xe0063, 0xe0074, 0xe007f],
    description: 'flag: Scotland',
  },
  {
    codepoint:   [0x1f3f4, 0xe0067, 0xe0062, 0xe0077, 0xe006c, 0xe0073, 0xe007f],
    description: 'flag: Wales',
  },
];

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body:       JSON.stringify(sample(emoji)),
  });
};
