import React from 'react';


let metadata = {
  id: "2017-01-05-1",
  author: "Борис Бурков",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "5.01.2017",
  title: "Об овцах и стартапщиках",
  subtitle: "Огораживание в средневековой Англии и современные вынужденные предприниматели",
  abstract: "Гербом Англии должны быть не три льва, а дюжина овец.\n Этим кротким созданиям она отчасти обязана своей индустриальной мощью, позволившей ей так вырваться вперед в общественном и экономическом развитии.",
  cover: "http://www.rabstol.net/uploads/gallery/main/515/rabstol_net_sheep_02.jpg",
  categories: ["Big Picture", "Economy & Finance", "Entrepreneurship"],
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
        Сегодня я добирался на работу в Хинкстон на поезде и проезжал овечью ферму возле деревни Грейт Честерфорд.

        Лучший друг физкультурников положил 20 миллионов жизней.
        Впрочем, и Merrie Olde England без боя не сдавалась - смена экономической модели стала сильнейшим социальным потрясением для широких слоев крестьян.
      </div>
    )
  }
}

export default Content;
export { metadata };
