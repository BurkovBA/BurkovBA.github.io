function tr(word) {
  let words = {
    'Boris Burkov': 'Борис Бурков',
    'About me': 'Обо мне',
    'All': 'Все',
    'How life works': 'Как устроена жизнь',
    'Programming': 'Программирование',
    'Business': 'Бизнес',
    'Economy': 'Экономика',
    'Biology and medicine': 'Биология и медицина',
    'Mathematics': 'Математика',
    'Music': 'Музыка',
    'History': 'История',
    'People': 'Люди'
  };

  let language = localStorage.getItem('language');

  if (Object.keys(words).indexOf(word) !== -1) {
    if (language === 'en') return word;
    else if (language === 'ru') return words[word];
  } else {
    console.log(`No word ${word} in translations list`);
  }
}

export default tr
