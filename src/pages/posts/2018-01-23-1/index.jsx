import React from 'react';

let metadata = {
  id: "2018-01-23-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "23.01.2018",
  language: "ru",
  title: "Мир МедТеха",
  subtitle: "С хакатона по медицинской технике",
  abstract: "В конце прошлой недели я был на хакатоне по медицинской технике и получил массу знаний и впечатлений." +
  "Это совершенно другой мир, который живёт под девизом \"Health & Wealth\" и держится на патентах и контактах.",
  cover: "https://assets.pcmag.com/media/images/417346-back-up-your-cloud-how-to-download-all-your-data.jpg?thumb=y&width=810&height=456",
  categories: ["how-life-works", "biomed", "business", "people"],
  time_to_read: 20,
  views: "",
  comments: [],
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = metadata;
  }

  componentDidMount() {
    if (this.props.onload) this.props.onload(this.state);
  }

  render() {
    return (
      <div>
        <p>
          Хакатон проходил в Cambridge Science Park - огромном технопарке на севере Кембриджа - хотел сказать
          "как Сколково", но представил Медведа и поперхнулся.
        </p>
        <img src={Medved} />
        <p>
          (А впрочем, какие бы там Медведы ни вертелись, любая движуха лучше мёртвого штиля, так что
          желаю этому начинанию успеха - всяко лучше, чем водку пить)
        </p>
        <p>
          Мероприятие заняло полтора дня и хакатоном в классическом смысле не было: запиливать ничего не планировалось.
          Требовалось сделать презентацию проекта, которая подавалась в программу акселератора и, в случае успеха,
          должна была получить от 15 до 125 тысяч фунтов посевного финансирования (не грантового, а за долю в компании).
        </p>
        <p>
          Проектов было подано 6, из них 5 - индийцами. Как говорил Гай Кийосаки, на западе большинство технологических
          предпринимателей - это иммигранты первого или второго поколений, сражающиеся за своё место в жизни.
        </p>
        <p>
          Все индийцы были сравнительно молодыми (в диапазоне 25-35, от силы 40) профессионалами с хорошим образованием
          и некоторым опытом в своих областях специализации. В основном, или врачи, занимающиеся наукой или PhD,
          пытающиеся коллаборировать с врачами.
        </p>
        <p>
          Остальные участники хакатона должны были послушать двухминутныые питчи авторов проектов, выбрать себе один
          и присоедниться к нему, чтобы помочь сделать пятиминутную презентацию проекта для коллегии экспертов из
          акселератора.
        </p>
        <p>
          В отличие от софтверных хакатонов, где обычно бывает наоборот, здесь я внезапно оказался
          одним из самых молодых участников. Около половины аудитории были людьми лет 50-60.
          Вспомнилась "добрая" шутка про фотку врачей с выпускного:
        </p>
        <img src={Vrachi} />
        <p>
          Впрочем, врачей-то самих здесь было немного. Состав аудитории был примерно таким:
        </p>
        <ul>
          <li>15% - патентные юристы, ищущие клиентуру;</li>
          <li>15% - разнообразные консалтинги в области медтеха;</li>
          <li>15% - просто разные бизнесовые мужики из биомедицинских компаний средней руки;</li>
          <li>30% были студентами/аспирантами или профессорами университетов, в основном - Кембриджа</li>
          <li>немного хардверных инженеров (почему-то сплошь женского пола</li>
          <li>несколько неприкаянных аспирантов-биологов, изучающих что-то абсолютно никому не нужное и пришедших на разведку по типу меня</li>
        </ul>
        <p>

        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};