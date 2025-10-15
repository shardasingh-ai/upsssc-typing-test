const passages = [
  // ---------- English Passages ----------
  {
    id: "EN1",
    language: "English",
    text: "The changing climate is not just an environmental concern; it is a mirror reflecting human choices. Every degree of temperature rise, every vanishing glacier, and every dried river tells a story of neglect. Yet, the story need not end in tragedy. Individuals today hold immense power to alter this trajectory. Simple actions like reducing plastic usage, choosing public transport, and planting native trees can create ripples of change. Governments across the world are slowly realizing that sustainability is not an option—it is a necessity. The challenge lies not in awareness but in consistent action. Nature, though patient, keeps precise accounts. The forests that burn and the oceans that rise remind us that the bill for indifference is already due. Hope, however, resides in innovation. Young minds are designing biodegradable materials, carbon-neutral technologies, and smarter cities. If human creativity built the industrial age, it can surely engineer a sustainable one. The planet does not need saving—it will survive; it is humanity that must adapt to survive with it."
  },
  {
    id: "EN2",
    language: "English",
    text: "Artificial Intelligence, often hailed as the new electricity, is transforming industries and redefining human potential. Yet, behind the glitter of progress lies an ethical labyrinth. Machines are learning faster than laws can adapt, and algorithms are beginning to shape decisions once made by humans. Should an AI be trusted to select job applicants or diagnose illnesses? The question is not just technological—it is moral. Biases coded unknowingly by developers can perpetuate discrimination at scale. Transparency and accountability are therefore crucial. The future of AI will not be determined merely by how powerful systems become but by how wisely humans guide them. Innovation without ethics is like speed without direction. As automation increases efficiency, humanity must ensure empathy does not become obsolete. The challenge before us is not to fear AI but to teach it values we hold sacred—fairness, compassion, and responsibility."
  },
  {
    id: "EN3",
    language: "English",
    text: "Time is perhaps the most democratic force in the universe. It treats the king and the beggar with equal indifference. Every moment that passes carries within it the seeds of both loss and possibility. Philosophers have long debated whether time truly flows or whether it is merely a construct of human consciousness. Whatever the answer, our perception of time defines our experience of life. People chase wealth, fame, and validation, believing time will patiently wait. Yet, the clock never hesitates. The irony is that we spend so much time preparing to live that we forget to live at all. The art of existence lies in embracing the transient. The leaf that falls, the laughter that fades, the sunset that lasts only minutes—all remind us that beauty exists because of impermanence. Time is not a thief; it is a teacher urging us to value the present."
  },
  {
    id: "EN4",
    language: "English",
    text: "Stories are the invisible threads that connect generations. Long before the written word, humans gathered around fires to share tales of courage, betrayal, and love. Literature emerged not as an art form alone but as a record of collective memory. A good story can outlive empires; it can shape cultures and spark revolutions. Shakespeare’s characters still walk among us, disguised in modern conflicts and timeless emotions. In every corner of the world, stories continue to challenge the powerful and comfort the broken. Reading a novel is not escapism; it is an act of empathy. Through stories, we inhabit minds different from our own and learn to understand perspectives we might never live. In an age of fleeting digital content, storytelling remains an anchor reminding humanity that words, when woven with honesty, possess the rare power to heal and transform."
  },
  {
    id: "EN5",
    language: "English",
    text: "Technology promised to connect the world, and in many ways, it succeeded. A message travels across continents in seconds, and a single photo can unite millions in joy or sorrow. Yet, amid this constant connectivity, loneliness has become an epidemic. Conversations have turned into texts, and emotions into emojis. People scroll endlessly, seeking validation in digital applause. The paradox is painful—we are surrounded by connections yet starved of real contact. To reclaim balance, we must treat technology as a tool, not a replacement for presence. Sharing a meal, listening without distraction, and walking under an open sky may seem ordinary, but they nurture the essence of being human. The screen should expand horizons, not confine them. True progress will be measured not by faster downloads but by deeper relationships."
  },

  // ---------- Hindi Passages ----------
  {
    id: "HI1",
    language: "Hindi",
    text: "प्रकृति हमारे जीवन की मूल आधारशिला है। मनुष्य चाहे जितनी भी प्रगति कर ले, उसका अस्तित्व धरती, जल और वायु पर ही निर्भर रहेगा। आज का युग औद्योगिकीकरण और उपभोक्तावाद का युग है, जिसमें विकास की दौड़ ने पर्यावरण को हाशिये पर धकेल दिया है। बढ़ता प्रदूषण, घटते वन, और बिगड़ता जलवायु संतुलन हमें बार-बार चेतावनी दे रहे हैं कि प्रकृति से खिलवाड़ अंततः मानवता के लिए ही विनाशकारी सिद्ध होगा। यदि हम समय रहते नहीं चेते, तो आने वाली पीढ़ियाँ न तो शुद्ध वायु पा सकेंगी और न ही स्वच्छ जल। पर्यावरण की रक्षा केवल सरकारों का नहीं, बल्कि हर नागरिक का कर्तव्य है। पेड़ लगाना, प्लास्टिक का सीमित उपयोग, जल का संरक्षण और सार्वजनिक परिवहन का उपयोग जैसे छोटे कदम मिलकर बड़े परिवर्तन ला सकते हैं। याद रखिए, जब तक प्रकृति सुरक्षित है, तब तक मानव सभ्यता सुरक्षित है।"
  },
  {
    id: "HI2",
    language: "Hindi",
    text: "कृत्रिम बुद्धिमत्ता अर्थात आर्टिफ़िशियल इंटेलिजेंस आज मानव सभ्यता के नए युग का प्रतीक बन चुकी है। मशीनें अब सोचने, सीखने और निर्णय लेने में सक्षम हो रही हैं। यह विज्ञान की सबसे बड़ी उपलब्धि तो है, परंतु इसके साथ नैतिक प्रश्न भी जुड़ गए हैं। यदि मशीनें निर्णय लेंगी, तो उनमें मानवीय संवेदनाएँ कहाँ रहेंगी? क्या एक रोबोट डॉक्टर इंसान की पीड़ा को समझ सकता है? यदि एल्गोरिद्म में पक्षपात होगा, तो न्याय कैसे होगा? इन प्रश्नों का उत्तर केवल तकनीकी नहीं, बल्कि नैतिक भी है। हमें यह सुनिश्चित करना होगा कि तकनीक का उपयोग मानवता की भलाई के लिए हो, न कि उसके नियंत्रण के लिए।"
  },
  {
    id: "HI3",
    language: "Hindi",
    text: "समय वह शक्ति है जो किसी के लिए नहीं रुकती। वह राजा और भिखारी, दोनों को समान रूप से प्रभावित करता है। जीवन का सारा खेल इसी समय के प्रवाह में छिपा हुआ है। जो बीत गया, वह अनुभव बन गया; जो आने वाला है, वह अनिश्चित है। मनुष्य अक्सर भविष्य की चिंता और अतीत के पछतावे में वर्तमान को खो देता है। जबकि सच्ची बुद्धिमत्ता यह है कि हम वर्तमान क्षण को पूर्ण रूप से जी सकें।"
  },
  {
    id: "HI4",
    language: "Hindi",
    text: "कहानी कहना मानव सभ्यता की सबसे पुरानी परंपराओं में से एक है। जब लिखने का आविष्कार नहीं हुआ था, तब भी लोग आग के चारों ओर बैठकर किस्से सुनाते थे — वीरता के, प्रेम के और संघर्ष के। कहानी केवल मनोरंजन नहीं, बल्कि अनुभवों का संग्रह होती है।"
  },
  {
    id: "HI5",
    language: "Hindi",
    text: "तकनीक ने मानव जीवन को आसान बनाया है, लेकिन साथ ही उसने भावनाओं को भी आभासी बना दिया है। अब संवाद स्क्रीन पर होता है, मुस्कान इमोजी में बदल गई है और दोस्ती ‘ऑनलाइन’ स्थिति में सिमट गई है। हम जुड़े हुए हैं, पर फिर भी अलग-थलग हैं।"
  }
];
