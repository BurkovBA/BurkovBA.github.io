import React from 'react';


let photo = require('./20181103_195317.jpg');

let metadata = {
  id: "2018-11-10-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "10.11.2018",
  language: "ru",
  title: "Встреча с Обри де Греем",
  subtitle: "",
  abstract: "Поглядел наконец живьем на главного геронтологического оптимиста.",
  cover: photo,
  categories: ["people", "biomed", "math"],
  time_to_read: 10,
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
          В прошлую субботу послушал в Тринити-колледже изрядно постаревшего Обри де Грея, который в очередной
          раз толкал свою речь про геронтологию.
        </p>
        <p>
          К несчастью, это была ровно та же речь, что и 15 лет назад с крошечным апдейтом про одну из недавних работ.
        </p>
        <p>
          Обри по-прежнему видит 7 основных направлений починки накаплиывающихся с возрастом дефектов в наших организмах,
          все так же говорит про то, насколько катастрофически безнадежна ситуация с финансированием геронтологии в
          нынешней грантовой модели и шутит, что его работа открывает возможность делать исследования, которые раньше
          были бы невозможно, потому что "the difference is that in my model money is not awarded by peer review,
          they are awarded by me"!
        </p>
        <p>
          Сам он однако мокрой работой не занимается. Жизнь Де Грея состоит из аэропортов. Он постоянно мотается по
          городам и весям и толкает речи. Что касается того, кем он видит себя как профессионала, Обри не питает иллюзий:
          "Yes, I'm a grant administrator". Подобно эдакому Робин Гуду, он берет деньги у богатых и отдает их тем
          геронтологичеким лабораториям, которым считает нужным.
        </p>
        <p>
          Говорит, что от денег никто обычно не отказывается - просто в нынешней системе грантового финансирования вещи,
          которые они бы хотели сделать, сделать было бы невозможно, но когда вдруг на такую лабораторию как гром среди
          ясного неба сваливается де Грей с вопросом "а не хотите ли вы взять у меня пару миллионов долларов и все-таки
          сделать эту работу", ответ обычно положительный.
        </p>
        <p>
          На мой вопрос, что случится раньше, мокрые биологи наконец чего-нибудь добьются, или программы научатся
          писать программы, Обри сказал, что не знает, что он сам бывший программист, что они приятели с  Демисом
          Хассабисом из Deep Mind, и не будет возражать, если Демис спасет его, а не наоборот.
        </p>
        <p>
          Что касается решения им частного случая проблемы Нельсона-Хадвигера, де Грей говорит, что каждому человеку
          нужно хобби, и он занимался ею как любитель. Говорит, что ни с кем ее не обсуждал. "Мне просто повезло". Кто
          такой Андрей Райгородский он никогда не слышал (и по-моему не понял моих вопросов про гипотезу Борсука).
        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};