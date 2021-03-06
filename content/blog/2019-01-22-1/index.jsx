import React from 'react';

let churchOfBayes = require('./Church_of_Bayes.png');
let aleksi = require('./2019-01-24 22.11.49.jpg');

let metadata = {
  id: "2019-01-22-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "22.01.2019",
  language: "en",
  title: "Prowler.io",
  subtitle: "",
  abstract: "Побывал на презентации Prowler.io - самого модного кембриджского стартапа.",
  cover: "https://images.startups.co.uk/wp-content/uploads/2016/10/PROWLER.png",
  categories: ["how-life-works", "math", "business"],
  time_to_read: 5,
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
          Если набрать в Гугле "gaussian processes", то первое, что выскочит, будет здоровенный талмуд Расмуссена и
          Уильямса, а также несколько сайтиков за их же авторством и ряд постов в блогах с отсылками к ним.
        </p>
        <img src="http://mlg.eng.cam.ac.uk/carl/icons/carl3.jpg" className="img-responsive center-block"></img>
        <div className="caption text-center">Карл Расмуссен</div>
        <p>
          Карл Расмуссен - это профессор инженерного факультета Кебмриджа и архиепископ англиканский байезианской церкви,
          в которой по-моему состоит 2/3 Кембриджа.
        </p>
        <img src={churchOfBayes} className="img-responsive center-block"></img>
        <p>
          Сегодня выступал его бывший ученик и со-основатель самого модного кембриджского стартапа в области машинного
          обучения Prowler.io Алексей Тукиайнен. Forbes <a href="https://www.forbes.com/sites/parmyolson/2018/07/16/ai-startup-deepmind-google-prowler/">назвал Праулер</a> "следующим Deep Mind".
        </p>
        <img src={aleksi} className="img-responsive center-block"></img>
        <div className="caption text-center">Алексей Тукиайнен</div>
        <p>
          На момент основания Праулера в начале 2016 Алексею было 25 лет, двум другим сооснователям -
          35 и 45 соответственно.
        </p>
        <p>
          В 2016 Алексей закончил магистратуру Кембриджа по машинному обучению и успел основать к этому моменту
          2 стартапа. Дипломный проект делал про самокат автоматически поддерживающий равновесие, но понял, что
          механическая инженерия и робототехника - это не для него.
        </p>
        <p>
          Летом 2016 они подняли 1.5 миллиона фунтов инвестийи, через год - 10 миллионов в раунде А, а сейчас планируют
          выходить на раунд B. У Праулера 90 сотрудников, включая 30 кандидатов наук и кучу классных инженеров. С
          наймом они сейчас притормозили, поскольку с трудом помещаются в офисе.
        </p>
        <p>
          Свой продукт они называют decision-making platform, но выглядит это как data science-консалтинг
          на широкую ногу.
        </p>
        <p>
          В данный момент Prowler решает 2 практические задачи: логистика/управление флотом такси и
          алготрейдинг. Показывали картинки, как они предсказывают, куда поедет пассажир, еще в момент
          вызова такси.
        </p>
        <p>
          Из подходов машинного обучения они используют в основном deep и reinforcement learning, плюс
          гауссовы процессы (зря что ли они из Кембриджа).
        </p>
        <p>
          Рецессии не боятся: Алексей считает, что даже если она случится, управляющим в венчурных фондах уже
          выделены бюджеты, которые они должны потратить. Притом, от сокращения финансирования по его ожиданиям
          должны пострадать стартапы на более ранних стадиях развития, компании же уже находящиеся на более
          поздних стадиях инвестирования должны испытать меньше давления.
        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};
