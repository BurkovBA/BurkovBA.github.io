function tr(word) {
  let words = {
    // translations for Navigation
    'Boris Burkov': {en: 'Boris Burkov', ru: 'Борис Бурков'},
    'About me': {en: 'About me', ru: 'Обо мне'},
    'All': {en: 'All', ru: 'Все'},

    // translation for categories
    'how-life-works': {en: 'How life works', ru: 'Как устроена жизнь'},
    'programming': {en: 'Programming', ru: 'Программирование'},
    'business': {en: 'Business', ru: 'Бизнес'},
    'economy': {en: 'Economy', ru: 'Экономика'},
    'biomed': {en: 'Biology and medicine', ru: 'Биология и медицина'},
    'math': {en: 'Mathematics', ru: 'Математика'},
    'music': {en: 'Music', ru: 'Музыка'},
    'history': {en: 'History', ru: 'История'},
    'people': {en: 'People', ru: 'Люди'},

    // translations for Blog
    'Time to read': {en: 'Time to read', ru: 'Время на чтение'},
    'Continue': {en: 'Continue', ru: 'Продолжение'},

    // translations for Post
    'Author': {en: 'Author', ru: 'Автор'},
    'Date': {en: 'Date', ru: 'Дата'},
    'Categories': {en: 'Categories', ru: 'Категории'},
    'Previous post': {en: 'Previous post', ru: 'Предыдущая запись'},
    'Next post': {en: 'Next post', ru: 'Следующая запись'},
    'All posts': {en: 'All posts', ru: 'Все записи'}
  };

  // localStorage might not be available, if it's server side
  let language;
  if (typeof localStorage !== 'undefined') language = localStorage.getItem('language');
  else language = 'en';

  if (Object.keys(words).indexOf(word) !== -1) {
    if (language === 'en') return words[word]['en'];
    else if (language === 'ru') return words[word]['ru'];
  } else {
    console.log(`No word ${word} in translations list`);
  }
}

export default tr
