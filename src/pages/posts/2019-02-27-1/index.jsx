import React from 'react';

let rocket = require('./photo_2019-03-01 20.55.13.jpeg');
let station = require('./photo_2019-03-01 20.52.33.jpeg');
let liverpool = require('./liverpool_dock_and_church.jpg');
let novelty = require('./photo_2019-03-01 20.52.50.jpeg');
let sansPareil = require('./photo_2019-03-01 20.52.46.jpeg');
let cycloped = require('./photo_2019-03-01 20.52.44.jpeg');
let cotton1 = require('./photo_2019-03-09 23.23.44.jpeg');
let cotton2 = require('./photo_2019-03-09 23.23.50.jpeg');
let cotton3 = require('./photo_2019-03-09 23.23.54.jpeg');
let cotton4 = require('./photo_2019-03-09 23.23.58.jpeg');
let stage1 = require('./20190226_113115.jpg');
let stage2 = require('./20190226_113227.jpg');
let stage3 = require('./20190226_113251.jpg');
let stage4 = require('./20190226_113322.jpg');
let stage5 = require('./20190226_113437.jpg');

const rotate180Style = {
  transform: "rotate(180deg)"
};


let metadata = {
  id: "2019-02-27-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "07.02.2019",
  language: "ru",
  title: "Манчестер: хлопок и паровозы",
  subtitle: "Как Манчестер стал центром промышленной революции в XIX веке",
  abstract: "Подобно тому, как между современными инженерами из IBM, Google и Ригетти сейчас развернулась гонка за то, " +
  "чтобы первыми достичь квантового превосходства, первые инженеры начала 19-ого соревновались в том, кому удастся " +
  "произвести первый паровоз массового производства, который должен был курсировть между Манчестером и Ливерпулем.",
  cover: rocket,
  categories: ["how-life-works", "economy", "business", "history"],
  time_to_read: 15,
  views: "",
  comments: [],
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = metadata;
  }

  render() {
    return (
      <div>
        <h3>Рейнхильские состязания</h3>
        <p>
          Англия, <a href="https://en.wikipedia.org/wiki/Lancashire">Ланкашир</a>, 20-ые годы XIX века.
        </p>
        <p>
          Бум спроса на сукно в XVII-XVIII веках превратил Англию из феодальной страны в буржуазную
          (см. мой старый пост <a href="/blog/2017-01-05-1">об овцах и стартапщиках</a>). Центром ткацкой
          промышленности оказывается Ланкашир, а его экономической столицей оказвается Манчестер, куда иммигрировали
          фламандские ткачи. Со временем шерсть уступает центральное место льну и, особенно, хлопку.
        </p>
        <p>
          К началу XIX века хлопок в огромных количествах прибывает в порты Ливерпуля из Нового Света и доставляется
          оттуда на конных подводах в Манчестер, где его обрабатывали ткачи, изготавливая ткань. Город даже получил
          прозвище "Cottonopolis", столица хлопка. На дорогу из Ливерпуля в Манчестер уходит 8 часов.
        </p>
        <img src={liverpool} className="img-responsive center-block"/>
        <div className="caption text-center">Доки Ливерпуля в начале XIX века</div>
        <p>
          К 1820-ым годам качество металлообработки достигает такого уровня, что несколько конкурирующих инженеров
          начинают производить паровозы, способные заменить конные подводы, движущиеся по рельсам. Инженеров спонсируют
          богатые буржуа.
        </p>
        <p>
          В 1829 году правительство Манчестера устраивает грандиозную гонку между соперничающими производтилеями -
          <a href="https://en.wikipedia.org/wiki/Rainhill_Trials">Рейнхилльские испытания</a>.
          В соревновании 4 участника: главный фаворит - паровоз "Rocket" ("Ракета") знаменитого изобретателя Джорджа
          Стефенсона, его соперники - скоростной "Novelty" ("Новинка") Джона Эрикссона и Джона Брейтвейта, мощный
          "Sans Pareil" ("Бесподобный") Уильяма Хедли и Тимоти Хакворта и... "Cycloped" - лошадь, поставленная на
          пандус, и приводящая его в движение бегом.
        </p>
        <img src={novelty} className="img-responsive center-block"/>
        <div className="caption text-center">Novelty</div>
        <img src={sansPareil} className="img-responsive center-block"/>
        <div className="caption text-center">Sans Pareil</div>
        <img src={cycloped} className="img-responsive center-block"/>
        <div className="caption text-center">Лошадь-2.0</div>
        <p>
          Первой с дистанции сходит лошадь. Бедное животное провалилось под поверхность, на которую оно было
          поставлено.
        </p>
        <p>
          Затем треснул цилиндр у "Sans Pareil". Очень интересно, что цилиндр этот был куплен у фирмы Стефенсона,
          однако (лайфхак!) Хедли и Хакворт закупили их 20 штук и отобрали 2 лучших для паровоза, так то саботаж со
          стороны прямого конкурента в данной ситуации крайне маловероятен.
        </p>
        <p>
          Наконец, "Novelty" не дотянул до финиша из-за взорвавшегося котла. В итоге единственным прибывшим в Манчестер
          оказался "Rocket" Стефенсона.
        </p>
        <p>
          В Манчестере паровозы были встречены... картошкой. Дело в том, что вместе с устройствами в
          город прибыли делегации гостей во главе с премьер-министром Британии, и благодарный народ выразил ему свою
          поддержку при помощи овощей.
        </p>
        <p>
          Не обошлось и без других коллизий - представителю парламента от Манчестера вздумалось прогуляться по
          рельсам перед прибывающей "Ракетой", и в столкновении политики и прогресса вновь победил прогресс -
          парламентарий упал на рельсы, паровоз раздавил ему ногу, и он погиб.
        </p>
        <p>
          "Тендер" выиграл Стефенсон, время путешествия из Ливерпуля в Манчестер сократилось с 8 часов до 2, а вскоре
          было сокращено и до часа. Древнейшая из сохранившихся до наших дней железнодорожных станций, прослужила
          150 лет и превратилась в музей науки и промышленности Манчестера. А в феврале этого года впервые за прошедшие
          180 лет и "Ракета" вернулась в Манчестер.
        </p>
        <img src={station} className="img-responsive center-block"/>
        <div className="caption text-center">Железнодорожная станция 1830 года в Манчестере</div>
        <p>
          Мне очень интересно, почему именно Манчестер стал центом ткацкого промысла. Сотрудники музея говорят, это один из
          самых дождливых городов Англии, а дождевая вода использовалась для мытья хлопка. Как уроженец Невинномысска,
          где одним из градообразующих предприятий является шерстомойная фабрика, могу сказать, что водопроводная вода
          Cottonopolis'а ужасно жесткая. Из горных рек вроде Зеленчука, где талая вода ледников не успела растворить
          в себе соли, ты выходишь пушистый как барашек. А из-под душа в Манчестере ты выползаешь весь липкий от
          двух- и трехвалентных катионов. Возможно, Манчестер стал центром ткацкого промысла потому, что прежде туда
          стекалась шерсть с пастбищ Ланкашира, а впоследствии ткачи переориентироавлись на хлопок из портов Ливерпуля.
        </p>
        <p>
          Простите за занудство, но мне еще думается, что с точки зрения экономики не так важно, сколько времени
          занимало путешествие хлопка - 8 часов или 1 - важно, сколько оно стоило и в чем состояло бутылочное горлышко
          пропускной способности всего конвейера - в кораблях, паровозах или станках. Ответа я не знаю, ну да ладно.
        </p>
        <h3>Пара слов о ткацком промысле</h3>
        <p>
          Всегда хотелось понять, как была устроена ткацкая промышленность. Процесс создания тканей мне всегда
          казался сложным и контринтуитивным. В музее науки и промышленности мне удалось полностью рассмотреть весь
          техпроцесс, каким он был в самом начале 20-ого века.
        </p>
        <p>
          Хлопок, снятый с цветов, попадает на веялку, где его отделяют от частичек грязи и плевел.
        </p>
        <img src={cotton1} className="img-responsive center-block"/>
        <div className="caption text-center">Хлопок</div>
        <img src={stage1} style={rotate180Style} className="img-responsive center-block"/>
        <div className="caption text-center">Веялка</div>
        <p>
          Специальная распушалка затем расплетает волокна шелка.
        </p>
        <img src={cotton2} className="img-responsive center-block"/>
        <div className="caption text-center">Распушенный хлопок</div>
        <img src={stage2} style={rotate180Style} className="img-responsive center-block"/>
        <div className="caption text-center">Распушалка</div>
        <p>
          Отделялка длинных волокон позволяет взять только длинные волокна, пригодные для создания длинных нитей.
        </p>
        <img src={cotton3} className="img-responsive center-block"/>
        <div className="caption text-center">Волокна</div>
        <img src={stage3} style={rotate180Style} className="img-responsive center-block"/>
        <div className="caption text-center">Отделялка</div>
        <p>
          Сплеталка длинных волокон сплетает вместе волокна по 6, а затем такие шестерки - еще по 3.
        </p>
        <img src={cotton4} className="img-responsive center-block"/>
        <div className="caption text-center">Сплетенный волокна</div>
        <img src={stage4} className="img-responsive center-block"/>
        <div className="caption text-center">Сплеталка</div>
        <p>
          Прялка тянет конечный продует - нить - из полученных на прошлом этапе нитей.
        </p>
        <img src={stage5} className="img-responsive center-block"/>
        <div className="caption text-center">Прялка</div>
      </div>
    )
  }
}

export default Content;
export {metadata};
