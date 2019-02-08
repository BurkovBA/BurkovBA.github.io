import React from 'react';

let roberto = require('./2019-02-08 09.48.24.jpg');
let christos = require('./2019-02-08 09.48.51.jpg');
let alexa = require('./alexa.png');

let metadata = {
  id: "2019-02-07-2",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "07.02.2019",
  language: "ru",
  title: "Amazon Alexa",
  subtitle: "",
  abstract: "Послушал двух парней из кембриджского офиса Амазона, " +
  "работающих над Алексой. Составил общее впечатление о том, каково оно - работать в Амазон.",
  cover: alexa,
  categories: ["how-life-works", "programming", "math", "business"],
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
        <h2>Про жизнь и про людей</h2>
        <p>
          Докладчикам, я бы сказал, было около 42 и 36 лет соответственно. Тот что постарше - Roberto Barra-Chicote -
          профессор из Мадрида, поговорили, внезапно, с его женой (мы раньше пришли, и я случайно с ней разговорился).
          Жена работает в Accenture, сейчас они наконец родили детей, и она в отпуске. В консалтинге ее упахивали,
          конец рабочего дня формально в 7, так что в среднем хорошо если добиралась домой к 8:30, но раньше начальника
          уходить не принято, а тот запросто сидел и до 11. Она делала по 13 проектов параллельно.
        </p>
        <img src={roberto} className="img-responsive center-block"/>
        <div className="caption text-center">Роберто Барра-Чикоте (докладчик) и его жена в зале (со светлыми волосами)</div>
        <p>
          Среди top tech-компаний Амазон вообще-то тоже всегда славился плохим обращение с сотрудниками, но
          в Кембриджском офисе вроде бы помягче - английская культура сказывается. Жена говорит, что Роберто
          почти всегда приходит домой строго в 5:30.
        </p>
        <p>
          В кембриджском офисе располагается ряд комманд, отвечающих за Алексу. Есть 2 pizzas rule - в каждой команде
          должно быть не больше людей, чем можно накормить двумя пиццами. Как правило, 6-8. Примерно пополам инженеров
          и ученых, выполняющих взаимодополняющие функции. Проекты обычно небольшие по длительности, около
          полугода-года, что по меркам менеджеров медленно, а по меркам ученых - быстро.
        </p>
        <p>
          Всего над Алексой в разных офисах работает около 9 тысяч (!) человек. По моим прикидкам даже в AWS
          задействовано всего тысяч 20 программистов. Так что проект просто гигантский, и Амазон на него, видимо,
          поставил очень много. В Кембридже есть несколько очень сильных профессоров, специализирующихся в распознавании
          и синтезе речи, вроде Билла Бирне - главы Apple Siri - или Марка Гейлса - научного руководителя замечательного
          Андрея Малинина, который через полгода присоединится к команде Алисы в Яндексе. Помимо Алексы, в
          кембриджском офисе находится еще несколько команд: Prime Air (дроны-доставщики), Lab 126, AWS S3 и Shield.
        </p>
        <p>
          Роберто - спец по text2speech. Доклад у него был превосходный, чувствуется опыт преподавания, ничего лишнего
          он не проболтнул, зато ликбез провел очень структурированный и познавательный.
        </p>
        <img src={christos} className="img-responsive center-block"/>
        <div className="caption text-center">Христос Христодулопулос</div>
        <p>
          Другой докладчик - Christos Christodoulopoulos - помоложе и рассказывал похуже. Он спец по knowledge
          representation - его стараниями Алекса умеет выкапывать информацию из интернета и дает какие-то внятные ответы
          на вопросы. Рассказывал про свою последнюю статью - как они заставили аннотаторов из отделения в Бостоне
          собрать датасет с 180,000 фактов + статьями, подтверждающими эти факты.
        </p>
        <h2>Про технологии (возможно, скучновато)</h2>
        <p>Насколько я понял, основная часть продакшн-стека у Амазона - на Яве и Спарке.</p>
      </div>
    )
  }
}

export default Content;
export {metadata};
