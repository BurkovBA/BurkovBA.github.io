import React from 'react';

let folding = require('./Origami-CASP-folding.gif');
let birney_and_senior = require('./2019-02-08 10.15.17.jpg');
let pipeline = require('./2019-02-08 10.14.16.jpg');

let metadata = {
  id: "2019-02-07-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "07.02.2019",
  language: "ru",
  title: "DeepMind",
  subtitle: "Презентация AlphaFold в EBI",
  abstract: "Два месяца назад весь мир облетела новость, что DeepMind выиграл известное соревнование по предсказанию " +
  "3D-структур белков CASP, порвав всех биоинформатиков с впечатляющим отрывом. Многие люди из мира биотеха " +
  "теперь пытаются осознать, 'что это было': революция или эволюция, крутая наука или крутая инженерия, " +
  "талант или финансирование? " +
  "Волею судеб я когда-то оказался совсем недалеко от этой области науки, поэтому потратил несколько дней чтобы " +
  "разобраться в деталях - а между тем в EBI приехал наводить мосты ведущий инженер проекта Эндрю Сеньор из DeepMind.",
  cover: folding,
  categories: ["how-life-works", "math", "biomed", "programming", "business"],
  time_to_read: 20,
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
        <h2>Что вообще произошло?</h2>
        <p>
          Среди биоинформатиков ходила шутка, что средний третьекурсник физфака уверен, что если ему дать
          аминокислотную последовательность белка (например, "MAKFGEWTTPFTNS"), пару лет и десяток подчиненных,
          то он сможет пресказать, как этот белок свернется в пространстве.
        </p>
        <p>
          Биоинформатики десятилетиями бились с этой задачей, достаточно безрезультатно.
        </p>
        <img src={birney_and_senior} className="img-responsive center-block" />
        <div className="caption text-center">Ведущий разработчик AlphaFold Эндрю Сеньор (слева) и директор EMBL-EBI Юэн Бирни (справа)</div>
        <p>

        </p>

      </div>
    )
  }
}

export default Content;
export {metadata};
