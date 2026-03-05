const words = [
  { word: "Tisch", article: "der", gender: "masculine", meaning: "table", tip: "Many everyday objects like der Tisch are masculine." },
  { word: "Stuhl", article: "der", gender: "masculine", meaning: "chair", tip: "Practice with rooms: der Tisch, der Stuhl." },
  { word: "Apfel", article: "der", gender: "masculine", meaning: "apple", tip: "Food vocabulary is mixed, so memorize with the article each time." },
  { word: "Lehrer", article: "der", gender: "masculine", meaning: "male teacher", tip: "People with -er are often masculine: der Lehrer." },
  { word: "Hund", article: "der", gender: "masculine", meaning: "dog", tip: "Animals can vary; always learn article + noun together." },
  { word: "Tag", article: "der", gender: "masculine", meaning: "day", tip: "Time word: der Tag. Repeat with Guten Tag." },
  { word: "Zug", article: "der", gender: "masculine", meaning: "train", tip: "Travel set: der Zug, das Ticket, die Reise." },
  { word: "Computer", article: "der", gender: "masculine", meaning: "computer", tip: "Borrowed nouns are often masculine, but not always." },

  { word: "Frau", article: "die", gender: "feminine", meaning: "woman", tip: "People can be gendered nouns: die Frau, der Mann." },
  { word: "Tasche", article: "die", gender: "feminine", meaning: "bag", tip: "Many nouns ending in -e are feminine (common pattern, not a rule)." },
  { word: "Schule", article: "die", gender: "feminine", meaning: "school", tip: "Try phrase memory: die Schule ist groß." },
  { word: "Lampe", article: "die", gender: "feminine", meaning: "lamp", tip: "Room vocabulary pair: die Lampe + der Tisch." },
  { word: "Zeitung", article: "die", gender: "feminine", meaning: "newspaper", tip: "Words ending in -ung are usually feminine." },
  { word: "Stadt", article: "die", gender: "feminine", meaning: "city", tip: "Location word: die Stadt. Practice with in der Stadt." },
  { word: "Milch", article: "die", gender: "feminine", meaning: "milk", tip: "Many liquids are feminine, but memorize case-by-case." },
  { word: "Musik", article: "die", gender: "feminine", meaning: "music", tip: "Abstract nouns are often feminine: die Musik, die Sprache." },

  { word: "Haus", article: "das", gender: "neuter", meaning: "house", tip: "Classic beginner noun: das Haus." },
  { word: "Kind", article: "das", gender: "neuter", meaning: "child", tip: "Many young beings use neuter: das Kind." },
  { word: "Auto", article: "das", gender: "neuter", meaning: "car", tip: "Vehicles vary, so store article with the noun." },
  { word: "Buch", article: "das", gender: "neuter", meaning: "book", tip: "Study phrase: das Buch lesen." },
  { word: "Wasser", article: "das", gender: "neuter", meaning: "water", tip: "Common substance noun: das Wasser." },
  { word: "Fenster", article: "das", gender: "neuter", meaning: "window", tip: "Room vocabulary set: das Fenster, die Tür, der Tisch." },
  { word: "Mädchen", article: "das", gender: "neuter", meaning: "girl", tip: "Words ending in -chen are always neuter." },
  { word: "Telefon", article: "das", gender: "neuter", meaning: "telephone", tip: "Borrowed nouns are mixed: compare das Telefon vs der Computer." }
];

const accusativeSteps = [
  {
    shortLabel: "What",
    title: "Step 1: What is the Accusative?",
    explanation:
      "The accusative case usually marks the direct object. The direct object receives the action in the sentence.",
    bullets: [
      "Ask: Who/what receives the action?",
      "Example: Ich lese das Buch. (What am I reading? das Buch.)",
      "You will often see it with common verbs like haben, sehen, kaufen, brauchen."
    ],
    exampleLines: [
      "Nominative subject: <em>Ich</em> lese das Buch.",
      "Accusative object: Ich lese <em>das Buch</em>."
    ],
    miniCheck: {
      prompt: "Which part is the direct object (accusative) in: Ich kaufe eine Tasche?",
      options: ["Ich", "kaufe", "eine Tasche", "keine - this sentence has no object"],
      correctIndex: 2,
      explanation: "Eine Tasche receives the action (buying), so it is the accusative object."
    }
  },
  {
    shortLabel: "Find It",
    title: "Step 2: Find the Accusative in a Sentence",
    explanation:
      "First find the verb, then ask 'what?' or 'whom?' after the verb. The answer is usually the accusative object.",
    bullets: [
      "Ich sehe den Hund. -> What do I see? den Hund.",
      "Wir haben ein Auto. -> What do we have? ein Auto.",
      "Sie kennt den Lehrer. -> Whom does she know? den Lehrer."
    ],
    exampleLines: [
      "Ich sehe <em>den Hund</em>.",
      "Wir haben <em>ein Auto</em>."
    ],
    miniCheck: {
      prompt: "In 'Wir brauchen das Wasser', what is the accusative object?",
      options: ["Wir", "brauchen", "das Wasser", "There is no accusative object"],
      correctIndex: 2,
      explanation: "Das Wasser is the thing needed, so it is the direct object."
    }
  },
  {
    shortLabel: "Articles",
    title: "Step 3: Articles in the Accusative",
    explanation:
      "For beginners, the key rule is simple: in singular, only masculine changes (der -> den). Feminine and neuter stay the same. Plural die also stays die.",
    bullets: [
      "Masculine: der Mann -> den Mann",
      "Feminine: die Frau -> die Frau (no change)",
      "Neuter: das Kind -> das Kind (no change)",
      "Plural: die Kinder -> die Kinder (no change)"
    ],
    exampleLines: [
      "Ich sehe <em>den Mann</em>.",
      "Ich sehe <em>die Frau</em>.",
      "Ich sehe <em>das Kind</em>."
    ],
    miniCheck: {
      prompt: "Choose the correct phrase: Ich habe ___ Hund.",
      options: ["der Hund", "den Hund", "die Hund", "das Hund"],
      correctIndex: 1,
      explanation: "Hund is masculine, so der changes to den in the accusative."
    }
  },
  {
    shortLabel: "Verbs",
    title: "Step 4: Common Verbs That Use the Accusative",
    explanation:
      "Many very common verbs take a direct object in the accusative. Learn them with a simple sentence pattern.",
    bullets: [
      "haben (to have): Ich habe ein Buch.",
      "sehen (to see): Ich sehe den Zug.",
      "brauchen (to need): Ich brauche die Tasche.",
      "kaufen (to buy): Ich kaufe das Brot."
    ],
    exampleLines: [
      "Pattern: Subject + verb + <em>accusative object</em>",
      "Ich brauche <em>die Tasche</em>."
    ],
    miniCheck: {
      prompt: "Complete the pattern with a correct accusative object: Ich sehe ...",
      options: ["der Lehrer", "den Lehrer", "dem Lehrer", "des Lehrers"],
      correctIndex: 1,
      explanation: "Lehrer is masculine, so as a direct object it becomes den Lehrer."
    }
  },
  {
    shortLabel: "More",
    title: "Step 5: Pronouns and Common Accusative Prepositions",
    explanation:
      "You will also meet accusative forms with pronouns and with some prepositions. Start small and memorize the most common forms.",
    bullets: [
      "Pronouns: ich -> mich, du -> dich, er -> ihn, sie -> sie, es -> es",
      "Common accusative prepositions: durch, für, ohne, gegen, um",
      "Example: Das Geschenk ist für dich."
    ],
    exampleLines: [
      "Er sieht <em>mich</em>.",
      "Das ist für <em>dich</em>."
    ],
    miniCheck: {
      prompt: "Choose the correct pronoun: Sie sieht ___ (he).",
      options: ["er", "ihm", "ihn", "sein"],
      correctIndex: 2,
      explanation: "The accusative form of er is ihn."
    }
  }
];

const accusativeQuizQuestions = [
  {
    category: "Article Change",
    prompt: "Ich sehe ___ Mann.",
    hint: "Masculine singular direct object",
    options: ["der", "den", "dem", "die"],
    correctIndex: 1,
    explanation: "Masculine singular article changes from der to den in the accusative."
  },
  {
    category: "No Change (Feminine)",
    prompt: "Ich habe ___ Tasche.",
    hint: "Tasche is feminine",
    options: ["die", "den", "der", "das"],
    correctIndex: 0,
    explanation: "Feminine die stays die in the accusative."
  },
  {
    category: "No Change (Neuter)",
    prompt: "Wir brauchen ___ Buch.",
    hint: "Buch is neuter",
    options: ["den", "das", "dem", "die"],
    correctIndex: 1,
    explanation: "Neuter das stays das in the accusative."
  },
  {
    category: "Find Object",
    prompt: "What is the accusative object in: Ich kenne den Lehrer.",
    hint: "Ask: Whom do I know?",
    options: ["Ich", "kenne", "den Lehrer", "No object"],
    correctIndex: 2,
    explanation: "Den Lehrer receives the action and is the direct object."
  },
  {
    category: "Pronouns",
    prompt: "Er hört ___ (I/me).",
    hint: "Accusative pronoun",
    options: ["ich", "mir", "mich", "mein"],
    correctIndex: 2,
    explanation: "The accusative form of ich is mich."
  },
  {
    category: "Prepositions",
    prompt: "Das Geschenk ist für ___.",
    hint: "Use the accusative pronoun for 'you' (singular informal)",
    options: ["du", "dich", "dir", "dein"],
    correctIndex: 1,
    explanation: "Für takes the accusative, so the correct pronoun is dich."
  },
  {
    category: "Plural",
    prompt: "Ich sehe ___ Kinder.",
    hint: "Plural article in accusative",
    options: ["die", "den", "der", "das"],
    correctIndex: 0,
    explanation: "Plural die stays die in the accusative."
  },
  {
    category: "Article Choice",
    prompt: "Choose the correct sentence.",
    hint: "Only one sentence has the correct accusative masculine article",
    options: ["Ich sehe der Hund.", "Ich sehe den Hund.", "Ich sehe dem Hund.", "Ich sehe des Hund."],
    correctIndex: 1,
    explanation: "Hund is a masculine direct object, so den Hund is correct."
  }
];

const possessiveSteps = [
  {
    shortLabel: "What",
    title: "Step 1: What are Possessive Articles?",
    explanation:
      "Possessive articles show ownership and stand before a noun. In English: my, your, his, her, our.",
    bullets: [
      "German examples: mein Buch, deine Tasche, sein Auto.",
      "They change their ending depending on noun gender and case.",
      "Start by learning the stem first (mein-, dein-, sein-, ihr-)."
    ],
    exampleLines: [
      "English: my book -> <em>mein Buch</em>",
      "English: my bag -> <em>meine Tasche</em>"
    ],
    miniCheck: {
      prompt: "What does a possessive article tell you?",
      options: ["Only the verb tense", "Ownership / relationship to the noun", "Plural only", "Question type"],
      correctIndex: 1,
      explanation: "Possessive articles show who something belongs to (my/your/his/her...)."
    }
  },
  {
    shortLabel: "Nominative",
    title: "Step 2: Basic Endings in the Nominative",
    explanation:
      "For beginner nouns in the nominative, possessive articles often follow the same pattern as ein-words.",
    bullets: [
      "Masculine: mein Hund",
      "Neuter: mein Auto",
      "Feminine: meine Tasche",
      "Plural: meine Bücher"
    ],
    exampleLines: [
      "Das ist <em>mein Hund</em>.",
      "Das sind <em>meine Bücher</em>."
    ],
    miniCheck: {
      prompt: "Choose the correct phrase for 'my bag' (die Tasche):",
      options: ["mein Tasche", "meine Tasche", "meinen Tasche", "meiner Tasche"],
      correctIndex: 1,
      explanation: "Tasche is feminine, so nominative uses meine."
    }
  },
  {
    shortLabel: "Accusative",
    title: "Step 3: Possessive Articles in the Accusative",
    explanation:
      "In the accusative, the main beginner change is masculine singular. The possessive article gets -en (like meinen).",
    bullets: [
      "Masculine accusative: meinen Hund",
      "Feminine accusative: meine Tasche (no extra change here)",
      "Neuter accusative: mein Auto",
      "Plural accusative: meine Bücher"
    ],
    exampleLines: [
      "Ich sehe <em>meinen Hund</em>.",
      "Ich habe <em>mein Auto</em>."
    ],
    miniCheck: {
      prompt: "Complete: Ich kenne ___ Lehrer. (my)",
      options: ["mein", "meine", "meinen", "meinem"],
      correctIndex: 2,
      explanation: "Lehrer is masculine and is the direct object here, so accusative uses meinen."
    }
  },
  {
    shortLabel: "Practice",
    title: "Step 4: Build Full Phrases and Sentences",
    explanation:
      "Pick the owner first, then noun gender, then case. Say the full phrase out loud to build automatic memory.",
    bullets: [
      "Good habit: memorize chunks, not isolated words.",
      "Example chunks: mein Buch, meine Tasche, meinen Hund.",
      "Then place them in sentences: Ich habe mein Buch. / Ich sehe meinen Hund."
    ],
    exampleLines: [
      "Chunk first: <em>dein Auto</em>",
      "Sentence: Ich sehe <em>dein Auto</em>."
    ],
    miniCheck: {
      prompt: "Which is correct for 'our books' (nominative plural)?",
      options: ["unser Bücher", "unsere Bücher", "unseren Bücher", "unseres Bücher"],
      correctIndex: 1,
      explanation: "Plural nominative uses -e here: unsere Bücher."
    }
  }
];

const possessiveQuizQuestions = [
  {
    category: "Nominative Feminine",
    prompt: "Das ist ___ Tasche. (my)",
    hint: "die Tasche, nominative",
    options: ["mein", "meine", "meinen", "meiner"],
    correctIndex: 1,
    explanation: "Feminine nominative uses meine."
  },
  {
    category: "Nominative Neuter",
    prompt: "Das ist ___ Auto. (his)",
    hint: "das Auto, nominative",
    options: ["sein", "seine", "seinen", "seinem"],
    correctIndex: 0,
    explanation: "Neuter nominative uses sein (no -e)."
  },
  {
    category: "Accusative Masculine",
    prompt: "Ich sehe ___ Hund. (your, informal singular)",
    hint: "der Hund -> accusative direct object",
    options: ["dein", "deine", "deinen", "deinem"],
    correctIndex: 2,
    explanation: "Masculine accusative takes -en: deinen Hund."
  },
  {
    category: "Plural",
    prompt: "Das sind ___ Bücher. (our)",
    hint: "plural nominative",
    options: ["unser", "unsere", "unseren", "unseres"],
    correctIndex: 1,
    explanation: "Plural nominative uses unsere."
  },
  {
    category: "Formal You",
    prompt: "Ist das ___ Schule? (your, formal)",
    hint: "die Schule, nominative",
    options: ["Ihr", "Ihre", "Ihren", "Ihrem"],
    correctIndex: 1,
    explanation: "Formal possessive stem is Ihr-, and feminine nominative is Ihre."
  },
  {
    category: "Sentence Choice",
    prompt: "Choose the correct sentence:",
    hint: "Accusative masculine object",
    options: ["Ich kenne mein Bruder.", "Ich kenne meinen Bruder.", "Ich kenne meine Bruder.", "Ich kenne meinem Bruder."],
    correctIndex: 1,
    explanation: "Bruder is masculine and direct object here, so meinen Bruder."
  },
  {
    category: "Nominative Masculine",
    prompt: "Das ist ___ Lehrer. (her)",
    hint: "der Lehrer, nominative",
    options: ["ihr", "ihre", "ihren", "ihrem"],
    correctIndex: 0,
    explanation: "Masculine nominative uses ihr (no ending)."
  },
  {
    category: "Accusative Neuter",
    prompt: "Ich habe ___ Buch. (my)",
    hint: "das Buch, accusative",
    options: ["mein", "meine", "meinen", "meinem"],
    correctIndex: 0,
    explanation: "Neuter accusative stays mein (no -e/-en here)."
  }
];

const conjugationPronounOrder = ["ich", "du", "er", "wir", "ihr", "sie"];

const conjugationPronounMeta = {
  ich: { label: "ich", english: "I" },
  du: { label: "du", english: "you (singular informal)" },
  er: { label: "er/sie/es", english: "he/she/it" },
  wir: { label: "wir", english: "we" },
  ihr: { label: "ihr", english: "you (plural informal)" },
  sie: { label: "sie/Sie", english: "they / you (formal)" }
};

const reflexivePronounMap = {
  ich: "mich",
  du: "dich",
  er: "sich",
  wir: "uns",
  ihr: "euch",
  sie: "sich"
};

const auxiliaryPresentMap = {
  haben: {
    ich: "habe",
    du: "hast",
    er: "hat",
    wir: "haben",
    ihr: "habt",
    sie: "haben"
  },
  sein: {
    ich: "bin",
    du: "bist",
    er: "ist",
    wir: "sind",
    ihr: "seid",
    sie: "sind"
  }
};

const regularPresentEndings = {
  ich: "e",
  du: "st",
  er: "t",
  wir: "en",
  ihr: "t",
  sie: "en"
};

const conjugationLessons = [
  {
    shortLabel: "Base",
    title: "Step 1: Conjugation Basics (Who does the action?)",
    explanation:
      "German verbs change their form depending on the subject pronoun. First find the subject in Nominativ, then choose the verb ending.",
    bullets: [
      "Nominativ subjects: ich, du, er/sie/es, wir, ihr, sie/Sie.",
      "The same infinitive verb has different forms: ich lerne, du lernst, wir lernen.",
      "Always identify the subject first, then conjugate."
    ],
    exampleLines: [
      "Nominativ subject: <em>Ich</em> lerne Deutsch.",
      "Nominativ subject: <em>Du</em> lernst Deutsch."
    ],
    miniCheck: {
      prompt: "Which pronoun is the Nominativ subject in: Wir kaufen ein Ticket?",
      options: ["kaufen", "ein Ticket", "Wir", "Ticket"],
      correctIndex: 2,
      explanation: "Wir is the subject (Nominativ), so the verb form must match wir."
    }
  },
  {
    shortLabel: "Regel",
    title: "Step 2: Regular Verbs in Präsens",
    explanation:
      "Regular verbs follow predictable endings. Learn one pattern well, then apply it to many verbs.",
    bullets: [
      "Infinitive: lernen -> stem lern-",
      "Endings: -e, -st, -t, -en, -t, -en",
      "Example set: ich lerne, du lernst, er lernt, wir lernen, ihr lernt, sie lernen"
    ],
    exampleLines: [
      "Ich <em>mache</em> die Hausaufgabe.",
      "Du <em>kaufst</em> ein Ticket."
    ],
    miniCheck: {
      prompt: "Choose the correct form: Du ___ Deutsch. (lernen)",
      options: ["lerne", "lernst", "lernt", "lernen"],
      correctIndex: 1,
      explanation: "For du in present tense, regular verbs usually take -st: du lernst."
    }
  },
  {
    shortLabel: "Arten",
    title: "Step 3: Different Verb Types",
    explanation:
      "Not all verbs follow the basic regular pattern. Learn the main groups and their key behavior.",
    bullets: [
      "Stem-changing verbs: du/er form often changes (fahren -> du fährst).",
      "Irregular core verbs: sein, haben are fundamental and must be memorized.",
      "Modal verbs: können, müssen, wollen change strongly.",
      "Separable verbs: prefix moves to the end in main clauses (aufstehen -> Ich stehe ... auf).",
      "Reflexive verbs: use reflexive pronouns (ich erinnere mich)."
    ],
    exampleLines: [
      "Ich <em>fahre</em> nach Berlin, du <em>fährst</em> nach Berlin.",
      "Ich <em>stehe</em> um sieben Uhr <em>auf</em>."
    ],
    miniCheck: {
      prompt: "Which sentence shows a separable verb in present tense?",
      options: [
        "Ich stehe auf um sieben Uhr.",
        "Ich aufstehe um sieben Uhr.",
        "Ich stehe um sieben Uhr auf.",
        "Ich habe aufgestanden um sieben Uhr."
      ],
      correctIndex: 2,
      explanation: "In present main clauses, the separable prefix goes to the end: Ich stehe ... auf."
    }
  },
  {
    shortLabel: "Fälle",
    title: "Step 4: Conjugation with Nominativ + Akkusativ",
    explanation:
      "Conjugation and case work together. The subject is in Nominativ; many verbs also take an Akkusativ object.",
    bullets: [
      "Nominativ subject: Ich sehe ...",
      "Akkusativ object: ... den Hund.",
      "Masculine singular changes in Akkusativ: der -> den."
    ],
    exampleLines: [
      "<em>Ich</em> (Nominativ) <em>lese</em> <em>das Buch</em> (Akkusativ).",
      "<em>Er</em> (Nominativ) <em>kauft</em> <em>den Computer</em> (Akkusativ)."
    ],
    miniCheck: {
      prompt: "Which phrase is the Akkusativ object in: Ich kaufe den Computer?",
      options: ["Ich", "kaufe", "den Computer", "none"],
      correctIndex: 2,
      explanation: "Den Computer receives the action and is the direct object in Akkusativ."
    }
  },
  {
    shortLabel: "Fortschritt",
    title: "Step 5: Tenses and Lesson Progress Path",
    explanation:
      "After present tense, beginners usually learn Perfekt for spoken past. Then the path can continue to Dativ, Genitiv, and advanced clause structures.",
    bullets: [
      "Perfekt pattern: auxiliary + participle (ich habe gelernt / ich bin gefahren).",
      "Use haben with many verbs; use sein with movement/state-change verbs.",
      "Keep growing lesson by lesson: Present -> Perfekt -> Dativ -> Genitiv -> advanced syntax."
    ],
    exampleLines: [
      "Präsens: Ich lerne Deutsch.",
      "Perfekt: Ich habe Deutsch gelernt."
    ],
    miniCheck: {
      prompt: "Choose the correct Perfekt sentence:",
      options: [
        "Ich habe gefahren nach Berlin.",
        "Ich bin nach Berlin gefahren.",
        "Ich bin gefahrene nach Berlin.",
        "Ich habe nach Berlin fahren."
      ],
      correctIndex: 1,
      explanation: "Fahren usually takes sein in Perfekt: Ich bin nach Berlin gefahren."
    }
  }
];

const conjugationVerbTypeMeta = {
  regular: { label: "Regular verbs", description: "predictable endings in present tense" },
  stem: { label: "Stem-changing verbs", description: "du/er forms often change vowels" },
  irregular: { label: "Core irregular verbs", description: "high-frequency verbs to memorize" },
  modal: { label: "Modal verbs", description: "express ability, need, permission" },
  separable: { label: "Separable verbs", description: "prefix moves to clause end in present" },
  reflexive: { label: "Reflexive verbs", description: "use reflexive pronouns (mich/dich/...)" }
};

const conjugationVerbCatalog = {
  regular: [
    {
      id: "lernen",
      infinitive: "lernen",
      english: "to learn",
      stem: "lern",
      perfectAux: "haben",
      participle: "gelernt",
      defaultMode: "akkusativ",
      accObject: { de: "Deutsch", en: "German" },
      note: "Regular -en verb."
    },
    {
      id: "machen",
      infinitive: "machen",
      english: "to do / make",
      stem: "mach",
      perfectAux: "haben",
      participle: "gemacht",
      defaultMode: "akkusativ",
      accObject: { de: "die Hausaufgabe", en: "the homework" },
      note: "Regular verb used often in beginner sentences."
    },
    {
      id: "kaufen",
      infinitive: "kaufen",
      english: "to buy",
      stem: "kauf",
      perfectAux: "haben",
      participle: "gekauft",
      defaultMode: "akkusativ",
      accObject: { de: "ein Ticket", en: "a ticket" },
      note: "Great for Nominativ + Akkusativ practice."
    }
  ],
  stem: [
    {
      id: "lesen",
      infinitive: "lesen",
      english: "to read",
      present: {
        ich: "lese",
        du: "liest",
        er: "liest",
        wir: "lesen",
        ihr: "lest",
        sie: "lesen"
      },
      perfectAux: "haben",
      participle: "gelesen",
      defaultMode: "akkusativ",
      accObject: { de: "das Buch", en: "the book" },
      note: "Stem change in du/er: e -> ie."
    },
    {
      id: "fahren",
      infinitive: "fahren",
      english: "to drive / go",
      present: {
        ich: "fahre",
        du: "fährst",
        er: "fährt",
        wir: "fahren",
        ihr: "fahrt",
        sie: "fahren"
      },
      perfectAux: "sein",
      participle: "gefahren",
      defaultMode: "nominativ",
      complement: { de: "nach Berlin", en: "to Berlin" },
      note: "Stem change in du/er: a -> ä."
    }
  ],
  irregular: [
    {
      id: "sein",
      infinitive: "sein",
      english: "to be",
      present: {
        ich: "bin",
        du: "bist",
        er: "ist",
        wir: "sind",
        ihr: "seid",
        sie: "sind"
      },
      perfectAux: "sein",
      participle: "gewesen",
      defaultMode: "nominativ",
      complement: { de: "müde", en: "tired" },
      note: "Most important irregular verb."
    },
    {
      id: "haben",
      infinitive: "haben",
      english: "to have",
      present: {
        ich: "habe",
        du: "hast",
        er: "hat",
        wir: "haben",
        ihr: "habt",
        sie: "haben"
      },
      perfectAux: "haben",
      participle: "gehabt",
      defaultMode: "akkusativ",
      accObject: { de: "Zeit", en: "time" },
      note: "Core verb for possession and auxiliary use."
    }
  ],
  modal: [
    {
      id: "können",
      infinitive: "können",
      english: "to be able to / can",
      present: {
        ich: "kann",
        du: "kannst",
        er: "kann",
        wir: "können",
        ihr: "könnt",
        sie: "können"
      },
      perfectAux: "haben",
      participle: "gekonnt",
      defaultMode: "nominativ",
      complement: { de: "Deutsch sprechen", en: "speak German" },
      note: "Modal verb; often combined with another infinitive."
    },
    {
      id: "müssen",
      infinitive: "müssen",
      english: "to have to / must",
      present: {
        ich: "muss",
        du: "musst",
        er: "muss",
        wir: "müssen",
        ihr: "müsst",
        sie: "müssen"
      },
      perfectAux: "haben",
      participle: "gemusst",
      defaultMode: "nominativ",
      complement: { de: "früh aufstehen", en: "get up early" },
      note: "Modal verb with changed vowel in singular."
    }
  ],
  separable: [
    {
      id: "aufstehen",
      infinitive: "aufstehen",
      english: "to get up",
      stem: "steh",
      prefix: "auf",
      perfectAux: "sein",
      participle: "aufgestanden",
      defaultMode: "nominativ",
      complement: { de: "um sieben Uhr", en: "at seven o'clock" },
      note: "Prefix moves to the end in present main clauses."
    },
    {
      id: "einkaufen",
      infinitive: "einkaufen",
      english: "to shop",
      stem: "kauf",
      prefix: "ein",
      perfectAux: "haben",
      participle: "eingekauft",
      defaultMode: "akkusativ",
      accObject: { de: "Obst", en: "fruit" },
      note: "Separable verb with common daily-use meaning."
    }
  ],
  reflexive: [
    {
      id: "sich_erinnern",
      infinitive: "sich erinnern",
      english: "to remember",
      stem: "erinner",
      reflexive: true,
      perfectAux: "haben",
      participle: "erinnert",
      defaultMode: "nominativ",
      complement: { de: "an den Termin", en: "about the appointment" },
      note: "Reflexive pronoun changes with subject."
    },
    {
      id: "sich_freuen",
      infinitive: "sich freuen",
      english: "to be happy / look forward",
      stem: "freu",
      reflexive: true,
      perfectAux: "haben",
      participle: "gefreut",
      defaultMode: "nominativ",
      complement: { de: "auf den Urlaub", en: "about the vacation" },
      note: "Common reflexive verb in spoken German."
    }
  ]
};

