import React from 'react';

let rocket = require('./rocket.jpg');

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
        <p>
          Англия, <a href="http://wikipedia.org">midlands</a> 20-ые годы XIX века.
        </p>
        <p>
          Бум спроса на сукно в XVII-XVIII веках превратил Англию из феодальной страны в буржуазную
          (см. мой старый <a href="">пост про овец и стартапщиков</a>). С освоением Нового Света и
          ускорением мореплавания наступила эра новой ткани - хлопка.
        </p>
        <p>
          К началу XIX века хлопок в огромных количествах прибывает в порты Ливерпуля и доставляется оттуда на конных
          подводах в Манчестер, где его обрабатывали ткачи, изготавливая ткань. Город даже получил прозвище
          "Cottonopolis", столица хлопка. На дорогу из Ливерпуля в Манчестер уходит 8 часов.
        </p>
        <p>
          К 1820-ым годам качество металлообработки достигает такого уровня, что несколько конкурирующих инженеров
          начинают производить паровозы, способные заменить конные подводы, движущиеся по рельсам. Инженеров спонсируют
          богатые буржуа.
        </p>
        <p>
          В 1829 году правительство Манчестера устраивает гонку между соперничающими производтилеями. В соревновании
          4 участника: главный фаворит - паровоз "Rocket" ("Ракета") знаменитого изобретателя Джорджа Стефенсона, его
          соперники - скоростной "Novelty" ("Новинка") Джона Эрикссона и Джона Брейтвейта, мощный
          "Sans Pareil" ("Бесподобный") Уильяма Хедли и Тимоти Хакворта и... лошадь, поставленная на пандус, и
          приводящая его в движение бегом.
        </p>
        <p>
          Первой с дистанции сходит лошадь. Бедное животное провалилось под поверхность, на которую оно было
          поставлено.
        </p>
        <p>
          Затем треснул цилиндр у "Sans Pareil". Цилиндр этот был вообще-то куплен у фирмы Стефенсона, однако (лайфхак!)
          Хедли и Хакворт закупили их 20 штук и отобрали 2 лучших для паровоза, так то саботаж в данной ситуации
          навряд ли был возможен.
        </p>
        <p>
          Наконец, "Novelty" не дотянул до финиша из-за взорвавшегося котла. В итоге единственным прибывшим в Манчестер
          оказался "Rocket" Стефенсона.
        </p>
        <p>
          В Манчестере паровозы были встречены... картошкой! Дело в том, что вместе с устройствами в
          город прибыли делегации гостей во главе с премьер-министром Британии, и благодарный народ выразил ему свою
          поддержку при помощи овощей.
        </p>
        <p>
          Не обошлось и без других коллизий - представителю парламента от Манчестера вздумалось прогуляться по
          рельсам перед прибывающей "Ракетой", и в столкновении политики и прогресса вновь победил прогресс -
          парламентарий упал на рельсы, паровоз раздавил ему ногу, и он погиб.
        </p>
        <p>
          Благодаря паровозам время путешествия из Ливерпуля в Манчестер сократилось с 8 часов до 2, а вскоре было
          сокращено Стефенсоном и до часа. Древнейшая из сохранившихся до наших дней железнодорожных станций, прослужила
          150 лет и превратилась в музей науки и промышленности Манчестера. А в феврале этого года впервые за прошедшие
          180 лет и "Ракета" вернулась в Манчестер.
        </p>
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
          Веялка
        </p>
        <p>
          Распушалка
        </p>
        <p>
          Отделялка длинных волокон
        </p>
        <p>
          Сплеталка длинных волокон
        </p>
        <p>
          Прялка нитей
        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};
