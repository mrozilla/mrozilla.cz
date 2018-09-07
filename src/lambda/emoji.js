// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const emoji = [
  {
    codepoint: [0x1F600],
    description: "grinning face"
  },
  {
    codepoint: [0x1F603],
    description: "grinning face with big eyes"
  },
  {
    codepoint: [0x1F604],
    description: "grinning face with smiling eyes"
  },
  {
    codepoint: [0x1F601],
    description: "beaming face with smiling eyes"
  },
  {
    codepoint: [0x1F606],
    description: "grinning squinting face"
  },
  {
    codepoint: [0x1F605],
    description: "grinning face with sweat"
  },
  {
    codepoint: [0x1F923],
    description: "rolling on the floor laughing"
  },
  {
    codepoint: [0x1F602],
    description: "face with tears of joy"
  },
  {
    codepoint: [0x1F642],
    description: "slightly smiling face"
  },
  {
    codepoint: [0x1F643],
    description: "upside-down face"
  },
  {
    codepoint: [0x1F609],
    description: "winking face"
  },
  {
    codepoint: [0x1F60A],
    description: "smiling face with smiling eyes"
  },
  {
    codepoint: [0x1F607],
    description: "smiling face with halo"
  },
  {
    codepoint: [0x1F970],
    description: "⊛ smiling face with 3 hearts"
  },
  {
    codepoint: [0x1F60D],
    description: "smiling face with heart-eyes"
  },
  {
    codepoint: [0x1F929],
    description: "star-struck"
  },
  {
    codepoint: [0x1F618],
    description: "face blowing a kiss"
  },
  {
    codepoint: [0x1F617],
    description: "kissing face"
  },
  {
    codepoint: [0x263A],
    description: "smiling face"
  },
  {
    codepoint: [0x1F61A],
    description: "kissing face with closed eyes"
  },
  {
    codepoint: [0x1F619],
    description: "kissing face with smiling eyes"
  },
  {
    codepoint: [0x1F60B],
    description: "face savoring food"
  },
  {
    codepoint: [0x1F61B],
    description: "face with tongue"
  },
  {
    codepoint: [0x1F61C],
    description: "winking face with tongue"
  },
  {
    codepoint: [0x1F92A],
    description: "zany face"
  },
  {
    codepoint: [0x1F61D],
    description: "squinting face with tongue"
  },
  {
    codepoint: [0x1F911],
    description: "money-mouth face"
  },
  {
    codepoint: [0x1F917],
    description: "hugging face"
  },
  {
    codepoint: [0x1F92D],
    description: "face with hand over mouth"
  },
  {
    codepoint: [0x1F92B],
    description: "shushing face"
  },
  {
    codepoint: [0x1F914],
    description: "thinking face"
  },
  {
    codepoint: [0x1F910],
    description: "zipper-mouth face"
  },
  {
    codepoint: [0x1F928],
    description: "face with raised eyebrow"
  },
  {
    codepoint: [0x1F610],
    description: "neutral face"
  },
  {
    codepoint: [0x1F611],
    description: "expressionless face"
  },
  {
    codepoint: [0x1F636],
    description: "face without mouth"
  },
  {
    codepoint: [0x1F60F],
    description: "smirking face"
  },
  {
    codepoint: [0x1F612],
    description: "unamused face"
  },
  {
    codepoint: [0x1F644],
    description: "face with rolling eyes"
  },
  {
    codepoint: [0x1F62C],
    description: "grimacing face"
  },
  {
    codepoint: [0x1F925],
    description: "lying face"
  },
  {
    codepoint: [0x1F60C],
    description: "relieved face"
  },
  {
    codepoint: [0x1F614],
    description: "pensive face"
  },
  {
    codepoint: [0x1F62A],
    description: "sleepy face"
  },
  {
    codepoint: [0x1F924],
    description: "drooling face"
  },
  {
    codepoint: [0x1F634],
    description: "sleeping face"
  },
  {
    codepoint: [0x1F637],
    description: "face with medical mask"
  },
  {
    codepoint: [0x1F912],
    description: "face with thermometer"
  },
  {
    codepoint: [0x1F915],
    description: "face with head-bandage"
  },
  {
    codepoint: [0x1F922],
    description: "nauseated face"
  },
  {
    codepoint: [0x1F92E],
    description: "face vomiting"
  },
  {
    codepoint: [0x1F927],
    description: "sneezing face"
  },
  {
    codepoint: [0x1F975],
    description: "⊛ hot face"
  },
  {
    codepoint: [0x1F976],
    description: "⊛ cold face"
  },
  {
    codepoint: [0x1F974],
    description: "⊛ woozy face"
  },
  {
    codepoint: [0x1F635],
    description: "dizzy face"
  },
  {
    codepoint: [0x1F92F],
    description: "exploding head"
  },
  {
    codepoint: [0x1F920],
    description: "cowboy hat face"
  },
  {
    codepoint: [0x1F973],
    description: "⊛ partying face"
  },
  {
    codepoint: [0x1F60E],
    description: "smiling face with sunglasses"
  },
  {
    codepoint: [0x1F913],
    description: "nerd face"
  },
  {
    codepoint: [0x1F9D0],
    description: "face with monocle"
  },
  {
    codepoint: [0x1F615],
    description: "confused face"
  },
  {
    codepoint: [0x1F61F],
    description: "worried face"
  },
  {
    codepoint: [0x1F641],
    description: "slightly frowning face"
  },
  {
    codepoint: [0x2639],
    description: "frowning face"
  },
  {
    codepoint: [0x1F62E],
    description: "face with open mouth"
  },
  {
    codepoint: [0x1F62F],
    description: "hushed face"
  },
  {
    codepoint: [0x1F632],
    description: "astonished face"
  },
  {
    codepoint: [0x1F633],
    description: "flushed face"
  },
  {
    codepoint: [0x1F97A],
    description: "⊛ pleading face"
  },
  {
    codepoint: [0x1F626],
    description: "frowning face with open mouth"
  },
  {
    codepoint: [0x1F627],
    description: "anguished face"
  },
  {
    codepoint: [0x1F628],
    description: "fearful face"
  },
  {
    codepoint: [0x1F630],
    description: "anxious face with sweat"
  },
  {
    codepoint: [0x1F625],
    description: "sad but relieved face"
  },
  {
    codepoint: [0x1F622],
    description: "crying face"
  },
  {
    codepoint: [0x1F62D],
    description: "loudly crying face"
  },
  {
    codepoint: [0x1F631],
    description: "face screaming in fear"
  },
  {
    codepoint: [0x1F616],
    description: "confounded face"
  },
  {
    codepoint: [0x1F623],
    description: "persevering face"
  },
  {
    codepoint: [0x1F61E],
    description: "disappointed face"
  },
  {
    codepoint: [0x1F613],
    description: "downcast face with sweat"
  },
  {
    codepoint: [0x1F629],
    description: "weary face"
  },
  {
    codepoint: [0x1F62B],
    description: "tired face"
  },
  {
    codepoint: [0x1F624],
    description: "face with steam from nose"
  },
  {
    codepoint: [0x1F621],
    description: "pouting face"
  },
  {
    codepoint: [0x1F620],
    description: "angry face"
  },
  {
    codepoint: [0x1F92C],
    description: "face with symbols on mouth"
  },
  {
    codepoint: [0x1F608],
    description: "smiling face with horns"
  },
  {
    codepoint: [0x1F47F],
    description: "angry face with horns"
  },
  {
    codepoint: [0x1F480],
    description: "skull"
  },
  {
    codepoint: [0x2620],
    description: "skull and crossbones"
  },
  {
    codepoint: [0x1F4A9],
    description: "pile of poo"
  },
  {
    codepoint: [0x1F921],
    description: "clown face"
  },
  {
    codepoint: [0x1F479],
    description: "ogre"
  },
  {
    codepoint: [0x1F47A],
    description: "goblin"
  },
  {
    codepoint: [0x1F47B],
    description: "ghost"
  },
  {
    codepoint: [0x1F47D],
    description: "alien"
  },
  {
    codepoint: [0x1F47E],
    description: "alien monster"
  },
  {
    codepoint: [0x1F916],
    description: "robot face"
  },
  {
    codepoint: [0x1F63A],
    description: "grinning cat face"
  },
  {
    codepoint: [0x1F638],
    description: "grinning cat face with smiling eyes"
  },
  {
    codepoint: [0x1F639],
    description: "cat face with tears of joy"
  },
  {
    codepoint: [0x1F63B],
    description: "smiling cat face with heart-eyes"
  },
  {
    codepoint: [0x1F63C],
    description: "cat face with wry smile"
  },
  {
    codepoint: [0x1F63D],
    description: "kissing cat face"
  },
  {
    codepoint: [0x1F640],
    description: "weary cat face"
  },
  {
    codepoint: [0x1F63F],
    description: "crying cat face"
  },
  {
    codepoint: [0x1F63E],
    description: "pouting cat face"
  },
  {
    codepoint: [0x1F648],
    description: "see-no-evil monkey"
  },
  {
    codepoint: [0x1F649],
    description: "hear-no-evil monkey"
  },
  {
    codepoint: [0x1F64A],
    description: "speak-no-evil monkey"
  },
  {
    codepoint: [0x1F48B],
    description: "kiss mark"
  },
  {
    codepoint: [0x1F48C],
    description: "love letter"
  },
  {
    codepoint: [0x1F498],
    description: "heart with arrow"
  },
  {
    codepoint: [0x1F49D],
    description: "heart with ribbon"
  },
  {
    codepoint: [0x1F496],
    description: "sparkling heart"
  },
  {
    codepoint: [0x1F497],
    description: "growing heart"
  },
  {
    codepoint: [0x1F493],
    description: "beating heart"
  },
  {
    codepoint: [0x1F49E],
    description: "revolving hearts"
  },
  {
    codepoint: [0x1F495],
    description: "two hearts"
  },
  {
    codepoint: [0x1F49F],
    description: "heart decoration"
  },
  {
    codepoint: [0x2763],
    description: "heavy heart exclamation"
  },
  {
    codepoint: [0x1F494],
    description: "broken heart"
  },
  {
    codepoint: [0x2764],
    description: "red heart"
  },
  {
    codepoint: [0x1F9E1],
    description: "orange heart"
  },
  {
    codepoint: [0x1F49B],
    description: "yellow heart"
  },
  {
    codepoint: [0x1F49A],
    description: "green heart"
  },
  {
    codepoint: [0x1F499],
    description: "blue heart"
  },
  {
    codepoint: [0x1F49C],
    description: "purple heart"
  },
  {
    codepoint: [0x1F5A4],
    description: "black heart"
  },
  {
    codepoint: [0x1F4AF],
    description: "hundred points"
  },
  {
    codepoint: [0x1F4A2],
    description: "anger symbol"
  },
  {
    codepoint: [0x1F4A5],
    description: "collision"
  },
  {
    codepoint: [0x1F4AB],
    description: "dizzy"
  },
  {
    codepoint: [0x1F4A6],
    description: "sweat droplets"
  },
  {
    codepoint: [0x1F4A8],
    description: "dashing away"
  },
  {
    codepoint: [0x1F573],
    description: "hole"
  },
  {
    codepoint: [0x1F4A3],
    description: "bomb"
  },
  {
    codepoint: [0x1F4AC],
    description: "speech balloon"
  },
  {
    codepoint: [0x1F441, 0xFE0F, 0x200D, 0x1F5E8, 0xFE0F],
    description: "eye in speech bubble"
  },
  {
    codepoint: [0x1F5E8],
    description: "left speech bubble"
  },
  {
    codepoint: [0x1F5EF],
    description: "right anger bubble"
  },
  {
    codepoint: [0x1F4AD],
    description: "thought balloon"
  },
  {
    codepoint: [0x1F4A4],
    description: "zzz"
  },
  {
    codepoint: [0x1F44B],
    description: "waving hand"
  },
  {
    codepoint: [0x1F91A],
    description: "raised back of hand"
  },
  {
    codepoint: [0x1F590],
    description: "hand with fingers splayed"
  },
  {
    codepoint: [0x270B],
    description: "raised hand"
  },
  {
    codepoint: [0x1F596],
    description: "vulcan salute"
  },
  {
    codepoint: [0x1F44C],
    description: "OK hand"
  },
  {
    codepoint: [0x270C],
    description: "victory hand"
  },
  {
    codepoint: [0x1F91E],
    description: "crossed fingers"
  },
  {
    codepoint: [0x1F91F],
    description: "love-you gesture"
  },
  {
    codepoint: [0x1F918],
    description: "sign of the horns"
  },
  {
    codepoint: [0x1F919],
    description: "call me hand"
  },
  {
    codepoint: [0x1F448],
    description: "backhand index pointing left"
  },
  {
    codepoint: [0x1F449],
    description: "backhand index pointing right"
  },
  {
    codepoint: [0x1F446],
    description: "backhand index pointing up"
  },
  {
    codepoint: [0x1F595],
    description: "middle finger"
  },
  {
    codepoint: [0x1F447],
    description: "backhand index pointing down"
  },
  {
    codepoint: [0x261D],
    description: "index pointing up"
  },
  {
    codepoint: [0x1F44D],
    description: "thumbs up"
  },
  {
    codepoint: [0x1F44E],
    description: "thumbs down"
  },
  {
    codepoint: [0x270A],
    description: "raised fist"
  },
  {
    codepoint: [0x1F44A],
    description: "oncoming fist"
  },
  {
    codepoint: [0x1F91B],
    description: "left-facing fist"
  },
  {
    codepoint: [0x1F91C],
    description: "right-facing fist"
  },
  {
    codepoint: [0x1F44F],
    description: "clapping hands"
  },
  {
    codepoint: [0x1F64C],
    description: "raising hands"
  },
  {
    codepoint: [0x1F450],
    description: "open hands"
  },
  {
    codepoint: [0x1F932],
    description: "palms up together"
  },
  {
    codepoint: [0x1F91D],
    description: "handshake"
  },
  {
    codepoint: [0x1F64F],
    description: "folded hands"
  },
  {
    codepoint: [0x270D],
    description: "writing hand"
  },
  {
    codepoint: [0x1F485],
    description: "nail polish"
  },
  {
    codepoint: [0x1F933],
    description: "selfie"
  },
  {
    codepoint: [0x1F4AA],
    description: "flexed biceps"
  },
  {
    codepoint: [0x1F9B5],
    description: "⊛ leg"
  },
  {
    codepoint: [0x1F9B6],
    description: "⊛ foot"
  },
  {
    codepoint: [0x1F442],
    description: "ear"
  },
  {
    codepoint: [0x1F443],
    description: "nose"
  },
  {
    codepoint: [0x1F9E0],
    description: "brain"
  },
  {
    codepoint: [0x1F9B7],
    description: "⊛ tooth"
  },
  {
    codepoint: [0x1F9B4],
    description: "⊛ bone"
  },
  {
    codepoint: [0x1F440],
    description: "eyes"
  },
  {
    codepoint: [0x1F441],
    description: "eye"
  },
  {
    codepoint: [0x1F445],
    description: "tongue"
  },
  {
    codepoint: [0x1F444],
    description: "mouth"
  },
  {
    codepoint: [0x1F476],
    description: "baby"
  },
  {
    codepoint: [0x1F9D2],
    description: "child"
  },
  {
    codepoint: [0x1F466],
    description: "boy"
  },
  {
    codepoint: [0x1F467],
    description: "girl"
  },
  {
    codepoint: [0x1F9D1],
    description: "person"
  },
  {
    codepoint: [0x1F471],
    description: "person: blond hair"
  },
  {
    codepoint: [0x1F468],
    description: "man"
  },
  {
    codepoint: [0x1F471, 0x200D, 0x2642, 0xFE0F],
    description: "man: blond hair"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F9B0],
    description: "⊛ man: red hair"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F9B1],
    description: "⊛ man: curly hair"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F9B3],
    description: "⊛ man: white hair"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F9B2],
    description: "⊛ man: bald"
  },
  {
    codepoint: [0x1F9D4],
    description: "man: beard"
  },
  {
    codepoint: [0x1F469],
    description: "woman"
  },
  {
    codepoint: [0x1F471, 0x200D, 0x2640, 0xFE0F],
    description: "woman: blond hair"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F9B0],
    description: "⊛ woman: red hair"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F9B1],
    description: "⊛ woman: curly hair"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F9B3],
    description: "⊛ woman: white hair"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F9B2],
    description: "⊛ woman: bald"
  },
  {
    codepoint: [0x1F9D3],
    description: "older person"
  },
  {
    codepoint: [0x1F474],
    description: "old man"
  },
  {
    codepoint: [0x1F475],
    description: "old woman"
  },
  {
    codepoint: [0x1F64D],
    description: "person frowning"
  },
  {
    codepoint: [0x1F64D, 0x200D, 0x2642, 0xFE0F],
    description: "man frowning"
  },
  {
    codepoint: [0x1F64D, 0x200D, 0x2640, 0xFE0F],
    description: "woman frowning"
  },
  {
    codepoint: [0x1F64E],
    description: "person pouting"
  },
  {
    codepoint: [0x1F64E, 0x200D, 0x2642, 0xFE0F],
    description: "man pouting"
  },
  {
    codepoint: [0x1F64E, 0x200D, 0x2640, 0xFE0F],
    description: "woman pouting"
  },
  {
    codepoint: [0x1F645],
    description: "person gesturing NO"
  },
  {
    codepoint: [0x1F645, 0x200D, 0x2642, 0xFE0F],
    description: "man gesturing NO"
  },
  {
    codepoint: [0x1F645, 0x200D, 0x2640, 0xFE0F],
    description: "woman gesturing NO"
  },
  {
    codepoint: [0x1F646],
    description: "person gesturing OK"
  },
  {
    codepoint: [0x1F646, 0x200D, 0x2642, 0xFE0F],
    description: "man gesturing OK"
  },
  {
    codepoint: [0x1F646, 0x200D, 0x2640, 0xFE0F],
    description: "woman gesturing OK"
  },
  {
    codepoint: [0x1F481],
    description: "person tipping hand"
  },
  {
    codepoint: [0x1F481, 0x200D, 0x2642, 0xFE0F],
    description: "man tipping hand"
  },
  {
    codepoint: [0x1F481, 0x200D, 0x2640, 0xFE0F],
    description: "woman tipping hand"
  },
  {
    codepoint: [0x1F64B],
    description: "person raising hand"
  },
  {
    codepoint: [0x1F64B, 0x200D, 0x2642, 0xFE0F],
    description: "man raising hand"
  },
  {
    codepoint: [0x1F64B, 0x200D, 0x2640, 0xFE0F],
    description: "woman raising hand"
  },
  {
    codepoint: [0x1F647],
    description: "person bowing"
  },
  {
    codepoint: [0x1F647, 0x200D, 0x2642, 0xFE0F],
    description: "man bowing"
  },
  {
    codepoint: [0x1F647, 0x200D, 0x2640, 0xFE0F],
    description: "woman bowing"
  },
  {
    codepoint: [0x1F926],
    description: "person facepalming"
  },
  {
    codepoint: [0x1F926, 0x200D, 0x2642, 0xFE0F],
    description: "man facepalming"
  },
  {
    codepoint: [0x1F926, 0x200D, 0x2640, 0xFE0F],
    description: "woman facepalming"
  },
  {
    codepoint: [0x1F937],
    description: "person shrugging"
  },
  {
    codepoint: [0x1F937, 0x200D, 0x2642, 0xFE0F],
    description: "man shrugging"
  },
  {
    codepoint: [0x1F937, 0x200D, 0x2640, 0xFE0F],
    description: "woman shrugging"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x2695, 0xFE0F],
    description: "man health worker"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x2695, 0xFE0F],
    description: "woman health worker"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F393],
    description: "man student"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F393],
    description: "woman student"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F3EB],
    description: "man teacher"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F3EB],
    description: "woman teacher"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x2696, 0xFE0F],
    description: "man judge"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x2696, 0xFE0F],
    description: "woman judge"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F33E],
    description: "man farmer"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F33E],
    description: "woman farmer"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F373],
    description: "man cook"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F373],
    description: "woman cook"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F527],
    description: "man mechanic"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F527],
    description: "woman mechanic"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F3ED],
    description: "man factory worker"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F3ED],
    description: "woman factory worker"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F4BC],
    description: "man office worker"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F4BC],
    description: "woman office worker"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F52C],
    description: "man scientist"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F52C],
    description: "woman scientist"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F4BB],
    description: "man technologist"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F4BB],
    description: "woman technologist"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F3A4],
    description: "man singer"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F3A4],
    description: "woman singer"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F3A8],
    description: "man artist"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F3A8],
    description: "woman artist"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x2708, 0xFE0F],
    description: "man pilot"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x2708, 0xFE0F],
    description: "woman pilot"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F680],
    description: "man astronaut"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F680],
    description: "woman astronaut"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F692],
    description: "man firefighter"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F692],
    description: "woman firefighter"
  },
  {
    codepoint: [0x1F46E],
    description: "police officer"
  },
  {
    codepoint: [0x1F46E, 0x200D, 0x2642, 0xFE0F],
    description: "man police officer"
  },
  {
    codepoint: [0x1F46E, 0x200D, 0x2640, 0xFE0F],
    description: "woman police officer"
  },
  {
    codepoint: [0x1F575],
    description: "detective"
  },
  {
    codepoint: [0x1F575, 0xFE0F, 0x200D, 0x2642, 0xFE0F],
    description: "man detective"
  },
  {
    codepoint: [0x1F575, 0xFE0F, 0x200D, 0x2640, 0xFE0F],
    description: "woman detective"
  },
  {
    codepoint: [0x1F482],
    description: "guard"
  },
  {
    codepoint: [0x1F482, 0x200D, 0x2642, 0xFE0F],
    description: "man guard"
  },
  {
    codepoint: [0x1F482, 0x200D, 0x2640, 0xFE0F],
    description: "woman guard"
  },
  {
    codepoint: [0x1F477],
    description: "construction worker"
  },
  {
    codepoint: [0x1F477, 0x200D, 0x2642, 0xFE0F],
    description: "man construction worker"
  },
  {
    codepoint: [0x1F477, 0x200D, 0x2640, 0xFE0F],
    description: "woman construction worker"
  },
  {
    codepoint: [0x1F934],
    description: "prince"
  },
  {
    codepoint: [0x1F478],
    description: "princess"
  },
  {
    codepoint: [0x1F473],
    description: "person wearing turban"
  },
  {
    codepoint: [0x1F473, 0x200D, 0x2642, 0xFE0F],
    description: "man wearing turban"
  },
  {
    codepoint: [0x1F473, 0x200D, 0x2640, 0xFE0F],
    description: "woman wearing turban"
  },
  {
    codepoint: [0x1F472],
    description: "man with Chinese cap"
  },
  {
    codepoint: [0x1F9D5],
    description: "woman with headscarf"
  },
  {
    codepoint: [0x1F935],
    description: "man in tuxedo"
  },
  {
    codepoint: [0x1F470],
    description: "bride with veil"
  },
  {
    codepoint: [0x1F930],
    description: "pregnant woman"
  },
  {
    codepoint: [0x1F931],
    description: "breast-feeding"
  },
  {
    codepoint: [0x1F47C],
    description: "baby angel"
  },
  {
    codepoint: [0x1F385],
    description: "Santa Claus"
  },
  {
    codepoint: [0x1F936],
    description: "Mrs. Claus"
  },
  {
    codepoint: [0x1F9B8],
    description: "⊛ superhero"
  },
  {
    codepoint: [0x1F9B8, 0x200D, 0x2642, 0xFE0F],
    description: "⊛ man superhero"
  },
  {
    codepoint: [0x1F9B8, 0x200D, 0x2640, 0xFE0F],
    description: "⊛ woman superhero"
  },
  {
    codepoint: [0x1F9B9],
    description: "⊛ supervillain"
  },
  {
    codepoint: [0x1F9B9, 0x200D, 0x2642, 0xFE0F],
    description: "⊛ man supervillain"
  },
  {
    codepoint: [0x1F9B9, 0x200D, 0x2640, 0xFE0F],
    description: "⊛ woman supervillain"
  },
  {
    codepoint: [0x1F9D9],
    description: "mage"
  },
  {
    codepoint: [0x1F9D9, 0x200D, 0x2642, 0xFE0F],
    description: "man mage"
  },
  {
    codepoint: [0x1F9D9, 0x200D, 0x2640, 0xFE0F],
    description: "woman mage"
  },
  {
    codepoint: [0x1F9DA],
    description: "fairy"
  },
  {
    codepoint: [0x1F9DA, 0x200D, 0x2642, 0xFE0F],
    description: "man fairy"
  },
  {
    codepoint: [0x1F9DA, 0x200D, 0x2640, 0xFE0F],
    description: "woman fairy"
  },
  {
    codepoint: [0x1F9DB],
    description: "vampire"
  },
  {
    codepoint: [0x1F9DB, 0x200D, 0x2642, 0xFE0F],
    description: "man vampire"
  },
  {
    codepoint: [0x1F9DB, 0x200D, 0x2640, 0xFE0F],
    description: "woman vampire"
  },
  {
    codepoint: [0x1F9DC],
    description: "merperson"
  },
  {
    codepoint: [0x1F9DC, 0x200D, 0x2642, 0xFE0F],
    description: "merman"
  },
  {
    codepoint: [0x1F9DC, 0x200D, 0x2640, 0xFE0F],
    description: "mermaid"
  },
  {
    codepoint: [0x1F9DD],
    description: "elf"
  },
  {
    codepoint: [0x1F9DD, 0x200D, 0x2642, 0xFE0F],
    description: "man elf"
  },
  {
    codepoint: [0x1F9DD, 0x200D, 0x2640, 0xFE0F],
    description: "woman elf"
  },
  {
    codepoint: [0x1F9DE],
    description: "genie"
  },
  {
    codepoint: [0x1F9DE, 0x200D, 0x2642, 0xFE0F],
    description: "man genie"
  },
  {
    codepoint: [0x1F9DE, 0x200D, 0x2640, 0xFE0F],
    description: "woman genie"
  },
  {
    codepoint: [0x1F9DF],
    description: "zombie"
  },
  {
    codepoint: [0x1F9DF, 0x200D, 0x2642, 0xFE0F],
    description: "man zombie"
  },
  {
    codepoint: [0x1F9DF, 0x200D, 0x2640, 0xFE0F],
    description: "woman zombie"
  },
  {
    codepoint: [0x1F486],
    description: "person getting massage"
  },
  {
    codepoint: [0x1F486, 0x200D, 0x2642, 0xFE0F],
    description: "man getting massage"
  },
  {
    codepoint: [0x1F486, 0x200D, 0x2640, 0xFE0F],
    description: "woman getting massage"
  },
  {
    codepoint: [0x1F487],
    description: "person getting haircut"
  },
  {
    codepoint: [0x1F487, 0x200D, 0x2642, 0xFE0F],
    description: "man getting haircut"
  },
  {
    codepoint: [0x1F487, 0x200D, 0x2640, 0xFE0F],
    description: "woman getting haircut"
  },
  {
    codepoint: [0x1F6B6],
    description: "person walking"
  },
  {
    codepoint: [0x1F6B6, 0x200D, 0x2642, 0xFE0F],
    description: "man walking"
  },
  {
    codepoint: [0x1F6B6, 0x200D, 0x2640, 0xFE0F],
    description: "woman walking"
  },
  {
    codepoint: [0x1F3C3],
    description: "person running"
  },
  {
    codepoint: [0x1F3C3, 0x200D, 0x2642, 0xFE0F],
    description: "man running"
  },
  {
    codepoint: [0x1F3C3, 0x200D, 0x2640, 0xFE0F],
    description: "woman running"
  },
  {
    codepoint: [0x1F483],
    description: "woman dancing"
  },
  {
    codepoint: [0x1F57A],
    description: "man dancing"
  },
  {
    codepoint: [0x1F574],
    description: "man in suit levitating"
  },
  {
    codepoint: [0x1F46F],
    description: "people with bunny ears"
  },
  {
    codepoint: [0x1F46F, 0x200D, 0x2642, 0xFE0F],
    description: "men with bunny ears"
  },
  {
    codepoint: [0x1F46F, 0x200D, 0x2640, 0xFE0F],
    description: "women with bunny ears"
  },
  {
    codepoint: [0x1F9D6],
    description: "person in steamy room"
  },
  {
    codepoint: [0x1F9D6, 0x200D, 0x2642, 0xFE0F],
    description: "man in steamy room"
  },
  {
    codepoint: [0x1F9D6, 0x200D, 0x2640, 0xFE0F],
    description: "woman in steamy room"
  },
  {
    codepoint: [0x1F9D7],
    description: "person climbing"
  },
  {
    codepoint: [0x1F9D7, 0x200D, 0x2642, 0xFE0F],
    description: "man climbing"
  },
  {
    codepoint: [0x1F9D7, 0x200D, 0x2640, 0xFE0F],
    description: "woman climbing"
  },
  {
    codepoint: [0x1F93A],
    description: "person fencing"
  },
  {
    codepoint: [0x1F3C7],
    description: "horse racing"
  },
  {
    codepoint: [0x26F7],
    description: "skier"
  },
  {
    codepoint: [0x1F3C2],
    description: "snowboarder"
  },
  {
    codepoint: [0x1F3CC],
    description: "person golfing"
  },
  {
    codepoint: [0x1F3CC, 0xFE0F, 0x200D, 0x2642, 0xFE0F],
    description: "man golfing"
  },
  {
    codepoint: [0x1F3CC, 0xFE0F, 0x200D, 0x2640, 0xFE0F],
    description: "woman golfing"
  },
  {
    codepoint: [0x1F3C4],
    description: "person surfing"
  },
  {
    codepoint: [0x1F3C4, 0x200D, 0x2642, 0xFE0F],
    description: "man surfing"
  },
  {
    codepoint: [0x1F3C4, 0x200D, 0x2640, 0xFE0F],
    description: "woman surfing"
  },
  {
    codepoint: [0x1F6A3],
    description: "person rowing boat"
  },
  {
    codepoint: [0x1F6A3, 0x200D, 0x2642, 0xFE0F],
    description: "man rowing boat"
  },
  {
    codepoint: [0x1F6A3, 0x200D, 0x2640, 0xFE0F],
    description: "woman rowing boat"
  },
  {
    codepoint: [0x1F3CA],
    description: "person swimming"
  },
  {
    codepoint: [0x1F3CA, 0x200D, 0x2642, 0xFE0F],
    description: "man swimming"
  },
  {
    codepoint: [0x1F3CA, 0x200D, 0x2640, 0xFE0F],
    description: "woman swimming"
  },
  {
    codepoint: [0x26F9],
    description: "person bouncing ball"
  },
  {
    codepoint: [0x26F9, 0xFE0F, 0x200D, 0x2642, 0xFE0F],
    description: "man bouncing ball"
  },
  {
    codepoint: [0x26F9, 0xFE0F, 0x200D, 0x2640, 0xFE0F],
    description: "woman bouncing ball"
  },
  {
    codepoint: [0x1F3CB],
    description: "person lifting weights"
  },
  {
    codepoint: [0x1F3CB, 0xFE0F, 0x200D, 0x2642, 0xFE0F],
    description: "man lifting weights"
  },
  {
    codepoint: [0x1F3CB, 0xFE0F, 0x200D, 0x2640, 0xFE0F],
    description: "woman lifting weights"
  },
  {
    codepoint: [0x1F6B4],
    description: "person biking"
  },
  {
    codepoint: [0x1F6B4, 0x200D, 0x2642, 0xFE0F],
    description: "man biking"
  },
  {
    codepoint: [0x1F6B4, 0x200D, 0x2640, 0xFE0F],
    description: "woman biking"
  },
  {
    codepoint: [0x1F6B5],
    description: "person mountain biking"
  },
  {
    codepoint: [0x1F6B5, 0x200D, 0x2642, 0xFE0F],
    description: "man mountain biking"
  },
  {
    codepoint: [0x1F6B5, 0x200D, 0x2640, 0xFE0F],
    description: "woman mountain biking"
  },
  {
    codepoint: [0x1F938],
    description: "person cartwheeling"
  },
  {
    codepoint: [0x1F938, 0x200D, 0x2642, 0xFE0F],
    description: "man cartwheeling"
  },
  {
    codepoint: [0x1F938, 0x200D, 0x2640, 0xFE0F],
    description: "woman cartwheeling"
  },
  {
    codepoint: [0x1F93C],
    description: "people wrestling"
  },
  {
    codepoint: [0x1F93C, 0x200D, 0x2642, 0xFE0F],
    description: "men wrestling"
  },
  {
    codepoint: [0x1F93C, 0x200D, 0x2640, 0xFE0F],
    description: "women wrestling"
  },
  {
    codepoint: [0x1F93D],
    description: "person playing water polo"
  },
  {
    codepoint: [0x1F93D, 0x200D, 0x2642, 0xFE0F],
    description: "man playing water polo"
  },
  {
    codepoint: [0x1F93D, 0x200D, 0x2640, 0xFE0F],
    description: "woman playing water polo"
  },
  {
    codepoint: [0x1F93E],
    description: "person playing handball"
  },
  {
    codepoint: [0x1F93E, 0x200D, 0x2642, 0xFE0F],
    description: "man playing handball"
  },
  {
    codepoint: [0x1F93E, 0x200D, 0x2640, 0xFE0F],
    description: "woman playing handball"
  },
  {
    codepoint: [0x1F939],
    description: "person juggling"
  },
  {
    codepoint: [0x1F939, 0x200D, 0x2642, 0xFE0F],
    description: "man juggling"
  },
  {
    codepoint: [0x1F939, 0x200D, 0x2640, 0xFE0F],
    description: "woman juggling"
  },
  {
    codepoint: [0x1F9D8],
    description: "person in lotus position"
  },
  {
    codepoint: [0x1F9D8, 0x200D, 0x2642, 0xFE0F],
    description: "man in lotus position"
  },
  {
    codepoint: [0x1F9D8, 0x200D, 0x2640, 0xFE0F],
    description: "woman in lotus position"
  },
  {
    codepoint: [0x1F6C0],
    description: "person taking bath"
  },
  {
    codepoint: [0x1F6CC],
    description: "person in bed"
  },
  {
    codepoint: [0x1F46B],
    description: "man and woman holding hands"
  },
  {
    codepoint: [0x1F46C],
    description: "two men holding hands"
  },
  {
    codepoint: [0x1F46D],
    description: "two women holding hands"
  },
  {
    codepoint: [0x1F48F],
    description: "kiss"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x2764, 0xFE0F, 0x200D, 0x1F48B, 0x200D, 0x1F468],
    description: "kiss: woman, man"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x2764, 0xFE0F, 0x200D, 0x1F48B, 0x200D, 0x1F468],
    description: "kiss: man, man"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x2764, 0xFE0F, 0x200D, 0x1F48B, 0x200D, 0x1F469],
    description: "kiss: woman, woman"
  },
  {
    codepoint: [0x1F491],
    description: "couple with heart"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x2764, 0xFE0F, 0x200D, 0x1F468],
    description: "couple with heart: woman, man"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x2764, 0xFE0F, 0x200D, 0x1F468],
    description: "couple with heart: man, man"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x2764, 0xFE0F, 0x200D, 0x1F469],
    description: "couple with heart: woman, woman"
  },
  {
    codepoint: [0x1F46A],
    description: "family"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F466],
    description: "family: man, woman, boy"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F467],
    description: "family: man, woman, girl"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F466],
    description: "family: man, woman, girl, boy"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F466, 0x200D, 0x1F466],
    description: "family: man, woman, boy, boy"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F467],
    description: "family: man, woman, girl, girl"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F466],
    description: "family: man, man, boy"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F467],
    description: "family: man, man, girl"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F466],
    description: "family: man, man, girl, boy"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F466, 0x200D, 0x1F466],
    description: "family: man, man, boy, boy"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F467],
    description: "family: man, man, girl, girl"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F466],
    description: "family: woman, woman, boy"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F467],
    description: "family: woman, woman, girl"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F466],
    description: "family: woman, woman, girl, boy"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F466, 0x200D, 0x1F466],
    description: "family: woman, woman, boy, boy"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F467],
    description: "family: woman, woman, girl, girl"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F466],
    description: "family: man, boy"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F466, 0x200D, 0x1F466],
    description: "family: man, boy, boy"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F467],
    description: "family: man, girl"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F466],
    description: "family: man, girl, boy"
  },
  {
    codepoint: [0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F467],
    description: "family: man, girl, girl"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F466],
    description: "family: woman, boy"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F466, 0x200D, 0x1F466],
    description: "family: woman, boy, boy"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F467],
    description: "family: woman, girl"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F466],
    description: "family: woman, girl, boy"
  },
  {
    codepoint: [0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F467],
    description: "family: woman, girl, girl"
  },
  {
    codepoint: [0x1F5E3],
    description: "speaking head"
  },
  {
    codepoint: [0x1F464],
    description: "bust in silhouette"
  },
  {
    codepoint: [0x1F465],
    description: "busts in silhouette"
  },
  {
    codepoint: [0x1F463],
    description: "footprints"
  },
  {
    codepoint: [0x1F9B0],
    description: "⊛ red hair"
  },
  {
    codepoint: [0x1F9B1],
    description: "⊛ curly hair"
  },
  {
    codepoint: [0x1F9B3],
    description: "⊛ white hair"
  },
  {
    codepoint: [0x1F9B2],
    description: "⊛ bald"
  },
  {
    codepoint: [0x2640],
    description: "female sign"
  },
  {
    codepoint: [0x2642],
    description: "male sign"
  },
  {
    codepoint: [0x1F435],
    description: "monkey face"
  },
  {
    codepoint: [0x1F412],
    description: "monkey"
  },
  {
    codepoint: [0x1F98D],
    description: "gorilla"
  },
  {
    codepoint: [0x1F436],
    description: "dog face"
  },
  {
    codepoint: [0x1F415],
    description: "dog"
  },
  {
    codepoint: [0x1F429],
    description: "poodle"
  },
  {
    codepoint: [0x1F43A],
    description: "wolf face"
  },
  {
    codepoint: [0x1F98A],
    description: "fox face"
  },
  {
    codepoint: [0x1F99D],
    description: "⊛ raccoon"
  },
  {
    codepoint: [0x1F431],
    description: "cat face"
  },
  {
    codepoint: [0x1F408],
    description: "cat"
  },
  {
    codepoint: [0x1F981],
    description: "lion face"
  },
  {
    codepoint: [0x1F42F],
    description: "tiger face"
  },
  {
    codepoint: [0x1F405],
    description: "tiger"
  },
  {
    codepoint: [0x1F406],
    description: "leopard"
  },
  {
    codepoint: [0x1F434],
    description: "horse face"
  },
  {
    codepoint: [0x1F40E],
    description: "horse"
  },
  {
    codepoint: [0x1F984],
    description: "unicorn face"
  },
  {
    codepoint: [0x1F993],
    description: "zebra"
  },
  {
    codepoint: [0x1F98C],
    description: "deer"
  },
  {
    codepoint: [0x1F42E],
    description: "cow face"
  },
  {
    codepoint: [0x1F402],
    description: "ox"
  },
  {
    codepoint: [0x1F403],
    description: "water buffalo"
  },
  {
    codepoint: [0x1F404],
    description: "cow"
  },
  {
    codepoint: [0x1F437],
    description: "pig face"
  },
  {
    codepoint: [0x1F416],
    description: "pig"
  },
  {
    codepoint: [0x1F417],
    description: "boar"
  },
  {
    codepoint: [0x1F43D],
    description: "pig nose"
  },
  {
    codepoint: [0x1F40F],
    description: "ram"
  },
  {
    codepoint: [0x1F411],
    description: "ewe"
  },
  {
    codepoint: [0x1F410],
    description: "goat"
  },
  {
    codepoint: [0x1F42A],
    description: "camel"
  },
  {
    codepoint: [0x1F42B],
    description: "two-hump camel"
  },
  {
    codepoint: [0x1F999],
    description: "⊛ llama"
  },
  {
    codepoint: [0x1F992],
    description: "giraffe"
  },
  {
    codepoint: [0x1F418],
    description: "elephant"
  },
  {
    codepoint: [0x1F98F],
    description: "rhinoceros"
  },
  {
    codepoint: [0x1F99B],
    description: "⊛ hippopotamus"
  },
  {
    codepoint: [0x1F42D],
    description: "mouse face"
  },
  {
    codepoint: [0x1F401],
    description: "mouse"
  },
  {
    codepoint: [0x1F400],
    description: "rat"
  },
  {
    codepoint: [0x1F439],
    description: "hamster face"
  },
  {
    codepoint: [0x1F430],
    description: "rabbit face"
  },
  {
    codepoint: [0x1F407],
    description: "rabbit"
  },
  {
    codepoint: [0x1F43F],
    description: "chipmunk"
  },
  {
    codepoint: [0x1F994],
    description: "hedgehog"
  },
  {
    codepoint: [0x1F987],
    description: "bat"
  },
  {
    codepoint: [0x1F43B],
    description: "bear face"
  },
  {
    codepoint: [0x1F428],
    description: "koala"
  },
  {
    codepoint: [0x1F43C],
    description: "panda face"
  },
  {
    codepoint: [0x1F998],
    description: "⊛ kangaroo"
  },
  {
    codepoint: [0x1F9A1],
    description: "⊛ badger"
  },
  {
    codepoint: [0x1F43E],
    description: "paw prints"
  },
  {
    codepoint: [0x1F983],
    description: "turkey"
  },
  {
    codepoint: [0x1F414],
    description: "chicken"
  },
  {
    codepoint: [0x1F413],
    description: "rooster"
  },
  {
    codepoint: [0x1F423],
    description: "hatching chick"
  },
  {
    codepoint: [0x1F424],
    description: "baby chick"
  },
  {
    codepoint: [0x1F425],
    description: "front-facing baby chick"
  },
  {
    codepoint: [0x1F426],
    description: "bird"
  },
  {
    codepoint: [0x1F427],
    description: "penguin"
  },
  {
    codepoint: [0x1F54A],
    description: "dove"
  },
  {
    codepoint: [0x1F985],
    description: "eagle"
  },
  {
    codepoint: [0x1F986],
    description: "duck"
  },
  {
    codepoint: [0x1F9A2],
    description: "⊛ swan"
  },
  {
    codepoint: [0x1F989],
    description: "owl"
  },
  {
    codepoint: [0x1F99A],
    description: "⊛ peacock"
  },
  {
    codepoint: [0x1F99C],
    description: "⊛ parrot"
  },
  {
    codepoint: [0x1F438],
    description: "frog face"
  },
  {
    codepoint: [0x1F40A],
    description: "crocodile"
  },
  {
    codepoint: [0x1F422],
    description: "turtle"
  },
  {
    codepoint: [0x1F98E],
    description: "lizard"
  },
  {
    codepoint: [0x1F40D],
    description: "snake"
  },
  {
    codepoint: [0x1F432],
    description: "dragon face"
  },
  {
    codepoint: [0x1F409],
    description: "dragon"
  },
  {
    codepoint: [0x1F995],
    description: "sauropod"
  },
  {
    codepoint: [0x1F996],
    description: "T-Rex"
  },
  {
    codepoint: [0x1F433],
    description: "spouting whale"
  },
  {
    codepoint: [0x1F40B],
    description: "whale"
  },
  {
    codepoint: [0x1F42C],
    description: "dolphin"
  },
  {
    codepoint: [0x1F41F],
    description: "fish"
  },
  {
    codepoint: [0x1F420],
    description: "tropical fish"
  },
  {
    codepoint: [0x1F421],
    description: "blowfish"
  },
  {
    codepoint: [0x1F988],
    description: "shark"
  },
  {
    codepoint: [0x1F419],
    description: "octopus"
  },
  {
    codepoint: [0x1F41A],
    description: "spiral shell"
  },
  {
    codepoint: [0x1F40C],
    description: "snail"
  },
  {
    codepoint: [0x1F98B],
    description: "butterfly"
  },
  {
    codepoint: [0x1F41B],
    description: "bug"
  },
  {
    codepoint: [0x1F41C],
    description: "ant"
  },
  {
    codepoint: [0x1F41D],
    description: "honeybee"
  },
  {
    codepoint: [0x1F41E],
    description: "lady beetle"
  },
  {
    codepoint: [0x1F997],
    description: "cricket"
  },
  {
    codepoint: [0x1F577],
    description: "spider"
  },
  {
    codepoint: [0x1F578],
    description: "spider web"
  },
  {
    codepoint: [0x1F982],
    description: "scorpion"
  },
  {
    codepoint: [0x1F99F],
    description: "⊛ mosquito"
  },
  {
    codepoint: [0x1F9A0],
    description: "⊛ microbe"
  },
  {
    codepoint: [0x1F490],
    description: "bouquet"
  },
  {
    codepoint: [0x1F338],
    description: "cherry blossom"
  },
  {
    codepoint: [0x1F4AE],
    description: "white flower"
  },
  {
    codepoint: [0x1F3F5],
    description: "rosette"
  },
  {
    codepoint: [0x1F339],
    description: "rose"
  },
  {
    codepoint: [0x1F940],
    description: "wilted flower"
  },
  {
    codepoint: [0x1F33A],
    description: "hibiscus"
  },
  {
    codepoint: [0x1F33B],
    description: "sunflower"
  },
  {
    codepoint: [0x1F33C],
    description: "blossom"
  },
  {
    codepoint: [0x1F337],
    description: "tulip"
  },
  {
    codepoint: [0x1F331],
    description: "seedling"
  },
  {
    codepoint: [0x1F332],
    description: "evergreen tree"
  },
  {
    codepoint: [0x1F333],
    description: "deciduous tree"
  },
  {
    codepoint: [0x1F334],
    description: "palm tree"
  },
  {
    codepoint: [0x1F335],
    description: "cactus"
  },
  {
    codepoint: [0x1F33E],
    description: "sheaf of rice"
  },
  {
    codepoint: [0x1F33F],
    description: "herb"
  },
  {
    codepoint: [0x2618],
    description: "shamrock"
  },
  {
    codepoint: [0x1F340],
    description: "four leaf clover"
  },
  {
    codepoint: [0x1F341],
    description: "maple leaf"
  },
  {
    codepoint: [0x1F342],
    description: "fallen leaf"
  },
  {
    codepoint: [0x1F343],
    description: "leaf fluttering in wind"
  },
  {
    codepoint: [0x1F347],
    description: "grapes"
  },
  {
    codepoint: [0x1F348],
    description: "melon"
  },
  {
    codepoint: [0x1F349],
    description: "watermelon"
  },
  {
    codepoint: [0x1F34A],
    description: "tangerine"
  },
  {
    codepoint: [0x1F34B],
    description: "lemon"
  },
  {
    codepoint: [0x1F34C],
    description: "banana"
  },
  {
    codepoint: [0x1F34D],
    description: "pineapple"
  },
  {
    codepoint: [0x1F96D],
    description: "⊛ mango"
  },
  {
    codepoint: [0x1F34E],
    description: "red apple"
  },
  {
    codepoint: [0x1F34F],
    description: "green apple"
  },
  {
    codepoint: [0x1F350],
    description: "pear"
  },
  {
    codepoint: [0x1F351],
    description: "peach"
  },
  {
    codepoint: [0x1F352],
    description: "cherries"
  },
  {
    codepoint: [0x1F353],
    description: "strawberry"
  },
  {
    codepoint: [0x1F95D],
    description: "kiwi fruit"
  },
  {
    codepoint: [0x1F345],
    description: "tomato"
  },
  {
    codepoint: [0x1F965],
    description: "coconut"
  },
  {
    codepoint: [0x1F951],
    description: "avocado"
  },
  {
    codepoint: [0x1F346],
    description: "eggplant"
  },
  {
    codepoint: [0x1F954],
    description: "potato"
  },
  {
    codepoint: [0x1F955],
    description: "carrot"
  },
  {
    codepoint: [0x1F33D],
    description: "ear of corn"
  },
  {
    codepoint: [0x1F336],
    description: "hot pepper"
  },
  {
    codepoint: [0x1F952],
    description: "cucumber"
  },
  {
    codepoint: [0x1F96C],
    description: "⊛ leafy green"
  },
  {
    codepoint: [0x1F966],
    description: "broccoli"
  },
  {
    codepoint: [0x1F344],
    description: "mushroom"
  },
  {
    codepoint: [0x1F95C],
    description: "peanuts"
  },
  {
    codepoint: [0x1F330],
    description: "chestnut"
  },
  {
    codepoint: [0x1F35E],
    description: "bread"
  },
  {
    codepoint: [0x1F950],
    description: "croissant"
  },
  {
    codepoint: [0x1F956],
    description: "baguette bread"
  },
  {
    codepoint: [0x1F968],
    description: "pretzel"
  },
  {
    codepoint: [0x1F96F],
    description: "⊛ bagel"
  },
  {
    codepoint: [0x1F95E],
    description: "pancakes"
  },
  {
    codepoint: [0x1F9C0],
    description: "cheese wedge"
  },
  {
    codepoint: [0x1F356],
    description: "meat on bone"
  },
  {
    codepoint: [0x1F357],
    description: "poultry leg"
  },
  {
    codepoint: [0x1F969],
    description: "cut of meat"
  },
  {
    codepoint: [0x1F953],
    description: "bacon"
  },
  {
    codepoint: [0x1F354],
    description: "hamburger"
  },
  {
    codepoint: [0x1F35F],
    description: "french fries"
  },
  {
    codepoint: [0x1F355],
    description: "pizza"
  },
  {
    codepoint: [0x1F32D],
    description: "hot dog"
  },
  {
    codepoint: [0x1F96A],
    description: "sandwich"
  },
  {
    codepoint: [0x1F32E],
    description: "taco"
  },
  {
    codepoint: [0x1F32F],
    description: "burrito"
  },
  {
    codepoint: [0x1F959],
    description: "stuffed flatbread"
  },
  {
    codepoint: [0x1F95A],
    description: "egg"
  },
  {
    codepoint: [0x1F373],
    description: "cooking"
  },
  {
    codepoint: [0x1F958],
    description: "shallow pan of food"
  },
  {
    codepoint: [0x1F372],
    description: "pot of food"
  },
  {
    codepoint: [0x1F963],
    description: "bowl with spoon"
  },
  {
    codepoint: [0x1F957],
    description: "green salad"
  },
  {
    codepoint: [0x1F37F],
    description: "popcorn"
  },
  {
    codepoint: [0x1F9C2],
    description: "⊛ salt"
  },
  {
    codepoint: [0x1F96B],
    description: "canned food"
  },
  {
    codepoint: [0x1F371],
    description: "bento box"
  },
  {
    codepoint: [0x1F358],
    description: "rice cracker"
  },
  {
    codepoint: [0x1F359],
    description: "rice ball"
  },
  {
    codepoint: [0x1F35A],
    description: "cooked rice"
  },
  {
    codepoint: [0x1F35B],
    description: "curry rice"
  },
  {
    codepoint: [0x1F35C],
    description: "steaming bowl"
  },
  {
    codepoint: [0x1F35D],
    description: "spaghetti"
  },
  {
    codepoint: [0x1F360],
    description: "roasted sweet potato"
  },
  {
    codepoint: [0x1F362],
    description: "oden"
  },
  {
    codepoint: [0x1F363],
    description: "sushi"
  },
  {
    codepoint: [0x1F364],
    description: "fried shrimp"
  },
  {
    codepoint: [0x1F365],
    description: "fish cake with swirl"
  },
  {
    codepoint: [0x1F96E],
    description: "⊛ moon cake"
  },
  {
    codepoint: [0x1F361],
    description: "dango"
  },
  {
    codepoint: [0x1F95F],
    description: "dumpling"
  },
  {
    codepoint: [0x1F960],
    description: "fortune cookie"
  },
  {
    codepoint: [0x1F961],
    description: "takeout box"
  },
  {
    codepoint: [0x1F980],
    description: "crab"
  },
  {
    codepoint: [0x1F99E],
    description: "⊛ lobster"
  },
  {
    codepoint: [0x1F990],
    description: "shrimp"
  },
  {
    codepoint: [0x1F991],
    description: "squid"
  },
  {
    codepoint: [0x1F366],
    description: "soft ice cream"
  },
  {
    codepoint: [0x1F367],
    description: "shaved ice"
  },
  {
    codepoint: [0x1F368],
    description: "ice cream"
  },
  {
    codepoint: [0x1F369],
    description: "doughnut"
  },
  {
    codepoint: [0x1F36A],
    description: "cookie"
  },
  {
    codepoint: [0x1F382],
    description: "birthday cake"
  },
  {
    codepoint: [0x1F370],
    description: "shortcake"
  },
  {
    codepoint: [0x1F9C1],
    description: "⊛ cupcake"
  },
  {
    codepoint: [0x1F967],
    description: "pie"
  },
  {
    codepoint: [0x1F36B],
    description: "chocolate bar"
  },
  {
    codepoint: [0x1F36C],
    description: "candy"
  },
  {
    codepoint: [0x1F36D],
    description: "lollipop"
  },
  {
    codepoint: [0x1F36E],
    description: "custard"
  },
  {
    codepoint: [0x1F36F],
    description: "honey pot"
  },
  {
    codepoint: [0x1F37C],
    description: "baby bottle"
  },
  {
    codepoint: [0x1F95B],
    description: "glass of milk"
  },
  {
    codepoint: [0x2615],
    description: "hot beverage"
  },
  {
    codepoint: [0x1F375],
    description: "teacup without handle"
  },
  {
    codepoint: [0x1F376],
    description: "sake"
  },
  {
    codepoint: [0x1F37E],
    description: "bottle with popping cork"
  },
  {
    codepoint: [0x1F377],
    description: "wine glass"
  },
  {
    codepoint: [0x1F378],
    description: "cocktail glass"
  },
  {
    codepoint: [0x1F379],
    description: "tropical drink"
  },
  {
    codepoint: [0x1F37A],
    description: "beer mug"
  },
  {
    codepoint: [0x1F37B],
    description: "clinking beer mugs"
  },
  {
    codepoint: [0x1F942],
    description: "clinking glasses"
  },
  {
    codepoint: [0x1F943],
    description: "tumbler glass"
  },
  {
    codepoint: [0x1F964],
    description: "cup with straw"
  },
  {
    codepoint: [0x1F962],
    description: "chopsticks"
  },
  {
    codepoint: [0x1F37D],
    description: "fork and knife with plate"
  },
  {
    codepoint: [0x1F374],
    description: "fork and knife"
  },
  {
    codepoint: [0x1F944],
    description: "spoon"
  },
  {
    codepoint: [0x1F52A],
    description: "kitchen knife"
  },
  {
    codepoint: [0x1F3FA],
    description: "amphora"
  },
  {
    codepoint: [0x1F30D],
    description: "globe showing Europe-Africa"
  },
  {
    codepoint: [0x1F30E],
    description: "globe showing Americas"
  },
  {
    codepoint: [0x1F30F],
    description: "globe showing Asia-Australia"
  },
  {
    codepoint: [0x1F310],
    description: "globe with meridians"
  },
  {
    codepoint: [0x1F5FA],
    description: "world map"
  },
  {
    codepoint: [0x1F5FE],
    description: "map of Japan"
  },
  {
    codepoint: [0x1F9ED],
    description: "⊛ compass"
  },
  {
    codepoint: [0x1F3D4],
    description: "snow-capped mountain"
  },
  {
    codepoint: [0x26F0],
    description: "mountain"
  },
  {
    codepoint: [0x1F30B],
    description: "volcano"
  },
  {
    codepoint: [0x1F5FB],
    description: "mount fuji"
  },
  {
    codepoint: [0x1F3D5],
    description: "camping"
  },
  {
    codepoint: [0x1F3D6],
    description: "beach with umbrella"
  },
  {
    codepoint: [0x1F3DC],
    description: "desert"
  },
  {
    codepoint: [0x1F3DD],
    description: "desert island"
  },
  {
    codepoint: [0x1F3DE],
    description: "national park"
  },
  {
    codepoint: [0x1F3DF],
    description: "stadium"
  },
  {
    codepoint: [0x1F3DB],
    description: "classical building"
  },
  {
    codepoint: [0x1F3D7],
    description: "building construction"
  },
  {
    codepoint: [0x1F9F1],
    description: "⊛ brick"
  },
  {
    codepoint: [0x1F3D8],
    description: "houses"
  },
  {
    codepoint: [0x1F3DA],
    description: "derelict house"
  },
  {
    codepoint: [0x1F3E0],
    description: "house"
  },
  {
    codepoint: [0x1F3E1],
    description: "house with garden"
  },
  {
    codepoint: [0x1F3E2],
    description: "office building"
  },
  {
    codepoint: [0x1F3E3],
    description: "Japanese post office"
  },
  {
    codepoint: [0x1F3E4],
    description: "post office"
  },
  {
    codepoint: [0x1F3E5],
    description: "hospital"
  },
  {
    codepoint: [0x1F3E6],
    description: "bank"
  },
  {
    codepoint: [0x1F3E8],
    description: "hotel"
  },
  {
    codepoint: [0x1F3E9],
    description: "love hotel"
  },
  {
    codepoint: [0x1F3EA],
    description: "convenience store"
  },
  {
    codepoint: [0x1F3EB],
    description: "school"
  },
  {
    codepoint: [0x1F3EC],
    description: "department store"
  },
  {
    codepoint: [0x1F3ED],
    description: "factory"
  },
  {
    codepoint: [0x1F3EF],
    description: "Japanese castle"
  },
  {
    codepoint: [0x1F3F0],
    description: "castle"
  },
  {
    codepoint: [0x1F492],
    description: "wedding"
  },
  {
    codepoint: [0x1F5FC],
    description: "Tokyo tower"
  },
  {
    codepoint: [0x1F5FD],
    description: "Statue of Liberty"
  },
  {
    codepoint: [0x26EA],
    description: "church"
  },
  {
    codepoint: [0x1F54C],
    description: "mosque"
  },
  {
    codepoint: [0x1F54D],
    description: "synagogue"
  },
  {
    codepoint: [0x26E9],
    description: "shinto shrine"
  },
  {
    codepoint: [0x1F54B],
    description: "kaaba"
  },
  {
    codepoint: [0x26F2],
    description: "fountain"
  },
  {
    codepoint: [0x26FA],
    description: "tent"
  },
  {
    codepoint: [0x1F301],
    description: "foggy"
  },
  {
    codepoint: [0x1F303],
    description: "night with stars"
  },
  {
    codepoint: [0x1F3D9],
    description: "cityscape"
  },
  {
    codepoint: [0x1F304],
    description: "sunrise over mountains"
  },
  {
    codepoint: [0x1F305],
    description: "sunrise"
  },
  {
    codepoint: [0x1F306],
    description: "cityscape at dusk"
  },
  {
    codepoint: [0x1F307],
    description: "sunset"
  },
  {
    codepoint: [0x1F309],
    description: "bridge at night"
  },
  {
    codepoint: [0x2668],
    description: "hot springs"
  },
  {
    codepoint: [0x1F30C],
    description: "milky way"
  },
  {
    codepoint: [0x1F3A0],
    description: "carousel horse"
  },
  {
    codepoint: [0x1F3A1],
    description: "ferris wheel"
  },
  {
    codepoint: [0x1F3A2],
    description: "roller coaster"
  },
  {
    codepoint: [0x1F488],
    description: "barber pole"
  },
  {
    codepoint: [0x1F3AA],
    description: "circus tent"
  },
  {
    codepoint: [0x1F682],
    description: "locomotive"
  },
  {
    codepoint: [0x1F683],
    description: "railway car"
  },
  {
    codepoint: [0x1F684],
    description: "high-speed train"
  },
  {
    codepoint: [0x1F685],
    description: "bullet train"
  },
  {
    codepoint: [0x1F686],
    description: "train"
  },
  {
    codepoint: [0x1F687],
    description: "metro"
  },
  {
    codepoint: [0x1F688],
    description: "light rail"
  },
  {
    codepoint: [0x1F689],
    description: "station"
  },
  {
    codepoint: [0x1F68A],
    description: "tram"
  },
  {
    codepoint: [0x1F69D],
    description: "monorail"
  },
  {
    codepoint: [0x1F69E],
    description: "mountain railway"
  },
  {
    codepoint: [0x1F68B],
    description: "tram car"
  },
  {
    codepoint: [0x1F68C],
    description: "bus"
  },
  {
    codepoint: [0x1F68D],
    description: "oncoming bus"
  },
  {
    codepoint: [0x1F68E],
    description: "trolleybus"
  },
  {
    codepoint: [0x1F690],
    description: "minibus"
  },
  {
    codepoint: [0x1F691],
    description: "ambulance"
  },
  {
    codepoint: [0x1F692],
    description: "fire engine"
  },
  {
    codepoint: [0x1F693],
    description: "police car"
  },
  {
    codepoint: [0x1F694],
    description: "oncoming police car"
  },
  {
    codepoint: [0x1F695],
    description: "taxi"
  },
  {
    codepoint: [0x1F696],
    description: "oncoming taxi"
  },
  {
    codepoint: [0x1F697],
    description: "automobile"
  },
  {
    codepoint: [0x1F698],
    description: "oncoming automobile"
  },
  {
    codepoint: [0x1F699],
    description: "sport utility vehicle"
  },
  {
    codepoint: [0x1F69A],
    description: "delivery truck"
  },
  {
    codepoint: [0x1F69B],
    description: "articulated lorry"
  },
  {
    codepoint: [0x1F69C],
    description: "tractor"
  },
  {
    codepoint: [0x1F3CE],
    description: "racing car"
  },
  {
    codepoint: [0x1F3CD],
    description: "motorcycle"
  },
  {
    codepoint: [0x1F6F5],
    description: "motor scooter"
  },
  {
    codepoint: [0x1F6B2],
    description: "bicycle"
  },
  {
    codepoint: [0x1F6F4],
    description: "kick scooter"
  },
  {
    codepoint: [0x1F6F9],
    description: "⊛ skateboard"
  },
  {
    codepoint: [0x1F68F],
    description: "bus stop"
  },
  {
    codepoint: [0x1F6E3],
    description: "motorway"
  },
  {
    codepoint: [0x1F6E4],
    description: "railway track"
  },
  {
    codepoint: [0x1F6E2],
    description: "oil drum"
  },
  {
    codepoint: [0x26FD],
    description: "fuel pump"
  },
  {
    codepoint: [0x1F6A8],
    description: "police car light"
  },
  {
    codepoint: [0x1F6A5],
    description: "horizontal traffic light"
  },
  {
    codepoint: [0x1F6A6],
    description: "vertical traffic light"
  },
  {
    codepoint: [0x1F6D1],
    description: "stop sign"
  },
  {
    codepoint: [0x1F6A7],
    description: "construction"
  },
  {
    codepoint: [0x2693],
    description: "anchor"
  },
  {
    codepoint: [0x26F5],
    description: "sailboat"
  },
  {
    codepoint: [0x1F6F6],
    description: "canoe"
  },
  {
    codepoint: [0x1F6A4],
    description: "speedboat"
  },
  {
    codepoint: [0x1F6F3],
    description: "passenger ship"
  },
  {
    codepoint: [0x26F4],
    description: "ferry"
  },
  {
    codepoint: [0x1F6E5],
    description: "motor boat"
  },
  {
    codepoint: [0x1F6A2],
    description: "ship"
  },
  {
    codepoint: [0x2708],
    description: "airplane"
  },
  {
    codepoint: [0x1F6E9],
    description: "small airplane"
  },
  {
    codepoint: [0x1F6EB],
    description: "airplane departure"
  },
  {
    codepoint: [0x1F6EC],
    description: "airplane arrival"
  },
  {
    codepoint: [0x1F4BA],
    description: "seat"
  },
  {
    codepoint: [0x1F681],
    description: "helicopter"
  },
  {
    codepoint: [0x1F69F],
    description: "suspension railway"
  },
  {
    codepoint: [0x1F6A0],
    description: "mountain cableway"
  },
  {
    codepoint: [0x1F6A1],
    description: "aerial tramway"
  },
  {
    codepoint: [0x1F6F0],
    description: "satellite"
  },
  {
    codepoint: [0x1F680],
    description: "rocket"
  },
  {
    codepoint: [0x1F6F8],
    description: "flying saucer"
  },
  {
    codepoint: [0x1F6CE],
    description: "bellhop bell"
  },
  {
    codepoint: [0x1F9F3],
    description: "⊛ luggage"
  },
  {
    codepoint: [0x231B],
    description: "hourglass done"
  },
  {
    codepoint: [0x23F3],
    description: "hourglass not done"
  },
  {
    codepoint: [0x231A],
    description: "watch"
  },
  {
    codepoint: [0x23F0],
    description: "alarm clock"
  },
  {
    codepoint: [0x23F1],
    description: "stopwatch"
  },
  {
    codepoint: [0x23F2],
    description: "timer clock"
  },
  {
    codepoint: [0x1F570],
    description: "mantelpiece clock"
  },
  {
    codepoint: [0x1F55B],
    description: "twelve o’clock"
  },
  {
    codepoint: [0x1F567],
    description: "twelve-thirty"
  },
  {
    codepoint: [0x1F550],
    description: "one o’clock"
  },
  {
    codepoint: [0x1F55C],
    description: "one-thirty"
  },
  {
    codepoint: [0x1F551],
    description: "two o’clock"
  },
  {
    codepoint: [0x1F55D],
    description: "two-thirty"
  },
  {
    codepoint: [0x1F552],
    description: "three o’clock"
  },
  {
    codepoint: [0x1F55E],
    description: "three-thirty"
  },
  {
    codepoint: [0x1F553],
    description: "four o’clock"
  },
  {
    codepoint: [0x1F55F],
    description: "four-thirty"
  },
  {
    codepoint: [0x1F554],
    description: "five o’clock"
  },
  {
    codepoint: [0x1F560],
    description: "five-thirty"
  },
  {
    codepoint: [0x1F555],
    description: "six o’clock"
  },
  {
    codepoint: [0x1F561],
    description: "six-thirty"
  },
  {
    codepoint: [0x1F556],
    description: "seven o’clock"
  },
  {
    codepoint: [0x1F562],
    description: "seven-thirty"
  },
  {
    codepoint: [0x1F557],
    description: "eight o’clock"
  },
  {
    codepoint: [0x1F563],
    description: "eight-thirty"
  },
  {
    codepoint: [0x1F558],
    description: "nine o’clock"
  },
  {
    codepoint: [0x1F564],
    description: "nine-thirty"
  },
  {
    codepoint: [0x1F559],
    description: "ten o’clock"
  },
  {
    codepoint: [0x1F565],
    description: "ten-thirty"
  },
  {
    codepoint: [0x1F55A],
    description: "eleven o’clock"
  },
  {
    codepoint: [0x1F566],
    description: "eleven-thirty"
  },
  {
    codepoint: [0x1F311],
    description: "new moon"
  },
  {
    codepoint: [0x1F312],
    description: "waxing crescent moon"
  },
  {
    codepoint: [0x1F313],
    description: "first quarter moon"
  },
  {
    codepoint: [0x1F314],
    description: "waxing gibbous moon"
  },
  {
    codepoint: [0x1F315],
    description: "full moon"
  },
  {
    codepoint: [0x1F316],
    description: "waning gibbous moon"
  },
  {
    codepoint: [0x1F317],
    description: "last quarter moon"
  },
  {
    codepoint: [0x1F318],
    description: "waning crescent moon"
  },
  {
    codepoint: [0x1F319],
    description: "crescent moon"
  },
  {
    codepoint: [0x1F31A],
    description: "new moon face"
  },
  {
    codepoint: [0x1F31B],
    description: "first quarter moon face"
  },
  {
    codepoint: [0x1F31C],
    description: "last quarter moon face"
  },
  {
    codepoint: [0x1F321],
    description: "thermometer"
  },
  {
    codepoint: [0x2600],
    description: "sun"
  },
  {
    codepoint: [0x1F31D],
    description: "full moon face"
  },
  {
    codepoint: [0x1F31E],
    description: "sun with face"
  },
  {
    codepoint: [0x2B50],
    description: "star"
  },
  {
    codepoint: [0x1F31F],
    description: "glowing star"
  },
  {
    codepoint: [0x1F320],
    description: "shooting star"
  },
  {
    codepoint: [0x2601],
    description: "cloud"
  },
  {
    codepoint: [0x26C5],
    description: "sun behind cloud"
  },
  {
    codepoint: [0x26C8],
    description: "cloud with lightning and rain"
  },
  {
    codepoint: [0x1F324],
    description: "sun behind small cloud"
  },
  {
    codepoint: [0x1F325],
    description: "sun behind large cloud"
  },
  {
    codepoint: [0x1F326],
    description: "sun behind rain cloud"
  },
  {
    codepoint: [0x1F327],
    description: "cloud with rain"
  },
  {
    codepoint: [0x1F328],
    description: "cloud with snow"
  },
  {
    codepoint: [0x1F329],
    description: "cloud with lightning"
  },
  {
    codepoint: [0x1F32A],
    description: "tornado"
  },
  {
    codepoint: [0x1F32B],
    description: "fog"
  },
  {
    codepoint: [0x1F32C],
    description: "wind face"
  },
  {
    codepoint: [0x1F300],
    description: "cyclone"
  },
  {
    codepoint: [0x1F308],
    description: "rainbow"
  },
  {
    codepoint: [0x1F302],
    description: "closed umbrella"
  },
  {
    codepoint: [0x2602],
    description: "umbrella"
  },
  {
    codepoint: [0x2614],
    description: "umbrella with rain drops"
  },
  {
    codepoint: [0x26F1],
    description: "umbrella on ground"
  },
  {
    codepoint: [0x26A1],
    description: "high voltage"
  },
  {
    codepoint: [0x2744],
    description: "snowflake"
  },
  {
    codepoint: [0x2603],
    description: "snowman"
  },
  {
    codepoint: [0x26C4],
    description: "snowman without snow"
  },
  {
    codepoint: [0x2604],
    description: "comet"
  },
  {
    codepoint: [0x1F525],
    description: "fire"
  },
  {
    codepoint: [0x1F4A7],
    description: "droplet"
  },
  {
    codepoint: [0x1F30A],
    description: "water wave"
  },
  {
    codepoint: [0x1F383],
    description: "jack-o-lantern"
  },
  {
    codepoint: [0x1F384],
    description: "Christmas tree"
  },
  {
    codepoint: [0x1F386],
    description: "fireworks"
  },
  {
    codepoint: [0x1F387],
    description: "sparkler"
  },
  {
    codepoint: [0x1F9E8],
    description: "⊛ firecracker"
  },
  {
    codepoint: [0x2728],
    description: "sparkles"
  },
  {
    codepoint: [0x1F388],
    description: "balloon"
  },
  {
    codepoint: [0x1F389],
    description: "party popper"
  },
  {
    codepoint: [0x1F38A],
    description: "confetti ball"
  },
  {
    codepoint: [0x1F38B],
    description: "tanabata tree"
  },
  {
    codepoint: [0x1F38D],
    description: "pine decoration"
  },
  {
    codepoint: [0x1F38E],
    description: "Japanese dolls"
  },
  {
    codepoint: [0x1F38F],
    description: "carp streamer"
  },
  {
    codepoint: [0x1F390],
    description: "wind chime"
  },
  {
    codepoint: [0x1F391],
    description: "moon viewing ceremony"
  },
  {
    codepoint: [0x1F9E7],
    description: "⊛ red envelope"
  },
  {
    codepoint: [0x1F380],
    description: "ribbon"
  },
  {
    codepoint: [0x1F381],
    description: "wrapped gift"
  },
  {
    codepoint: [0x1F397],
    description: "reminder ribbon"
  },
  {
    codepoint: [0x1F39F],
    description: "admission tickets"
  },
  {
    codepoint: [0x1F3AB],
    description: "ticket"
  },
  {
    codepoint: [0x1F396],
    description: "military medal"
  },
  {
    codepoint: [0x1F3C6],
    description: "trophy"
  },
  {
    codepoint: [0x1F3C5],
    description: "sports medal"
  },
  {
    codepoint: [0x1F947],
    description: "1st place medal"
  },
  {
    codepoint: [0x1F948],
    description: "2nd place medal"
  },
  {
    codepoint: [0x1F949],
    description: "3rd place medal"
  },
  {
    codepoint: [0x26BD],
    description: "soccer ball"
  },
  {
    codepoint: [0x26BE],
    description: "baseball"
  },
  {
    codepoint: [0x1F94E],
    description: "⊛ softball"
  },
  {
    codepoint: [0x1F3C0],
    description: "basketball"
  },
  {
    codepoint: [0x1F3D0],
    description: "volleyball"
  },
  {
    codepoint: [0x1F3C8],
    description: "american football"
  },
  {
    codepoint: [0x1F3C9],
    description: "rugby football"
  },
  {
    codepoint: [0x1F3BE],
    description: "tennis"
  },
  {
    codepoint: [0x1F94F],
    description: "⊛ flying disc"
  },
  {
    codepoint: [0x1F3B3],
    description: "bowling"
  },
  {
    codepoint: [0x1F3CF],
    description: "cricket game"
  },
  {
    codepoint: [0x1F3D1],
    description: "field hockey"
  },
  {
    codepoint: [0x1F3D2],
    description: "ice hockey"
  },
  {
    codepoint: [0x1F94D],
    description: "⊛ lacrosse"
  },
  {
    codepoint: [0x1F3D3],
    description: "ping pong"
  },
  {
    codepoint: [0x1F3F8],
    description: "badminton"
  },
  {
    codepoint: [0x1F94A],
    description: "boxing glove"
  },
  {
    codepoint: [0x1F94B],
    description: "martial arts uniform"
  },
  {
    codepoint: [0x1F945],
    description: "goal net"
  },
  {
    codepoint: [0x26F3],
    description: "flag in hole"
  },
  {
    codepoint: [0x26F8],
    description: "ice skate"
  },
  {
    codepoint: [0x1F3A3],
    description: "fishing pole"
  },
  {
    codepoint: [0x1F3BD],
    description: "running shirt"
  },
  {
    codepoint: [0x1F3BF],
    description: "skis"
  },
  {
    codepoint: [0x1F6F7],
    description: "sled"
  },
  {
    codepoint: [0x1F94C],
    description: "curling stone"
  },
  {
    codepoint: [0x1F3AF],
    description: "direct hit"
  },
  {
    codepoint: [0x1F3B1],
    description: "pool 8 ball"
  },
  {
    codepoint: [0x1F52E],
    description: "crystal ball"
  },
  {
    codepoint: [0x1F9FF],
    description: "⊛ nazar amulet"
  },
  {
    codepoint: [0x1F3AE],
    description: "video game"
  },
  {
    codepoint: [0x1F579],
    description: "joystick"
  },
  {
    codepoint: [0x1F3B0],
    description: "slot machine"
  },
  {
    codepoint: [0x1F3B2],
    description: "game die"
  },
  {
    codepoint: [0x1F9E9],
    description: "⊛ jigsaw"
  },
  {
    codepoint: [0x1F9F8],
    description: "⊛ teddy bear"
  },
  {
    codepoint: [0x2660],
    description: "spade suit"
  },
  {
    codepoint: [0x2665],
    description: "heart suit"
  },
  {
    codepoint: [0x2666],
    description: "diamond suit"
  },
  {
    codepoint: [0x2663],
    description: "club suit"
  },
  {
    codepoint: [0x265F],
    description: "⊛ chess pawn"
  },
  {
    codepoint: [0x1F0CF],
    description: "joker"
  },
  {
    codepoint: [0x1F004],
    description: "mahjong red dragon"
  },
  {
    codepoint: [0x1F3B4],
    description: "flower playing cards"
  },
  {
    codepoint: [0x1F3AD],
    description: "performing arts"
  },
  {
    codepoint: [0x1F5BC],
    description: "framed picture"
  },
  {
    codepoint: [0x1F3A8],
    description: "artist palette"
  },
  {
    codepoint: [0x1F9F5],
    description: "⊛ thread"
  },
  {
    codepoint: [0x1F9F6],
    description: "⊛ yarn"
  },
  {
    codepoint: [0x1F453],
    description: "glasses"
  },
  {
    codepoint: [0x1F576],
    description: "sunglasses"
  },
  {
    codepoint: [0x1F97D],
    description: "⊛ goggles"
  },
  {
    codepoint: [0x1F97C],
    description: "⊛ lab coat"
  },
  {
    codepoint: [0x1F454],
    description: "necktie"
  },
  {
    codepoint: [0x1F455],
    description: "t-shirt"
  },
  {
    codepoint: [0x1F456],
    description: "jeans"
  },
  {
    codepoint: [0x1F9E3],
    description: "scarf"
  },
  {
    codepoint: [0x1F9E4],
    description: "gloves"
  },
  {
    codepoint: [0x1F9E5],
    description: "coat"
  },
  {
    codepoint: [0x1F9E6],
    description: "socks"
  },
  {
    codepoint: [0x1F457],
    description: "dress"
  },
  {
    codepoint: [0x1F458],
    description: "kimono"
  },
  {
    codepoint: [0x1F459],
    description: "bikini"
  },
  {
    codepoint: [0x1F45A],
    description: "woman’s clothes"
  },
  {
    codepoint: [0x1F45B],
    description: "purse"
  },
  {
    codepoint: [0x1F45C],
    description: "handbag"
  },
  {
    codepoint: [0x1F45D],
    description: "clutch bag"
  },
  {
    codepoint: [0x1F6CD],
    description: "shopping bags"
  },
  {
    codepoint: [0x1F392],
    description: "backpack"
  },
  {
    codepoint: [0x1F45E],
    description: "man’s shoe"
  },
  {
    codepoint: [0x1F45F],
    description: "running shoe"
  },
  {
    codepoint: [0x1F97E],
    description: "⊛ hiking boot"
  },
  {
    codepoint: [0x1F97F],
    description: "⊛ flat shoe"
  },
  {
    codepoint: [0x1F460],
    description: "high-heeled shoe"
  },
  {
    codepoint: [0x1F461],
    description: "woman’s sandal"
  },
  {
    codepoint: [0x1F462],
    description: "woman’s boot"
  },
  {
    codepoint: [0x1F451],
    description: "crown"
  },
  {
    codepoint: [0x1F452],
    description: "woman’s hat"
  },
  {
    codepoint: [0x1F3A9],
    description: "top hat"
  },
  {
    codepoint: [0x1F393],
    description: "graduation cap"
  },
  {
    codepoint: [0x1F9E2],
    description: "billed cap"
  },
  {
    codepoint: [0x26D1],
    description: "rescue worker’s helmet"
  },
  {
    codepoint: [0x1F4FF],
    description: "prayer beads"
  },
  {
    codepoint: [0x1F484],
    description: "lipstick"
  },
  {
    codepoint: [0x1F48D],
    description: "ring"
  },
  {
    codepoint: [0x1F48E],
    description: "gem stone"
  },
  {
    codepoint: [0x1F507],
    description: "muted speaker"
  },
  {
    codepoint: [0x1F508],
    description: "speaker low volume"
  },
  {
    codepoint: [0x1F509],
    description: "speaker medium volume"
  },
  {
    codepoint: [0x1F50A],
    description: "speaker high volume"
  },
  {
    codepoint: [0x1F4E2],
    description: "loudspeaker"
  },
  {
    codepoint: [0x1F4E3],
    description: "megaphone"
  },
  {
    codepoint: [0x1F4EF],
    description: "postal horn"
  },
  {
    codepoint: [0x1F514],
    description: "bell"
  },
  {
    codepoint: [0x1F515],
    description: "bell with slash"
  },
  {
    codepoint: [0x1F3BC],
    description: "musical score"
  },
  {
    codepoint: [0x1F3B5],
    description: "musical note"
  },
  {
    codepoint: [0x1F3B6],
    description: "musical notes"
  },
  {
    codepoint: [0x1F399],
    description: "studio microphone"
  },
  {
    codepoint: [0x1F39A],
    description: "level slider"
  },
  {
    codepoint: [0x1F39B],
    description: "control knobs"
  },
  {
    codepoint: [0x1F3A4],
    description: "microphone"
  },
  {
    codepoint: [0x1F3A7],
    description: "headphone"
  },
  {
    codepoint: [0x1F4FB],
    description: "radio"
  },
  {
    codepoint: [0x1F3B7],
    description: "saxophone"
  },
  {
    codepoint: [0x1F3B8],
    description: "guitar"
  },
  {
    codepoint: [0x1F3B9],
    description: "musical keyboard"
  },
  {
    codepoint: [0x1F3BA],
    description: "trumpet"
  },
  {
    codepoint: [0x1F3BB],
    description: "violin"
  },
  {
    codepoint: [0x1F941],
    description: "drum"
  },
  {
    codepoint: [0x1F4F1],
    description: "mobile phone"
  },
  {
    codepoint: [0x1F4F2],
    description: "mobile phone with arrow"
  },
  {
    codepoint: [0x260E],
    description: "telephone"
  },
  {
    codepoint: [0x1F4DE],
    description: "telephone receiver"
  },
  {
    codepoint: [0x1F4DF],
    description: "pager"
  },
  {
    codepoint: [0x1F4E0],
    description: "fax machine"
  },
  {
    codepoint: [0x1F50B],
    description: "battery"
  },
  {
    codepoint: [0x1F50C],
    description: "electric plug"
  },
  {
    codepoint: [0x1F4BB],
    description: "laptop computer"
  },
  {
    codepoint: [0x1F5A5],
    description: "desktop computer"
  },
  {
    codepoint: [0x1F5A8],
    description: "printer"
  },
  {
    codepoint: [0x2328],
    description: "keyboard"
  },
  {
    codepoint: [0x1F5B1],
    description: "computer mouse"
  },
  {
    codepoint: [0x1F5B2],
    description: "trackball"
  },
  {
    codepoint: [0x1F4BD],
    description: "computer disk"
  },
  {
    codepoint: [0x1F4BE],
    description: "floppy disk"
  },
  {
    codepoint: [0x1F4BF],
    description: "optical disk"
  },
  {
    codepoint: [0x1F4C0],
    description: "dvd"
  },
  {
    codepoint: [0x1F9EE],
    description: "⊛ abacus"
  },
  {
    codepoint: [0x1F3A5],
    description: "movie camera"
  },
  {
    codepoint: [0x1F39E],
    description: "film frames"
  },
  {
    codepoint: [0x1F4FD],
    description: "film projector"
  },
  {
    codepoint: [0x1F3AC],
    description: "clapper board"
  },
  {
    codepoint: [0x1F4FA],
    description: "television"
  },
  {
    codepoint: [0x1F4F7],
    description: "camera"
  },
  {
    codepoint: [0x1F4F8],
    description: "camera with flash"
  },
  {
    codepoint: [0x1F4F9],
    description: "video camera"
  },
  {
    codepoint: [0x1F4FC],
    description: "videocassette"
  },
  {
    codepoint: [0x1F50D],
    description: "magnifying glass tilted left"
  },
  {
    codepoint: [0x1F50E],
    description: "magnifying glass tilted right"
  },
  {
    codepoint: [0x1F56F],
    description: "candle"
  },
  {
    codepoint: [0x1F4A1],
    description: "light bulb"
  },
  {
    codepoint: [0x1F526],
    description: "flashlight"
  },
  {
    codepoint: [0x1F3EE],
    description: "red paper lantern"
  },
  {
    codepoint: [0x1F4D4],
    description: "notebook with decorative cover"
  },
  {
    codepoint: [0x1F4D5],
    description: "closed book"
  },
  {
    codepoint: [0x1F4D6],
    description: "open book"
  },
  {
    codepoint: [0x1F4D7],
    description: "green book"
  },
  {
    codepoint: [0x1F4D8],
    description: "blue book"
  },
  {
    codepoint: [0x1F4D9],
    description: "orange book"
  },
  {
    codepoint: [0x1F4DA],
    description: "books"
  },
  {
    codepoint: [0x1F4D3],
    description: "notebook"
  },
  {
    codepoint: [0x1F4D2],
    description: "ledger"
  },
  {
    codepoint: [0x1F4C3],
    description: "page with curl"
  },
  {
    codepoint: [0x1F4DC],
    description: "scroll"
  },
  {
    codepoint: [0x1F4C4],
    description: "page facing up"
  },
  {
    codepoint: [0x1F4F0],
    description: "newspaper"
  },
  {
    codepoint: [0x1F5DE],
    description: "rolled-up newspaper"
  },
  {
    codepoint: [0x1F4D1],
    description: "bookmark tabs"
  },
  {
    codepoint: [0x1F516],
    description: "bookmark"
  },
  {
    codepoint: [0x1F3F7],
    description: "label"
  },
  {
    codepoint: [0x1F4B0],
    description: "money bag"
  },
  {
    codepoint: [0x1F4B4],
    description: "yen banknote"
  },
  {
    codepoint: [0x1F4B5],
    description: "dollar banknote"
  },
  {
    codepoint: [0x1F4B6],
    description: "euro banknote"
  },
  {
    codepoint: [0x1F4B7],
    description: "pound banknote"
  },
  {
    codepoint: [0x1F4B8],
    description: "money with wings"
  },
  {
    codepoint: [0x1F4B3],
    description: "credit card"
  },
  {
    codepoint: [0x1F9FE],
    description: "⊛ receipt"
  },
  {
    codepoint: [0x1F4B9],
    description: "chart increasing with yen"
  },
  {
    codepoint: [0x1F4B1],
    description: "currency exchange"
  },
  {
    codepoint: [0x1F4B2],
    description: "heavy dollar sign"
  },
  {
    codepoint: [0x2709],
    description: "envelope"
  },
  {
    codepoint: [0x1F4E7],
    description: "e-mail"
  },
  {
    codepoint: [0x1F4E8],
    description: "incoming envelope"
  },
  {
    codepoint: [0x1F4E9],
    description: "envelope with arrow"
  },
  {
    codepoint: [0x1F4E4],
    description: "outbox tray"
  },
  {
    codepoint: [0x1F4E5],
    description: "inbox tray"
  },
  {
    codepoint: [0x1F4E6],
    description: "package"
  },
  {
    codepoint: [0x1F4EB],
    description: "closed mailbox with raised flag"
  },
  {
    codepoint: [0x1F4EA],
    description: "closed mailbox with lowered flag"
  },
  {
    codepoint: [0x1F4EC],
    description: "open mailbox with raised flag"
  },
  {
    codepoint: [0x1F4ED],
    description: "open mailbox with lowered flag"
  },
  {
    codepoint: [0x1F4EE],
    description: "postbox"
  },
  {
    codepoint: [0x1F5F3],
    description: "ballot box with ballot"
  },
  {
    codepoint: [0x270F],
    description: "pencil"
  },
  {
    codepoint: [0x2712],
    description: "black nib"
  },
  {
    codepoint: [0x1F58B],
    description: "fountain pen"
  },
  {
    codepoint: [0x1F58A],
    description: "pen"
  },
  {
    codepoint: [0x1F58C],
    description: "paintbrush"
  },
  {
    codepoint: [0x1F58D],
    description: "crayon"
  },
  {
    codepoint: [0x1F4DD],
    description: "memo"
  },
  {
    codepoint: [0x1F4BC],
    description: "briefcase"
  },
  {
    codepoint: [0x1F4C1],
    description: "file folder"
  },
  {
    codepoint: [0x1F4C2],
    description: "open file folder"
  },
  {
    codepoint: [0x1F5C2],
    description: "card index dividers"
  },
  {
    codepoint: [0x1F4C5],
    description: "calendar"
  },
  {
    codepoint: [0x1F4C6],
    description: "tear-off calendar"
  },
  {
    codepoint: [0x1F5D2],
    description: "spiral notepad"
  },
  {
    codepoint: [0x1F5D3],
    description: "spiral calendar"
  },
  {
    codepoint: [0x1F4C7],
    description: "card index"
  },
  {
    codepoint: [0x1F4C8],
    description: "chart increasing"
  },
  {
    codepoint: [0x1F4C9],
    description: "chart decreasing"
  },
  {
    codepoint: [0x1F4CA],
    description: "bar chart"
  },
  {
    codepoint: [0x1F4CB],
    description: "clipboard"
  },
  {
    codepoint: [0x1F4CC],
    description: "pushpin"
  },
  {
    codepoint: [0x1F4CD],
    description: "round pushpin"
  },
  {
    codepoint: [0x1F4CE],
    description: "paperclip"
  },
  {
    codepoint: [0x1F587],
    description: "linked paperclips"
  },
  {
    codepoint: [0x1F4CF],
    description: "straight ruler"
  },
  {
    codepoint: [0x1F4D0],
    description: "triangular ruler"
  },
  {
    codepoint: [0x2702],
    description: "scissors"
  },
  {
    codepoint: [0x1F5C3],
    description: "card file box"
  },
  {
    codepoint: [0x1F5C4],
    description: "file cabinet"
  },
  {
    codepoint: [0x1F5D1],
    description: "wastebasket"
  },
  {
    codepoint: [0x1F512],
    description: "locked"
  },
  {
    codepoint: [0x1F513],
    description: "unlocked"
  },
  {
    codepoint: [0x1F50F],
    description: "locked with pen"
  },
  {
    codepoint: [0x1F510],
    description: "locked with key"
  },
  {
    codepoint: [0x1F511],
    description: "key"
  },
  {
    codepoint: [0x1F5DD],
    description: "old key"
  },
  {
    codepoint: [0x1F528],
    description: "hammer"
  },
  {
    codepoint: [0x26CF],
    description: "pick"
  },
  {
    codepoint: [0x2692],
    description: "hammer and pick"
  },
  {
    codepoint: [0x1F6E0],
    description: "hammer and wrench"
  },
  {
    codepoint: [0x1F5E1],
    description: "dagger"
  },
  {
    codepoint: [0x2694],
    description: "crossed swords"
  },
  {
    codepoint: [0x1F52B],
    description: "pistol"
  },
  {
    codepoint: [0x1F3F9],
    description: "bow and arrow"
  },
  {
    codepoint: [0x1F6E1],
    description: "shield"
  },
  {
    codepoint: [0x1F527],
    description: "wrench"
  },
  {
    codepoint: [0x1F529],
    description: "nut and bolt"
  },
  {
    codepoint: [0x2699],
    description: "gear"
  },
  {
    codepoint: [0x1F5DC],
    description: "clamp"
  },
  {
    codepoint: [0x2696],
    description: "balance scale"
  },
  {
    codepoint: [0x1F517],
    description: "link"
  },
  {
    codepoint: [0x26D3],
    description: "chains"
  },
  {
    codepoint: [0x1F9F0],
    description: "⊛ toolbox"
  },
  {
    codepoint: [0x1F9F2],
    description: "⊛ magnet"
  },
  {
    codepoint: [0x2697],
    description: "alembic"
  },
  {
    codepoint: [0x1F9EA],
    description: "⊛ test tube"
  },
  {
    codepoint: [0x1F9EB],
    description: "⊛ petri dish"
  },
  {
    codepoint: [0x1F9EC],
    description: "⊛ dna"
  },
  {
    codepoint: [0x1F52C],
    description: "microscope"
  },
  {
    codepoint: [0x1F52D],
    description: "telescope"
  },
  {
    codepoint: [0x1F4E1],
    description: "satellite antenna"
  },
  {
    codepoint: [0x1F489],
    description: "syringe"
  },
  {
    codepoint: [0x1F48A],
    description: "pill"
  },
  {
    codepoint: [0x1F6AA],
    description: "door"
  },
  {
    codepoint: [0x1F6CF],
    description: "bed"
  },
  {
    codepoint: [0x1F6CB],
    description: "couch and lamp"
  },
  {
    codepoint: [0x1F6BD],
    description: "toilet"
  },
  {
    codepoint: [0x1F6BF],
    description: "shower"
  },
  {
    codepoint: [0x1F6C1],
    description: "bathtub"
  },
  {
    codepoint: [0x1F9F4],
    description: "⊛ lotion bottle"
  },
  {
    codepoint: [0x1F9F7],
    description: "⊛ safety pin"
  },
  {
    codepoint: [0x1F9F9],
    description: "⊛ broom"
  },
  {
    codepoint: [0x1F9FA],
    description: "⊛ basket"
  },
  {
    codepoint: [0x1F9FB],
    description: "⊛ roll of paper"
  },
  {
    codepoint: [0x1F9FC],
    description: "⊛ soap"
  },
  {
    codepoint: [0x1F9FD],
    description: "⊛ sponge"
  },
  {
    codepoint: [0x1F9EF],
    description: "⊛ fire extinguisher"
  },
  {
    codepoint: [0x1F6D2],
    description: "shopping cart"
  },
  {
    codepoint: [0x1F6AC],
    description: "cigarette"
  },
  {
    codepoint: [0x26B0],
    description: "coffin"
  },
  {
    codepoint: [0x26B1],
    description: "funeral urn"
  },
  {
    codepoint: [0x1F5FF],
    description: "moai"
  },
  {
    codepoint: [0x1F3E7],
    description: "ATM sign"
  },
  {
    codepoint: [0x1F6AE],
    description: "litter in bin sign"
  },
  {
    codepoint: [0x1F6B0],
    description: "potable water"
  },
  {
    codepoint: [0x267F],
    description: "wheelchair symbol"
  },
  {
    codepoint: [0x1F6B9],
    description: "men’s room"
  },
  {
    codepoint: [0x1F6BA],
    description: "women’s room"
  },
  {
    codepoint: [0x1F6BB],
    description: "restroom"
  },
  {
    codepoint: [0x1F6BC],
    description: "baby symbol"
  },
  {
    codepoint: [0x1F6BE],
    description: "water closet"
  },
  {
    codepoint: [0x1F6C2],
    description: "passport control"
  },
  {
    codepoint: [0x1F6C3],
    description: "customs"
  },
  {
    codepoint: [0x1F6C4],
    description: "baggage claim"
  },
  {
    codepoint: [0x1F6C5],
    description: "left luggage"
  },
  {
    codepoint: [0x26A0],
    description: "warning"
  },
  {
    codepoint: [0x1F6B8],
    description: "children crossing"
  },
  {
    codepoint: [0x26D4],
    description: "no entry"
  },
  {
    codepoint: [0x1F6AB],
    description: "prohibited"
  },
  {
    codepoint: [0x1F6B3],
    description: "no bicycles"
  },
  {
    codepoint: [0x1F6AD],
    description: "no smoking"
  },
  {
    codepoint: [0x1F6AF],
    description: "no littering"
  },
  {
    codepoint: [0x1F6B1],
    description: "non-potable water"
  },
  {
    codepoint: [0x1F6B7],
    description: "no pedestrians"
  },
  {
    codepoint: [0x1F4F5],
    description: "no mobile phones"
  },
  {
    codepoint: [0x1F51E],
    description: "no one under eighteen"
  },
  {
    codepoint: [0x2622],
    description: "radioactive"
  },
  {
    codepoint: [0x2623],
    description: "biohazard"
  },
  {
    codepoint: [0x2B06],
    description: "up arrow"
  },
  {
    codepoint: [0x2197],
    description: "up-right arrow"
  },
  {
    codepoint: [0x27A1],
    description: "right arrow"
  },
  {
    codepoint: [0x2198],
    description: "down-right arrow"
  },
  {
    codepoint: [0x2B07],
    description: "down arrow"
  },
  {
    codepoint: [0x2199],
    description: "down-left arrow"
  },
  {
    codepoint: [0x2B05],
    description: "left arrow"
  },
  {
    codepoint: [0x2196],
    description: "up-left arrow"
  },
  {
    codepoint: [0x2195],
    description: "up-down arrow"
  },
  {
    codepoint: [0x2194],
    description: "left-right arrow"
  },
  {
    codepoint: [0x21A9],
    description: "right arrow curving left"
  },
  {
    codepoint: [0x21AA],
    description: "left arrow curving right"
  },
  {
    codepoint: [0x2934],
    description: "right arrow curving up"
  },
  {
    codepoint: [0x2935],
    description: "right arrow curving down"
  },
  {
    codepoint: [0x1F503],
    description: "clockwise vertical arrows"
  },
  {
    codepoint: [0x1F504],
    description: "counterclockwise arrows button"
  },
  {
    codepoint: [0x1F519],
    description: "BACK arrow"
  },
  {
    codepoint: [0x1F51A],
    description: "END arrow"
  },
  {
    codepoint: [0x1F51B],
    description: "ON! arrow"
  },
  {
    codepoint: [0x1F51C],
    description: "SOON arrow"
  },
  {
    codepoint: [0x1F51D],
    description: "TOP arrow"
  },
  {
    codepoint: [0x1F6D0],
    description: "place of worship"
  },
  {
    codepoint: [0x269B],
    description: "atom symbol"
  },
  {
    codepoint: [0x1F549],
    description: "om"
  },
  {
    codepoint: [0x2721],
    description: "star of David"
  },
  {
    codepoint: [0x2638],
    description: "wheel of dharma"
  },
  {
    codepoint: [0x262F],
    description: "yin yang"
  },
  {
    codepoint: [0x271D],
    description: "latin cross"
  },
  {
    codepoint: [0x2626],
    description: "orthodox cross"
  },
  {
    codepoint: [0x262A],
    description: "star and crescent"
  },
  {
    codepoint: [0x262E],
    description: "peace symbol"
  },
  {
    codepoint: [0x1F54E],
    description: "menorah"
  },
  {
    codepoint: [0x1F52F],
    description: "dotted six-pointed star"
  },
  {
    codepoint: [0x2648],
    description: "Aries"
  },
  {
    codepoint: [0x2649],
    description: "Taurus"
  },
  {
    codepoint: [0x264A],
    description: "Gemini"
  },
  {
    codepoint: [0x264B],
    description: "Cancer"
  },
  {
    codepoint: [0x264C],
    description: "Leo"
  },
  {
    codepoint: [0x264D],
    description: "Virgo"
  },
  {
    codepoint: [0x264E],
    description: "Libra"
  },
  {
    codepoint: [0x264F],
    description: "Scorpio"
  },
  {
    codepoint: [0x2650],
    description: "Sagittarius"
  },
  {
    codepoint: [0x2651],
    description: "Capricorn"
  },
  {
    codepoint: [0x2652],
    description: "Aquarius"
  },
  {
    codepoint: [0x2653],
    description: "Pisces"
  },
  {
    codepoint: [0x26CE],
    description: "Ophiuchus"
  },
  {
    codepoint: [0x1F500],
    description: "shuffle tracks button"
  },
  {
    codepoint: [0x1F501],
    description: "repeat button"
  },
  {
    codepoint: [0x1F502],
    description: "repeat single button"
  },
  {
    codepoint: [0x25B6],
    description: "play button"
  },
  {
    codepoint: [0x23E9],
    description: "fast-forward button"
  },
  {
    codepoint: [0x23ED],
    description: "next track button"
  },
  {
    codepoint: [0x23EF],
    description: "play or pause button"
  },
  {
    codepoint: [0x25C0],
    description: "reverse button"
  },
  {
    codepoint: [0x23EA],
    description: "fast reverse button"
  },
  {
    codepoint: [0x23EE],
    description: "last track button"
  },
  {
    codepoint: [0x1F53C],
    description: "upwards button"
  },
  {
    codepoint: [0x23EB],
    description: "fast up button"
  },
  {
    codepoint: [0x1F53D],
    description: "downwards button"
  },
  {
    codepoint: [0x23EC],
    description: "fast down button"
  },
  {
    codepoint: [0x23F8],
    description: "pause button"
  },
  {
    codepoint: [0x23F9],
    description: "stop button"
  },
  {
    codepoint: [0x23FA],
    description: "record button"
  },
  {
    codepoint: [0x23CF],
    description: "eject button"
  },
  {
    codepoint: [0x1F3A6],
    description: "cinema"
  },
  {
    codepoint: [0x1F505],
    description: "dim button"
  },
  {
    codepoint: [0x1F506],
    description: "bright button"
  },
  {
    codepoint: [0x1F4F6],
    description: "antenna bars"
  },
  {
    codepoint: [0x1F4F3],
    description: "vibration mode"
  },
  {
    codepoint: [0x1F4F4],
    description: "mobile phone off"
  },
  {
    codepoint: [0x2695],
    description: "medical symbol"
  },
  {
    codepoint: [0x267E],
    description: "⊛ infinity"
  },
  {
    codepoint: [0x267B],
    description: "recycling symbol"
  },
  {
    codepoint: [0x269C],
    description: "fleur-de-lis"
  },
  {
    codepoint: [0x1F531],
    description: "trident emblem"
  },
  {
    codepoint: [0x1F4DB],
    description: "name badge"
  },
  {
    codepoint: [0x1F530],
    description: "Japanese symbol for beginner"
  },
  {
    codepoint: [0x2B55],
    description: "heavy large circle"
  },
  {
    codepoint: [0x2705],
    description: "white heavy check mark"
  },
  {
    codepoint: [0x2611],
    description: "ballot box with check"
  },
  {
    codepoint: [0x2714],
    description: "heavy check mark"
  },
  {
    codepoint: [0x2716],
    description: "heavy multiplication x"
  },
  {
    codepoint: [0x274C],
    description: "cross mark"
  },
  {
    codepoint: [0x274E],
    description: "cross mark button"
  },
  {
    codepoint: [0x2795],
    description: "heavy plus sign"
  },
  {
    codepoint: [0x2796],
    description: "heavy minus sign"
  },
  {
    codepoint: [0x2797],
    description: "heavy division sign"
  },
  {
    codepoint: [0x27B0],
    description: "curly loop"
  },
  {
    codepoint: [0x27BF],
    description: "double curly loop"
  },
  {
    codepoint: [0x303D],
    description: "part alternation mark"
  },
  {
    codepoint: [0x2733],
    description: "eight-spoked asterisk"
  },
  {
    codepoint: [0x2734],
    description: "eight-pointed star"
  },
  {
    codepoint: [0x2747],
    description: "sparkle"
  },
  {
    codepoint: [0x203C],
    description: "double exclamation mark"
  },
  {
    codepoint: [0x2049],
    description: "exclamation question mark"
  },
  {
    codepoint: [0x2753],
    description: "question mark"
  },
  {
    codepoint: [0x2754],
    description: "white question mark"
  },
  {
    codepoint: [0x2755],
    description: "white exclamation mark"
  },
  {
    codepoint: [0x2757],
    description: "exclamation mark"
  },
  {
    codepoint: [0x3030],
    description: "wavy dash"
  },
  {
    codepoint: [0x00A9],
    description: "copyright"
  },
  {
    codepoint: [0x00AE],
    description: "registered"
  },
  {
    codepoint: [0x2122],
    description: "trade mark"
  },
  {
    codepoint: [0x0023, 0xFE0F, 0x20E3],
    description: "keycap: #"
  },
  {
    codepoint: [0x002A, 0xFE0F, 0x20E3],
    description: "keycap: *"
  },
  {
    codepoint: [0x0030, 0xFE0F, 0x20E3],
    description: "keycap: 0"
  },
  {
    codepoint: [0x0031, 0xFE0F, 0x20E3],
    description: "keycap: 1"
  },
  {
    codepoint: [0x0032, 0xFE0F, 0x20E3],
    description: "keycap: 2"
  },
  {
    codepoint: [0x0033, 0xFE0F, 0x20E3],
    description: "keycap: 3"
  },
  {
    codepoint: [0x0034, 0xFE0F, 0x20E3],
    description: "keycap: 4"
  },
  {
    codepoint: [0x0035, 0xFE0F, 0x20E3],
    description: "keycap: 5"
  },
  {
    codepoint: [0x0036, 0xFE0F, 0x20E3],
    description: "keycap: 6"
  },
  {
    codepoint: [0x0037, 0xFE0F, 0x20E3],
    description: "keycap: 7"
  },
  {
    codepoint: [0x0038, 0xFE0F, 0x20E3],
    description: "keycap: 8"
  },
  {
    codepoint: [0x0039, 0xFE0F, 0x20E3],
    description: "keycap: 9"
  },
  {
    codepoint: [0x1F51F],
    description: "keycap: 10"
  },
  {
    codepoint: [0x1F520],
    description: "input latin uppercase"
  },
  {
    codepoint: [0x1F521],
    description: "input latin lowercase"
  },
  {
    codepoint: [0x1F522],
    description: "input numbers"
  },
  {
    codepoint: [0x1F523],
    description: "input symbols"
  },
  {
    codepoint: [0x1F524],
    description: "input latin letters"
  },
  {
    codepoint: [0x1F170],
    description: "A button (blood type)"
  },
  {
    codepoint: [0x1F18E],
    description: "AB button (blood type)"
  },
  {
    codepoint: [0x1F171],
    description: "B button (blood type)"
  },
  {
    codepoint: [0x1F191],
    description: "CL button"
  },
  {
    codepoint: [0x1F192],
    description: "COOL button"
  },
  {
    codepoint: [0x1F193],
    description: "FREE button"
  },
  {
    codepoint: [0x2139],
    description: "information"
  },
  {
    codepoint: [0x1F194],
    description: "ID button"
  },
  {
    codepoint: [0x24C2],
    description: "circled M"
  },
  {
    codepoint: [0x1F195],
    description: "NEW button"
  },
  {
    codepoint: [0x1F196],
    description: "NG button"
  },
  {
    codepoint: [0x1F17E],
    description: "O button (blood type)"
  },
  {
    codepoint: [0x1F197],
    description: "OK button"
  },
  {
    codepoint: [0x1F17F],
    description: "P button"
  },
  {
    codepoint: [0x1F198],
    description: "SOS button"
  },
  {
    codepoint: [0x1F199],
    description: "UP! button"
  },
  {
    codepoint: [0x1F19A],
    description: "VS button"
  },
  {
    codepoint: [0x1F201],
    description: "Japanese “here” button"
  },
  {
    codepoint: [0x1F202],
    description: "Japanese “service charge” button"
  },
  {
    codepoint: [0x1F237],
    description: "Japanese “monthly amount” button"
  },
  {
    codepoint: [0x1F236],
    description: "Japanese “not free of charge” button"
  },
  {
    codepoint: [0x1F22F],
    description: "Japanese “reserved” button"
  },
  {
    codepoint: [0x1F250],
    description: "Japanese “bargain” button"
  },
  {
    codepoint: [0x1F239],
    description: "Japanese “discount” button"
  },
  {
    codepoint: [0x1F21A],
    description: "Japanese “free of charge” button"
  },
  {
    codepoint: [0x1F232],
    description: "Japanese “prohibited” button"
  },
  {
    codepoint: [0x1F251],
    description: "Japanese “acceptable” button"
  },
  {
    codepoint: [0x1F238],
    description: "Japanese “application” button"
  },
  {
    codepoint: [0x1F234],
    description: "Japanese “passing grade” button"
  },
  {
    codepoint: [0x1F233],
    description: "Japanese “vacancy” button"
  },
  {
    codepoint: [0x3297],
    description: "Japanese “congratulations” button"
  },
  {
    codepoint: [0x3299],
    description: "Japanese “secret” button"
  },
  {
    codepoint: [0x1F23A],
    description: "Japanese “open for business” button"
  },
  {
    codepoint: [0x1F235],
    description: "Japanese “no vacancy” button"
  },
  {
    codepoint: [0x1F534],
    description: "red circle"
  },
  {
    codepoint: [0x1F535],
    description: "blue circle"
  },
  {
    codepoint: [0x26AA],
    description: "white circle"
  },
  {
    codepoint: [0x26AB],
    description: "black circle"
  },
  {
    codepoint: [0x2B1C],
    description: "white large square"
  },
  {
    codepoint: [0x2B1B],
    description: "black large square"
  },
  {
    codepoint: [0x25FC],
    description: "black medium square"
  },
  {
    codepoint: [0x25FB],
    description: "white medium square"
  },
  {
    codepoint: [0x25FD],
    description: "white medium-small square"
  },
  {
    codepoint: [0x25FE],
    description: "black medium-small square"
  },
  {
    codepoint: [0x25AB],
    description: "white small square"
  },
  {
    codepoint: [0x25AA],
    description: "black small square"
  },
  {
    codepoint: [0x1F536],
    description: "large orange diamond"
  },
  {
    codepoint: [0x1F537],
    description: "large blue diamond"
  },
  {
    codepoint: [0x1F538],
    description: "small orange diamond"
  },
  {
    codepoint: [0x1F539],
    description: "small blue diamond"
  },
  {
    codepoint: [0x1F53A],
    description: "red triangle pointed up"
  },
  {
    codepoint: [0x1F53B],
    description: "red triangle pointed down"
  },
  {
    codepoint: [0x1F4A0],
    description: "diamond with a dot"
  },
  {
    codepoint: [0x1F518],
    description: "radio button"
  },
  {
    codepoint: [0x1F532],
    description: "black square button"
  },
  {
    codepoint: [0x1F533],
    description: "white square button"
  },
  {
    codepoint: [0x1F3C1],
    description: "chequered flag"
  },
  {
    codepoint: [0x1F6A9],
    description: "triangular flag"
  },
  {
    codepoint: [0x1F38C],
    description: "crossed flags"
  },
  {
    codepoint: [0x1F3F4],
    description: "black flag"
  },
  {
    codepoint: [0x1F3F3],
    description: "white flag"
  },
  {
    codepoint: [0x1F3F3, 0xFE0F, 0x200D, 0x1F308],
    description: "rainbow flag"
  },
  {
    codepoint: [0x1F3F4, 0x200D, 0x2620, 0xFE0F],
    description: "⊛ pirate flag"
  },
  {
    codepoint: [0x1F1E6, 0x1F1E8],
    description: "flag: Ascension Island"
  },
  {
    codepoint: [0x1F1E6, 0x1F1E9],
    description: "flag: Andorra"
  },
  {
    codepoint: [0x1F1E6, 0x1F1EA],
    description: "flag: United Arab Emirates"
  },
  {
    codepoint: [0x1F1E6, 0x1F1EB],
    description: "flag: Afghanistan"
  },
  {
    codepoint: [0x1F1E6, 0x1F1EC],
    description: "flag: Antigua & Barbuda"
  },
  {
    codepoint: [0x1F1E6, 0x1F1EE],
    description: "flag: Anguilla"
  },
  {
    codepoint: [0x1F1E6, 0x1F1F1],
    description: "flag: Albania"
  },
  {
    codepoint: [0x1F1E6, 0x1F1F2],
    description: "flag: Armenia"
  },
  {
    codepoint: [0x1F1E6, 0x1F1F4],
    description: "flag: Angola"
  },
  {
    codepoint: [0x1F1E6, 0x1F1F6],
    description: "flag: Antarctica"
  },
  {
    codepoint: [0x1F1E6, 0x1F1F7],
    description: "flag: Argentina"
  },
  {
    codepoint: [0x1F1E6, 0x1F1F8],
    description: "flag: American Samoa"
  },
  {
    codepoint: [0x1F1E6, 0x1F1F9],
    description: "flag: Austria"
  },
  {
    codepoint: [0x1F1E6, 0x1F1FA],
    description: "flag: Australia"
  },
  {
    codepoint: [0x1F1E6, 0x1F1FC],
    description: "flag: Aruba"
  },
  {
    codepoint: [0x1F1E6, 0x1F1FD],
    description: "flag: Åland Islands"
  },
  {
    codepoint: [0x1F1E6, 0x1F1FF],
    description: "flag: Azerbaijan"
  },
  {
    codepoint: [0x1F1E7, 0x1F1E6],
    description: "flag: Bosnia & Herzegovina"
  },
  {
    codepoint: [0x1F1E7, 0x1F1E7],
    description: "flag: Barbados"
  },
  {
    codepoint: [0x1F1E7, 0x1F1E9],
    description: "flag: Bangladesh"
  },
  {
    codepoint: [0x1F1E7, 0x1F1EA],
    description: "flag: Belgium"
  },
  {
    codepoint: [0x1F1E7, 0x1F1EB],
    description: "flag: Burkina Faso"
  },
  {
    codepoint: [0x1F1E7, 0x1F1EC],
    description: "flag: Bulgaria"
  },
  {
    codepoint: [0x1F1E7, 0x1F1ED],
    description: "flag: Bahrain"
  },
  {
    codepoint: [0x1F1E7, 0x1F1EE],
    description: "flag: Burundi"
  },
  {
    codepoint: [0x1F1E7, 0x1F1EF],
    description: "flag: Benin"
  },
  {
    codepoint: [0x1F1E7, 0x1F1F1],
    description: "flag: St. Barthélemy"
  },
  {
    codepoint: [0x1F1E7, 0x1F1F2],
    description: "flag: Bermuda"
  },
  {
    codepoint: [0x1F1E7, 0x1F1F3],
    description: "flag: Brunei"
  },
  {
    codepoint: [0x1F1E7, 0x1F1F4],
    description: "flag: Bolivia"
  },
  {
    codepoint: [0x1F1E7, 0x1F1F6],
    description: "flag: Caribbean Netherlands"
  },
  {
    codepoint: [0x1F1E7, 0x1F1F7],
    description: "flag: Brazil"
  },
  {
    codepoint: [0x1F1E7, 0x1F1F8],
    description: "flag: Bahamas"
  },
  {
    codepoint: [0x1F1E7, 0x1F1F9],
    description: "flag: Bhutan"
  },
  {
    codepoint: [0x1F1E7, 0x1F1FB],
    description: "flag: Bouvet Island"
  },
  {
    codepoint: [0x1F1E7, 0x1F1FC],
    description: "flag: Botswana"
  },
  {
    codepoint: [0x1F1E7, 0x1F1FE],
    description: "flag: Belarus"
  },
  {
    codepoint: [0x1F1E7, 0x1F1FF],
    description: "flag: Belize"
  },
  {
    codepoint: [0x1F1E8, 0x1F1E6],
    description: "flag: Canada"
  },
  {
    codepoint: [0x1F1E8, 0x1F1E8],
    description: "flag: Cocos (Keeling) Islands"
  },
  {
    codepoint: [0x1F1E8, 0x1F1E9],
    description: "flag: Congo - Kinshasa"
  },
  {
    codepoint: [0x1F1E8, 0x1F1EB],
    description: "flag: Central African Republic"
  },
  {
    codepoint: [0x1F1E8, 0x1F1EC],
    description: "flag: Congo - Brazzaville"
  },
  {
    codepoint: [0x1F1E8, 0x1F1ED],
    description: "flag: Switzerland"
  },
  {
    codepoint: [0x1F1E8, 0x1F1EE],
    description: "flag: Côte d’Ivoire"
  },
  {
    codepoint: [0x1F1E8, 0x1F1F0],
    description: "flag: Cook Islands"
  },
  {
    codepoint: [0x1F1E8, 0x1F1F1],
    description: "flag: Chile"
  },
  {
    codepoint: [0x1F1E8, 0x1F1F2],
    description: "flag: Cameroon"
  },
  {
    codepoint: [0x1F1E8, 0x1F1F3],
    description: "flag: China"
  },
  {
    codepoint: [0x1F1E8, 0x1F1F4],
    description: "flag: Colombia"
  },
  {
    codepoint: [0x1F1E8, 0x1F1F5],
    description: "flag: Clipperton Island"
  },
  {
    codepoint: [0x1F1E8, 0x1F1F7],
    description: "flag: Costa Rica"
  },
  {
    codepoint: [0x1F1E8, 0x1F1FA],
    description: "flag: Cuba"
  },
  {
    codepoint: [0x1F1E8, 0x1F1FB],
    description: "flag: Cape Verde"
  },
  {
    codepoint: [0x1F1E8, 0x1F1FC],
    description: "flag: Curaçao"
  },
  {
    codepoint: [0x1F1E8, 0x1F1FD],
    description: "flag: Christmas Island"
  },
  {
    codepoint: [0x1F1E8, 0x1F1FE],
    description: "flag: Cyprus"
  },
  {
    codepoint: [0x1F1E8, 0x1F1FF],
    description: "flag: Czechia"
  },
  {
    codepoint: [0x1F1E9, 0x1F1EA],
    description: "flag: Germany"
  },
  {
    codepoint: [0x1F1E9, 0x1F1EC],
    description: "flag: Diego Garcia"
  },
  {
    codepoint: [0x1F1E9, 0x1F1EF],
    description: "flag: Djibouti"
  },
  {
    codepoint: [0x1F1E9, 0x1F1F0],
    description: "flag: Denmark"
  },
  {
    codepoint: [0x1F1E9, 0x1F1F2],
    description: "flag: Dominica"
  },
  {
    codepoint: [0x1F1E9, 0x1F1F4],
    description: "flag: Dominican Republic"
  },
  {
    codepoint: [0x1F1E9, 0x1F1FF],
    description: "flag: Algeria"
  },
  {
    codepoint: [0x1F1EA, 0x1F1E6],
    description: "flag: Ceuta & Melilla"
  },
  {
    codepoint: [0x1F1EA, 0x1F1E8],
    description: "flag: Ecuador"
  },
  {
    codepoint: [0x1F1EA, 0x1F1EA],
    description: "flag: Estonia"
  },
  {
    codepoint: [0x1F1EA, 0x1F1EC],
    description: "flag: Egypt"
  },
  {
    codepoint: [0x1F1EA, 0x1F1ED],
    description: "flag: Western Sahara"
  },
  {
    codepoint: [0x1F1EA, 0x1F1F7],
    description: "flag: Eritrea"
  },
  {
    codepoint: [0x1F1EA, 0x1F1F8],
    description: "flag: Spain"
  },
  {
    codepoint: [0x1F1EA, 0x1F1F9],
    description: "flag: Ethiopia"
  },
  {
    codepoint: [0x1F1EA, 0x1F1FA],
    description: "flag: European Union"
  },
  {
    codepoint: [0x1F1EB, 0x1F1EE],
    description: "flag: Finland"
  },
  {
    codepoint: [0x1F1EB, 0x1F1EF],
    description: "flag: Fiji"
  },
  {
    codepoint: [0x1F1EB, 0x1F1F0],
    description: "flag: Falkland Islands"
  },
  {
    codepoint: [0x1F1EB, 0x1F1F2],
    description: "flag: Micronesia"
  },
  {
    codepoint: [0x1F1EB, 0x1F1F4],
    description: "flag: Faroe Islands"
  },
  {
    codepoint: [0x1F1EB, 0x1F1F7],
    description: "flag: France"
  },
  {
    codepoint: [0x1F1EC, 0x1F1E6],
    description: "flag: Gabon"
  },
  {
    codepoint: [0x1F1EC, 0x1F1E7],
    description: "flag: United Kingdom"
  },
  {
    codepoint: [0x1F1EC, 0x1F1E9],
    description: "flag: Grenada"
  },
  {
    codepoint: [0x1F1EC, 0x1F1EA],
    description: "flag: Georgia"
  },
  {
    codepoint: [0x1F1EC, 0x1F1EB],
    description: "flag: French Guiana"
  },
  {
    codepoint: [0x1F1EC, 0x1F1EC],
    description: "flag: Guernsey"
  },
  {
    codepoint: [0x1F1EC, 0x1F1ED],
    description: "flag: Ghana"
  },
  {
    codepoint: [0x1F1EC, 0x1F1EE],
    description: "flag: Gibraltar"
  },
  {
    codepoint: [0x1F1EC, 0x1F1F1],
    description: "flag: Greenland"
  },
  {
    codepoint: [0x1F1EC, 0x1F1F2],
    description: "flag: Gambia"
  },
  {
    codepoint: [0x1F1EC, 0x1F1F3],
    description: "flag: Guinea"
  },
  {
    codepoint: [0x1F1EC, 0x1F1F5],
    description: "flag: Guadeloupe"
  },
  {
    codepoint: [0x1F1EC, 0x1F1F6],
    description: "flag: Equatorial Guinea"
  },
  {
    codepoint: [0x1F1EC, 0x1F1F7],
    description: "flag: Greece"
  },
  {
    codepoint: [0x1F1EC, 0x1F1F8],
    description: "flag: South Georgia & South Sandwich Islands"
  },
  {
    codepoint: [0x1F1EC, 0x1F1F9],
    description: "flag: Guatemala"
  },
  {
    codepoint: [0x1F1EC, 0x1F1FA],
    description: "flag: Guam"
  },
  {
    codepoint: [0x1F1EC, 0x1F1FC],
    description: "flag: Guinea-Bissau"
  },
  {
    codepoint: [0x1F1EC, 0x1F1FE],
    description: "flag: Guyana"
  },
  {
    codepoint: [0x1F1ED, 0x1F1F0],
    description: "flag: Hong Kong SAR China"
  },
  {
    codepoint: [0x1F1ED, 0x1F1F2],
    description: "flag: Heard & McDonald Islands"
  },
  {
    codepoint: [0x1F1ED, 0x1F1F3],
    description: "flag: Honduras"
  },
  {
    codepoint: [0x1F1ED, 0x1F1F7],
    description: "flag: Croatia"
  },
  {
    codepoint: [0x1F1ED, 0x1F1F9],
    description: "flag: Haiti"
  },
  {
    codepoint: [0x1F1ED, 0x1F1FA],
    description: "flag: Hungary"
  },
  {
    codepoint: [0x1F1EE, 0x1F1E8],
    description: "flag: Canary Islands"
  },
  {
    codepoint: [0x1F1EE, 0x1F1E9],
    description: "flag: Indonesia"
  },
  {
    codepoint: [0x1F1EE, 0x1F1EA],
    description: "flag: Ireland"
  },
  {
    codepoint: [0x1F1EE, 0x1F1F1],
    description: "flag: Israel"
  },
  {
    codepoint: [0x1F1EE, 0x1F1F2],
    description: "flag: Isle of Man"
  },
  {
    codepoint: [0x1F1EE, 0x1F1F3],
    description: "flag: India"
  },
  {
    codepoint: [0x1F1EE, 0x1F1F4],
    description: "flag: British Indian Ocean Territory"
  },
  {
    codepoint: [0x1F1EE, 0x1F1F6],
    description: "flag: Iraq"
  },
  {
    codepoint: [0x1F1EE, 0x1F1F7],
    description: "flag: Iran"
  },
  {
    codepoint: [0x1F1EE, 0x1F1F8],
    description: "flag: Iceland"
  },
  {
    codepoint: [0x1F1EE, 0x1F1F9],
    description: "flag: Italy"
  },
  {
    codepoint: [0x1F1EF, 0x1F1EA],
    description: "flag: Jersey"
  },
  {
    codepoint: [0x1F1EF, 0x1F1F2],
    description: "flag: Jamaica"
  },
  {
    codepoint: [0x1F1EF, 0x1F1F4],
    description: "flag: Jordan"
  },
  {
    codepoint: [0x1F1EF, 0x1F1F5],
    description: "flag: Japan"
  },
  {
    codepoint: [0x1F1F0, 0x1F1EA],
    description: "flag: Kenya"
  },
  {
    codepoint: [0x1F1F0, 0x1F1EC],
    description: "flag: Kyrgyzstan"
  },
  {
    codepoint: [0x1F1F0, 0x1F1ED],
    description: "flag: Cambodia"
  },
  {
    codepoint: [0x1F1F0, 0x1F1EE],
    description: "flag: Kiribati"
  },
  {
    codepoint: [0x1F1F0, 0x1F1F2],
    description: "flag: Comoros"
  },
  {
    codepoint: [0x1F1F0, 0x1F1F3],
    description: "flag: St. Kitts & Nevis"
  },
  {
    codepoint: [0x1F1F0, 0x1F1F5],
    description: "flag: North Korea"
  },
  {
    codepoint: [0x1F1F0, 0x1F1F7],
    description: "flag: South Korea"
  },
  {
    codepoint: [0x1F1F0, 0x1F1FC],
    description: "flag: Kuwait"
  },
  {
    codepoint: [0x1F1F0, 0x1F1FE],
    description: "flag: Cayman Islands"
  },
  {
    codepoint: [0x1F1F0, 0x1F1FF],
    description: "flag: Kazakhstan"
  },
  {
    codepoint: [0x1F1F1, 0x1F1E6],
    description: "flag: Laos"
  },
  {
    codepoint: [0x1F1F1, 0x1F1E7],
    description: "flag: Lebanon"
  },
  {
    codepoint: [0x1F1F1, 0x1F1E8],
    description: "flag: St. Lucia"
  },
  {
    codepoint: [0x1F1F1, 0x1F1EE],
    description: "flag: Liechtenstein"
  },
  {
    codepoint: [0x1F1F1, 0x1F1F0],
    description: "flag: Sri Lanka"
  },
  {
    codepoint: [0x1F1F1, 0x1F1F7],
    description: "flag: Liberia"
  },
  {
    codepoint: [0x1F1F1, 0x1F1F8],
    description: "flag: Lesotho"
  },
  {
    codepoint: [0x1F1F1, 0x1F1F9],
    description: "flag: Lithuania"
  },
  {
    codepoint: [0x1F1F1, 0x1F1FA],
    description: "flag: Luxembourg"
  },
  {
    codepoint: [0x1F1F1, 0x1F1FB],
    description: "flag: Latvia"
  },
  {
    codepoint: [0x1F1F1, 0x1F1FE],
    description: "flag: Libya"
  },
  {
    codepoint: [0x1F1F2, 0x1F1E6],
    description: "flag: Morocco"
  },
  {
    codepoint: [0x1F1F2, 0x1F1E8],
    description: "flag: Monaco"
  },
  {
    codepoint: [0x1F1F2, 0x1F1E9],
    description: "flag: Moldova"
  },
  {
    codepoint: [0x1F1F2, 0x1F1EA],
    description: "flag: Montenegro"
  },
  {
    codepoint: [0x1F1F2, 0x1F1EB],
    description: "flag: St. Martin"
  },
  {
    codepoint: [0x1F1F2, 0x1F1EC],
    description: "flag: Madagascar"
  },
  {
    codepoint: [0x1F1F2, 0x1F1ED],
    description: "flag: Marshall Islands"
  },
  {
    codepoint: [0x1F1F2, 0x1F1F0],
    description: "flag: Macedonia"
  },
  {
    codepoint: [0x1F1F2, 0x1F1F1],
    description: "flag: Mali"
  },
  {
    codepoint: [0x1F1F2, 0x1F1F2],
    description: "flag: Myanmar (Burma)"
  },
  {
    codepoint: [0x1F1F2, 0x1F1F3],
    description: "flag: Mongolia"
  },
  {
    codepoint: [0x1F1F2, 0x1F1F4],
    description: "flag: Macau SAR China"
  },
  {
    codepoint: [0x1F1F2, 0x1F1F5],
    description: "flag: Northern Mariana Islands"
  },
  {
    codepoint: [0x1F1F2, 0x1F1F6],
    description: "flag: Martinique"
  },
  {
    codepoint: [0x1F1F2, 0x1F1F7],
    description: "flag: Mauritania"
  },
  {
    codepoint: [0x1F1F2, 0x1F1F8],
    description: "flag: Montserrat"
  },
  {
    codepoint: [0x1F1F2, 0x1F1F9],
    description: "flag: Malta"
  },
  {
    codepoint: [0x1F1F2, 0x1F1FA],
    description: "flag: Mauritius"
  },
  {
    codepoint: [0x1F1F2, 0x1F1FB],
    description: "flag: Maldives"
  },
  {
    codepoint: [0x1F1F2, 0x1F1FC],
    description: "flag: Malawi"
  },
  {
    codepoint: [0x1F1F2, 0x1F1FD],
    description: "flag: Mexico"
  },
  {
    codepoint: [0x1F1F2, 0x1F1FE],
    description: "flag: Malaysia"
  },
  {
    codepoint: [0x1F1F2, 0x1F1FF],
    description: "flag: Mozambique"
  },
  {
    codepoint: [0x1F1F3, 0x1F1E6],
    description: "flag: Namibia"
  },
  {
    codepoint: [0x1F1F3, 0x1F1E8],
    description: "flag: New Caledonia"
  },
  {
    codepoint: [0x1F1F3, 0x1F1EA],
    description: "flag: Niger"
  },
  {
    codepoint: [0x1F1F3, 0x1F1EB],
    description: "flag: Norfolk Island"
  },
  {
    codepoint: [0x1F1F3, 0x1F1EC],
    description: "flag: Nigeria"
  },
  {
    codepoint: [0x1F1F3, 0x1F1EE],
    description: "flag: Nicaragua"
  },
  {
    codepoint: [0x1F1F3, 0x1F1F1],
    description: "flag: Netherlands"
  },
  {
    codepoint: [0x1F1F3, 0x1F1F4],
    description: "flag: Norway"
  },
  {
    codepoint: [0x1F1F3, 0x1F1F5],
    description: "flag: Nepal"
  },
  {
    codepoint: [0x1F1F3, 0x1F1F7],
    description: "flag: Nauru"
  },
  {
    codepoint: [0x1F1F3, 0x1F1FA],
    description: "flag: Niue"
  },
  {
    codepoint: [0x1F1F3, 0x1F1FF],
    description: "flag: New Zealand"
  },
  {
    codepoint: [0x1F1F4, 0x1F1F2],
    description: "flag: Oman"
  },
  {
    codepoint: [0x1F1F5, 0x1F1E6],
    description: "flag: Panama"
  },
  {
    codepoint: [0x1F1F5, 0x1F1EA],
    description: "flag: Peru"
  },
  {
    codepoint: [0x1F1F5, 0x1F1EB],
    description: "flag: French Polynesia"
  },
  {
    codepoint: [0x1F1F5, 0x1F1EC],
    description: "flag: Papua New Guinea"
  },
  {
    codepoint: [0x1F1F5, 0x1F1ED],
    description: "flag: Philippines"
  },
  {
    codepoint: [0x1F1F5, 0x1F1F0],
    description: "flag: Pakistan"
  },
  {
    codepoint: [0x1F1F5, 0x1F1F1],
    description: "flag: Poland"
  },
  {
    codepoint: [0x1F1F5, 0x1F1F2],
    description: "flag: St. Pierre & Miquelon"
  },
  {
    codepoint: [0x1F1F5, 0x1F1F3],
    description: "flag: Pitcairn Islands"
  },
  {
    codepoint: [0x1F1F5, 0x1F1F7],
    description: "flag: Puerto Rico"
  },
  {
    codepoint: [0x1F1F5, 0x1F1F8],
    description: "flag: Palestinian Territories"
  },
  {
    codepoint: [0x1F1F5, 0x1F1F9],
    description: "flag: Portugal"
  },
  {
    codepoint: [0x1F1F5, 0x1F1FC],
    description: "flag: Palau"
  },
  {
    codepoint: [0x1F1F5, 0x1F1FE],
    description: "flag: Paraguay"
  },
  {
    codepoint: [0x1F1F6, 0x1F1E6],
    description: "flag: Qatar"
  },
  {
    codepoint: [0x1F1F7, 0x1F1EA],
    description: "flag: Réunion"
  },
  {
    codepoint: [0x1F1F7, 0x1F1F4],
    description: "flag: Romania"
  },
  {
    codepoint: [0x1F1F7, 0x1F1F8],
    description: "flag: Serbia"
  },
  {
    codepoint: [0x1F1F7, 0x1F1FA],
    description: "flag: Russia"
  },
  {
    codepoint: [0x1F1F7, 0x1F1FC],
    description: "flag: Rwanda"
  },
  {
    codepoint: [0x1F1F8, 0x1F1E6],
    description: "flag: Saudi Arabia"
  },
  {
    codepoint: [0x1F1F8, 0x1F1E7],
    description: "flag: Solomon Islands"
  },
  {
    codepoint: [0x1F1F8, 0x1F1E8],
    description: "flag: Seychelles"
  },
  {
    codepoint: [0x1F1F8, 0x1F1E9],
    description: "flag: Sudan"
  },
  {
    codepoint: [0x1F1F8, 0x1F1EA],
    description: "flag: Sweden"
  },
  {
    codepoint: [0x1F1F8, 0x1F1EC],
    description: "flag: Singapore"
  },
  {
    codepoint: [0x1F1F8, 0x1F1ED],
    description: "flag: St. Helena"
  },
  {
    codepoint: [0x1F1F8, 0x1F1EE],
    description: "flag: Slovenia"
  },
  {
    codepoint: [0x1F1F8, 0x1F1EF],
    description: "flag: Svalbard & Jan Mayen"
  },
  {
    codepoint: [0x1F1F8, 0x1F1F0],
    description: "flag: Slovakia"
  },
  {
    codepoint: [0x1F1F8, 0x1F1F1],
    description: "flag: Sierra Leone"
  },
  {
    codepoint: [0x1F1F8, 0x1F1F2],
    description: "flag: San Marino"
  },
  {
    codepoint: [0x1F1F8, 0x1F1F3],
    description: "flag: Senegal"
  },
  {
    codepoint: [0x1F1F8, 0x1F1F4],
    description: "flag: Somalia"
  },
  {
    codepoint: [0x1F1F8, 0x1F1F7],
    description: "flag: Suriname"
  },
  {
    codepoint: [0x1F1F8, 0x1F1F8],
    description: "flag: South Sudan"
  },
  {
    codepoint: [0x1F1F8, 0x1F1F9],
    description: "flag: São Tomé & Príncipe"
  },
  {
    codepoint: [0x1F1F8, 0x1F1FB],
    description: "flag: El Salvador"
  },
  {
    codepoint: [0x1F1F8, 0x1F1FD],
    description: "flag: Sint Maarten"
  },
  {
    codepoint: [0x1F1F8, 0x1F1FE],
    description: "flag: Syria"
  },
  {
    codepoint: [0x1F1F8, 0x1F1FF],
    description: "flag: Swaziland"
  },
  {
    codepoint: [0x1F1F9, 0x1F1E6],
    description: "flag: Tristan da Cunha"
  },
  {
    codepoint: [0x1F1F9, 0x1F1E8],
    description: "flag: Turks & Caicos Islands"
  },
  {
    codepoint: [0x1F1F9, 0x1F1E9],
    description: "flag: Chad"
  },
  {
    codepoint: [0x1F1F9, 0x1F1EB],
    description: "flag: French Southern Territories"
  },
  {
    codepoint: [0x1F1F9, 0x1F1EC],
    description: "flag: Togo"
  },
  {
    codepoint: [0x1F1F9, 0x1F1ED],
    description: "flag: Thailand"
  },
  {
    codepoint: [0x1F1F9, 0x1F1EF],
    description: "flag: Tajikistan"
  },
  {
    codepoint: [0x1F1F9, 0x1F1F0],
    description: "flag: Tokelau"
  },
  {
    codepoint: [0x1F1F9, 0x1F1F1],
    description: "flag: Timor-Leste"
  },
  {
    codepoint: [0x1F1F9, 0x1F1F2],
    description: "flag: Turkmenistan"
  },
  {
    codepoint: [0x1F1F9, 0x1F1F3],
    description: "flag: Tunisia"
  },
  {
    codepoint: [0x1F1F9, 0x1F1F4],
    description: "flag: Tonga"
  },
  {
    codepoint: [0x1F1F9, 0x1F1F7],
    description: "flag: Turkey"
  },
  {
    codepoint: [0x1F1F9, 0x1F1F9],
    description: "flag: Trinidad & Tobago"
  },
  {
    codepoint: [0x1F1F9, 0x1F1FB],
    description: "flag: Tuvalu"
  },
  {
    codepoint: [0x1F1F9, 0x1F1FC],
    description: "flag: Taiwan"
  },
  {
    codepoint: [0x1F1F9, 0x1F1FF],
    description: "flag: Tanzania"
  },
  {
    codepoint: [0x1F1FA, 0x1F1E6],
    description: "flag: Ukraine"
  },
  {
    codepoint: [0x1F1FA, 0x1F1EC],
    description: "flag: Uganda"
  },
  {
    codepoint: [0x1F1FA, 0x1F1F2],
    description: "flag: U.S. Outlying Islands"
  },
  {
    codepoint: [0x1F1FA, 0x1F1F3],
    description: "flag: United Nations"
  },
  {
    codepoint: [0x1F1FA, 0x1F1F8],
    description: "flag: United States"
  },
  {
    codepoint: [0x1F1FA, 0x1F1FE],
    description: "flag: Uruguay"
  },
  {
    codepoint: [0x1F1FA, 0x1F1FF],
    description: "flag: Uzbekistan"
  },
  {
    codepoint: [0x1F1FB, 0x1F1E6],
    description: "flag: Vatican City"
  },
  {
    codepoint: [0x1F1FB, 0x1F1E8],
    description: "flag: St. Vincent & Grenadines"
  },
  {
    codepoint: [0x1F1FB, 0x1F1EA],
    description: "flag: Venezuela"
  },
  {
    codepoint: [0x1F1FB, 0x1F1EC],
    description: "flag: British Virgin Islands"
  },
  {
    codepoint: [0x1F1FB, 0x1F1EE],
    description: "flag: U.S. Virgin Islands"
  },
  {
    codepoint: [0x1F1FB, 0x1F1F3],
    description: "flag: Vietnam"
  },
  {
    codepoint: [0x1F1FB, 0x1F1FA],
    description: "flag: Vanuatu"
  },
  {
    codepoint: [0x1F1FC, 0x1F1EB],
    description: "flag: Wallis & Futuna"
  },
  {
    codepoint: [0x1F1FC, 0x1F1F8],
    description: "flag: Samoa"
  },
  {
    codepoint: [0x1F1FD, 0x1F1F0],
    description: "flag: Kosovo"
  },
  {
    codepoint: [0x1F1FE, 0x1F1EA],
    description: "flag: Yemen"
  },
  {
    codepoint: [0x1F1FE, 0x1F1F9],
    description: "flag: Mayotte"
  },
  {
    codepoint: [0x1F1FF, 0x1F1E6],
    description: "flag: South Africa"
  },
  {
    codepoint: [0x1F1FF, 0x1F1F2],
    description: "flag: Zambia"
  },
  {
    codepoint: [0x1F1FF, 0x1F1FC],
    description: "flag: Zimbabwe"
  },
  {
    codepoint: [0x1F3F4, 0xE0067, 0xE0062, 0xE0065, 0xE006E, 0xE0067, 0xE007F],
    description: "flag: England"
  },
  {
    codepoint: [0x1F3F4, 0xE0067, 0xE0062, 0xE0073, 0xE0063, 0xE0074, 0xE007F],
    description: "flag: Scotland"
  },
  {
    codepoint: [0x1F3F4, 0xE0067, 0xE0062, 0xE0077, 0xE006C, 0xE0073, 0xE007F],
    description: "flag: Wales"
  }
]

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body:       JSON.stringify(sample(emoji)),
  });
};