const possessiveOwnerMap = {
  ich: { stem: "mein", label: "my" },
  du: { stem: "dein", label: "your (informal singular)" },
  er: { stem: "sein", label: "his" },
  sie: { stem: "ihr", label: "her" },
  wir: { stem: "unser", label: "our" },
  ihr: { stem: "euer", label: "your (plural informal)" },
  Sie: { stem: "Ihr", label: "your (formal)" }
};

const drillPhraseMap = {
  "der Hund": {
    accusative: "den Hund",
    note: "Masculine singular changes: der -> den."
  },
  "die Frau": {
    accusative: "die Frau",
    note: "Feminine does not change in the accusative."
  },
  "das Kind": {
    accusative: "das Kind",
    note: "Neuter does not change in the accusative."
  },
  "die Kinder": {
    accusative: "die Kinder",
    note: "Plural die stays die in the accusative."
  },
  "der Lehrer": {
    accusative: "den Lehrer",
    note: "Masculine singular changes: der -> den."
  },
  "das Buch": {
    accusative: "das Buch",
    note: "Neuter does not change in the accusative."
  }
};

const form = document.getElementById("lookup-form");
const input = document.getElementById("word-input");
const submitButton = form.querySelector("button[type='submit']");
const resultCard = document.getElementById("result-card");
const wordList = document.getElementById("word-list");
const stats = document.getElementById("stats");
const randomBtn = document.getElementById("random-btn");
const filterButtons = Array.from(document.querySelectorAll(".filter-btn[data-filter]"));
const genderBatchWordInput = document.getElementById("gender-batch-word-input");
const genderBatchAddBtn = document.getElementById("gender-batch-add-btn");
const genderBatchTagsWrap = document.getElementById("gender-batch-tags");
const genderBatchCountChip = document.getElementById("gender-batch-count");
const genderBatchModeToggle = document.getElementById("gender-batch-mode-toggle");
const genderBatchModeSimpleBtn = document.getElementById("gender-batch-mode-simple-btn");
const genderBatchModeComplexBtn = document.getElementById("gender-batch-mode-complex-btn");
const genderBatchGenerateBtn = document.getElementById("gender-batch-generate-btn");
const genderBatchClearBtn = document.getElementById("gender-batch-clear-btn");
const genderBatchStatus = document.getElementById("gender-batch-status");
const genderBatchResults = document.getElementById("gender-batch-results");

const tabButtons = Array.from(document.querySelectorAll(".tab-btn"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

const accStepProgress = document.getElementById("acc-step-progress");
const accStepperDots = document.getElementById("acc-stepper-dots");
const accStepContent = document.getElementById("acc-step-content");
const accPrevStepBtn = document.getElementById("acc-prev-step");
const accNextStepBtn = document.getElementById("acc-next-step");
const accPhraseSelect = document.getElementById("acc-phrase-select");
const accVerbSelect = document.getElementById("acc-verb-select");
const accDrillResult = document.getElementById("acc-drill-result");
const accQuizScore = document.getElementById("acc-quiz-score");
const accQuizCard = document.getElementById("acc-quiz-card");
const accQuizOptions = document.getElementById("acc-quiz-options");
const accQuizFeedback = document.getElementById("acc-quiz-feedback");
const accQuizCheckBtn = document.getElementById("acc-quiz-check");
const accQuizNextBtn = document.getElementById("acc-quiz-next");
const accQuizResetBtn = document.getElementById("acc-quiz-reset");

const conjStepProgress = document.getElementById("conj-step-progress");
const conjStepperDots = document.getElementById("conj-stepper-dots");
const conjStepContent = document.getElementById("conj-step-content");
const conjPrevStepBtn = document.getElementById("conj-prev-step");
const conjNextStepBtn = document.getElementById("conj-next-step");
const conjTypeSelect = document.getElementById("conj-type-select");
const conjVerbSelect = document.getElementById("conj-verb-select");
const conjTenseSelect = document.getElementById("conj-tense-select");
const conjSubjectSelect = document.getElementById("conj-subject-select");
const conjPatternSelect = document.getElementById("conj-pattern-select");
const conjBuilderResult = document.getElementById("conj-builder-result");
const conjConjugationTable = document.getElementById("conj-conjugation-table");
const conjRoadmapProgress = document.getElementById("conj-roadmap-progress");
const conjRoadmapList = document.getElementById("conj-roadmap-list");
const conjugationPanel = document.getElementById("panel-conjugation");

const posStepProgress = document.getElementById("pos-step-progress");
const posStepperDots = document.getElementById("pos-stepper-dots");
const posStepContent = document.getElementById("pos-step-content");
const posPrevStepBtn = document.getElementById("pos-prev-step");
const posNextStepBtn = document.getElementById("pos-next-step");
const posOwnerSelect = document.getElementById("pos-owner-select");
const posNounSelect = document.getElementById("pos-noun-select");
const posCaseSelect = document.getElementById("pos-case-select");
const posBuilderResult = document.getElementById("pos-builder-result");
const posQuizScore = document.getElementById("pos-quiz-score");
const posQuizCard = document.getElementById("pos-quiz-card");
const posQuizOptions = document.getElementById("pos-quiz-options");
const posQuizFeedback = document.getElementById("pos-quiz-feedback");
const posQuizCheckBtn = document.getElementById("pos-quiz-check");
const posQuizNextBtn = document.getElementById("pos-quiz-next");
const posQuizResetBtn = document.getElementById("pos-quiz-reset");

const timeNowBtn = document.getElementById("time-now-btn");
const timeRandomBtn = document.getElementById("time-random-btn");
const timeHourInput = document.getElementById("time-hour-input");
const timeMinuteInput = document.getElementById("time-minute-input");
const timeDigitalChip = document.getElementById("time-digital-chip");
const time12hChip = document.getElementById("time-12h-chip");
const clockFace = document.getElementById("clock-face");
const clockHourHand = document.getElementById("clock-hour-hand");
const clockMinuteHand = document.getElementById("clock-minute-hand");
const timeOfficialCard = document.getElementById("time-official-card");
const timeUnofficialCard = document.getElementById("time-unofficial-card");
const numbersPanel = document.getElementById("panel-numbers");
const numbersRandomBtn = document.getElementById("numbers-random-btn");
const numbersValueRange = document.getElementById("numbers-value-range");
const numbersValueInput = document.getElementById("numbers-value-input");
const numbersQuickList = document.getElementById("numbers-quick-list");
const numbersCardinalCard = document.getElementById("numbers-cardinal-card");
const numbersOrdinalCard = document.getElementById("numbers-ordinal-card");
const numbersDateformCard = document.getElementById("numbers-dateform-card");
const numbersBreakdown = document.getElementById("numbers-breakdown");
const numbersBreakdownNote = document.getElementById("numbers-breakdown-note");
const numbersOrdinalReference = document.getElementById("numbers-ordinal-reference");
const numbersDaySelect = document.getElementById("numbers-day-select");
const numbersMonthSelect = document.getElementById("numbers-month-select");
const numbersDateTopicSelect = document.getElementById("numbers-date-topic-select");
const numbersDatePhraseCard = document.getElementById("numbers-date-phrase-card");
const numbersDateExampleCard = document.getElementById("numbers-date-example-card");
const numbersDateBreakdown = document.getElementById("numbers-date-breakdown");
const numbersQuizScore = document.getElementById("numbers-quiz-score");
const numbersQuizCard = document.getElementById("numbers-quiz-card");
const numbersQuizOptions = document.getElementById("numbers-quiz-options");
const numbersQuizFeedback = document.getElementById("numbers-quiz-feedback");
const numbersQuizCheckBtn = document.getElementById("numbers-quiz-check");
const numbersQuizNextBtn = document.getElementById("numbers-quiz-next");
const numbersQuizResetBtn = document.getElementById("numbers-quiz-reset");
const sentenceInput = document.getElementById("sentence-input");
const sentenceClearBtn = document.getElementById("sentence-clear-btn");
const sentenceLiveCard = document.getElementById("sentence-live-card");
const sentenceLiveTranslation = document.getElementById("sentence-live-translation");
const sentenceLiveStatus = document.getElementById("sentence-live-status");
const sentenceModeToggle = document.getElementById("sentence-mode-toggle");
const sentenceModeGrammarBtn = document.getElementById("sentence-mode-grammar-btn");
const sentenceModeStrictBtn = document.getElementById("sentence-mode-strict-btn");
const sentenceModeHelp = document.getElementById("sentence-mode-help");
const sentenceValidateBtn = document.getElementById("sentence-validate-btn");
const sentenceVerdictChip = document.getElementById("sentence-verdict-chip");
const sentenceOriginalCard = document.getElementById("sentence-original-card");
const sentenceCorrectedCard = document.getElementById("sentence-corrected-card");
const sentenceOriginalText = document.getElementById("sentence-original-text");
const sentenceCorrectedText = document.getElementById("sentence-corrected-text");
const sentenceOriginalActions = document.getElementById("sentence-original-actions");
const sentenceCorrectedActions = document.getElementById("sentence-corrected-actions");
const sentenceValidationMessage = document.getElementById("sentence-validation-message");
const sentenceIssuesList = document.getElementById("sentence-issues-list");
const sentenceAlternativesList = document.getElementById("sentence-alternatives-list");
const sentenceHistoryList = document.getElementById("sentence-history-list");
const sentenceHistoryClearBtn = document.getElementById("sentence-history-clear-btn");
const keyboardPanel = document.getElementById("panel-keyboard");
const keyboardInput = document.getElementById("keyboard-input");
const keyboardOutput = document.getElementById("keyboard-output");
const keyboardStatus = document.getElementById("keyboard-status");
const keyboardChanges = document.getElementById("keyboard-changes");
const keyboardLayout = document.getElementById("keyboard-layout");
const keyboardConvertBtn = document.getElementById("keyboard-convert-btn");
const keyboardFixBtn = document.getElementById("keyboard-fix-btn");
const keyboardCopyBtn = document.getElementById("keyboard-copy-btn");
const keyboardClearBtn = document.getElementById("keyboard-clear-btn");
const keyboardOutputActions = document.getElementById("keyboard-output-actions");
const keyboardLiveAssistBtn = document.getElementById("keyboard-live-assist-btn");
const keyboardSensitivityToggle = document.getElementById("keyboard-sensitivity-toggle");
const keyboardSensitivityHelp = document.getElementById("keyboard-sensitivity-help");
const keyboardSuggestions = document.getElementById("keyboard-suggestions");
const keyboardQuickPhrases = document.getElementById("keyboard-quick-phrases");

let activeFilter = "all";
let highlightedWord = null;
let latestLookupRequest = 0;
let genderBatchMode = "simple";
let latestGenderBatchRequest = 0;
let genderBatchTags = [];
const genderBatchLookupCache = new Map();
const verbConjugationPronounOrder = ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"];
const verbConjugationTenseOrder = ["Präsens", "Präteritum", "Perfekt", "Plusquamperfekt"];

let currentAccusativeStep = 0;
const accusativeStepState = accusativeSteps.map(() => ({
  selectedIndex: null,
  checked: false,
  completed: false
}));

let currentConjugationStep = 0;
const conjugationStepState = conjugationLessons.map(() => ({
  selectedIndex: null,
  checked: false,
  completed: false
}));

let quizDeck = [];
let currentQuizQuestion = null;
let currentQuizQuestionIndex = -1;
let selectedQuizOptionIndex = null;
let quizAnswered = false;
let quizScoreState = { correct: 0, total: 0 };

let currentPossessiveStep = 0;
const possessiveStepState = possessiveSteps.map(() => ({
  selectedIndex: null,
  checked: false,
  completed: false
}));

let possessiveQuizDeck = [];
let currentPossessiveQuizQuestion = null;
let selectedPossessiveQuizOptionIndex = null;
let possessiveQuizAnswered = false;
let possessiveQuizScoreState = { correct: 0, total: 0 };

let clockMarkupBuilt = false;
let numbersQuizQuestion = null;
let numbersQuizSelectedIndex = null;
let numbersQuizAnswered = false;
let numbersQuizScoreState = { correct: 0, total: 0 };
let latestSentenceTranslateRequest = 0;
let latestSentenceValidateRequest = 0;
let sentenceTranslateDebounceTimer = null;
let sentenceValidationMode = "grammar";
let sentenceHistory = [];
let keyboardLiveAssistEnabled = true;
let keyboardSensitivity = "medium";

const SENTENCE_HISTORY_STORAGE_KEY = "germanLearningSentenceHistoryV1";
const SENTENCE_HISTORY_LIMIT = 18;
const GENDER_BATCH_TAG_LIMIT = 10;
const NUMBERS_MAX_VALUE = 999;
const appConfig = (typeof window !== "undefined" && window.APP_CONFIG && typeof window.APP_CONFIG === "object")
  ? window.APP_CONFIG
  : {};
const API_BASE_URL = String(appConfig.API_BASE_URL || "")
  .trim()
  .replace(/\/+$/, "");
const USE_EXTERNAL_API = Boolean(API_BASE_URL);

const genderLabels = {
  masculine: "Masculine",
  feminine: "Feminine",
  neuter: "Neuter"
};

const numbersQuickPickValues = [
  0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 15, 16, 18, 20, 21, 24, 30, 31, 42, 55, 99, 100, 101, 256, 999
];

const ordinalReferenceValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30];

const germanMonthNames = [
  "",
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

const englishMonthNames = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const numbersDateTopicTemplates = {
  birthday: {
    label: "Birthday",
    de(datePhrase) {
      return `Ich habe ${datePhrase} Geburtstag.`;
    },
    en(dayOrdinal, monthEnglish) {
      return `My birthday is on ${dayOrdinal} ${monthEnglish}.`;
    },
    introChip: { de: "Ich habe", en: "I have / It is my" },
    outroChip: { de: "Geburtstag", en: "birthday" }
  },
  exam: {
    label: "Exam",
    de(datePhrase) {
      return `Die Prüfung ist ${datePhrase}.`;
    },
    en(dayOrdinal, monthEnglish) {
      return `The exam is on ${dayOrdinal} ${monthEnglish}.`;
    },
    introChip: { de: "Die Prüfung ist", en: "The exam is" },
    outroChip: null
  },
  meeting: {
    label: "Appointment",
    de(datePhrase) {
      return `Der Termin ist ${datePhrase}.`;
    },
    en(dayOrdinal, monthEnglish) {
      return `The appointment is on ${dayOrdinal} ${monthEnglish}.`;
    },
    introChip: { de: "Der Termin ist", en: "The appointment is" },
    outroChip: null
  },
  holiday: {
    label: "Holiday",
    de(datePhrase) {
      return `Der Feiertag ist ${datePhrase}.`;
    },
    en(dayOrdinal, monthEnglish) {
      return `The holiday is on ${dayOrdinal} ${monthEnglish}.`;
    },
    introChip: { de: "Der Feiertag ist", en: "The holiday is" },
    outroChip: null
  }
};

const keyboardGermanWordFixMap = new Map(Object.entries({
  strasse: "straße",
  grosse: "große",
  gross: "groß",
  gruess: "grüß",
  gruss: "gruß",
  gruesse: "grüße",
  heisse: "heiße",
  heissen: "heißen",
  heiss: "heiß",
  weiss: "weiß",
  ausser: "außer",
  fuer: "für",
  ueber: "über",
  schoen: "schön",
  moechte: "möchte",
  koennen: "können",
  muessen: "müssen",
  duerfen: "dürfen",
  fuesse: "füße",
  muenchen: "münchen",
  koeln: "köln",
  froehlich: "fröhlich"
}));

const virtualGermanKeyboardRows = [
  ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
  ["y", "x", "c", "v", "b", "n", "m", "ß"],
  ["Ä", "Ö", "Ü", "ẞ", ",", ".", "?", "!", "-"],
  [
    { label: "Space", value: " ", classes: ["vk-key--extra-wide", "vk-key--action"] },
    { label: "Enter", action: "newline", classes: ["vk-key--wide", "vk-key--action"] },
    { label: "Backspace", action: "backspace", classes: ["vk-key--wide", "vk-key--action"] }
  ]
];

const keyboardSensitivityProfiles = {
  low: {
    label: "Low",
    helpText: "Low keeps only basic conversion support and very light checks.",
    useWordFixMap: true,
    capitalizeSentenceStarts: false,
    capitalizeKnownNouns: false,
    maxSuggestions: 2,
    maxDistance: 0
  },
  medium: {
    label: "Medium",
    helpText: "Medium keeps corrections balanced for regular class writing.",
    useWordFixMap: true,
    capitalizeSentenceStarts: true,
    capitalizeKnownNouns: false,
    maxSuggestions: 5,
    maxDistance: 1
  },
  high: {
    label: "High",
    helpText: "High adds stricter spelling checks and noun capitalization support.",
    useWordFixMap: true,
    capitalizeSentenceStarts: true,
    capitalizeKnownNouns: true,
    maxSuggestions: 8,
    maxDistance: 2
  }
};

const keyboardClassroomPhraseLibrary = [
  {
    de: "Entschuldigung, können Sie das bitte wiederholen?",
    en: "Excuse me, could you repeat that please?"
  },
  {
    de: "Können Sie das bitte langsamer sagen?",
    en: "Could you please say that more slowly?"
  },
  {
    de: "Ich habe eine Frage.",
    en: "I have a question."
  },
  {
    de: "Ich habe das nicht verstanden.",
    en: "I did not understand that."
  },
  {
    de: "Wie schreibt man das auf Deutsch?",
    en: "How do you write that in German?"
  },
  {
    de: "Können Sie ein Beispiel geben?",
    en: "Could you give an example?"
  },
  {
    de: "Was bedeutet das auf Englisch?",
    en: "What does that mean in English?"
  },
  {
    de: "Darf ich kurz auf die Toilette gehen?",
    en: "May I quickly go to the restroom?"
  }
];

const keyboardAltShortcutCharMap = new Map(Object.entries({
  a: { normal: "ä", shifted: "Ä" },
  o: { normal: "ö", shifted: "Ö" },
  u: { normal: "ü", shifted: "Ü" },
  s: { normal: "ß", shifted: "ẞ" }
}));

const keyboardVocabularyDisplayMap = new Map();
const keyboardNounVocabularySet = new Set();
let keyboardVocabularyIndex = [];

const localWordMap = new Map();
for (const entry of words) {
  localWordMap.set(normalizeWord(entry.word), entry);
}

const localPluralFallbackMap = new Map(Object.entries({
  tisch: { forms: ["Tische"] },
  stuhl: { forms: ["Stühle"] },
  apfel: { forms: ["Äpfel"] },
  lehrer: { forms: ["Lehrer"] },
  hund: { forms: ["Hunde"] },
  tag: { forms: ["Tage"] },
  zug: { forms: ["Züge"] },
  computer: { forms: ["Computer"] },
  frau: { forms: ["Frauen"] },
  tasche: { forms: ["Taschen"] },
  schule: { forms: ["Schulen"] },
  lampe: { forms: ["Lampen"] },
  zeitung: { forms: ["Zeitungen"] },
  stadt: { forms: ["Städte"] },
  milch: { noPlural: true },
  musik: { noPlural: true },
  haus: { forms: ["Häuser"] },
  kind: { forms: ["Kinder"] },
  auto: { forms: ["Autos"] },
  buch: { forms: ["Bücher"] },
  wasser: { forms: ["Wasser", "Wässer"] },
  fenster: { forms: ["Fenster"] },
  mädchen: { forms: ["Mädchen"] },
  telefon: { forms: ["Telefone"] }
}));

function normalizeWord(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^(der|die|das)\s+/i, "")
    .replace(/[.,!?;:]+$/g, "")
    .normalize("NFC");
}

function searchWord(value) {
  const normalized = normalizeWord(value);
  return normalized ? localWordMap.get(normalized) || null : null;
}

function findSimilarWords(value) {
  const normalized = normalizeWord(value);
  if (!normalized) return [];

  return words
    .filter((entry) => entry.word.toLowerCase().includes(normalized))
    .slice(0, 5);
}

function extractGermanWordTokens(value) {
  return String(value || "").match(/[A-Za-zÄÖÜäöüßẞ]+/g) || [];
}

function normalizeGermanToken(value) {
  return String(value || "")
    .replace(/[^A-Za-zÄÖÜäöüßẞ]/g, "")
    .toLocaleLowerCase("de-DE")
    .trim()
    .normalize("NFC");
}

function isCapitalizedWord(value) {
  const text = String(value || "");
  if (!text) return false;
  const first = text[0];
  return first === first.toLocaleUpperCase("de-DE") && first !== first.toLocaleLowerCase("de-DE");
}

function addKeyboardVocabularyToken(token, options = {}) {
  const normalized = normalizeGermanToken(token);
  if (!normalized) return;

  const safeToken = String(token || "").trim();
  if (!safeToken) return;

  const previous = keyboardVocabularyDisplayMap.get(normalized);
  if (!previous) {
    keyboardVocabularyDisplayMap.set(normalized, safeToken);
  } else {
    const preferNew = isCapitalizedWord(safeToken) && !isCapitalizedWord(previous);
    if (preferNew) {
      keyboardVocabularyDisplayMap.set(normalized, safeToken);
    }
  }

  if (options.isNoun) {
    keyboardNounVocabularySet.add(normalized);
  }
}

function addKeyboardVocabularyTerms(value, options = {}) {
  const tokens = extractGermanWordTokens(value);
  tokens.forEach((token) => {
    addKeyboardVocabularyToken(token, options);
  });
}

function buildKeyboardVocabularyIndex() {
  keyboardVocabularyDisplayMap.clear();
  keyboardNounVocabularySet.clear();

  words.forEach((entry) => {
    addKeyboardVocabularyTerms(entry.word, { isNoun: true });
  });

  for (const info of localPluralFallbackMap.values()) {
    const forms = Array.isArray(info?.forms) ? info.forms : [];
    const phrases = Array.isArray(info?.phrases) ? info.phrases : [];
    forms.forEach((form) => {
      addKeyboardVocabularyTerms(form, { isNoun: true });
    });
    phrases.forEach((phrase) => {
      addKeyboardVocabularyTerms(phrase, { isNoun: true });
    });
  }

  for (const [source, target] of keyboardGermanWordFixMap.entries()) {
    addKeyboardVocabularyTerms(source);
    addKeyboardVocabularyTerms(target);
  }

  Object.values(conjugationVerbCatalog).forEach((verbList) => {
    (Array.isArray(verbList) ? verbList : []).forEach((verb) => {
      addKeyboardVocabularyTerms(verb?.infinitive);
      addKeyboardVocabularyTerms(verb?.participle);
      if (verb?.present && typeof verb.present === "object") {
        Object.values(verb.present).forEach((form) => {
          addKeyboardVocabularyTerms(form);
        });
      }
    });
  });

  keyboardClassroomPhraseLibrary.forEach((phrase) => {
    addKeyboardVocabularyTerms(phrase?.de);
  });

  keyboardVocabularyIndex = Array.from(keyboardVocabularyDisplayMap.keys());
}

function getKeyboardSensitivityProfile(level = keyboardSensitivity) {
  if (level && keyboardSensitivityProfiles[level]) {
    return keyboardSensitivityProfiles[level];
  }
  return keyboardSensitivityProfiles.medium;
}

function updateKeyboardSensitivityButtons() {
  if (!keyboardSensitivityToggle) return;

  const buttons = Array.from(keyboardSensitivityToggle.querySelectorAll("[data-keyboard-sensitivity]"));
  buttons.forEach((button) => {
    const isActive = button.dataset.keyboardSensitivity === keyboardSensitivity;
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("filter-btn--ghost", !isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (keyboardSensitivityHelp) {
    keyboardSensitivityHelp.textContent = getKeyboardSensitivityProfile().helpText;
  }
}

function updateKeyboardLiveAssistButton() {
  if (!keyboardLiveAssistBtn) return;

  keyboardLiveAssistBtn.textContent = keyboardLiveAssistEnabled
    ? "Live Assist: ON"
    : "Live Assist: OFF";
  keyboardLiveAssistBtn.classList.toggle("is-active", keyboardLiveAssistEnabled);
  keyboardLiveAssistBtn.classList.toggle("filter-btn--ghost", !keyboardLiveAssistEnabled);
  keyboardLiveAssistBtn.setAttribute("aria-pressed", String(keyboardLiveAssistEnabled));
}

function setKeyboardSensitivity(level) {
  keyboardSensitivity = keyboardSensitivityProfiles[level] ? level : "medium";
  updateKeyboardSensitivityButtons();
  renderKeyboardOutputPreview();
}

function setKeyboardLiveAssistEnabled(enabled) {
  keyboardLiveAssistEnabled = Boolean(enabled);
  updateKeyboardLiveAssistButton();
  renderKeyboardOutputPreview();
}

function uniqueNonEmptyStrings(values) {
  const seen = new Set();
  const output = [];

  for (const value of values || []) {
    const normalized = String(value || "").trim();
    if (!normalized) continue;
    const key = normalized.toLocaleLowerCase("de-DE");
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(normalized);
  }

  return output;
}

function normalizePluralSurfaceClient(value) {
  const cleaned = String(value || "")
    .trim()
    .replace(/^(der|die|das)\s+/i, "")
    .replace(/[.,;:]+$/g, "")
    .replace(/\s+/g, " ");
  return cleaned || null;
}

function normalizePluralInfo(input) {
  if (!input || typeof input !== "object") return null;

  const formsFromPayload = Array.isArray(input.forms)
    ? input.forms
    : (Array.isArray(input.pluralForms) ? input.pluralForms : []);
  const phrasesFromPayload = Array.isArray(input.phrases)
    ? input.phrases
    : (Array.isArray(input.withArticle) ? input.withArticle : []);

  const forms = uniqueNonEmptyStrings(formsFromPayload
    .map(normalizePluralSurfaceClient)
    .filter(Boolean));
  const phrases = uniqueNonEmptyStrings(phrasesFromPayload.map((phrase) => String(phrase || "").trim()));

  if (phrases.length === 0 && forms.length > 0) {
    for (const form of forms) {
      phrases.push(`die ${form}`);
    }
  }

  if (forms.length === 0 && phrases.length > 0) {
    for (const phrase of phrases) {
      const normalized = normalizePluralSurfaceClient(phrase);
      if (normalized) forms.push(normalized);
    }
  }

  const noPlural = Boolean(input.noPlural) && forms.length === 0 && phrases.length === 0;
  if (forms.length === 0 && phrases.length === 0 && !noPlural) {
    return null;
  }

  return {
    forms,
    phrases: uniqueNonEmptyStrings(phrases),
    noPlural
  };
}

function getLocalPluralInfo(entryOrWord) {
  const key = normalizeWord(typeof entryOrWord === "string" ? entryOrWord : entryOrWord?.word);
  if (!key) return null;
  return normalizePluralInfo(localPluralFallbackMap.get(key) || null);
}

function buildPluralLineText(pluralInfo) {
  if (!pluralInfo) {
    return "Plural: not available yet";
  }

  if (pluralInfo.noPlural) {
    return "Plural: usually no common plural form";
  }

  const pluralPhrases = Array.isArray(pluralInfo.phrases) ? pluralInfo.phrases.filter(Boolean) : [];
  if (pluralPhrases.length === 0) {
    return "Plural: not available yet";
  }

  return `Plural: ${pluralPhrases.join(" / ")}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderBreakdownChips(target, chips) {
  if (!target) return;
  const safeChips = Array.isArray(chips) ? chips.filter(Boolean) : [];

  if (safeChips.length === 0) {
    target.innerHTML = "<span class=\"sentence-breakdown__chip\"><strong>-</strong> Add input to see a breakdown.</span>";
    return;
  }

  target.innerHTML = safeChips.map((chip) => {
    const left = chip?.de ? `<strong>${escapeHtml(chip.de)}</strong>` : "<strong>-</strong>";
    const right = chip?.en ? ` = ${escapeHtml(chip.en)}` : "";
    return `<span class="sentence-breakdown__chip">${left}${right}</span>`;
  }).join("");
}

function getBadgeClass(gender) {
  return `badge badge--${gender}`;
}

function speechSupported() {
  return typeof window !== "undefined"
    && "speechSynthesis" in window
    && "SpeechSynthesisUtterance" in window;
}

function speakGermanText(text) {
  if (!speechSupported() || !text) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.92;
  utterance.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function buildSpeakButtonHtml(text, label) {
  if (!speechSupported() || !text) return "";

  return `
    <button
      type="button"
      class="speak-btn"
      data-speak-text="${escapeHtml(text)}"
      aria-label="${escapeHtml(label || "Speak German text")}"
      title="Speak pronunciation"
    >
      🔊
    </button>
  `;
}

function buildApiUrl(pathname, params = {}) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const basePath = USE_EXTERNAL_API ? `${API_BASE_URL}${normalizedPath}` : normalizedPath;
  const url = new URL(basePath, window.location.origin);

  for (const [key, value] of Object.entries(params || {})) {
    if (value === null || value === undefined || value === "") continue;
    url.searchParams.set(key, String(value));
  }

  if (USE_EXTERNAL_API) {
    return url.toString();
  }

  return `${url.pathname}${url.search}`;
}

function normalizeSentenceInputClient(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .normalize("NFC");
}

function preserveWordCase(sourceWord, targetWord) {
  const source = String(sourceWord || "");
  const target = String(targetWord || "");
  if (!source || !target) return target;

  if (source === source.toLocaleUpperCase("de-DE")) {
    return target.toLocaleUpperCase("de-DE");
  }

  const first = source[0];
  if (first && first === first.toLocaleUpperCase("de-DE")) {
    return `${target[0]?.toLocaleUpperCase("de-DE") || ""}${target.slice(1)}`;
  }

  return target;
}

function convertEnglishStyleWordToGerman(word, options = {}) {
  const rawWord = String(word || "");
  if (!rawWord) return rawWord;

  const shouldUseWordFixMap = options.useWordFixMap !== false;
  const lower = rawWord.toLocaleLowerCase("de-DE");
  if (shouldUseWordFixMap && keyboardGermanWordFixMap.has(lower)) {
    const mapped = keyboardGermanWordFixMap.get(lower);
    return preserveWordCase(rawWord, mapped);
  }

  let transformed = rawWord;
  transformed = transformed
    .replace(/Ae/g, "Ä")
    .replace(/Oe/g, "Ö")
    .replace(/Ue/g, "Ü")
    .replace(/ae/g, "ä")
    .replace(/oe/g, "ö")
    .replace(/ue/g, "ü");

  if (transformed !== rawWord) {
    return transformed;
  }

  return rawWord;
}

function convertEnglishStyleGermanText(text, options = {}) {
  const source = String(text || "");
  const changes = [];

  const converted = source.replace(/\b[A-Za-zÄÖÜäöüßẞ]+\b/g, (word) => {
    const next = convertEnglishStyleWordToGerman(word, options);
    if (next !== word) {
      changes.push(`${word} -> ${next}`);
    }
    return next;
  });

  return {
    text: converted.normalize("NFC"),
    changes: uniqueNonEmptyStrings(changes)
  };
}

function correctMinorGermanMistakes(text, options = {}) {
  const settings = {
    punctuationSpacing: options.punctuationSpacing !== false,
    collapseSpaces: options.collapseSpaces !== false,
    trimValue: options.trimValue !== false,
    capitalizeSentenceStarts: options.capitalizeSentenceStarts !== false,
    capitalizeKnownNouns: Boolean(options.capitalizeKnownNouns)
  };

  let value = String(text || "");
  const changes = [];

  if (settings.punctuationSpacing) {
    const beforePunctuation = value;
    value = value.replace(/\s+([,.;:!?])/g, "$1");
    if (value !== beforePunctuation) {
      changes.push("Removed extra spaces before punctuation.");
    }

    const spacingAfterPunctuation = value;
    value = value.replace(/([,.;:!?])([^\s\n])/g, "$1 $2");
    if (value !== spacingAfterPunctuation) {
      changes.push("Added missing spaces after punctuation.");
    }
  }

  if (settings.collapseSpaces) {
    const collapseSpaces = value;
    value = value.replace(/[ \t]{2,}/g, " ");
    if (settings.trimValue) {
      value = value.trim();
    }
    if (value !== collapseSpaces) {
      changes.push("Collapsed repeated spaces.");
    }
  } else if (settings.trimValue) {
    value = value.trim();
  }

  if (settings.capitalizeSentenceStarts) {
    const sentenceCase = value;
    value = value.replace(/(^|[.!?]\s+)([a-zäöü])/g, (match, prefix, letter) => (
      `${prefix}${letter.toLocaleUpperCase("de-DE")}`
    ));
    if (value !== sentenceCase) {
      changes.push("Capitalized sentence starts.");
    }
  }

  if (settings.capitalizeKnownNouns) {
    const nounExamples = [];
    const nounCase = value;
    value = value.replace(/\b[A-Za-zÄÖÜäöüßẞ]+\b/g, (word) => {
      const normalized = normalizeGermanToken(word);
      if (!normalized || !keyboardNounVocabularySet.has(normalized) || isCapitalizedWord(word)) {
        return word;
      }
      const next = `${word[0]?.toLocaleUpperCase("de-DE") || ""}${word.slice(1)}`;
      if (nounExamples.length < 3 && next !== word) {
        nounExamples.push(`${word} -> ${next}`);
      }
      return next;
    });
    if (value !== nounCase) {
      const note = nounExamples.length > 0
        ? `Capitalized common nouns (${nounExamples.join(", ")}).`
        : "Capitalized common nouns.";
      changes.push(note);
    }
  }

  return {
    text: value.normalize("NFC"),
    changes: uniqueNonEmptyStrings(changes)
  };
}

function transformKeyboardText(rawText, options = {}) {
  const profile = getKeyboardSensitivityProfile(options.sensitivity || keyboardSensitivity);
  const conversion = convertEnglishStyleGermanText(rawText, {
    useWordFixMap: profile.useWordFixMap
  });
  const correction = correctMinorGermanMistakes(conversion.text, {
    capitalizeSentenceStarts: profile.capitalizeSentenceStarts,
    capitalizeKnownNouns: profile.capitalizeKnownNouns
  });
  return {
    text: correction.text,
    changes: uniqueNonEmptyStrings([...(conversion.changes || []), ...(correction.changes || [])])
  };
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function levenshteinDistance(a, b) {
  const left = String(a || "");
  const right = String(b || "");
  if (left === right) return 0;
  if (!left.length) return right.length;
  if (!right.length) return left.length;

  const previous = new Array(right.length + 1);
  const current = new Array(right.length + 1);

  for (let j = 0; j <= right.length; j += 1) {
    previous[j] = j;
  }

  for (let i = 1; i <= left.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= right.length; j += 1) {
      const substitutionCost = left[i - 1] === right[j - 1] ? 0 : 1;
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + substitutionCost
      );
    }
    for (let j = 0; j <= right.length; j += 1) {
      previous[j] = current[j];
    }
  }

  return previous[right.length];
}

function findClosestKeyboardWord(word, maxDistance) {
  const token = normalizeGermanToken(word);
  if (!token || maxDistance <= 0 || keyboardVocabularyIndex.length === 0) {
    return null;
  }

  let best = null;
  for (const candidate of keyboardVocabularyIndex) {
    const lengthDiff = Math.abs(candidate.length - token.length);
    if (lengthDiff > maxDistance) continue;
    if (maxDistance <= 1 && candidate[0] !== token[0]) continue;

    const distance = levenshteinDistance(token, candidate);
    if (distance > maxDistance) continue;

    if (!best || distance < best.distance || (distance === best.distance && candidate.length < best.word.length)) {
      best = {
        word: candidate,
        distance,
        display: keyboardVocabularyDisplayMap.get(candidate) || candidate
      };
    }
  }

  return best;
}

function buildKeyboardSmartSuggestions(rawText, level = keyboardSensitivity) {
  const profile = getKeyboardSensitivityProfile(level);
  const suggestions = [];
  const seen = new Set();
  const textWords = extractGermanWordTokens(rawText);

  const pushSuggestion = (from, to, reason) => {
    const source = String(from || "").trim();
    const target = String(to || "").trim();
    if (!source || !target || source === target) return;

    const key = `${source.toLocaleLowerCase("de-DE")}::${target.toLocaleLowerCase("de-DE")}`;
    if (seen.has(key)) return;
    seen.add(key);
    suggestions.push({ from: source, to: target, reason });
  };

  for (const word of textWords) {
    if (suggestions.length >= profile.maxSuggestions) break;
    const converted = convertEnglishStyleWordToGerman(word, { useWordFixMap: true });

    if (converted !== word) {
      pushSuggestion(word, converted, "German spelling update.");
      if (suggestions.length >= profile.maxSuggestions) break;
    }

    const normalizedConverted = normalizeGermanToken(converted);
    if (!normalizedConverted || normalizedConverted.length < 3) continue;

    if (profile.capitalizeKnownNouns && keyboardNounVocabularySet.has(normalizedConverted) && !isCapitalizedWord(converted)) {
      const nounVersion = `${converted[0]?.toLocaleUpperCase("de-DE") || ""}${converted.slice(1)}`;
      pushSuggestion(word, nounVersion, "Nouns are capitalized in German.");
      if (suggestions.length >= profile.maxSuggestions) break;
    }

    if (profile.maxDistance <= 0 || keyboardVocabularyDisplayMap.has(normalizedConverted)) continue;

    const closest = findClosestKeyboardWord(normalizedConverted, profile.maxDistance);
    if (!closest) continue;

    const match = preserveWordCase(converted, closest.display);
    if (normalizeGermanToken(match) === normalizedConverted) continue;
    pushSuggestion(word, match, "Close spelling match.");
  }

  return suggestions.slice(0, profile.maxSuggestions);
}

function renderKeyboardSuggestions(items) {
  if (!keyboardSuggestions) return;

  const list = Array.isArray(items) ? items.filter(Boolean) : [];
  if (list.length === 0) {
    const message = keyboardLiveAssistEnabled
      ? "No urgent suggestions right now."
      : "Turn Live Assist ON to get suggestions while typing.";
    keyboardSuggestions.innerHTML = `<p class="muted keyboard-suggestions__empty">${escapeHtml(message)}</p>`;
    return;
  }

  keyboardSuggestions.innerHTML = list.map((item) => `
    <button
      type="button"
      class="keyboard-suggestion-btn"
      data-keyboard-apply-from="${escapeHtml(item.from)}"
      data-keyboard-apply-to="${escapeHtml(item.to)}"
    >
      <span class="keyboard-suggestion-btn__main">${escapeHtml(item.from)} -> ${escapeHtml(item.to)}</span>
      <span class="keyboard-suggestion-btn__reason">${escapeHtml(item.reason || "Suggestion")}</span>
    </button>
  `).join("");
}

function renderKeyboardQuickPhrases() {
  if (!keyboardQuickPhrases) return;

  keyboardQuickPhrases.innerHTML = keyboardClassroomPhraseLibrary.map((item) => `
    <div class="keyboard-quick-item">
      <button type="button" class="keyboard-quick-btn" data-keyboard-phrase="${escapeHtml(item.de)}">
        ${escapeHtml(item.de)}
      </button>
      ${buildSpeakButtonHtml(item.de, `Speak phrase: ${item.de}`)}
      <p class="keyboard-quick-item__en">${escapeHtml(item.en)}</p>
    </div>
  `).join("");
}

function replaceGermanWordOccurrences(text, searchWord, replacementWord) {
  const source = String(searchWord || "").trim();
  if (!source) {
    return { text: String(text || ""), replacements: 0 };
  }

  const pattern = new RegExp(
    `(^|[^A-Za-zÄÖÜäöüßẞ])(${escapeRegExp(source)})(?=[^A-Za-zÄÖÜäöüßẞ]|$)`,
    "gi"
  );

  let replacements = 0;
  const updated = String(text || "").replace(pattern, (match, prefix, word) => {
    replacements += 1;
    return `${prefix}${preserveWordCase(word, replacementWord)}`;
  });

  return { text: updated, replacements };
}

function applyKeyboardSuggestion(from, to) {
  if (!keyboardInput) return;

  const source = String(from || "").trim();
  const target = String(to || "").trim();
  if (!source || !target) return;

  const result = replaceGermanWordOccurrences(keyboardInput.value, source, target);
  if (result.replacements === 0) return;

  keyboardInput.value = result.text;
  renderKeyboardOutputPreview();
  keyboardInput.focus();

  if (keyboardStatus) {
    keyboardStatus.textContent = `Applied suggestion: ${source} -> ${target}.`;
  }
}

function insertKeyboardQuickPhrase(phrase) {
  if (!keyboardInput) return;

  const text = String(phrase || "").trim();
  if (!text) return;

  const cursor = keyboardInput.selectionStart ?? keyboardInput.value.length;
  const before = keyboardInput.value.slice(0, cursor);
  const needsSpace = before.length > 0 && !/[\s\n]$/.test(before);
  insertTextAtCursor(keyboardInput, `${needsSpace ? " " : ""}${text}`);
  renderKeyboardOutputPreview();

  if (keyboardStatus) {
    keyboardStatus.textContent = "Quick class phrase inserted.";
  }
}

function getKeyboardAltShortcutCharacter(event) {
  if (!event || !event.altKey || event.ctrlKey || event.metaKey) return "";

  const key = String(event.key || "");
  if (!key) return "";
  const normalized = key.toLocaleLowerCase("de-DE");
  const mapping = keyboardAltShortcutCharMap.get(normalized);
  if (!mapping) return "";

  return event.shiftKey ? mapping.shifted : mapping.normal;
}

function renderKeyboardChanges(changeItems) {
  if (!keyboardChanges) return;
  const items = Array.isArray(changeItems) ? changeItems.filter(Boolean) : [];

  if (items.length === 0) {
    keyboardChanges.innerHTML = "<li>No corrections needed yet.</li>";
    return;
  }

  keyboardChanges.innerHTML = items
    .slice(0, 10)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderKeyboardOutputPreview() {
  if (!keyboardInput || !keyboardOutput) return;

  const rawText = String(keyboardInput.value || "");
  const profile = getKeyboardSensitivityProfile();
  const result = keyboardLiveAssistEnabled
    ? transformKeyboardText(rawText, { sensitivity: keyboardSensitivity })
    : { text: rawText.normalize("NFC"), changes: [] };
  const suggestions = buildKeyboardSmartSuggestions(rawText, keyboardSensitivity);
  keyboardOutput.value = result.text;
  renderKeyboardChanges(result.changes);
  renderKeyboardSuggestions(suggestions);

  if (keyboardStatus) {
    if (!rawText.trim()) {
      keyboardStatus.textContent = "Type text to see live German conversion and fixes.";
    } else if (!keyboardLiveAssistEnabled) {
      keyboardStatus.textContent = `Live Assist is OFF. Turn it ON for instant ${profile.label.toLowerCase()} support.`;
    } else if (result.changes.length === 0) {
      keyboardStatus.textContent = suggestions.length > 0
        ? `Looks good. ${suggestions.length} quick suggestion${suggestions.length === 1 ? "" : "s"} available.`
        : "Looks good. No corrections needed.";
    } else {
      keyboardStatus.textContent = `Live ${profile.label.toLowerCase()} assist applied ${result.changes.length} correction${result.changes.length === 1 ? "" : "s"}.`;
    }
  }

  if (keyboardOutputActions) {
    keyboardOutputActions.innerHTML = buildSpeakButtonHtml(result.text, "Speak German keyboard output");
  }
}

function insertTextAtCursor(inputEl, value) {
  if (!inputEl || typeof inputEl.value !== "string") return;

  const start = inputEl.selectionStart ?? inputEl.value.length;
  const end = inputEl.selectionEnd ?? inputEl.value.length;
  const before = inputEl.value.slice(0, start);
  const after = inputEl.value.slice(end);
  const next = `${before}${value}${after}`;
  inputEl.value = next;

  const cursor = start + String(value).length;
  inputEl.setSelectionRange(cursor, cursor);
  inputEl.focus();
}

function handleVirtualKeyboardAction(action) {
  if (!keyboardInput) return;
  const start = keyboardInput.selectionStart ?? keyboardInput.value.length;
  const end = keyboardInput.selectionEnd ?? keyboardInput.value.length;

  if (action === "backspace") {
    if (start !== end) {
      keyboardInput.value = `${keyboardInput.value.slice(0, start)}${keyboardInput.value.slice(end)}`;
      keyboardInput.setSelectionRange(start, start);
    } else if (start > 0) {
      keyboardInput.value = `${keyboardInput.value.slice(0, start - 1)}${keyboardInput.value.slice(start)}`;
      keyboardInput.setSelectionRange(start - 1, start - 1);
    }
    keyboardInput.focus();
    renderKeyboardOutputPreview();
    return;
  }

  if (action === "newline") {
    insertTextAtCursor(keyboardInput, "\n");
    renderKeyboardOutputPreview();
  }
}

function renderVirtualKeyboardLayout() {
  if (!keyboardLayout) return;

  keyboardLayout.innerHTML = virtualGermanKeyboardRows.map((row) => {
    const keyButtons = row.map((key) => {
      if (typeof key === "string") {
        return `
          <button type="button" class="vk-key" data-vk-value="${escapeHtml(key)}">
            ${escapeHtml(key)}
          </button>
        `;
      }

      const classes = ["vk-key", ...(Array.isArray(key.classes) ? key.classes : [])].join(" ");
      const valueAttr = key.value !== undefined ? `data-vk-value="${escapeHtml(String(key.value))}"` : "";
      const actionAttr = key.action ? `data-vk-action="${escapeHtml(key.action)}"` : "";
      return `
        <button type="button" class="${escapeHtml(classes)}" ${valueAttr} ${actionAttr}>
          ${escapeHtml(key.label || key.value || "")}
        </button>
      `;
    }).join("");

    return `<div class="virtual-keyboard__row">${keyButtons}</div>`;
  }).join("");
}

function applyKeyboardEnglishToGermanConversion() {
  if (!keyboardInput) return;
  const before = String(keyboardInput.value || "");
  const profile = getKeyboardSensitivityProfile();
  const conversion = convertEnglishStyleGermanText(before, {
    useWordFixMap: profile.useWordFixMap
  });
  keyboardInput.value = conversion.text;
  renderKeyboardOutputPreview();
  keyboardInput.focus();

  if (keyboardStatus) {
    keyboardStatus.textContent = conversion.changes.length > 0
      ? `Converted ${conversion.changes.length} item${conversion.changes.length === 1 ? "" : "s"} to German spelling.`
      : "No English-style spellings found to convert.";
  }
}

function applyKeyboardMinorFixes() {
  if (!keyboardInput) return;
  const before = String(keyboardInput.value || "");
  const profile = getKeyboardSensitivityProfile();
  const correction = correctMinorGermanMistakes(before, {
    capitalizeSentenceStarts: profile.capitalizeSentenceStarts,
    capitalizeKnownNouns: profile.capitalizeKnownNouns
  });
  keyboardInput.value = correction.text;
  renderKeyboardOutputPreview();
  keyboardInput.focus();

  if (keyboardStatus) {
    keyboardStatus.textContent = correction.changes.length > 0
      ? `Fixed ${correction.changes.length} small issue${correction.changes.length === 1 ? "" : "s"}.`
      : "No small mistakes found.";
  }
}

function clearKeyboardWorkbench() {
  if (!keyboardInput || !keyboardOutput) return;
  keyboardInput.value = "";
  keyboardOutput.value = "";
  renderKeyboardChanges([]);
  renderKeyboardSuggestions([]);
  if (keyboardOutputActions) {
    keyboardOutputActions.innerHTML = "";
  }
  if (keyboardStatus) {
    keyboardStatus.textContent = "Cleared. Type text to see live German conversion and fixes.";
  }
  keyboardInput.focus();
}

async function copyKeyboardOutputText() {
  if (!keyboardOutput || !keyboardStatus) return;
  const text = String(keyboardOutput.value || "").trim();
  if (!text) {
    keyboardStatus.textContent = "Nothing to copy yet.";
    return;
  }

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      keyboardStatus.textContent = "German output copied to clipboard.";
      return;
    }
  } catch {
    // fallback below
  }

  keyboardOutput.removeAttribute("readonly");
  keyboardOutput.select();
  const copied = typeof document.execCommand === "function"
    ? document.execCommand("copy")
    : false;
  keyboardOutput.setAttribute("readonly", "readonly");
  keyboardStatus.textContent = copied
    ? "German output copied to clipboard."
    : "Copy is not available in this browser.";
}

function canUseLocalStorage() {
  try {
    return typeof window !== "undefined" && !!window.localStorage;
  } catch {
    return false;
  }
}

function sentenceModeLabel(mode) {
  return mode === "strict" ? "Strict" : "Grammar Only";
}

function updateSentenceModeButtons() {
  const isGrammar = sentenceValidationMode !== "strict";
  const buttons = [sentenceModeGrammarBtn, sentenceModeStrictBtn].filter(Boolean);

  buttons.forEach((button) => {
    const isActive = button.dataset.sentenceMode === sentenceValidationMode;
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("filter-btn--ghost", !isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (sentenceModeHelp) {
    sentenceModeHelp.textContent = isGrammar
      ? "Grammar Only checks grammar/spelling. Style suggestions are shown only in Strict mode."
      : "Strict mode counts grammar, spelling, and style suggestions in the verdict.";
  }
}

function setSentenceValidationMode(mode) {
  sentenceValidationMode = mode === "strict" ? "strict" : "grammar";
  updateSentenceModeButtons();
}

function loadSentenceHistoryFromStorage() {
  if (!canUseLocalStorage()) return [];

  try {
    const raw = window.localStorage.getItem(SENTENCE_HISTORY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((item) => ({
        id: String(item?.id || `${Date.now()}-${Math.random()}`),
        timestamp: Number(item?.timestamp || Date.now()),
        sentence: normalizeSentenceInputClient(item?.sentence || ""),
        correctedSentence: normalizeSentenceInputClient(item?.correctedSentence || item?.sentence || ""),
        englishTranslation: item?.englishTranslation ? String(item.englishTranslation) : null,
        isCorrect: Boolean(item?.isCorrect),
        issueCount: Math.max(0, Number(item?.issueCount || 0)),
        mode: item?.mode === "strict" ? "strict" : "grammar"
      }))
      .filter((item) => item.sentence)
      .slice(0, SENTENCE_HISTORY_LIMIT);
  } catch {
    return [];
  }
}

function saveSentenceHistoryToStorage() {
  if (!canUseLocalStorage()) return;

  try {
    window.localStorage.setItem(
      SENTENCE_HISTORY_STORAGE_KEY,
      JSON.stringify(sentenceHistory.slice(0, SENTENCE_HISTORY_LIMIT))
    );
  } catch {
    // Ignore storage quota / privacy mode errors.
  }
}

function formatHistoryTimestamp(timestamp) {
  try {
    return new Date(timestamp).toLocaleString();
  } catch {
    return "";
  }
}

function renderSentenceHistory() {
  if (!sentenceHistoryList) return;

  if (!Array.isArray(sentenceHistory) || sentenceHistory.length === 0) {
    sentenceHistoryList.innerHTML = "<p class=\"muted\">No history yet. Validate a sentence to save it here.</p>";
    return;
  }

  sentenceHistoryList.innerHTML = sentenceHistory.map((entry) => {
    const correctedDifferent = normalizeSentenceInputClient(entry.correctedSentence) !== normalizeSentenceInputClient(entry.sentence);
    const english = entry.englishTranslation ? `<p class="sentence-history-item__meta"><strong>English:</strong> ${escapeHtml(entry.englishTranslation)}</p>` : "";
    const corrected = correctedDifferent
      ? `<p class="sentence-history-item__corrected">Corrected: ${escapeHtml(entry.correctedSentence)}</p>`
      : "";

    return `
      <article class="sentence-history-item" data-history-id="${escapeHtml(entry.id)}">
        <div class="sentence-history-item__top">
          <div class="sentence-history-item__badges">
            <span class="sentence-history-badge ${entry.isCorrect ? "is-correct" : "is-wrong"}">
              ${entry.isCorrect ? "Correct" : `Needs fix (${entry.issueCount})`}
            </span>
            <span class="sentence-history-badge ${entry.mode === "strict" ? "is-strict" : "is-grammar"}">
              ${escapeHtml(sentenceModeLabel(entry.mode))}
            </span>
          </div>
          <p class="sentence-history-item__meta">${escapeHtml(formatHistoryTimestamp(entry.timestamp))}</p>
        </div>
        <p class="sentence-history-item__sentence">${escapeHtml(entry.sentence)}</p>
        ${corrected}
        ${english}
        <div class="sentence-history-actions">
          <button type="button" class="filter-btn filter-btn--ghost" data-history-action="use-original">Use Sentence</button>
          <button type="button" class="filter-btn filter-btn--ghost" data-history-action="use-corrected" ${correctedDifferent ? "" : "disabled"}>Use Corrected</button>
          <button type="button" class="filter-btn" data-history-action="revalidate">Validate Again</button>
        </div>
      </article>
    `;
  }).join("");
}

function addSentenceHistoryEntry(payload) {
  const validation = payload?.validation || {};
  const sentence = normalizeSentenceInputClient(payload?.sentence || "");
  if (!sentence) return;

  const correctedSentence = normalizeSentenceInputClient(validation.correctedSentence || sentence);
  const mode = validation.mode === "strict" ? "strict" : "grammar";
  const dedupeKey = `${mode}::${sentence.toLocaleLowerCase("de-DE")}`;

  sentenceHistory = sentenceHistory.filter((entry) => {
    const key = `${entry.mode}::${entry.sentence.toLocaleLowerCase("de-DE")}`;
    return key !== dedupeKey;
  });

  sentenceHistory.unshift({
    id: `${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`,
    timestamp: Date.now(),
    sentence,
    correctedSentence,
    englishTranslation: payload?.englishTranslation || null,
    isCorrect: Boolean(validation.isCorrect),
    issueCount: Math.max(0, Number(validation.issueCount || 0)),
    mode
  });

  sentenceHistory = sentenceHistory.slice(0, SENTENCE_HISTORY_LIMIT);
  saveSentenceHistoryToStorage();
  renderSentenceHistory();
}

function findSentenceHistoryEntryById(id) {
  return sentenceHistory.find((entry) => entry.id === id) || null;
}

function loadSentenceIntoEditor(text) {
  sentenceInput.value = text || "";
  scheduleLiveSentenceTranslation();
  sentenceInput.focus();
}

function getIssueBeginnerHint(issue) {
  if (issue?.beginnerHint && typeof issue.beginnerHint === "object") {
    const topic = String(issue.beginnerHint.topic || "grammar");
    const explanation = String(issue.beginnerHint.explanation || "").trim();
    if (explanation) {
      return { topic, explanation };
    }
  }

  return {
    topic: "grammar",
    explanation: "Compare the suggestion with the sentence context and check the verb, article, and noun ending agreement."
  };
}

function capitalizeGermanNounClient(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return `${text[0].toLocaleUpperCase("de-DE")}${text.slice(1)}`;
}

function normalizeGenderBatchTagInput(value) {
  return capitalizeGermanNounClient(normalizeWord(value));
}

function setGenderBatchStatus(message) {
  if (!genderBatchStatus) return;
  genderBatchStatus.textContent = message;
}

function renderGenderBatchModeButtons() {
  const buttons = [genderBatchModeSimpleBtn, genderBatchModeComplexBtn].filter(Boolean);
  buttons.forEach((button) => {
    const isActive = button.dataset.genderBatchMode === genderBatchMode;
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("filter-btn--ghost", !isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setGenderBatchMode(mode) {
  genderBatchMode = mode === "complex" ? "complex" : "simple";
  renderGenderBatchModeButtons();
  const modeLabel = genderBatchMode === "complex" ? "complex" : "simple";
  setGenderBatchStatus(`Mode set to ${modeLabel} sentences. Add nouns as tags and click Generate.`);
}

function renderGenderBatchTags() {
  if (!genderBatchTagsWrap || !genderBatchCountChip) return;

  genderBatchCountChip.textContent = `${genderBatchTags.length} / ${GENDER_BATCH_TAG_LIMIT} tags`;

  if (genderBatchTags.length === 0) {
    genderBatchTagsWrap.innerHTML = "<p class=\"gender-batch-tags__empty\">No tags yet. Add nouns one by one (max 10).</p>";
  } else {
    genderBatchTagsWrap.innerHTML = genderBatchTags.map((tag) => `
      <span class="gender-batch-tag" data-gender-batch-tag="${escapeHtml(tag)}">
        <span class="gender-batch-tag__word">${escapeHtml(tag)}</span>
        <button
          type="button"
          class="gender-batch-tag__remove"
          data-gender-batch-remove="${escapeHtml(tag)}"
          aria-label="Remove tag ${escapeHtml(tag)}"
          title="Remove tag"
        >
          ×
        </button>
      </span>
    `).join("");
  }

  if (genderBatchAddBtn) {
    genderBatchAddBtn.disabled = genderBatchTags.length >= GENDER_BATCH_TAG_LIMIT;
  }
  if (genderBatchGenerateBtn) {
    genderBatchGenerateBtn.disabled = genderBatchTags.length === 0;
  }
  if (genderBatchClearBtn) {
    genderBatchClearBtn.disabled = genderBatchTags.length === 0;
  }
}

function addGenderBatchTag(rawValue) {
  const tag = normalizeGenderBatchTagInput(rawValue);
  if (!tag) {
    setGenderBatchStatus("Type a German noun first, then add it as a tag.");
    return false;
  }

  const exists = genderBatchTags.some((item) => normalizeWord(item) === normalizeWord(tag));
  if (exists) {
    setGenderBatchStatus(`Tag "${tag}" is already added.`);
    return false;
  }

  if (genderBatchTags.length >= GENDER_BATCH_TAG_LIMIT) {
    setGenderBatchStatus(`You can add up to ${GENDER_BATCH_TAG_LIMIT} tags only.`);
    return false;
  }

  genderBatchTags.push(tag);
  renderGenderBatchTags();
  setGenderBatchStatus(`Added "${tag}". ${genderBatchTags.length} / ${GENDER_BATCH_TAG_LIMIT} tags ready.`);
  return true;
}

function removeGenderBatchTag(tagValue) {
  const before = genderBatchTags.length;
  genderBatchTags = genderBatchTags.filter((tag) => normalizeWord(tag) !== normalizeWord(tagValue));
  if (genderBatchTags.length !== before) {
    renderGenderBatchTags();
    setGenderBatchStatus(`Removed "${tagValue}". ${genderBatchTags.length} / ${GENDER_BATCH_TAG_LIMIT} tags ready.`);
  }
}

function clearGenderBatchTags() {
  genderBatchTags = [];
  renderGenderBatchTags();
  setGenderBatchStatus("Tags cleared. Add nouns one by one (max 10).");
  if (genderBatchResults) {
    genderBatchResults.innerHTML = "<p class=\"muted\">Generated sentences will appear here.</p>";
  }
}

function renderGenderBatchLoading(tags, mode = genderBatchMode) {
  if (!genderBatchResults) return;

  genderBatchResults.innerHTML = tags.map((tag) => `
    <article class="gender-batch-card">
      <p class="gender-batch-card__label">Generating</p>
      <p class="gender-batch-card__word">${escapeHtml(tag)}</p>
      <p class="gender-batch-card__note">Looking up live gender and creating a ${escapeHtml(mode)} study sentence...</p>
    </article>
  `).join("");
}

function buildGenderBatchLookupFromLocalEntry(entry) {
  return {
    ok: true,
    source: "local study list",
    word: entry.word,
    ambiguous: false,
    englishMeaning: entry.meaning || null,
    results: [{
      article: entry.article,
      gender: entry.gender,
      label: genderLabels[entry.gender]
    }]
  };
}

async function resolveGenderBatchWord(tag) {
  const key = normalizeWord(tag);
  if (!key) {
    return {
      ok: false,
      requestedWord: tag,
      message: "Empty tag."
    };
  }

  if (genderBatchLookupCache.has(key)) {
    return genderBatchLookupCache.get(key);
  }

  const localEntry = searchWord(tag);
  if (localEntry) {
    const localResult = buildGenderBatchLookupFromLocalEntry(localEntry);
    genderBatchLookupCache.set(key, localResult);
    return localResult;
  }

  try {
    const payload = await fetchLiveGender(tag);
    if (!payload.found) {
      const result = {
        ok: false,
        source: payload.source || "backend",
        requestedWord: tag,
        normalizedWord: payload.normalizedWord || tag,
        message: payload.message || "No live noun gender found for this word.",
        heuristicGuess: payload.heuristicGuess || null
      };
      genderBatchLookupCache.set(key, result);
      return result;
    }

    const liveResult = {
      ok: true,
      source: payload.source || "de.wiktionary.org",
      word: payload.normalizedWord || tag,
      ambiguous: Boolean(payload.ambiguous),
      englishMeaning: payload.englishMeaning || null,
      ...(payload.resolvedFromForm ? { resolvedFromForm: payload.resolvedFromForm } : {}),
      ...(Array.isArray(payload.lookupPath) ? { lookupPath: payload.lookupPath } : {}),
      results: Array.isArray(payload.results) ? payload.results : []
    };
    genderBatchLookupCache.set(key, liveResult);
    return liveResult;
  } catch (error) {
    return {
      ok: false,
      source: "backend",
      requestedWord: tag,
      message: error.message || "Live lookup failed."
    };
  }
}

function buildGenderBatchSentencePackage(lookup, mode) {
  const results = Array.isArray(lookup.results) ? lookup.results.filter(Boolean) : [];
  if (results.length === 0) {
    return null;
  }

  const primary = results[0];
  const nominativePhrase = `${primary.article} ${lookup.word}`;
  const accusativeArticle = toAccusativeArticle(primary.article);
  const accusativePhrase = `${accusativeArticle} ${lookup.word}`;
  const meaning = lookup.englishMeaning ? String(lookup.englishMeaning).trim() : null;
  const ambiguousNote = lookup.ambiguous
    ? "This word is ambiguous. The sentence uses the first gender form shown."
    : "";
  const resolvedFormNote = lookup.resolvedFromForm
    && normalizeWord(lookup.resolvedFromForm) !== normalizeWord(lookup.word)
    ? `Input form "${lookup.resolvedFromForm}" was resolved to the base noun "${lookup.word}".`
    : "";
  const articleChangeReason = primary.gender === "masculine"
    ? `The noun is masculine, so in the accusative the article changes from "${primary.article}" to "${accusativeArticle}".`
    : `The noun is ${primary.gender}, so the article stays "${primary.article}" in the accusative.`;

  const commonReasoning = [
    `Gender phrase: "${nominativePhrase}" (${genderLabels[primary.gender]}).`
  ];

  if (mode === "complex") {
    return {
      german: `Ich finde ${accusativePhrase} interessant, weil ${nominativePhrase} im Text wichtig ist.`,
      english: meaning
        ? `I find the ${meaning} interesting because the ${meaning} is important in the text.`
        : `I find ${nominativePhrase} interesting because ${nominativePhrase} is important in the text.`,
      breakdown: [
        { de: "Ich", en: "I" },
        { de: "finde", en: "find" },
        { de: accusativePhrase, en: meaning ? `the ${meaning}` : `${accusativePhrase} (German noun)` },
        { de: "interessant", en: "interesting" },
        { de: "weil", en: "because" },
        { de: nominativePhrase, en: meaning ? `the ${meaning}` : `${nominativePhrase}` },
        { de: "im Text", en: "in the text" },
        { de: "wichtig ist", en: "is important" }
      ],
      note: [resolvedFormNote, ambiguousNote, "Complex mode uses a main clause + a weil-clause (subordinate clause), which is common in exams."]
        .filter(Boolean)
        .join(" "),
      reasoning: [
        "The verb \"finden\" takes an accusative object in the main clause.",
        articleChangeReason,
        "The clause with \"weil\" is a subordinate clause, so the finite verb \"ist\" goes to the end.",
        `In the weil-clause, "${nominativePhrase}" is the subject (nominative).`,
        ...commonReasoning
      ]
    };
  }

  return {
    german: `Ich finde ${accusativePhrase} interessant.`,
    english: meaning
      ? `I find the ${meaning} interesting.`
      : `I find ${nominativePhrase} interesting.`,
    breakdown: [
      { de: "Ich", en: "I" },
      { de: "finde", en: "find" },
      { de: accusativePhrase, en: meaning ? `the ${meaning}` : `${accusativePhrase} (German noun)` },
      { de: "interessant", en: "interesting" }
    ],
    note: [resolvedFormNote, ambiguousNote, "Simple mode uses a correct exam-friendly sentence with an accusative object."]
      .filter(Boolean)
      .join(" "),
    reasoning: [
      "The sentence pattern is: subject + verb + accusative object + adjective.",
      "The verb \"finden\" here uses an accusative object.",
      articleChangeReason,
      ...commonReasoning
    ]
  };
}

function renderGenderBatchResults(items, mode = genderBatchMode) {
  if (!genderBatchResults) return;

  if (!Array.isArray(items) || items.length === 0) {
    genderBatchResults.innerHTML = "<p class=\"muted\">Generated sentences will appear here.</p>";
    return;
  }

  genderBatchResults.innerHTML = items.map((item, index) => {
    if (!item.ok) {
      const guessText = item.heuristicGuess
        ? ` A possible article to review is ${item.heuristicGuess.article} ${item.normalizedWord || item.requestedWord || "..."}.`
        : "";

      return `
        <article class="gender-batch-card gender-batch-card--error">
          <p class="gender-batch-card__label">Word ${index + 1} • Could not generate</p>
          <div class="gender-batch-card__top">
            <div>
              <p class="gender-batch-card__word">${escapeHtml(item.normalizedWord || item.requestedWord || "Unknown word")}</p>
              <p class="gender-batch-card__meta">Try the singular dictionary form of this noun.</p>
            </div>
          </div>
          <p class="gender-batch-card__note">${escapeHtml(item.message || "Gender could not be found.")}${escapeHtml(guessText)}</p>
        </article>
      `;
    }

    const lookup = item.lookup;
    const sentencePkg = item.sentence;
    const primary = lookup.results[0];
    const badgesHtml = lookup.results
      .map((result) => `<span class="${getBadgeClass(result.gender)}">${escapeHtml(result.article)} ${escapeHtml(result.label || genderLabels[result.gender])}</span>`)
      .join("");

    return `
      <article class="gender-batch-card gender-batch-card--${escapeHtml(primary.gender)}">
        <p class="gender-batch-card__label">Word ${index + 1} • ${escapeHtml(mode === "complex" ? "Complex" : "Simple")} sentence</p>
        <div class="gender-batch-card__top">
          <div>
            <p class="gender-batch-card__word">${escapeHtml(primary.article)} ${escapeHtml(lookup.word)}</p>
            <p class="gender-batch-card__meta">
              English meaning: ${escapeHtml(lookup.englishMeaning || "meaning unavailable")}
            </p>
          </div>
          <div class="result-card__actions">
            ${buildSpeakButtonHtml(sentencePkg.german, `Speak generated sentence for ${lookup.word}`)}
            <div class="result-card__badges">${badgesHtml}</div>
          </div>
        </div>
        <p class="gender-batch-card__label">German sentence</p>
        <p class="gender-batch-card__sentence">${escapeHtml(sentencePkg.german)}</p>
        <p class="gender-batch-card__label">English translation</p>
        <p class="gender-batch-card__translation">${escapeHtml(sentencePkg.english)}</p>
        <p class="gender-batch-card__label">English breakdown</p>
        <div class="sentence-breakdown">
          ${sentencePkg.breakdown.map((part) => `
            <span class="sentence-breakdown__chip"><strong>${escapeHtml(part.de)}</strong> = ${escapeHtml(part.en)}</span>
          `).join("")}
        </div>
        ${Array.isArray(sentencePkg.reasoning) && sentencePkg.reasoning.length > 0 ? `
          <p class="gender-batch-card__label">Why this sentence is correct (exam reasoning)</p>
          <ul class="gender-batch-card__reasoning">
            ${sentencePkg.reasoning.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
          </ul>
        ` : ""}
        ${sentencePkg.note ? `<p class="gender-batch-card__note">${escapeHtml(sentencePkg.note)}</p>` : ""}
      </article>
    `;
  }).join("");
}

async function generateGenderBatchSentences() {
  const tags = [...genderBatchTags];
  if (tags.length === 0) {
    setGenderBatchStatus("Add at least one noun tag before generating sentences.");
    return;
  }

  const requestId = ++latestGenderBatchRequest;
  const modeSnapshot = genderBatchMode;
  genderBatchGenerateBtn.disabled = true;
  renderGenderBatchLoading(tags, modeSnapshot);
  setGenderBatchStatus(`Generating ${modeSnapshot} sentences for ${tags.length} word${tags.length === 1 ? "" : "s"}...`);

  try {
    const items = await Promise.all(tags.map(async (tag) => {
      const lookup = await resolveGenderBatchWord(tag);
      if (!lookup.ok) {
        return lookup;
      }

      const sentence = buildGenderBatchSentencePackage(lookup, modeSnapshot);
      if (!sentence) {
        return {
          ok: false,
          requestedWord: tag,
          normalizedWord: lookup.word || tag,
          source: lookup.source || "backend",
          message: "A sentence could not be generated because no gender result was available."
        };
      }

      return {
        ok: true,
        lookup,
        sentence
      };
    }));

    if (requestId !== latestGenderBatchRequest) return;

    renderGenderBatchResults(items, modeSnapshot);

    const successCount = items.filter((item) => item.ok).length;
    const errorCount = items.length - successCount;
    if (errorCount === 0) {
      setGenderBatchStatus(`Done. Generated ${successCount} ${modeSnapshot} sentence${successCount === 1 ? "" : "s"}.`);
    } else {
      setGenderBatchStatus(`Done. Generated ${successCount} sentence${successCount === 1 ? "" : "s"} and skipped ${errorCount} word${errorCount === 1 ? "" : "s"} (gender not found).`);
    }
  } catch (error) {
    if (requestId !== latestGenderBatchRequest) return;
    genderBatchResults.innerHTML = "<p class=\"muted\">Sentence generation failed. Please try again.</p>";
    setGenderBatchStatus(error.message || "Sentence generation failed.");
  } finally {
    if (requestId === latestGenderBatchRequest) {
      genderBatchGenerateBtn.disabled = genderBatchTags.length === 0;
    }
  }
}

function toAccusativeArticle(article) {
  return article === "der" ? "den" : article;
}

function buildGenderExampleSentences({ word, results, englishMeaning, pluralInfo }) {
  if (!Array.isArray(results) || results.length === 0) return [];

  const articlePhrases = results.map((result) => `${result.article} ${word}`);
  const isAmbiguous = results.length > 1;

  if (isAmbiguous) {
    return [
      {
        de: `Dieses Wort kann verschiedene Artikel haben: ${articlePhrases.join(" / ")}.`,
        en: "This spelling can have different meanings depending on the article/gender."
      },
      {
        de: `Lerne jede Form einzeln: ${articlePhrases.join(", ")}.`,
        en: "Learn each form as separate vocabulary."
      }
    ];
  }

  const primary = results[0];
  const nominativePhrase = `${primary.article} ${word}`;
  const accusativePhrase = `${toAccusativeArticle(primary.article)} ${word}`;
  const english = englishMeaning ? String(englishMeaning).trim() : null;

  const sentences = [
    {
      de: `Das ist ${nominativePhrase}.`,
      en: english ? `This is the ${english}.` : "Simple example sentence with the noun."
    },
    {
      de: `Ich kenne ${accusativePhrase}.`,
      en: english ? `I know the ${english}.` : "Repeat this sentence to remember the article."
    }
  ];

  if (pluralInfo?.noPlural) {
    sentences.push({
      de: "Dieses Wort hat meistens keinen Plural.",
      en: "This word is usually uncountable and has no common plural form."
    });
  } else if (Array.isArray(pluralInfo?.phrases) && pluralInfo.phrases.length > 0) {
    sentences.push({
      de: `Im Plural sagt man: ${pluralInfo.phrases.join(" / ")}.`,
      en: `Plural form: ${pluralInfo.phrases.join(" / ")}.`
    });
  }

  return sentences;
}

function formatVerbConjugationValue(value) {
  if (!value) return "—";

  if (typeof value === "string") {
    const text = value.trim();
    return text || "—";
  }

  const primary = String(value.primary || "").trim();
  const variants = Array.isArray(value.variants)
    ? uniqueNonEmptyStrings(value.variants.map((item) => String(item || "").trim()).filter(Boolean))
    : [];
  const extras = variants.filter((item) => item !== primary);

  if (!primary && extras.length === 0) return "—";
  if (!primary) return extras.join(" / ");
  if (extras.length === 0) return primary;
  return `${primary} (${extras.join(" / ")})`;
}

function hasVerbConjugationDataClient(payload) {
  if (!payload || !payload.found) {
    return false;
  }

  if (payload.infinitive) return true;
  if (payload.participles?.partizipI || payload.participles?.partizipII) return true;

  if (payload.imperative && typeof payload.imperative === "object") {
    const hasImperative = Object.values(payload.imperative)
      .some((value) => formatVerbConjugationValue(value) !== "—");
    if (hasImperative) return true;
  }

  if (payload.tenses && typeof payload.tenses === "object") {
    return Object.values(payload.tenses).some((forms) => {
      if (!forms || typeof forms !== "object") return false;
      return Object.values(forms).some((value) => formatVerbConjugationValue(value) !== "—");
    });
  }

  return false;
}

function renderVerbTenseTableHtml(tenseLabel, forms) {
  if (!forms || typeof forms !== "object") return "";

  const rows = verbConjugationPronounOrder.map((pronoun) => ({
    pronoun,
    value: formatVerbConjugationValue(forms[pronoun])
  }));
  const hasAny = rows.some((row) => row.value !== "—");
  if (!hasAny) return "";

  return `
    <article class="result-verb-tense">
      <p class="result-verb-tense__label">${escapeHtml(tenseLabel)}</p>
      <table class="result-verb-table" aria-label="${escapeHtml(tenseLabel)} conjugation">
        <tbody>
          ${rows.map((row) => `
            <tr>
              <th scope="row">${escapeHtml(row.pronoun)}</th>
              <td><strong>${escapeHtml(row.value)}</strong></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </article>
  `;
}

function renderVerbConjugationSection(verbConjugation, fallbackWord = "") {
  if (!hasVerbConjugationDataClient(verbConjugation)) {
    return "";
  }

  const infinitive = String(verbConjugation.infinitive || fallbackWord || "").trim();
  const infinitivePerfect = String(verbConjugation.infinitivePerfect || "").trim();
  const participles = verbConjugation.participles || {};
  const partizipI = String(participles.partizipI || "").trim();
  const partizipII = String(participles.partizipII || "").trim();
  const imperative = verbConjugation.imperative && typeof verbConjugation.imperative === "object"
    ? verbConjugation.imperative
    : {};

  const imperativeParts = ["du", "ihr", "Sie"]
    .map((pronoun) => {
      const value = formatVerbConjugationValue(imperative[pronoun]);
      if (value === "—") return "";
      return `${pronoun}: ${value}`;
    })
    .filter(Boolean);

  const tenseCards = verbConjugationTenseOrder
    .map((tenseLabel) => renderVerbTenseTableHtml(tenseLabel, verbConjugation.tenses?.[tenseLabel]))
    .filter(Boolean)
    .join("");

  const formsSummary = [
    infinitive ? `Infinitive: ${infinitive}` : "",
    infinitivePerfect ? `Infinitive Perfekt: ${infinitivePerfect}` : "",
    partizipI ? `Partizip I: ${partizipI}` : "",
    partizipII ? `Partizip II: ${partizipII}` : ""
  ].filter(Boolean).join(" • ");

  const lookupHint = verbConjugation.resolvedFromForm
    && normalizeWord(verbConjugation.resolvedFromForm) !== normalizeWord(verbConjugation.normalizedWord || infinitive)
    ? `Resolved verb form: ${verbConjugation.resolvedFromForm} -> ${verbConjugation.normalizedWord || infinitive}.`
    : "";

  return `
    <section class="result-card__verb" aria-label="Live verb conjugation">
      <div class="result-card__verb-top">
        <div>
          <p class="result-card__verb-title">Live Verb Forms</p>
          <p class="result-card__verb-meta">${escapeHtml(formsSummary || "Conjugation forms found live.")}</p>
        </div>
        ${buildSpeakButtonHtml(infinitive, `Speak infinitive ${infinitive}`)}
      </div>
      ${imperativeParts.length > 0 ? `
        <p class="result-card__verb-imperative"><strong>Imperative:</strong> ${escapeHtml(imperativeParts.join(" • "))}</p>
      ` : ""}
      <div class="result-card__verb-tense-grid">
        ${tenseCards || "<p class=\"muted\">No tense table was available for this verb.</p>"}
      </div>
      ${lookupHint ? `<p class="result-card__verb-note">${escapeHtml(lookupHint)}</p>` : ""}
    </section>
  `;
}

function renderGenderStudyCard({ word, results, englishMeaning, pluralInfo, noteText, highlightWordName, verbConjugation }) {
  const safeResults = Array.isArray(results) ? results.filter(Boolean) : [];
  if (safeResults.length === 0) return;

  const isAmbiguous = safeResults.length > 1;
  const primary = safeResults[0];
  const normalizedPluralInfo = normalizePluralInfo(pluralInfo);
  const articlePhrases = safeResults.map((result) => `${result.article} ${word}`);
  const badgesHtml = safeResults
    .map((result) => `<span class="${getBadgeClass(result.gender)}">${escapeHtml(result.article)} ${escapeHtml(result.label || genderLabels[result.gender])}</span>`)
    .join("");

  const headline = isAmbiguous ? escapeHtml(word) : escapeHtml(articlePhrases[0]);
  const genderLine = isAmbiguous
    ? `Gender forms: ${articlePhrases.join(" / ")}`
    : `Gender: ${articlePhrases[0]} (${genderLabels[primary.gender]})`;
  const displayedMeaning = englishMeaning || (isAmbiguous
    ? "meaning depends on the article/gender"
    : "meaning unavailable");
  const pluralLine = buildPluralLineText(normalizedPluralInfo);

  const examples = buildGenderExampleSentences({
    word,
    results: safeResults,
    englishMeaning,
    pluralInfo: normalizedPluralInfo
  });

  const pluralSpeakText = normalizedPluralInfo?.noPlural
    ? "Dieses Wort hat meistens keinen Plural."
    : (Array.isArray(normalizedPluralInfo?.phrases) && normalizedPluralInfo.phrases.length > 0
      ? `Plural: ${normalizedPluralInfo.phrases.join(" oder ")}.`
      : "");
  const speakText = `${articlePhrases.join(". ")}.${pluralSpeakText ? ` ${pluralSpeakText}` : ""}`.trim();
  const speakerButtonHtml = speechSupported()
    ? `
      <button
        type="button"
        class="speak-btn"
        data-speak-text="${escapeHtml(speakText)}"
        aria-label="Speak pronunciation for ${escapeHtml(speakText)}"
        title="Speak pronunciation"
      >
        🔊
      </button>
    `
    : "";

  resultCard.className = `result-card result-card--${primary.gender}`;
  resultCard.innerHTML = `
    <div class="result-card__top">
      <div>
        <p class="result-card__word">${headline}${isAmbiguous ? " (multiple genders)" : ""}</p>
        <p class="result-card__meaning"><strong>English meaning:</strong> ${escapeHtml(displayedMeaning)}</p>
        <p class="result-card__detail"><strong>${escapeHtml(genderLine)}</strong></p>
        <p class="result-card__detail"><strong>${escapeHtml(pluralLine)}</strong></p>
      </div>
      <div class="result-card__actions">
        ${speakerButtonHtml}
        <div class="result-card__badges">${badgesHtml}</div>
      </div>
    </div>
    <div class="result-card__examples">
      ${examples.map((example, index) => `
        <div class="result-example">
          <p class="result-example__label">Sentence ${index + 1}</p>
          <p class="result-example__de">${escapeHtml(example.de)}</p>
          <p class="result-example__en">${escapeHtml(example.en)}</p>
        </div>
      `).join("")}
    </div>
    <p class="result-card__tip">${escapeHtml(noteText || "Repeat the article and noun together to remember the gender.")}</p>
    ${renderVerbConjugationSection(verbConjugation, word)}
  `;

  highlightWord(highlightWordName || null);
}

function renderResult(entry, originalInput = "") {
  if (!entry) {
    const suggestions = findSimilarWords(originalInput);
    const suggestionText = suggestions.length
      ? `Did you mean: ${suggestions.map((s) => `${s.article} ${s.word}`).join(", ")}?`
      : "Try a word from the list below.";

    resultCard.className = "result-card result-card--not-found";
    resultCard.innerHTML = `
      <div class="result-card__top">
        <div>
          <p class="result-card__word">Word not found</p>
          <p class="result-card__meaning">I couldn't match that noun in the current study list.</p>
        </div>
      </div>
      <p class="result-card__tip">${escapeHtml(suggestionText)}</p>
    `;
    highlightWord(null);
    return;
  }

  renderGenderStudyCard({
    word: entry.word,
    results: [{
      article: entry.article,
      gender: entry.gender,
      label: genderLabels[entry.gender]
    }],
    englishMeaning: entry.meaning,
    pluralInfo: getLocalPluralInfo(entry),
    noteText: entry.tip,
    highlightWordName: entry.word
  });
}

function renderLoadingResult(query) {
  const local = searchWord(query);
  resultCard.className = "result-card result-card--loading";
  resultCard.innerHTML = `
    <div class="result-card__top">
      <div>
        <p class="result-card__word">Looking up "${escapeHtml(query.trim() || "...")}"...</p>
        <p class="result-card__meaning">Checking gender, live verb forms, English meaning, and study sentences...</p>
      </div>
      <div class="result-card__badges">
        <span class="badge badge--guess">Loading</span>
      </div>
    </div>
    <p class="result-card__tip">
      ${local
        ? `I also found this word in the study list: <strong>${escapeHtml(local.article)} ${escapeHtml(local.word)}</strong>. I am checking it live too.`
        : "This may take a moment depending on network speed."}
    </p>
  `;
}

async function fetchLiveGender(query) {
  if (window.GermanLearningApi?.getGender) {
    return window.GermanLearningApi.getGender(query);
  }

  const endpoint = USE_EXTERNAL_API ? "/gender" : "/api/gender";
  const response = await fetch(buildApiUrl(endpoint, { word: query }));
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data.error || `Lookup failed with status ${response.status}`;
    throw new Error(message);
  }

  return data;
}

async function fetchLiveSentenceTranslation(text) {
  if (window.GermanLearningApi?.translateSentence) {
    return window.GermanLearningApi.translateSentence(text);
  }

  const endpoint = USE_EXTERNAL_API ? "/sentence/translate" : "/api/sentence/translate";
  const response = await fetch(buildApiUrl(endpoint, { text }));
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `Translation failed with status ${response.status}`);
  }

  return data;
}

async function fetchSentenceValidation(text, mode = sentenceValidationMode) {
  if (window.GermanLearningApi?.validateSentence) {
    return window.GermanLearningApi.validateSentence(text, mode);
  }

  const endpoint = USE_EXTERNAL_API ? "/sentence/validate" : "/api/sentence/validate";
  const response = await fetch(buildApiUrl(endpoint, { text, mode }));
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `Validation failed with status ${response.status}`);
  }

  return data;
}

function renderSentenceLiveTranslationIdle() {
  sentenceLiveTranslation.textContent = "Type a sentence to see the translation.";
  sentenceLiveStatus.textContent = "Waiting for input.";
}

function renderSentenceLiveTranslationLoading() {
  sentenceLiveTranslation.textContent = "Translating...";
  sentenceLiveStatus.textContent = "Live translation request in progress.";
}

function renderSentenceLiveTranslationResult(payload) {
  const translation = payload.englishTranslation || "Translation unavailable right now.";
  sentenceLiveTranslation.textContent = translation;
  sentenceLiveStatus.textContent = payload.englishTranslation
    ? "Live translation updated."
    : "No translation returned. You can still click Validate.";
}

function renderSentenceLiveTranslationError(error) {
  sentenceLiveTranslation.textContent = "Live translation unavailable.";
  sentenceLiveStatus.textContent = error.message || "Translation request failed.";
}

function setSentenceVerdict(text, state = "idle") {
  sentenceVerdictChip.textContent = text;
  sentenceVerdictChip.classList.remove("is-correct", "is-wrong");
  if (state === "correct") sentenceVerdictChip.classList.add("is-correct");
  if (state === "wrong") sentenceVerdictChip.classList.add("is-wrong");
}

function renderSentenceValidationEmpty() {
  setSentenceVerdict("Not validated yet");
  sentenceOriginalCard.classList.remove("is-correct", "is-wrong");
  sentenceCorrectedCard.classList.remove("is-correct", "is-wrong");
  sentenceOriginalText.textContent = "-";
  sentenceCorrectedText.textContent = "-";
  sentenceOriginalActions.innerHTML = "";
  sentenceCorrectedActions.innerHTML = "";
  sentenceValidationMessage.textContent = "";
  sentenceValidationMessage.className = "quiz-feedback";
  sentenceIssuesList.innerHTML = "<li>Click <strong>Validate Sentence</strong> to check your German sentence.</li>";
  sentenceAlternativesList.innerHTML = "<p class=\"muted\">Validation will generate corrected versions and alternative wording suggestions here.</p>";
}

function renderSentenceValidationLoading() {
  setSentenceVerdict("Checking...", "idle");
  sentenceValidationMessage.textContent = `Validating your sentence (${sentenceModeLabel(sentenceValidationMode)})...`;
  sentenceValidationMessage.className = "quiz-feedback";
}

function renderSentenceValidationError(error, sentence) {
  setSentenceVerdict("Validation error", "wrong");
  sentenceOriginalCard.classList.add("is-wrong");
  sentenceCorrectedCard.classList.remove("is-correct");
  sentenceOriginalText.textContent = sentence || "-";
  sentenceCorrectedText.textContent = "-";
  sentenceOriginalActions.innerHTML = buildSpeakButtonHtml(sentence, "Speak your sentence");
  sentenceCorrectedActions.innerHTML = "";
  sentenceValidationMessage.textContent = error.message || "Validation request failed.";
  sentenceValidationMessage.className = "quiz-feedback is-wrong";
  sentenceIssuesList.innerHTML = "<li>The validator could not complete the check. Try again in a moment.</li>";
  sentenceAlternativesList.innerHTML = "<p class=\"muted\">Alternative phrasings are shown after a successful validation.</p>";
}

function renderSentenceIssues(issues) {
  const safeIssues = Array.isArray(issues) ? issues : [];
  if (safeIssues.length === 0) {
    sentenceIssuesList.innerHTML = "<li>No grammar/spelling issues found by the validator.</li>";
    return;
  }

  sentenceIssuesList.innerHTML = safeIssues.map((issue) => {
    const beginnerHint = getIssueBeginnerHint(issue);
    const suggestions = Array.isArray(issue.replacements) && issue.replacements.length > 0
      ? `Suggestions: ${issue.replacements.slice(0, 4).join(", ")}`
      : "No direct replacement suggestion was provided.";
    const meta = [issue.category, issue.issueType].filter(Boolean).join(" • ");

    return `
      <li class="sentence-issue">
        <div class="sentence-issue__meta">${escapeHtml(meta || "Issue")}</div>
        <p class="sentence-issue__message">${escapeHtml(issue.message || "Possible issue found.")}</p>
        ${issue.contextText ? `<div class="sentence-issue__suggestions"><strong>Context:</strong> ${escapeHtml(issue.contextText)}</div>` : ""}
        <div class="sentence-issue__hint"><strong>Why this is wrong (${escapeHtml(beginnerHint.topic)}):</strong> ${escapeHtml(beginnerHint.explanation)}</div>
        <div class="sentence-issue__suggestions">${escapeHtml(suggestions)}</div>
      </li>
    `;
  }).join("");
}

function sentenceAlternativeOriginLabel(origin) {
  if (origin === "corrected") return "Corrected version";
  if (origin === "alternative-correction") return "Another valid option";
  if (origin === "back-translation") return "Another way to say it";
  return "Alternative";
}

function renderSentenceAlternatives(alternatives) {
  const safeAlternatives = Array.isArray(alternatives) ? alternatives : [];
  if (safeAlternatives.length === 0) {
    sentenceAlternativesList.innerHTML = "<p class=\"muted\">No alternative wording could be generated for this sentence.</p>";
    return;
  }

  sentenceAlternativesList.innerHTML = safeAlternatives.map((item) => {
    const breakdown = Array.isArray(item.breakdown) ? item.breakdown : [];
    return `
      <article class="sentence-alt-card">
        <div class="sentence-alt-card__top">
          <div>
            <p class="time-phrase-card__label">${escapeHtml(sentenceAlternativeOriginLabel(item.origin))}</p>
            <p class="sentence-alt-card__german">${escapeHtml(item.german || "")}</p>
          </div>
          ${buildSpeakButtonHtml(item.german || "", `Speak alternative sentence: ${item.german || ""}`)}
        </div>
        <p class="sentence-alt-card__english"><strong>English:</strong> ${escapeHtml(item.english || "Translation unavailable")}</p>
        ${item.note ? `<p class="sentence-alt-card__note">${escapeHtml(item.note)}</p>` : ""}
        ${breakdown.length > 0 ? `
          <div class="sentence-breakdown" aria-label="English breakdown">
            ${breakdown.map((token) => `
              <span class="sentence-breakdown__chip"><strong>${escapeHtml(token.de)}</strong> = ${escapeHtml(token.en)}</span>
            `).join("")}
          </div>
        ` : `<p class="sentence-alt-card__note">English word breakdown unavailable for some words.</p>`}
      </article>
    `;
  }).join("");
}

function renderSentenceValidationResult(payload) {
  const sentence = payload?.sentence || "";
  const validation = payload?.validation || {};
  const correctedSentence = validation.correctedSentence || sentence;
  const isCorrect = Boolean(validation.isCorrect);
  const mode = validation.mode === "strict" ? "strict" : "grammar";

  setSentenceVerdict(isCorrect ? "Correct sentence" : "Needs correction", isCorrect ? "correct" : "wrong");

  sentenceOriginalCard.classList.remove("is-correct", "is-wrong");
  sentenceCorrectedCard.classList.remove("is-correct", "is-wrong");
  if (isCorrect) {
    sentenceOriginalCard.classList.add("is-correct");
    sentenceCorrectedCard.classList.add("is-correct");
  } else {
    sentenceOriginalCard.classList.add("is-wrong");
    sentenceCorrectedCard.classList.add("is-correct");
  }

  sentenceOriginalText.textContent = sentence || "-";
  sentenceCorrectedText.textContent = correctedSentence || "-";
  sentenceOriginalActions.innerHTML = buildSpeakButtonHtml(sentence, "Speak your sentence");
  sentenceCorrectedActions.innerHTML = buildSpeakButtonHtml(correctedSentence, "Speak corrected sentence");

  const issueBreakdown = typeof validation.styleIssueCount === "number"
    ? ` (grammar/spelling detected: ${validation.grammarIssueCount ?? 0}, style detected: ${validation.styleIssueCount})`
    : "";
  sentenceValidationMessage.textContent = `${validation.summary || (isCorrect ? "Sentence looks correct." : "Sentence needs corrections.")} Mode: ${sentenceModeLabel(mode)}${mode === "strict" ? issueBreakdown : ""}`;
  sentenceValidationMessage.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;

  renderSentenceIssues(validation.issues || []);
  renderSentenceAlternatives(payload.alternatives || []);
  addSentenceHistoryEntry(payload);
}

function scheduleLiveSentenceTranslation() {
  const text = normalizeSentenceInputClient(sentenceInput.value);
  if (sentenceTranslateDebounceTimer) {
    window.clearTimeout(sentenceTranslateDebounceTimer);
  }

  if (!text) {
    latestSentenceTranslateRequest += 1;
    renderSentenceLiveTranslationIdle();
    return;
  }

  sentenceTranslateDebounceTimer = window.setTimeout(() => {
    requestLiveSentenceTranslation(text);
  }, 350);
}

async function requestLiveSentenceTranslation(text) {
  const normalizedText = normalizeSentenceInputClient(text);
  if (!normalizedText) {
    renderSentenceLiveTranslationIdle();
    return;
  }

  const requestId = ++latestSentenceTranslateRequest;
  renderSentenceLiveTranslationLoading();

  try {
    const payload = await fetchLiveSentenceTranslation(normalizedText);
    if (requestId !== latestSentenceTranslateRequest) return;
    renderSentenceLiveTranslationResult(payload);
  } catch (error) {
    if (requestId !== latestSentenceTranslateRequest) return;
    renderSentenceLiveTranslationError(error);
  }
}

async function validateCurrentSentence() {
  const sentence = normalizeSentenceInputClient(sentenceInput.value);
  if (!sentence) {
    setSentenceVerdict("Enter a sentence", "wrong");
    sentenceValidationMessage.textContent = "Type a German sentence first, then click Validate.";
    sentenceValidationMessage.className = "quiz-feedback is-wrong";
    return;
  }

  const requestId = ++latestSentenceValidateRequest;
  sentenceValidateBtn.disabled = true;
  renderSentenceValidationLoading();
  sentenceOriginalText.textContent = sentence;
  sentenceOriginalActions.innerHTML = buildSpeakButtonHtml(sentence, "Speak your sentence");

  try {
    const payload = await fetchSentenceValidation(sentence, sentenceValidationMode);
    if (requestId !== latestSentenceValidateRequest) return;
    renderSentenceValidationResult(payload);
  } catch (error) {
    if (requestId !== latestSentenceValidateRequest) return;
    renderSentenceValidationError(error, sentence);
  } finally {
    if (requestId === latestSentenceValidateRequest) {
      sentenceValidateBtn.disabled = false;
    }
  }
}

function renderLiveLookupResult(payload, originalInput) {
  const localEntry = searchWord(payload.normalizedWord || originalInput);

  if (!payload.found) {
    const suggestions = findSimilarWords(originalInput);
    const guess = payload.heuristicGuess;
    const suggestionText = suggestions.length
      ? `Study list suggestions: ${suggestions.map((s) => `${s.article} ${s.word}`).join(", ")}.`
      : "Try a common noun from the list below (for example: Haus, Frau, Tisch).";
    const friendlyMessage = payload.reason === "empty_query"
      ? "Type a German noun first."
      : "I could not find a clear noun gender for this word yet.";
    const guessText = guess
      ? `A possible article to review while you check the word is: ${guess.article} ${payload.normalizedWord || String(originalInput || "").trim()}.`
      : suggestionText;
    const verbSectionHtml = renderVerbConjugationSection(payload.verbConjugation, payload.normalizedWord || originalInput);

    resultCard.className = "result-card result-card--not-found";
    resultCard.innerHTML = `
      <div class="result-card__top">
        <div>
          <p class="result-card__word">${escapeHtml(payload.reason === "empty_query" ? "Enter a word" : "Word not found yet")}</p>
          <p class="result-card__meaning">
            ${escapeHtml(friendlyMessage)}
          </p>
        </div>
        <div class="result-card__badges"></div>
      </div>
      <p class="result-card__tip">${escapeHtml(guessText)} ${payload.reason !== "empty_query" ? "Try the singular base form if you entered a plural or declined form." : ""}</p>
      ${verbSectionHtml}
    `;
    highlightWord(localEntry ? localEntry.word : null);
    return;
  }

  const results = Array.isArray(payload.results) ? payload.results : [];
  const isAmbiguous = results.length > 1;
  const englishMeaning = localEntry?.meaning || payload.englishMeaning || "";
  const pluralInfo = normalizePluralInfo(payload.plural) || getLocalPluralInfo(localEntry || payload.normalizedWord || originalInput);
  const resolvedFromNote = payload.resolvedFromForm
    && payload.normalizedWord
    && normalizeWord(payload.resolvedFromForm) !== normalizeWord(payload.normalizedWord)
    ? `Resolved inflected form: ${payload.resolvedFromForm} -> ${payload.normalizedWord}.`
    : "";
  const noteText = localEntry
    ? `${resolvedFromNote ? `${resolvedFromNote} ` : ""}${localEntry.tip}`.trim()
    : isAmbiguous
      ? "This spelling can have different meanings depending on the article. Learn each form separately."
      : `${resolvedFromNote ? `${resolvedFromNote} ` : ""}Repeat the article with the noun out loud: der/die/das + noun.`.trim();

  renderGenderStudyCard({
    word: payload.normalizedWord,
    results,
    englishMeaning,
    pluralInfo,
    noteText,
    highlightWordName: localEntry ? localEntry.word : null,
    verbConjugation: payload.verbConjugation
  });
}

function renderLookupError(error, originalInput) {
  const localEntry = searchWord(originalInput);
  if (localEntry) {
    renderGenderStudyCard({
      word: localEntry.word,
      results: [{
        article: localEntry.article,
        gender: localEntry.gender,
        label: genderLabels[localEntry.gender]
      }],
      englishMeaning: localEntry.meaning,
      pluralInfo: getLocalPluralInfo(localEntry),
      noteText: localEntry.tip,
      highlightWordName: localEntry.word
    });
    return;
  }

  resultCard.className = "result-card result-card--not-found";
  resultCard.innerHTML = `
    <div class="result-card__top">
      <div>
        <p class="result-card__word">Lookup unavailable</p>
        <p class="result-card__meaning">I could not check this word right now.</p>
        <p class="result-card__meta">Please try again in a moment.</p>
      </div>
    </div>
    <p class="result-card__tip">You can still study words from the list below while this is loading again.</p>
  `;
  highlightWord(null);
}

async function handleLiveLookup(query) {
  const trimmed = String(query || "").trim();
  if (!trimmed) {
    renderLiveLookupResult({
      found: false,
      reason: "empty_query",
      message: "Type a German noun first.",
      source: "local"
    }, query);
    return;
  }

  const requestId = ++latestLookupRequest;
  submitButton.disabled = true;
  renderLoadingResult(trimmed);

  try {
    const payload = await fetchLiveGender(trimmed);
    if (requestId !== latestLookupRequest) return;
    renderLiveLookupResult(payload, trimmed);
  } catch (error) {
    if (requestId !== latestLookupRequest) return;
    renderLookupError(error, trimmed);
  } finally {
    if (requestId === latestLookupRequest) {
      submitButton.disabled = false;
    }
  }
}

function highlightWord(word) {
  highlightedWord = word;
  Array.from(wordList.children).forEach((item) => {
    item.classList.toggle("is-highlighted", item.dataset.word === word);
  });
}

function renderStats() {
  const visibleWords = words.filter((entry) => activeFilter === "all" || entry.gender === activeFilter);
  const masculineCount = visibleWords.filter((entry) => entry.gender === "masculine").length;
  const feminineCount = visibleWords.filter((entry) => entry.gender === "feminine").length;
  const neuterCount = visibleWords.filter((entry) => entry.gender === "neuter").length;

  stats.innerHTML = `
    <div class="stat-chip">Showing: <strong>${visibleWords.length}</strong> words</div>
    <div class="stat-chip">der: <strong>${masculineCount}</strong></div>
    <div class="stat-chip">die: <strong>${feminineCount}</strong></div>
    <div class="stat-chip">das: <strong>${neuterCount}</strong></div>
  `;
}

function renderList() {
  const filtered = words.filter((entry) => activeFilter === "all" || entry.gender === activeFilter);
  wordList.innerHTML = "";

  filtered.forEach((entry) => {
    const li = document.createElement("li");
    li.className = `word-item word-item--${entry.gender}`;
    li.dataset.word = entry.word;
    li.setAttribute("tabindex", "0");
    li.setAttribute("role", "button");
    li.setAttribute("aria-label", `Show gender for ${entry.article} ${entry.word}`);
    li.innerHTML = `
      <span class="word-item__article">${entry.article}</span>
      <span class="word-item__main">
        <span class="word-item__word">${entry.word}</span>
        <span class="word-item__meaning">${entry.meaning}</span>
      </span>
      <span class="word-item__gender">${genderLabels[entry.gender]}</span>
    `;

    li.addEventListener("click", () => {
      input.value = entry.word;
      renderResult(entry);
    });

    li.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        input.value = entry.word;
        renderResult(entry);
      }
    });

    if (entry.word === highlightedWord) {
      li.classList.add("is-highlighted");
    }

    wordList.appendChild(li);
  });

  renderStats();
}

function setActiveFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });
  renderList();
}

function activateTab(targetPanelId, focusTab = false) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === targetPanelId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
    if (isActive && focusTab) {
      button.focus();
    }
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.id === targetPanelId;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  if (targetPanelId === "panel-numbers") {
    ensureNumbersTabReady();
    if (typeof window !== "undefined") {
      window.setTimeout(() => {
        ensureNumbersTabReady();
      }, 0);
    }
  }

  if (targetPanelId === "panel-conjugation") {
    ensureConjugationTabReady();
    if (typeof window !== "undefined") {
      window.setTimeout(() => {
        ensureConjugationTabReady();
      }, 0);
    }
  }

  if (targetPanelId === "panel-keyboard") {
    updateKeyboardLiveAssistButton();
    updateKeyboardSensitivityButtons();
    renderKeyboardOutputPreview();
  }
}

function getConjugationTypeKeys() {
  return Object.keys(conjugationVerbTypeMeta);
}

function getConjugationVerbList(type) {
  return Array.isArray(conjugationVerbCatalog[type]) ? conjugationVerbCatalog[type] : [];
}

function getConjugationVerb(type, id) {
  return getConjugationVerbList(type).find((verb) => verb.id === id) || null;
}

function conjugationSubjectGerman(pronounKey) {
  if (pronounKey === "er") return "er";
  if (pronounKey === "sie") return "sie";
  return pronounKey;
}

function conjugationSubjectEnglish(pronounKey) {
  const map = {
    ich: "i",
    du: "you",
    er: "he / she / it",
    wir: "we",
    ihr: "you",
    sie: "they / you (formal)"
  };
  return map[pronounKey] || "someone";
}

function conjugationEnglishHead(verb) {
  return String(verb?.english || "do")
    .replace(/^to\s+/i, "")
    .trim();
}

function conjugationDefaultMode(verb) {
  if (verb?.defaultMode === "akkusativ") return "akkusativ";
  if (verb?.defaultMode === "nominativ") return "nominativ";
  return verb?.accObject ? "akkusativ" : "nominativ";
}

function resolveConjugationMode(verb, requestedMode) {
  const selected = requestedMode === "default" ? conjugationDefaultMode(verb) : requestedMode;
  if (selected === "akkusativ" && !verb?.accObject) {
    return {
      mode: "nominativ",
      note: "This verb is shown in a Nominativ-focused pattern here because it does not use a simple direct object in this basic setup."
    };
  }
  return {
    mode: selected === "akkusativ" ? "akkusativ" : "nominativ",
    note: ""
  };
}

function conjugateRegularPresent(stem, pronounKey) {
  const ending = regularPresentEndings[pronounKey] || "";
  return `${stem}${ending}`;
}

function getConjugationPresentCore(verb, pronounKey) {
  if (verb?.present && verb.present[pronounKey]) {
    return verb.present[pronounKey];
  }

  if (verb?.stem) {
    return conjugateRegularPresent(verb.stem, pronounKey);
  }

  const baseInfinitive = String(verb?.infinitive || "")
    .replace(/^sich\s+/i, "")
    .trim();
  const stem = baseInfinitive.endsWith("en")
    ? baseInfinitive.slice(0, -2)
    : baseInfinitive;
  return conjugateRegularPresent(stem, pronounKey);
}

function getConjugationAuxiliaryForm(auxiliary, pronounKey) {
  const safeAux = auxiliary === "sein" ? "sein" : "haben";
  return auxiliaryPresentMap[safeAux][pronounKey] || auxiliaryPresentMap.haben[pronounKey];
}

function getConjugationPredicateForTable(verb, tense, pronounKey) {
  if (!verb) return "-";

  if (tense === "perfect") {
    const aux = getConjugationAuxiliaryForm(verb.perfectAux || "haben", pronounKey);
    const reflexive = verb.reflexive ? `${reflexivePronounMap[pronounKey]} ... ` : "";
    return `${aux} ${reflexive}${verb.participle}`.trim();
  }

  const core = getConjugationPresentCore(verb, pronounKey);
  const reflexive = verb.reflexive ? ` ${reflexivePronounMap[pronounKey]}` : "";
  if (verb.prefix) {
    return `${core}${reflexive} ... ${verb.prefix}`;
  }

  return `${core}${reflexive}`.trim();
}

function buildConjugationSentencePack(verb, tense, pronounKey, requestedMode) {
  const subjectDe = conjugationSubjectGerman(pronounKey);
  const subjectEn = conjugationSubjectEnglish(pronounKey);
  const modeResolution = resolveConjugationMode(verb, requestedMode);
  const mode = modeResolution.mode;

  const presentCore = getConjugationPresentCore(verb, pronounKey);
  const aux = getConjugationAuxiliaryForm(verb.perfectAux || "haben", pronounKey);
  const participle = verb.participle;
  const reflexive = verb.reflexive ? reflexivePronounMap[pronounKey] : "";
  const objectAcc = verb.accObject?.de || "";
  const objectEn = verb.accObject?.en || "";
  const complementDe = verb.complement?.de || "";
  const complementEn = verb.complement?.en || "";

  let germanSentence = "";
  if (tense === "perfect") {
    const parts = [capitalizeGermanNounClient(subjectDe), aux];
    if (reflexive) parts.push(reflexive);
    if (mode === "akkusativ" && objectAcc) parts.push(objectAcc);
    if (mode !== "akkusativ" && complementDe) parts.push(complementDe);
    parts.push(participle);
    germanSentence = `${parts.join(" ")}.`;
  } else if (verb.prefix) {
    const middleParts = [];
    if (reflexive) middleParts.push(reflexive);
    if (mode === "akkusativ" && objectAcc) middleParts.push(objectAcc);
    if (mode !== "akkusativ" && complementDe) middleParts.push(complementDe);
    germanSentence = `${capitalizeGermanNounClient(subjectDe)} ${presentCore}${middleParts.length ? ` ${middleParts.join(" ")}` : ""} ${verb.prefix}.`;
  } else {
    const parts = [capitalizeGermanNounClient(subjectDe), presentCore];
    if (reflexive) parts.push(reflexive);
    if (mode === "akkusativ" && objectAcc) parts.push(objectAcc);
    if (mode !== "akkusativ" && complementDe) parts.push(complementDe);
    germanSentence = `${parts.join(" ")}.`;
  }

  const englishTail = mode === "akkusativ" ? objectEn : complementEn;
  const englishMain = `${subjectEn} ${conjugationEnglishHead(verb)}${englishTail ? ` ${englishTail}` : ""}`.trim();
  const englishSentence = `${capitalizeGermanNounClient(englishMain)}${tense === "perfect" ? " (present perfect meaning)." : "."}`;
  const selectedForm = tense === "perfect" ? `${aux} ${participle}` : presentCore;

  const caseLines = [`Nominativ subject: ${subjectDe}.`];
  if (mode === "akkusativ" && objectAcc) {
    caseLines.push(`Akkusativ object: ${objectAcc}.`);
  } else {
    caseLines.push("Akkusativ object: none in this selected pattern.");
  }
  if (reflexive) {
    caseLines.push(`Reflexive pronoun used: ${reflexive}.`);
  }
  if (modeResolution.note) {
    caseLines.push(modeResolution.note);
  }

  return {
    germanSentence,
    englishSentence,
    selectedForm,
    mode,
    caseLines,
    modeNote: modeResolution.note
  };
}

function populateConjugationTypeSelect() {
  if (!conjTypeSelect) return;

  const keys = getConjugationTypeKeys();
  if (keys.length === 0) return;

  if (conjTypeSelect.options.length === 0) {
    conjTypeSelect.innerHTML = keys.map((key) => {
      const meta = conjugationVerbTypeMeta[key];
      return `<option value="${escapeHtml(key)}">${escapeHtml(meta.label)}</option>`;
    }).join("");
  }

  if (!conjTypeSelect.value || !keys.includes(conjTypeSelect.value)) {
    conjTypeSelect.value = keys[0];
  }
}

function populateConjugationVerbSelect(type, preferredVerbId = "") {
  if (!conjVerbSelect) return;

  const verbs = getConjugationVerbList(type);
  if (verbs.length === 0) {
    conjVerbSelect.innerHTML = "";
    return;
  }

  conjVerbSelect.innerHTML = verbs.map((verb) => `
    <option value="${escapeHtml(verb.id)}">
      ${escapeHtml(verb.infinitive)} — ${escapeHtml(verb.english)}
    </option>
  `).join("");

  const preferredExists = verbs.some((verb) => verb.id === preferredVerbId);
  conjVerbSelect.value = preferredExists ? preferredVerbId : verbs[0].id;
}

function renderConjugationStepperDots() {
  if (!conjStepperDots) return;
  conjStepperDots.innerHTML = "";

  conjugationLessons.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stepper-dot";
    button.dataset.conjStepIndex = String(index);
    button.textContent = `${index + 1}. ${step.shortLabel}`;

    if (index === currentConjugationStep) {
      button.classList.add("is-active");
      button.setAttribute("aria-current", "step");
    } else if (conjugationStepState[index].completed) {
      button.classList.add("is-complete");
    }

    conjStepperDots.appendChild(button);
  });
}

function renderConjugationRoadmap() {
  if (!conjRoadmapList || !conjRoadmapProgress) return;

  const completedCount = conjugationStepState.filter((step) => step.completed).length;
  conjRoadmapProgress.textContent = `${completedCount} / ${conjugationLessons.length} core lessons done`;

  const coreItems = conjugationLessons.map((step, index) => {
    const state = conjugationStepState[index];
    const isCurrent = index === currentConjugationStep;
    const badge = state.completed
      ? { label: "Done", className: "is-done" }
      : (isCurrent ? { label: "Current", className: "is-current" } : { label: "Locked", className: "is-locked" });

    return `
      <article class="conj-roadmap-item">
        <div class="conj-roadmap-item__top">
          <p class="conj-roadmap-item__title">Core ${index + 1}: ${escapeHtml(step.title.replace(/^Step\s+\d+:\s*/i, ""))}</p>
          <span class="conj-roadmap-badge ${badge.className}">${badge.label}</span>
        </div>
        <p class="conj-roadmap-item__desc">${escapeHtml(step.explanation)}</p>
      </article>
    `;
  });

  const futureItems = [
    "Dativ with verb-preposition patterns",
    "Genitiv for formal writing patterns",
    "Subordinate clauses and verb-final structure",
    "Konjunktiv II for polite requests and hypotheticals"
  ].map((title) => `
    <article class="conj-roadmap-item">
      <div class="conj-roadmap-item__top">
        <p class="conj-roadmap-item__title">${escapeHtml(title)}</p>
        <span class="conj-roadmap-badge is-locked">Planned</span>
      </div>
      <p class="conj-roadmap-item__desc">Unlock this in future lessons as your core conjugation steps become stable.</p>
    </article>
  `);

  conjRoadmapList.innerHTML = `${coreItems.join("")}${futureItems.join("")}`;
}

function renderConjugationStep() {
  if (!conjStepContent || !conjStepProgress) return;

  const step = conjugationLessons[currentConjugationStep];
  const stepState = conjugationStepState[currentConjugationStep];
  const feedbackClass = stepState.checked
    ? (stepState.selectedIndex === step.miniCheck.correctIndex ? "is-correct" : "is-wrong")
    : "";
  const feedbackText = stepState.checked
    ? (stepState.selectedIndex === step.miniCheck.correctIndex
      ? `Correct. ${step.miniCheck.explanation}`
      : `Not quite. ${step.miniCheck.explanation}`)
    : "Choose an option and click Check Answer.";

  conjStepProgress.textContent = `Step ${currentConjugationStep + 1} / ${conjugationLessons.length}`;

  conjStepContent.innerHTML = `
    <h4>${escapeHtml(step.title)}</h4>
    <p>${escapeHtml(step.explanation)}</p>
    <ul class="acc-step-bullets">
      ${step.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
    </ul>
    <div class="acc-step-example">
      ${step.exampleLines.map((line) => `<div class="acc-step-example__line">${line}</div>`).join("")}
    </div>

    <div class="mini-check">
      <p class="mini-check__prompt">${escapeHtml(step.miniCheck.prompt)}</p>
      <div class="mini-check__options">
        ${step.miniCheck.options.map((option, index) => {
          const classes = ["mini-check-option"];
          if (stepState.selectedIndex === index) classes.push("is-selected");

          if (stepState.checked) {
            if (index === step.miniCheck.correctIndex) {
              classes.push("is-correct");
            } else if (index === stepState.selectedIndex) {
              classes.push("is-wrong");
            }
          }

          return `
            <button
              type="button"
              class="${classes.join(" ")}"
              data-conj-mini-option="${index}"
              aria-pressed="${stepState.selectedIndex === index ? "true" : "false"}"
            >
              ${escapeHtml(option)}
            </button>
          `;
        }).join("")}
      </div>
      <div class="mini-check__actions">
        <button type="button" class="filter-btn" data-conj-mini-action="check">Check Answer</button>
        <button type="button" class="filter-btn filter-btn--ghost" data-conj-mini-action="reset">Reset</button>
      </div>
      <p class="mini-check__feedback ${feedbackClass}">${escapeHtml(feedbackText)}</p>
    </div>
  `;

  if (conjPrevStepBtn) {
    conjPrevStepBtn.disabled = currentConjugationStep === 0;
  }
  if (conjNextStepBtn) {
    conjNextStepBtn.textContent = currentConjugationStep === conjugationLessons.length - 1
      ? "Restart Path"
      : "Next Step";
  }

  renderConjugationStepperDots();
  renderConjugationRoadmap();
}

function goToConjugationStep(stepIndex) {
  const bounded = Math.max(0, Math.min(conjugationLessons.length - 1, Number(stepIndex) || 0));
  currentConjugationStep = bounded;
  renderConjugationStep();
}

function handleConjugationMiniCheckAction(action) {
  const step = conjugationLessons[currentConjugationStep];
  const stepState = conjugationStepState[currentConjugationStep];

  if (action === "reset") {
    stepState.selectedIndex = null;
    stepState.checked = false;
    renderConjugationStep();
    return;
  }

  if (action !== "check") return;
  if (stepState.selectedIndex === null) {
    stepState.checked = true;
    renderConjugationStep();
    return;
  }

  stepState.checked = true;
  if (stepState.selectedIndex === step.miniCheck.correctIndex) {
    stepState.completed = true;
  }
  renderConjugationStep();
}

function renderConjugationTable(type, verbId, tense) {
  if (!conjConjugationTable) return;
  const verb = getConjugationVerb(type, verbId);
  if (!verb) {
    conjConjugationTable.innerHTML = "<p class=\"muted\">Choose a verb to see the conjugation table.</p>";
    return;
  }

  const rows = conjugationPronounOrder.map((pronounKey) => `
    <tr>
      <td>${escapeHtml(conjugationPronounMeta[pronounKey].label)}</td>
      <td><strong>${escapeHtml(getConjugationPredicateForTable(verb, tense, pronounKey))}</strong></td>
    </tr>
  `).join("");

  const tenseLabel = tense === "perfect" ? "Perfekt" : "Präsens";
  conjConjugationTable.innerHTML = `
    <table class="conj-table">
      <thead>
        <tr>
          <th>Pronoun</th>
          <th>${escapeHtml(verb.infinitive)} (${tenseLabel})</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderConjugationBuilder() {
  if (!conjBuilderResult) return;

  const type = conjTypeSelect?.value || getConjugationTypeKeys()[0];
  const verbId = conjVerbSelect?.value || "";
  const tense = conjTenseSelect?.value === "perfect" ? "perfect" : "present";
  const subject = conjSubjectSelect?.value || "ich";
  const pattern = conjPatternSelect?.value || "default";
  const typeMeta = conjugationVerbTypeMeta[type];
  const verb = getConjugationVerb(type, verbId);

  if (!verb) {
    conjBuilderResult.innerHTML = "<p class=\"drill-result__explain\">Choose a verb type and verb first.</p>";
    renderConjugationTable(type, verbId, tense);
    return;
  }

  const pack = buildConjugationSentencePack(verb, tense, subject, pattern);
  const subjectLabel = conjugationPronounMeta[subject]?.label || subject;
  const tenseLabel = tense === "perfect" ? "Perfekt (present perfect)" : "Präsens (present)";
  const modeLabel = pack.mode === "akkusativ" ? "Nominativ + Akkusativ" : "Nominativ pattern";

  conjBuilderResult.innerHTML = `
    <p class="drill-result__sentence">Verb type: <em>${escapeHtml(typeMeta?.label || type)}</em></p>
    <p class="drill-result__sentence">Infinitive: <em>${escapeHtml(verb.infinitive)}</em> (${escapeHtml(verb.english)})</p>
    <p class="drill-result__sentence">Selected form: <em>${escapeHtml(subjectLabel)} ${escapeHtml(pack.selectedForm)}</em> (${escapeHtml(tenseLabel)})</p>
    <p class="drill-result__sentence">Sentence: <em>${escapeHtml(pack.germanSentence)}</em></p>
    <p class="drill-result__explain">English guide: ${escapeHtml(pack.englishSentence)}</p>
    <p class="conj-builder-note"><strong>Case mode:</strong> ${escapeHtml(modeLabel)}</p>
    <ul class="acc-step-bullets">
      ${pack.caseLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
      <li>${escapeHtml(verb.note || "Keep practicing with all pronouns for automatic recall.")}</li>
    </ul>
    <div class="time-speak-row">
      ${buildSpeakButtonHtml(pack.germanSentence, `Speak conjugation sentence for ${verb.infinitive}`)}
    </div>
  `;

  renderConjugationTable(type, verbId, tense);
}

function setConjugationType(type, preferredVerbId = "") {
  const availableTypes = getConjugationTypeKeys();
  if (!conjTypeSelect || availableTypes.length === 0) return;

  const safeType = availableTypes.includes(type) ? type : availableTypes[0];
  conjTypeSelect.value = safeType;
  populateConjugationVerbSelect(safeType, preferredVerbId);
  renderConjugationBuilder();
}

function ensureConjugationTabReady() {
  if (!conjugationPanel) return;

  populateConjugationTypeSelect();
  setConjugationType(conjTypeSelect?.value || getConjugationTypeKeys()[0], conjVerbSelect?.value || "");

  if (conjStepContent && !conjStepContent.textContent.trim()) {
    renderConjugationStep();
  } else {
    renderConjugationRoadmap();
  }

  if (conjBuilderResult && !conjBuilderResult.textContent.trim()) {
    renderConjugationBuilder();
  }
}

function renderAccusativeStepperDots() {
  accStepperDots.innerHTML = "";

  accusativeSteps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stepper-dot";
    button.textContent = `${index + 1}. ${step.shortLabel}`;
    button.dataset.stepIndex = String(index);

    if (index === currentAccusativeStep) {
      button.classList.add("is-active");
      button.setAttribute("aria-current", "step");
    } else if (accusativeStepState[index].completed) {
      button.classList.add("is-complete");
    }

    accStepperDots.appendChild(button);
  });
}

function renderAccusativeStep() {
  const step = accusativeSteps[currentAccusativeStep];
  const stepState = accusativeStepState[currentAccusativeStep];
  const feedbackClass = stepState.checked
    ? (stepState.selectedIndex === step.miniCheck.correctIndex ? "is-correct" : "is-wrong")
    : "";
  const feedbackText = stepState.checked
    ? (stepState.selectedIndex === step.miniCheck.correctIndex
      ? `Correct. ${step.miniCheck.explanation}`
      : `Not quite. ${step.miniCheck.explanation}`)
    : "Choose an answer, then click Check Answer.";

  accStepProgress.textContent = `Step ${currentAccusativeStep + 1} / ${accusativeSteps.length}`;

  accStepContent.innerHTML = `
    <h4>${escapeHtml(step.title)}</h4>
    <p>${escapeHtml(step.explanation)}</p>
    <ul class="acc-step-bullets">
      ${step.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
    </ul>
    <div class="acc-step-example">
      ${step.exampleLines.map((line) => `<div class="acc-step-example__line">${line}</div>`).join("")}
    </div>

    <div class="mini-check">
      <p class="mini-check__prompt">${escapeHtml(step.miniCheck.prompt)}</p>
      <div class="mini-check__options">
        ${step.miniCheck.options.map((option, index) => {
          const classes = ["mini-check-option"];
          if (stepState.selectedIndex === index) classes.push("is-selected");
          if (stepState.checked && index === step.miniCheck.correctIndex) classes.push("is-correct");
          if (
            stepState.checked &&
            stepState.selectedIndex === index &&
            stepState.selectedIndex !== step.miniCheck.correctIndex
          ) {
            classes.push("is-wrong");
          }
          return `
            <button
              type="button"
              class="${classes.join(" ")}"
              data-mini-option="${index}"
              aria-pressed="${stepState.selectedIndex === index ? "true" : "false"}"
            >
              ${escapeHtml(option)}
            </button>
          `;
        }).join("")}
      </div>
      <div class="mini-check__actions">
        <button type="button" class="filter-btn" data-mini-action="check">Check Answer</button>
        <button type="button" class="filter-btn filter-btn--ghost" data-mini-action="show">Show Answer</button>
      </div>
      <p class="mini-check__feedback ${feedbackClass}">${escapeHtml(feedbackText)}</p>
    </div>
  `;

  accPrevStepBtn.disabled = currentAccusativeStep === 0;
  accNextStepBtn.textContent = currentAccusativeStep === accusativeSteps.length - 1
    ? "Restart Lesson"
    : "Next Step";

  renderAccusativeStepperDots();
}

function goToAccusativeStep(nextIndex) {
  const bounded = Math.min(accusativeSteps.length - 1, Math.max(0, nextIndex));
  currentAccusativeStep = bounded;
  renderAccusativeStep();
}

function handleAccusativeMiniCheckAction(action) {
  const step = accusativeSteps[currentAccusativeStep];
  const state = accusativeStepState[currentAccusativeStep];

  if (action === "check") {
    if (state.selectedIndex === null) {
      return;
    }
    state.checked = true;
    if (state.selectedIndex === step.miniCheck.correctIndex) {
      state.completed = true;
    }
    renderAccusativeStep();
    return;
  }

  if (action === "show") {
    state.selectedIndex = step.miniCheck.correctIndex;
    state.checked = true;
    state.completed = true;
    renderAccusativeStep();
  }
}

function transformAccusativePhrase(nominativePhrase) {
  const mapping = drillPhraseMap[nominativePhrase];
  if (mapping) {
    return mapping;
  }

  const [article, ...rest] = nominativePhrase.split(" ");
  const noun = rest.join(" ");
  if (article === "der") {
    return { accusative: `den ${noun}`, note: "Masculine singular changes: der -> den." };
  }
  return { accusative: nominativePhrase, note: "This phrase usually stays the same in the accusative." };
}

function renderAccusativeDrill() {
  const nominativePhrase = accPhraseSelect.value;
  const verb = accVerbSelect.value;
  const transformed = transformAccusativePhrase(nominativePhrase);
  const sentence = `Ich ${verb} ${transformed.accusative}.`;

  accDrillResult.innerHTML = `
    <p class="drill-result__sentence">Nominative phrase: ${escapeHtml(nominativePhrase)}</p>
    <p class="drill-result__sentence">Accusative phrase: <em>${escapeHtml(transformed.accusative)}</em></p>
    <p class="drill-result__sentence">Sentence: ${escapeHtml(sentence).replace(escapeHtml(transformed.accusative), `<em>${escapeHtml(transformed.accusative)}</em>`)}</p>
    <p class="drill-result__explain">${escapeHtml(transformed.note)}</p>
  `;
}

function shuffleArray(items) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function refillQuizDeck() {
  quizDeck = shuffleArray(accusativeQuizQuestions.map((_, index) => index));
}

function renderQuizScore() {
  accQuizScore.textContent = `Score: ${quizScoreState.correct} / ${quizScoreState.total}`;
}

function renderQuizQuestion() {
  if (!currentQuizQuestion) {
    accQuizCard.innerHTML = `
      <p class="acc-quiz-card__eyebrow">Quiz</p>
      <p class="acc-quiz-card__question">No question loaded</p>
    `;
    accQuizOptions.innerHTML = "";
    accQuizFeedback.textContent = "";
    return;
  }

  accQuizCard.innerHTML = `
    <p class="acc-quiz-card__eyebrow">${escapeHtml(currentQuizQuestion.category)}</p>
    <p class="acc-quiz-card__question">${escapeHtml(currentQuizQuestion.prompt)}</p>
    <p class="acc-quiz-card__hint">${escapeHtml(currentQuizQuestion.hint)}</p>
  `;

  accQuizOptions.innerHTML = currentQuizQuestion.options.map((option, index) => {
    const classes = ["quiz-option"];
    if (selectedQuizOptionIndex === index) {
      classes.push("is-selected");
    }
    if (quizAnswered && index === currentQuizQuestion.correctIndex) {
      classes.push("is-correct");
    }
    if (
      quizAnswered &&
      selectedQuizOptionIndex === index &&
      selectedQuizOptionIndex !== currentQuizQuestion.correctIndex
    ) {
      classes.push("is-wrong");
    }

    return `
      <button
        type="button"
        class="${classes.join(" ")}"
        data-quiz-option="${index}"
        role="radio"
        aria-checked="${selectedQuizOptionIndex === index ? "true" : "false"}"
      >
        ${escapeHtml(option)}
      </button>
    `;
  }).join("");

  accQuizCheckBtn.disabled = quizAnswered;
  accQuizNextBtn.disabled = !quizAnswered;
}

function loadNextQuizQuestion() {
  if (quizDeck.length === 0) {
    refillQuizDeck();
  }

  currentQuizQuestionIndex = quizDeck.pop();
  currentQuizQuestion = accusativeQuizQuestions[currentQuizQuestionIndex];
  selectedQuizOptionIndex = null;
  quizAnswered = false;

  accQuizFeedback.textContent = "";
  accQuizFeedback.className = "quiz-feedback";
  renderQuizQuestion();
}

function resetQuiz() {
  quizScoreState = { correct: 0, total: 0 };
  renderQuizScore();
  refillQuizDeck();
  loadNextQuizQuestion();
}

function checkQuizAnswer() {
  if (quizAnswered || selectedQuizOptionIndex === null || !currentQuizQuestion) {
    if (selectedQuizOptionIndex === null && !quizAnswered) {
      accQuizFeedback.textContent = "Select an answer first.";
      accQuizFeedback.className = "quiz-feedback";
    }
    return;
  }

  quizAnswered = true;
  quizScoreState.total += 1;
  const isCorrect = selectedQuizOptionIndex === currentQuizQuestion.correctIndex;
  if (isCorrect) {
    quizScoreState.correct += 1;
  }

  renderQuizScore();
  renderQuizQuestion();

  accQuizFeedback.textContent = isCorrect
    ? `Correct. ${currentQuizQuestion.explanation}`
    : `Not correct. ${currentQuizQuestion.explanation}`;
  accQuizFeedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
}

function getPossessiveEnding(caseName, nounGender) {
  const nominative = {
    masculine: "",
    feminine: "e",
    neuter: "",
    plural: "e"
  };
  const accusative = {
    masculine: "en",
    feminine: "e",
    neuter: "",
    plural: "e"
  };

  const map = caseName === "accusative" ? accusative : nominative;
  return map[nounGender] ?? "";
}

function combinePossessiveStemAndEnding(stem, ending) {
  if (!ending) return stem;
  if (stem.toLowerCase() === "euer" && ending.startsWith("e")) {
    return `${stem.slice(0, 2)}r${ending}`;
  }
  return `${stem}${ending}`;
}

function buildPossessiveForm(ownerKey, nounGender, caseName) {
  const owner = possessiveOwnerMap[ownerKey] || possessiveOwnerMap.ich;
  const ending = getPossessiveEnding(caseName, nounGender);
  return combinePossessiveStemAndEnding(owner.stem, ending);
}

function parsePossessiveNounSelection(value) {
  const [noun = "Buch", nounGender = "neuter"] = String(value || "").split("|");
  return { noun, nounGender };
}

function renderPossessiveStepperDots() {
  posStepperDots.innerHTML = "";

  possessiveSteps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stepper-dot";
    button.textContent = `${index + 1}. ${step.shortLabel}`;
    button.dataset.posStepIndex = String(index);

    if (index === currentPossessiveStep) {
      button.classList.add("is-active");
      button.setAttribute("aria-current", "step");
    } else if (possessiveStepState[index].completed) {
      button.classList.add("is-complete");
    }

    posStepperDots.appendChild(button);
  });
}

function renderPossessiveStep() {
  const step = possessiveSteps[currentPossessiveStep];
  const stepState = possessiveStepState[currentPossessiveStep];
  const feedbackClass = stepState.checked
    ? (stepState.selectedIndex === step.miniCheck.correctIndex ? "is-correct" : "is-wrong")
    : "";
  const feedbackText = stepState.checked
    ? (stepState.selectedIndex === step.miniCheck.correctIndex
      ? `Correct. ${step.miniCheck.explanation}`
      : `Not quite. ${step.miniCheck.explanation}`)
    : "Choose an answer, then click Check Answer.";

  posStepProgress.textContent = `Step ${currentPossessiveStep + 1} / ${possessiveSteps.length}`;

  posStepContent.innerHTML = `
    <h4>${escapeHtml(step.title)}</h4>
    <p>${escapeHtml(step.explanation)}</p>
    <ul class="acc-step-bullets">
      ${step.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
    </ul>
    <div class="acc-step-example">
      ${step.exampleLines.map((line) => `<div class="acc-step-example__line">${line}</div>`).join("")}
    </div>
    <div class="mini-check">
      <p class="mini-check__prompt">${escapeHtml(step.miniCheck.prompt)}</p>
      <div class="mini-check__options">
        ${step.miniCheck.options.map((option, index) => {
          const classes = ["mini-check-option"];
          if (stepState.selectedIndex === index) classes.push("is-selected");
          if (stepState.checked && index === step.miniCheck.correctIndex) classes.push("is-correct");
          if (
            stepState.checked &&
            stepState.selectedIndex === index &&
            stepState.selectedIndex !== step.miniCheck.correctIndex
          ) {
            classes.push("is-wrong");
          }
          return `
            <button
              type="button"
              class="${classes.join(" ")}"
              data-pos-mini-option="${index}"
              aria-pressed="${stepState.selectedIndex === index ? "true" : "false"}"
            >
              ${escapeHtml(option)}
            </button>
          `;
        }).join("")}
      </div>
      <div class="mini-check__actions">
        <button type="button" class="filter-btn" data-pos-mini-action="check">Check Answer</button>
        <button type="button" class="filter-btn filter-btn--ghost" data-pos-mini-action="show">Show Answer</button>
      </div>
      <p class="mini-check__feedback ${feedbackClass}">${escapeHtml(feedbackText)}</p>
    </div>
  `;

  posPrevStepBtn.disabled = currentPossessiveStep === 0;
  posNextStepBtn.textContent = currentPossessiveStep === possessiveSteps.length - 1
    ? "Restart Lesson"
    : "Next Step";

  renderPossessiveStepperDots();
}

function goToPossessiveStep(nextIndex) {
  const bounded = Math.min(possessiveSteps.length - 1, Math.max(0, nextIndex));
  currentPossessiveStep = bounded;
  renderPossessiveStep();
}

function handlePossessiveMiniCheckAction(action) {
  const step = possessiveSteps[currentPossessiveStep];
  const state = possessiveStepState[currentPossessiveStep];

  if (action === "check") {
    if (state.selectedIndex === null) return;
    state.checked = true;
    if (state.selectedIndex === step.miniCheck.correctIndex) {
      state.completed = true;
    }
    renderPossessiveStep();
    return;
  }

  if (action === "show") {
    state.selectedIndex = step.miniCheck.correctIndex;
    state.checked = true;
    state.completed = true;
    renderPossessiveStep();
  }
}

function renderPossessiveBuilder() {
  const ownerKey = posOwnerSelect.value;
  const caseName = posCaseSelect.value;
  const { noun, nounGender } = parsePossessiveNounSelection(posNounSelect.value);
  const owner = possessiveOwnerMap[ownerKey] || possessiveOwnerMap.ich;
  const possessive = buildPossessiveForm(ownerKey, nounGender, caseName);
  const phrase = `${possessive} ${noun}`;
  const sentence = caseName === "accusative"
    ? `Ich sehe ${phrase}.`
    : `Das ist ${phrase}.`;
  const note = caseName === "accusative" && nounGender === "masculine"
    ? "Masculine accusative adds -en (example: meinen Hund)."
    : "Only the noun gender and case decide the ending here.";
  const speakText = `${phrase}. ${sentence}`;

  posBuilderResult.innerHTML = `
    <div class="time-speak-row">
      <strong>Possessive phrase:</strong> <span class="drill-result__sentence"><em>${escapeHtml(phrase)}</em></span>
      ${speechSupported() ? `
        <button type="button" class="speak-btn" data-speak-text="${escapeHtml(speakText)}" aria-label="Speak possessive phrase and sentence" title="Speak pronunciation">🔊</button>
      ` : ""}
    </div>
    <p class="drill-result__sentence">English idea: ${escapeHtml(owner.label)} ${escapeHtml(noun.toLowerCase())}</p>
    <p class="drill-result__sentence">Sentence: ${escapeHtml(sentence).replace(escapeHtml(phrase), `<em>${escapeHtml(phrase)}</em>`)}</p>
    <p class="drill-result__explain">Form used: ${escapeHtml(possessive)} (case: ${escapeHtml(caseName)}, noun gender: ${escapeHtml(nounGender)}). ${escapeHtml(note)}</p>
  `;
}

function refillPossessiveQuizDeck() {
  possessiveQuizDeck = shuffleArray(possessiveQuizQuestions.map((_, index) => index));
}

function renderPossessiveQuizScore() {
  posQuizScore.textContent = `Score: ${possessiveQuizScoreState.correct} / ${possessiveQuizScoreState.total}`;
}

function renderPossessiveQuizQuestion() {
  if (!currentPossessiveQuizQuestion) {
    posQuizCard.innerHTML = `
      <p class="acc-quiz-card__eyebrow">Possessive Quiz</p>
      <p class="acc-quiz-card__question">No question loaded</p>
    `;
    posQuizOptions.innerHTML = "";
    posQuizFeedback.textContent = "";
    return;
  }

  posQuizCard.innerHTML = `
    <p class="acc-quiz-card__eyebrow">${escapeHtml(currentPossessiveQuizQuestion.category)}</p>
    <p class="acc-quiz-card__question">${escapeHtml(currentPossessiveQuizQuestion.prompt)}</p>
    <p class="acc-quiz-card__hint">${escapeHtml(currentPossessiveQuizQuestion.hint)}</p>
  `;

  posQuizOptions.innerHTML = currentPossessiveQuizQuestion.options.map((option, index) => {
    const classes = ["quiz-option"];
    if (selectedPossessiveQuizOptionIndex === index) classes.push("is-selected");
    if (possessiveQuizAnswered && index === currentPossessiveQuizQuestion.correctIndex) classes.push("is-correct");
    if (
      possessiveQuizAnswered &&
      selectedPossessiveQuizOptionIndex === index &&
      selectedPossessiveQuizOptionIndex !== currentPossessiveQuizQuestion.correctIndex
    ) {
      classes.push("is-wrong");
    }

    return `
      <button
        type="button"
        class="${classes.join(" ")}"
        data-pos-quiz-option="${index}"
        role="radio"
        aria-checked="${selectedPossessiveQuizOptionIndex === index ? "true" : "false"}"
      >
        ${escapeHtml(option)}
      </button>
    `;
  }).join("");

  posQuizCheckBtn.disabled = possessiveQuizAnswered;
  posQuizNextBtn.disabled = !possessiveQuizAnswered;
}

function loadNextPossessiveQuizQuestion() {
  if (possessiveQuizDeck.length === 0) {
    refillPossessiveQuizDeck();
  }

  const questionIndex = possessiveQuizDeck.pop();
  currentPossessiveQuizQuestion = possessiveQuizQuestions[questionIndex];
  selectedPossessiveQuizOptionIndex = null;
  possessiveQuizAnswered = false;
  posQuizFeedback.textContent = "";
  posQuizFeedback.className = "quiz-feedback";
  renderPossessiveQuizQuestion();
}

function resetPossessiveQuiz() {
  possessiveQuizScoreState = { correct: 0, total: 0 };
  renderPossessiveQuizScore();
  refillPossessiveQuizDeck();
  loadNextPossessiveQuizQuestion();
}

function checkPossessiveQuizAnswer() {
  if (possessiveQuizAnswered || selectedPossessiveQuizOptionIndex === null || !currentPossessiveQuizQuestion) {
    if (selectedPossessiveQuizOptionIndex === null && !possessiveQuizAnswered) {
      posQuizFeedback.textContent = "Select an answer first.";
      posQuizFeedback.className = "quiz-feedback";
    }
    return;
  }

  possessiveQuizAnswered = true;
  possessiveQuizScoreState.total += 1;
  const isCorrect = selectedPossessiveQuizOptionIndex === currentPossessiveQuizQuestion.correctIndex;
  if (isCorrect) {
    possessiveQuizScoreState.correct += 1;
  }

  renderPossessiveQuizScore();
  renderPossessiveQuizQuestion();
  posQuizFeedback.textContent = isCorrect
    ? `Correct. ${currentPossessiveQuizQuestion.explanation}`
    : `Not correct. ${currentPossessiveQuizQuestion.explanation}`;
  posQuizFeedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
}

const germanNumberBase = {
  0: "null",
  1: "eins",
  2: "zwei",
  3: "drei",
  4: "vier",
  5: "fünf",
  6: "sechs",
  7: "sieben",
  8: "acht",
  9: "neun",
  10: "zehn",
  11: "elf",
  12: "zwölf",
  13: "dreizehn",
  14: "vierzehn",
  15: "fünfzehn",
  16: "sechzehn",
  17: "siebzehn",
  18: "achtzehn",
  19: "neunzehn"
};

const germanTens = {
  20: "zwanzig",
  30: "dreißig",
  40: "vierzig",
  50: "fünfzig",
  60: "sechzig",
  70: "siebzig",
  80: "achtzig",
  90: "neunzig"
};

function germanNumberWord(num, options = {}) {
  const n = Math.trunc(Number(num));
  if (!Number.isFinite(n)) return "";
  const { oneAsEin = false } = options;

  if (n < 0) {
    return `minus ${germanNumberWord(Math.abs(n))}`;
  }

  if (n in germanNumberBase) {
    if (n === 1 && oneAsEin) return "ein";
    return germanNumberBase[n];
  }

  if (n < 60) {
    const tens = Math.floor(n / 10) * 10;
    const ones = n % 10;
    const tensWord = germanTens[tens] || "";
    if (ones === 0) return tensWord;
    const onesWord = ones === 1 ? "ein" : germanNumberBase[ones];
    return `${onesWord}und${tensWord}`;
  }

  if (n < 1000) {
    const hundreds = Math.floor(n / 100);
    const rest = n % 100;
    const hundredsPrefix = hundreds === 1 ? "ein" : germanNumberWord(hundreds, { oneAsEin: true });
    return `${hundredsPrefix}hundert${rest ? germanNumberWord(rest) : ""}`;
  }

  if (n < 1000000) {
    const thousands = Math.floor(n / 1000);
    const rest = n % 1000;
    const thousandsPrefix = thousands === 1 ? "ein" : germanNumberWord(thousands, { oneAsEin: true });
    return `${thousandsPrefix}tausend${rest ? germanNumberWord(rest) : ""}`;
  }

  return String(n);
}

function germanHourWord12(hour, options = {}) {
  const h = ((Number(hour) % 12) + 12) % 12 || 12;
  const exact = Boolean(options.exact);
  return germanNumberWord(h, { oneAsEin: exact && h === 1 });
}

function germanHourWord24(hour) {
  const h = Math.max(0, Math.min(23, Number(hour) || 0));
  return germanNumberWord(h, { oneAsEin: h === 1 });
}

function officialGermanTimePhrase(hour24, minute) {
  const hourWord = germanHourWord24(hour24);
  const m = Number(minute);
  if (m === 0) {
    return `Es ist ${hourWord} Uhr.`;
  }
  if (m < 10) {
    return `Es ist ${hourWord} Uhr null ${germanNumberWord(m)}.`;
  }
  return `Es ist ${hourWord} Uhr ${germanNumberWord(m)}.`;
}

function unofficialGermanTimePhrase(hour24, minute) {
  const h = Number(hour24);
  const m = Number(minute);
  const currentHour = germanHourWord12(h, { exact: false });
  const nextHour = germanHourWord12(h + 1, { exact: false });

  if (m === 0) return `Es ist ${germanHourWord12(h, { exact: true })} Uhr.`;
  if (m === 15) return `Es ist Viertel nach ${currentHour}.`;
  if (m === 30) return `Es ist halb ${nextHour}.`;
  if (m === 45) return `Es ist Viertel vor ${nextHour}.`;

  if (m < 30) {
    return `Es ist ${germanNumberWord(m)} nach ${currentHour}.`;
  }

  return `Es ist ${germanNumberWord(60 - m)} vor ${nextHour}.`;
}

function format12hChip(hour24, minute) {
  const h = Number(hour24);
  const m = Number(minute);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = (h % 12) || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

function buildClockFaceOnce() {
  if (clockMarkupBuilt || !clockFace) return;

  for (let minute = 0; minute < 60; minute += 1) {
    const tick = document.createElement("div");
    tick.className = `clock-tick${minute % 5 === 0 ? " is-major" : ""}`;
    tick.style.setProperty("--angle", `${minute * 6}deg`);
    clockFace.appendChild(tick);
  }

  for (let number = 1; number <= 12; number += 1) {
    const numberEl = document.createElement("div");
    numberEl.className = "clock-number";
    numberEl.style.setProperty("--angle", `${number * 30}deg`);
    numberEl.textContent = String(number);
    clockFace.appendChild(numberEl);
  }

  clockMarkupBuilt = true;
}

function renderTimePhraseCard(target, { label, phrase, hint }) {
  if (!target) return;
  target.innerHTML = `
    <div class="time-phrase-card__top">
      <div>
        <p class="time-phrase-card__label">${escapeHtml(label)}</p>
        <p class="time-phrase-card__text">${escapeHtml(phrase)}</p>
      </div>
      ${speechSupported() ? `
        <button type="button" class="speak-btn" data-speak-text="${escapeHtml(phrase)}" aria-label="Speak ${escapeHtml(label)} time" title="Speak pronunciation">🔊</button>
      ` : ""}
    </div>
    <p class="time-phrase-card__hint">${escapeHtml(hint)}</p>
  `;
}

function updateAnalogClock(hour24, minute) {
  if (!clockHourHand || !clockMinuteHand) return;
  const m = Number(minute);
  const h = Number(hour24);
  const minuteDegrees = m * 6;
  const hourDegrees = ((h % 12) * 30) + (m * 0.5);

  clockMinuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  clockHourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function renderGermanTimeTab() {
  const hour = Number(timeHourInput.value);
  const minute = Number(timeMinuteInput.value);
  const official = officialGermanTimePhrase(hour, minute);
  const unofficial = unofficialGermanTimePhrase(hour, minute);

  timeDigitalChip.textContent = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  time12hChip.textContent = format12hChip(hour, minute);

  renderTimePhraseCard(timeOfficialCard, {
    label: "Official Time (official / digital)",
    phrase: official,
    hint: "Common in stations, announcements, schedules, and formal contexts."
  });

  renderTimePhraseCard(timeUnofficialCard, {
    label: "Unofficial Time (spoken / everyday)",
    phrase: unofficial,
    hint: "Common in conversation with nach, vor, halb, Viertel."
  });

  updateAnalogClock(hour, minute);
}

function setTimeControls(hour24, minute) {
  timeHourInput.value = String(Math.max(0, Math.min(23, Number(hour24) || 0)));
  timeMinuteInput.value = String(Math.max(0, Math.min(59, Number(minute) || 0)));
  renderGermanTimeTab();
}

function clampNumbersValue(value) {
  const parsed = Math.trunc(Number(value));
  if (!Number.isFinite(parsed)) return 0;
  return Math.max(0, Math.min(NUMBERS_MAX_VALUE, parsed));
}

function englishOrdinalLabel(num) {
  const n = Math.max(0, Math.trunc(Number(num) || 0));
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
  const mod10 = n % 10;
  if (mod10 === 1) return `${n}st`;
  if (mod10 === 2) return `${n}nd`;
  if (mod10 === 3) return `${n}rd`;
  return `${n}th`;
}

function germanOrdinalStem(num) {
  const n = Math.max(0, Math.trunc(Number(num) || 0));
  if (n === 1) return "erst";
  if (n === 3) return "dritt";
  if (n === 7) return "siebt";
  if (n === 8) return "acht";
  return germanNumberWord(n);
}

function germanOrdinalPlain(num) {
  const n = Math.max(0, Math.trunc(Number(num) || 0));
  const basics = {
    0: "nullte",
    1: "erste",
    2: "zweite",
    3: "dritte",
    4: "vierte",
    5: "fünfte",
    6: "sechste",
    7: "siebte",
    8: "achte",
    9: "neunte",
    10: "zehnte",
    11: "elfte",
    12: "zwölfte",
    13: "dreizehnte",
    14: "vierzehnte",
    15: "fünfzehnte",
    16: "sechzehnte",
    17: "siebzehnte",
    18: "achtzehnte",
    19: "neunzehnte"
  };

  if (Object.prototype.hasOwnProperty.call(basics, n)) {
    return basics[n];
  }

  return `${germanNumberWord(n)}ste`;
}

function germanOrdinalDateForm(num) {
  const plain = germanOrdinalPlain(num);
  if (!plain) return "";
  return plain.endsWith("e") ? `${plain.slice(0, -1)}en` : `${plain}n`;
}

function germanOrdinalWithArticle(num) {
  return `der ${germanOrdinalPlain(num)}`;
}

function getGermanMonthName(monthNumber) {
  const month = Math.max(1, Math.min(12, Math.trunc(Number(monthNumber) || 1)));
  return germanMonthNames[month];
}

function getEnglishMonthName(monthNumber) {
  const month = Math.max(1, Math.min(12, Math.trunc(Number(monthNumber) || 1)));
  return englishMonthNames[month];
}

function germanMonthOrdinalNoun(monthNumber) {
  return capitalizeGermanNounClient(germanOrdinalDateForm(monthNumber));
}

function getNumbersExplorerValue() {
  if (numbersValueInput && numbersValueInput.value !== "") {
    return clampNumbersValue(numbersValueInput.value);
  }
  if (numbersValueRange) {
    return clampNumbersValue(numbersValueRange.value);
  }
  return 0;
}

function isNumbersOrdinalHighlight(dayNumber) {
  return [1, 3, 7, 8, 20, 30].includes(Number(dayNumber));
}

function buildGermanNumberBreakdown(num) {
  const n = clampNumbersValue(num);
  const word = germanNumberWord(n);
  const chips = [{ de: String(n), en: `the number ${n}` }];
  let note = "Read it aloud and repeat the German word slowly.";

  if (n < 20) {
    chips.push({ de: word, en: "basic number word (memorize as one form)" });
    if (n >= 13 && n <= 19) {
      note = "Numbers 13-19 often end with -zehn (like English '-teen').";
    } else {
      note = "This is a basic number form. Practice it as a whole word.";
    }
    return { chips, note };
  }

  if (n < 100) {
    const tens = Math.floor(n / 10) * 10;
    const ones = n % 10;
    if (ones === 0) {
      chips.push({ de: germanNumberWord(tens), en: "tens word (20, 30, 40...)" });
      note = "Exact tens are single words (zwanzig, dreißig, vierzig...).";
      return { chips, note };
    }

    chips.push({
      de: ones === 1 ? "ein" : germanNumberWord(ones),
      en: "ones part comes first"
    });
    chips.push({ de: "und", en: "and" });
    chips.push({ de: germanNumberWord(tens), en: "tens part comes after" });
    chips.push({ de: word, en: "combined German spelling" });
    note = "German often says 24 as 'four-and-twenty' (vier-und-zwanzig).";
    return { chips, note };
  }

  if (n < 1000) {
    const hundreds = Math.floor(n / 100);
    const rest = n % 100;
    chips.push({
      de: hundreds === 1 ? "einhundert" : `${germanNumberWord(hundreds, { oneAsEin: true })}hundert`,
      en: hundreds === 1 ? "one hundred" : `${hundreds} hundred`
    });
    if (rest > 0) {
      chips.push({ de: germanNumberWord(rest), en: "remaining part after the hundreds" });
    }
    chips.push({ de: word, en: "full German number word" });
    note = "German joins number parts into one long word (hundreds + remainder).";
    return { chips, note };
  }

  chips.push({ de: word, en: "German number word" });
  return { chips, note };
}

function renderNumbersQuickList(activeValue = getNumbersExplorerValue()) {
  if (!numbersQuickList) return;

  numbersQuickList.innerHTML = numbersQuickPickValues.map((value) => `
    <button
      type="button"
      class="numbers-quick-btn ${Number(activeValue) === value ? "is-active" : ""}"
      data-number-pick="${value}"
      aria-pressed="${Number(activeValue) === value ? "true" : "false"}"
      title="Use ${value}"
    >
      ${value}
    </button>
  `).join("");
}

function setNumbersExplorerValue(value) {
  const safeValue = clampNumbersValue(value);
  if (numbersValueRange) numbersValueRange.value = String(safeValue);
  if (numbersValueInput) numbersValueInput.value = String(safeValue);
  renderGermanNumbersExplorer();
}

function renderGermanNumbersExplorer() {
  if (!numbersCardinalCard || !numbersOrdinalCard || !numbersDateformCard) return;

  const value = getNumbersExplorerValue();
  const cardinal = germanNumberWord(value);
  const ordinal = germanOrdinalWithArticle(value);

  renderNumbersQuickList(value);

  renderTimePhraseCard(numbersCardinalCard, {
    label: "Cardinal Number (counting)",
    phrase: `${value} = ${cardinal}`,
    hint: "Use this form for counting, prices, quantities, and time digits."
  });

  renderTimePhraseCard(numbersOrdinalCard, {
    label: "Ordinal Number (order)",
    phrase: `${value}. = ${ordinal}`,
    hint: "Use ordinal numbers for order: first, second, third... (der erste, der zweite, der dritte)."
  });

  if (value >= 1 && value <= 31) {
    const dateForm = germanOrdinalDateForm(value);
    renderTimePhraseCard(numbersDateformCard, {
      label: "Date Form (Wann? Am ...)",
      phrase: `am ${dateForm}`,
      hint: "Date phrases commonly use 'am' + ordinal date form (e.g. am fünften, am zwanzigsten)."
    });
  } else {
    renderTimePhraseCard(numbersDateformCard, {
      label: "Date Form (Wann? Am ...)",
      phrase: "Choose a day number from 1 to 31",
      hint: "Dates usually use day numbers 1-31. Try 1, 5, 10, 20, or 30."
    });
  }

  const breakdown = buildGermanNumberBreakdown(value);
  renderBreakdownChips(numbersBreakdown, breakdown.chips);
  if (numbersBreakdownNote) {
    numbersBreakdownNote.textContent = breakdown.note;
  }
}

function populateNumbersDateControls() {
  if (numbersDaySelect && numbersDaySelect.options.length === 0) {
    for (let day = 1; day <= 31; day += 1) {
      const option = document.createElement("option");
      option.value = String(day);
      option.textContent = `${day}. (${germanOrdinalDateForm(day)})`;
      numbersDaySelect.appendChild(option);
    }
    numbersDaySelect.value = "15";
  }

  if (numbersMonthSelect && numbersMonthSelect.options.length === 0) {
    for (let month = 1; month <= 12; month += 1) {
      const option = document.createElement("option");
      option.value = String(month);
      option.textContent = `${month}. ${getGermanMonthName(month)}`;
      numbersMonthSelect.appendChild(option);
    }
    numbersMonthSelect.value = "11";
  }
}

function renderNumbersOrdinalReference() {
  if (!numbersOrdinalReference) return;

  numbersOrdinalReference.innerHTML = ordinalReferenceValues.map((day) => {
    const dateWord = germanOrdinalDateForm(day);
    const highlightClass = isNumbersOrdinalHighlight(day) ? "is-highlight" : "";

    return `
      <article class="numbers-ordinal-item" data-ordinal-day="${day}">
        <div class="numbers-ordinal-item__top">
          <span class="numbers-ordinal-item__num">${day}.</span>
          <div class="time-speak-row">
            <button
              type="button"
              class="filter-btn filter-btn--ghost"
              data-ordinal-day="${day}"
              aria-label="Use day ${day}"
              title="Use this day in the date builder"
            >
              Use
            </button>
            ${buildSpeakButtonHtml(`am ${dateWord}`, `Speak date form for ${day}`)}
          </div>
        </div>
        <p class="numbers-ordinal-item__word ${highlightClass}">${escapeHtml(dateWord)}</p>
        <p class="numbers-ordinal-item__hint">Wann? <strong>am ${escapeHtml(dateWord)}</strong></p>
      </article>
    `;
  }).join("");
}

function getSelectedNumbersDateValues() {
  const day = Math.max(1, Math.min(31, Number(numbersDaySelect?.value || 1)));
  const month = Math.max(1, Math.min(12, Number(numbersMonthSelect?.value || 1)));
  const topicKey = String(numbersDateTopicSelect?.value || "birthday");
  return { day, month, topicKey };
}

function renderNumbersDateBuilder() {
  if (!numbersDatePhraseCard || !numbersDateExampleCard) return;

  const { day, month, topicKey } = getSelectedNumbersDateValues();
  const dayDateWord = germanOrdinalDateForm(day);
  const monthGerman = getGermanMonthName(month);
  const monthEnglish = getEnglishMonthName(month);
  const monthOrdinalNoun = germanMonthOrdinalNoun(month);
  const datePhrase = `am ${dayDateWord} ${monthGerman}`;
  const altDatePhrase = `am ${dayDateWord} ${monthOrdinalNoun}`;
  const topicTemplate = numbersDateTopicTemplates[topicKey] || numbersDateTopicTemplates.birthday;
  const exampleGerman = topicTemplate.de(datePhrase);
  const exampleEnglish = topicTemplate.en(englishOrdinalLabel(day), monthEnglish);

  renderTimePhraseCard(numbersDatePhraseCard, {
    label: "Date Phrase (month name)",
    phrase: datePhrase,
    hint: `Question: "Wann?" -> "${datePhrase}". You can also hear/read the month as a number: ${altDatePhrase}.`
  });

  renderTimePhraseCard(numbersDateExampleCard, {
    label: `${topicTemplate.label} Example Sentence`,
    phrase: exampleGerman,
    hint: `English: ${exampleEnglish}`
  });

  const breakdownChips = [];
  if (topicTemplate.introChip) breakdownChips.push(topicTemplate.introChip);
  breakdownChips.push(
    { de: "am", en: "on (used with dates)" },
    { de: dayDateWord, en: `the ${englishOrdinalLabel(day)} (date form)` },
    { de: monthGerman, en: monthEnglish }
  );
  if (topicTemplate.outroChip) breakdownChips.push(topicTemplate.outroChip);
  renderBreakdownChips(numbersDateBreakdown, breakdownChips);
}

function ensureNumbersTabReady() {
  if (!numbersPanel) return;

  if (numbersDaySelect && numbersDaySelect.options.length === 0) {
    populateNumbersDateControls();
  }

  if (numbersOrdinalReference && numbersOrdinalReference.childElementCount === 0) {
    renderNumbersOrdinalReference();
  }

  if (numbersCardinalCard && !numbersCardinalCard.textContent.trim()) {
    renderGermanNumbersExplorer();
  }

  if (numbersDatePhraseCard && !numbersDatePhraseCard.textContent.trim()) {
    renderNumbersDateBuilder();
  }

  if (numbersQuizCard && !numbersQuizCard.textContent.trim()) {
    resetNumbersQuiz();
  }
}

function numbersRandomInt(min, max) {
  const safeMin = Math.ceil(Math.min(min, max));
  const safeMax = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;
}

function buildNumbersCardinalQuizQuestion() {
  const value = Math.random() < 0.8 ? numbersRandomInt(0, 99) : numbersRandomInt(100, 399);
  const correct = germanNumberWord(value);
  const candidateValues = new Set([value]);
  const deltas = shuffleArray([1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 20, 30, 40, 50]);

  for (const delta of deltas) {
    if (candidateValues.size >= 4) break;
    const plus = value + delta;
    const minus = value - delta;
    if (plus >= 0 && plus <= NUMBERS_MAX_VALUE) candidateValues.add(plus);
    if (candidateValues.size >= 4) break;
    if (minus >= 0 && minus <= NUMBERS_MAX_VALUE) candidateValues.add(minus);
  }

  while (candidateValues.size < 4) {
    candidateValues.add(numbersRandomInt(0, Math.min(NUMBERS_MAX_VALUE, 399)));
  }

  const optionValues = shuffleArray(Array.from(candidateValues).slice(0, 4));
  const options = optionValues.map((item) => germanNumberWord(item));
  const correctIndex = optionValues.indexOf(value);

  return {
    category: "Cardinal Numbers",
    prompt: `Which is the correct German word for ${value}?`,
    hint: "Choose the correct spelling. Then use the speaker button to hear it.",
    options,
    correctIndex,
    explanation: `${value} is written "${correct}".`,
    speakText: correct
  };
}

function buildNumbersListeningQuizQuestion() {
  const value = Math.random() < 0.85 ? numbersRandomInt(0, 99) : numbersRandomInt(100, 299);
  const spoken = germanNumberWord(value);
  const candidateValues = new Set([value]);

  while (candidateValues.size < 4) {
    const candidate = clampNumbersValue(value + numbersRandomInt(-20, 20));
    candidateValues.add(candidate);
  }

  const options = shuffleArray(Array.from(candidateValues)).slice(0, 4);
  const correctIndex = options.indexOf(value);

  return {
    category: "Listening Practice",
    prompt: "Listen and choose the number you hear.",
    hint: "Click the speaker icon and choose the correct digits.",
    options: options.map((item) => String(item)),
    correctIndex,
    explanation: `You heard "${spoken}" = ${value}.`,
    speakText: spoken,
    meta: "Replay the audio and listen for the ones part + tens part."
  };
}

function buildNumbersDateOrdinalQuizQuestion() {
  const day = numbersRandomInt(1, 31);
  const month = numbersRandomInt(1, 12);
  const correct = germanOrdinalDateForm(day);
  const wrongForms = new Set([
    germanOrdinalPlain(day),
    `${germanOrdinalPlain(day)}n`,
    germanOrdinalDateForm(Math.max(1, Math.min(31, day + (day === 31 ? -1 : 1))))
  ]);
  wrongForms.delete(correct);

  while (wrongForms.size < 3) {
    wrongForms.add(germanOrdinalDateForm(numbersRandomInt(1, 31)));
    wrongForms.delete(correct);
  }

  const options = shuffleArray([correct, ...Array.from(wrongForms).slice(0, 3)]);
  const correctIndex = options.indexOf(correct);
  const monthName = getGermanMonthName(month);

  return {
    category: "Ordinalzahlen (Datum)",
    prompt: `Complete the date phrase: am ___ ${monthName} (${day}.)`,
    hint: "After 'am' for dates, use the date form (usually ending in -ten or -sten).",
    options,
    correctIndex,
    explanation: `Correct: "am ${correct} ${monthName}". Date phrases use "am" + ordinal date form.`,
    speakText: `am ${correct} ${monthName}`
  };
}

function buildNumbersQuizQuestion() {
  const builders = [
    buildNumbersCardinalQuizQuestion,
    buildNumbersListeningQuizQuestion,
    buildNumbersDateOrdinalQuizQuestion
  ];
  const builder = builders[numbersRandomInt(0, builders.length - 1)];
  return builder();
}

function renderNumbersQuizScore() {
  if (!numbersQuizScore) return;
  numbersQuizScore.textContent = `Score: ${numbersQuizScoreState.correct} / ${numbersQuizScoreState.total}`;
}

function renderNumbersQuizQuestion() {
  if (!numbersQuizCard || !numbersQuizOptions || !numbersQuizFeedback) return;

  if (!numbersQuizQuestion) {
    numbersQuizCard.innerHTML = `
      <p class="acc-quiz-card__eyebrow">Quiz</p>
      <p class="acc-quiz-card__question">No question loaded.</p>
    `;
    numbersQuizOptions.innerHTML = "";
    numbersQuizFeedback.textContent = "";
    return;
  }

  numbersQuizCard.innerHTML = `
    <p class="acc-quiz-card__eyebrow">${escapeHtml(numbersQuizQuestion.category)}</p>
    <div class="numbers-quiz-card__prompt-row">
      <div class="numbers-quiz-card__prompt-col">
        <p class="acc-quiz-card__question">${escapeHtml(numbersQuizQuestion.prompt)}</p>
        <p class="acc-quiz-card__hint">${escapeHtml(numbersQuizQuestion.hint)}</p>
        ${numbersQuizQuestion.meta ? `<p class="numbers-quiz-card__meta">${escapeHtml(numbersQuizQuestion.meta)}</p>` : ""}
      </div>
      ${buildSpeakButtonHtml(numbersQuizQuestion.speakText || "", `Speak quiz item for ${numbersQuizQuestion.category}`)}
    </div>
  `;

  numbersQuizOptions.innerHTML = numbersQuizQuestion.options.map((option, index) => {
    const classes = ["quiz-option"];
    if (numbersQuizSelectedIndex === index) classes.push("is-selected");

    if (numbersQuizAnswered) {
      if (index === numbersQuizQuestion.correctIndex) {
        classes.push("is-correct");
      } else if (index === numbersQuizSelectedIndex) {
        classes.push("is-wrong");
      }
    }

    return `
      <button
        type="button"
        class="${classes.join(" ")}"
        data-numbers-quiz-option="${index}"
        role="radio"
        aria-checked="${numbersQuizSelectedIndex === index ? "true" : "false"}"
      >
        ${escapeHtml(option)}
      </button>
    `;
  }).join("");
}

function loadNextNumbersQuizQuestion() {
  numbersQuizQuestion = buildNumbersQuizQuestion();
  numbersQuizSelectedIndex = null;
  numbersQuizAnswered = false;
  if (numbersQuizFeedback) {
    numbersQuizFeedback.textContent = "Choose an answer, then click Check Answer.";
    numbersQuizFeedback.className = "quiz-feedback";
  }
  renderNumbersQuizQuestion();
}

function checkNumbersQuizAnswer() {
  if (!numbersQuizQuestion) {
    loadNextNumbersQuizQuestion();
    return;
  }

  if (numbersQuizAnswered) return;

  if (numbersQuizSelectedIndex === null) {
    if (numbersQuizFeedback) {
      numbersQuizFeedback.textContent = "Choose one option first.";
      numbersQuizFeedback.className = "quiz-feedback is-wrong";
    }
    return;
  }

  numbersQuizAnswered = true;
  numbersQuizScoreState.total += 1;
  const isCorrect = numbersQuizSelectedIndex === numbersQuizQuestion.correctIndex;
  if (isCorrect) {
    numbersQuizScoreState.correct += 1;
  }

  renderNumbersQuizScore();
  renderNumbersQuizQuestion();

  if (numbersQuizFeedback) {
    numbersQuizFeedback.textContent = isCorrect
      ? `Correct. ${numbersQuizQuestion.explanation}`
      : `Not correct. ${numbersQuizQuestion.explanation}`;
    numbersQuizFeedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
  }
}

function resetNumbersQuiz() {
  numbersQuizScoreState = { correct: 0, total: 0 };
  renderNumbersQuizScore();
  loadNextNumbersQuizQuestion();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleLiveLookup(input.value);
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveFilter(btn.dataset.filter);
  });
});

randomBtn.addEventListener("click", () => {
  const source = words.filter((entry) => activeFilter === "all" || entry.gender === activeFilter);
  if (source.length === 0) return;
  const entry = source[Math.floor(Math.random() * source.length)];
  input.value = entry.word;
  renderResult(entry);
});

resultCard.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

genderBatchAddBtn.addEventListener("click", () => {
  const added = addGenderBatchTag(genderBatchWordInput.value);
  if (added) {
    genderBatchWordInput.value = "";
    genderBatchWordInput.focus();
  }
});

genderBatchWordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === ",") {
    event.preventDefault();
    const added = addGenderBatchTag(genderBatchWordInput.value);
    if (added) {
      genderBatchWordInput.value = "";
    }
    return;
  }

  if (event.key === "Backspace" && !genderBatchWordInput.value.trim() && genderBatchTags.length > 0) {
    const lastTag = genderBatchTags[genderBatchTags.length - 1];
    removeGenderBatchTag(lastTag);
  }
});

genderBatchTagsWrap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gender-batch-remove]");
  if (!button) return;
  removeGenderBatchTag(button.dataset.genderBatchRemove || "");
});

genderBatchModeToggle.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gender-batch-mode]");
  if (!button) return;
  setGenderBatchMode(button.dataset.genderBatchMode || "simple");
});

genderBatchGenerateBtn.addEventListener("click", () => {
  generateGenderBatchSentences();
});

genderBatchClearBtn.addEventListener("click", () => {
  clearGenderBatchTags();
});

genderBatchResults.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tabTarget);
  });

  button.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) return;

    event.preventDefault();

    let nextIndex = index;
    if (key === "ArrowRight") nextIndex = (index + 1) % tabButtons.length;
    if (key === "ArrowLeft") nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
    if (key === "Home") nextIndex = 0;
    if (key === "End") nextIndex = tabButtons.length - 1;

    const nextButton = tabButtons[nextIndex];
    activateTab(nextButton.dataset.tabTarget, true);
  });
});

accPrevStepBtn.addEventListener("click", () => {
  goToAccusativeStep(currentAccusativeStep - 1);
});

accNextStepBtn.addEventListener("click", () => {
  if (currentAccusativeStep === accusativeSteps.length - 1) {
    goToAccusativeStep(0);
    return;
  }
  goToAccusativeStep(currentAccusativeStep + 1);
});

accStepperDots.addEventListener("click", (event) => {
  const button = event.target.closest(".stepper-dot");
  if (!button) return;
  const nextIndex = Number(button.dataset.stepIndex);
  if (!Number.isFinite(nextIndex)) return;
  goToAccusativeStep(nextIndex);
});

accStepContent.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-mini-option]");
  if (optionButton) {
    const stepState = accusativeStepState[currentAccusativeStep];
    stepState.selectedIndex = Number(optionButton.dataset.miniOption);
    if (stepState.checked) {
      stepState.checked = false;
    }
    renderAccusativeStep();
    return;
  }

  const actionButton = event.target.closest("[data-mini-action]");
  if (actionButton) {
    handleAccusativeMiniCheckAction(actionButton.dataset.miniAction);
  }
});

accPhraseSelect.addEventListener("change", renderAccusativeDrill);
accVerbSelect.addEventListener("change", renderAccusativeDrill);

accQuizOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-quiz-option]");
  if (!optionButton || quizAnswered) return;
  selectedQuizOptionIndex = Number(optionButton.dataset.quizOption);
  renderQuizQuestion();
});

accQuizCheckBtn.addEventListener("click", checkQuizAnswer);
accQuizNextBtn.addEventListener("click", loadNextQuizQuestion);
accQuizResetBtn.addEventListener("click", resetQuiz);

if (conjPrevStepBtn) {
  conjPrevStepBtn.addEventListener("click", () => {
    goToConjugationStep(currentConjugationStep - 1);
  });
}

if (conjNextStepBtn) {
  conjNextStepBtn.addEventListener("click", () => {
    if (currentConjugationStep === conjugationLessons.length - 1) {
      goToConjugationStep(0);
      return;
    }
    goToConjugationStep(currentConjugationStep + 1);
  });
}

if (conjStepperDots) {
  conjStepperDots.addEventListener("click", (event) => {
    const button = event.target.closest("[data-conj-step-index]");
    if (!button) return;
    const nextIndex = Number(button.dataset.conjStepIndex);
    if (!Number.isFinite(nextIndex)) return;
    goToConjugationStep(nextIndex);
  });
}

if (conjStepContent) {
  conjStepContent.addEventListener("click", (event) => {
    const optionButton = event.target.closest("[data-conj-mini-option]");
    if (optionButton) {
      const stepState = conjugationStepState[currentConjugationStep];
      stepState.selectedIndex = Number(optionButton.dataset.conjMiniOption);
      if (stepState.checked) {
        stepState.checked = false;
      }
      renderConjugationStep();
      return;
    }

    const actionButton = event.target.closest("[data-conj-mini-action]");
    if (actionButton) {
      handleConjugationMiniCheckAction(actionButton.dataset.conjMiniAction || "");
    }
  });
}

if (conjTypeSelect) {
  conjTypeSelect.addEventListener("change", () => {
    setConjugationType(conjTypeSelect.value);
  });
}

if (conjVerbSelect) {
  conjVerbSelect.addEventListener("change", renderConjugationBuilder);
}

if (conjTenseSelect) {
  conjTenseSelect.addEventListener("change", renderConjugationBuilder);
}

if (conjSubjectSelect) {
  conjSubjectSelect.addEventListener("change", renderConjugationBuilder);
}

if (conjPatternSelect) {
  conjPatternSelect.addEventListener("change", renderConjugationBuilder);
}

if (conjugationPanel) {
  conjugationPanel.addEventListener("click", (event) => {
    const speakButton = event.target.closest("[data-speak-text]");
    if (!speakButton) return;
    speakGermanText(speakButton.dataset.speakText || "");
  });
}

posPrevStepBtn.addEventListener("click", () => {
  goToPossessiveStep(currentPossessiveStep - 1);
});

posNextStepBtn.addEventListener("click", () => {
  if (currentPossessiveStep === possessiveSteps.length - 1) {
    goToPossessiveStep(0);
    return;
  }
  goToPossessiveStep(currentPossessiveStep + 1);
});

posStepperDots.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pos-step-index]");
  if (!button) return;
  const nextIndex = Number(button.dataset.posStepIndex);
  if (!Number.isFinite(nextIndex)) return;
  goToPossessiveStep(nextIndex);
});

posStepContent.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-pos-mini-option]");
  if (optionButton) {
    const stepState = possessiveStepState[currentPossessiveStep];
    stepState.selectedIndex = Number(optionButton.dataset.posMiniOption);
    if (stepState.checked) {
      stepState.checked = false;
    }
    renderPossessiveStep();
    return;
  }

  const actionButton = event.target.closest("[data-pos-mini-action]");
  if (actionButton) {
    handlePossessiveMiniCheckAction(actionButton.dataset.posMiniAction);
  }
});

posOwnerSelect.addEventListener("change", renderPossessiveBuilder);
posNounSelect.addEventListener("change", renderPossessiveBuilder);
posCaseSelect.addEventListener("change", renderPossessiveBuilder);

posBuilderResult.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

posQuizOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-pos-quiz-option]");
  if (!optionButton || possessiveQuizAnswered) return;
  selectedPossessiveQuizOptionIndex = Number(optionButton.dataset.posQuizOption);
  renderPossessiveQuizQuestion();
});

posQuizCheckBtn.addEventListener("click", checkPossessiveQuizAnswer);
posQuizNextBtn.addEventListener("click", loadNextPossessiveQuizQuestion);
posQuizResetBtn.addEventListener("click", resetPossessiveQuiz);

timeHourInput.addEventListener("input", renderGermanTimeTab);
timeMinuteInput.addEventListener("input", renderGermanTimeTab);

timeNowBtn.addEventListener("click", () => {
  const now = new Date();
  setTimeControls(now.getHours(), now.getMinutes());
});

timeRandomBtn.addEventListener("click", () => {
  const randomHour = Math.floor(Math.random() * 24);
  const randomMinute = Math.floor(Math.random() * 60);
  setTimeControls(randomHour, randomMinute);
});

timeOfficialCard.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

timeUnofficialCard.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

if (numbersPanel) {
  numbersPanel.addEventListener("click", (event) => {
    const speakButton = event.target.closest("[data-speak-text]");
    if (!speakButton) return;
    speakGermanText(speakButton.dataset.speakText || "");
  });
}

if (numbersValueRange) {
  numbersValueRange.addEventListener("input", () => {
    setNumbersExplorerValue(numbersValueRange.value);
  });
}

if (numbersValueInput) {
  numbersValueInput.addEventListener("input", () => {
    if (numbersValueInput.value === "") return;
    setNumbersExplorerValue(numbersValueInput.value);
  });

  numbersValueInput.addEventListener("change", () => {
    setNumbersExplorerValue(numbersValueInput.value);
  });
}

if (numbersRandomBtn) {
  numbersRandomBtn.addEventListener("click", () => {
    setNumbersExplorerValue(numbersRandomInt(0, NUMBERS_MAX_VALUE));
  });
}

if (numbersQuickList) {
  numbersQuickList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-number-pick]");
    if (!button) return;
    setNumbersExplorerValue(button.dataset.numberPick || "0");
  });
}

if (numbersOrdinalReference) {
  numbersOrdinalReference.addEventListener("click", (event) => {
    const useButton = event.target.closest("[data-ordinal-day]");
    if (!useButton) return;
    if (numbersDaySelect) {
      numbersDaySelect.value = String(useButton.dataset.ordinalDay || "1");
    }
    renderNumbersDateBuilder();
  });
}

if (numbersDaySelect) {
  numbersDaySelect.addEventListener("change", renderNumbersDateBuilder);
}

if (numbersMonthSelect) {
  numbersMonthSelect.addEventListener("change", renderNumbersDateBuilder);
}

if (numbersDateTopicSelect) {
  numbersDateTopicSelect.addEventListener("change", renderNumbersDateBuilder);
}

if (numbersQuizOptions) {
  numbersQuizOptions.addEventListener("click", (event) => {
    const optionButton = event.target.closest("[data-numbers-quiz-option]");
    if (!optionButton || numbersQuizAnswered) return;
    numbersQuizSelectedIndex = Number(optionButton.dataset.numbersQuizOption);
    renderNumbersQuizQuestion();
  });
}

if (numbersQuizCheckBtn) {
  numbersQuizCheckBtn.addEventListener("click", checkNumbersQuizAnswer);
}

if (numbersQuizNextBtn) {
  numbersQuizNextBtn.addEventListener("click", loadNextNumbersQuizQuestion);
}

if (numbersQuizResetBtn) {
  numbersQuizResetBtn.addEventListener("click", resetNumbersQuiz);
}

if (keyboardPanel) {
  keyboardPanel.addEventListener("click", (event) => {
    const suggestionButton = event.target.closest("[data-keyboard-apply-from][data-keyboard-apply-to]");
    if (suggestionButton) {
      applyKeyboardSuggestion(
        suggestionButton.dataset.keyboardApplyFrom || "",
        suggestionButton.dataset.keyboardApplyTo || ""
      );
      return;
    }

    const phraseButton = event.target.closest("[data-keyboard-phrase]");
    if (phraseButton) {
      insertKeyboardQuickPhrase(phraseButton.dataset.keyboardPhrase || "");
      return;
    }

    const speakButton = event.target.closest("[data-speak-text]");
    if (!speakButton) return;
    speakGermanText(speakButton.dataset.speakText || "");
  });
}

if (keyboardLayout) {
  keyboardLayout.addEventListener("click", (event) => {
    const keyButton = event.target.closest("[data-vk-value], [data-vk-action]");
    if (!keyButton) return;

    const action = keyButton.dataset.vkAction || "";
    if (action) {
      handleVirtualKeyboardAction(action);
      return;
    }

    if (keyButton.dataset.vkValue !== undefined) {
      insertTextAtCursor(keyboardInput, keyButton.dataset.vkValue || "");
      renderKeyboardOutputPreview();
    }
  });
}

if (keyboardInput) {
  keyboardInput.addEventListener("input", renderKeyboardOutputPreview);
  keyboardInput.addEventListener("keydown", (event) => {
    const shortcut = getKeyboardAltShortcutCharacter(event);
    if (!shortcut) return;
    event.preventDefault();
    insertTextAtCursor(keyboardInput, shortcut);
    renderKeyboardOutputPreview();
    if (keyboardStatus) {
      keyboardStatus.textContent = `Inserted ${shortcut} using Alt shortcut.`;
    }
  });
}

if (keyboardLiveAssistBtn) {
  keyboardLiveAssistBtn.addEventListener("click", () => {
    setKeyboardLiveAssistEnabled(!keyboardLiveAssistEnabled);
  });
}

if (keyboardSensitivityToggle) {
  keyboardSensitivityToggle.addEventListener("click", (event) => {
    const button = event.target.closest("[data-keyboard-sensitivity]");
    if (!button) return;
    setKeyboardSensitivity(button.dataset.keyboardSensitivity || "medium");
  });
}

if (keyboardConvertBtn) {
  keyboardConvertBtn.addEventListener("click", applyKeyboardEnglishToGermanConversion);
}

if (keyboardFixBtn) {
  keyboardFixBtn.addEventListener("click", applyKeyboardMinorFixes);
}

if (keyboardCopyBtn) {
  keyboardCopyBtn.addEventListener("click", () => {
    copyKeyboardOutputText();
  });
}

if (keyboardClearBtn) {
  keyboardClearBtn.addEventListener("click", clearKeyboardWorkbench);
}

sentenceModeToggle.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sentence-mode]");
  if (!button) return;
  setSentenceValidationMode(button.dataset.sentenceMode || "grammar");
});

sentenceInput.addEventListener("input", () => {
  scheduleLiveSentenceTranslation();
});

sentenceInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    validateCurrentSentence();
  }
});

sentenceClearBtn.addEventListener("click", () => {
  sentenceInput.value = "";
  latestSentenceTranslateRequest += 1;
  latestSentenceValidateRequest += 1;
  if (sentenceTranslateDebounceTimer) {
    window.clearTimeout(sentenceTranslateDebounceTimer);
    sentenceTranslateDebounceTimer = null;
  }
  sentenceValidateBtn.disabled = false;
  renderSentenceLiveTranslationIdle();
  renderSentenceValidationEmpty();
  sentenceInput.focus();
});

sentenceValidateBtn.addEventListener("click", () => {
  validateCurrentSentence();
});

sentenceHistoryClearBtn.addEventListener("click", () => {
  if (sentenceHistory.length === 0) return;
  const shouldClear = window.confirm("Clear saved sentence history on this device?");
  if (!shouldClear) return;
  sentenceHistory = [];
  saveSentenceHistoryToStorage();
  renderSentenceHistory();
});

sentenceHistoryList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-history-action]");
  if (!actionButton) return;
  const item = actionButton.closest("[data-history-id]");
  if (!item) return;

  const entry = findSentenceHistoryEntryById(item.dataset.historyId || "");
  if (!entry) return;

  if (actionButton.dataset.historyAction === "use-original") {
    setSentenceValidationMode(entry.mode);
    loadSentenceIntoEditor(entry.sentence);
    return;
  }

  if (actionButton.dataset.historyAction === "use-corrected") {
    const text = entry.correctedSentence || entry.sentence;
    setSentenceValidationMode(entry.mode);
    loadSentenceIntoEditor(text);
    return;
  }

  if (actionButton.dataset.historyAction === "revalidate") {
    setSentenceValidationMode(entry.mode);
    loadSentenceIntoEditor(entry.sentence);
    validateCurrentSentence();
  }
});

sentenceOriginalActions.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

sentenceCorrectedActions.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

sentenceAlternativesList.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

renderList();
renderGenderBatchTags();
renderGenderBatchModeButtons();
setGenderBatchStatus("Add nouns as tags, choose simple or complex, then generate one sentence per word.");
buildKeyboardVocabularyIndex();
updateKeyboardLiveAssistButton();
updateKeyboardSensitivityButtons();
renderVirtualKeyboardLayout();
renderKeyboardQuickPhrases();
renderKeyboardOutputPreview();
activateTab("panel-gender");
renderAccusativeStep();
renderAccusativeDrill();
resetQuiz();
populateConjugationTypeSelect();
setConjugationType(conjTypeSelect?.value || getConjugationTypeKeys()[0], "");
renderConjugationStep();
renderPossessiveStep();
renderPossessiveBuilder();
resetPossessiveQuiz();
buildClockFaceOnce();
setTimeControls(15, 20);
populateNumbersDateControls();
renderNumbersOrdinalReference();
setNumbersExplorerValue(15);
renderNumbersDateBuilder();
ensureNumbersTabReady();
ensureConjugationTabReady();
if (typeof window !== "undefined") {
  window.setTimeout(() => {
    ensureNumbersTabReady();
    ensureConjugationTabReady();
  }, 0);
}
sentenceHistory = loadSentenceHistoryFromStorage();
setSentenceValidationMode("grammar");
renderSentenceHistory();
renderSentenceLiveTranslationIdle();
renderSentenceValidationEmpty();
