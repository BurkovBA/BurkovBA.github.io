import React from 'react';

let churchOfBayes = require('./Church_of_Bayes.png');

let metadata = {
  id: "2019-01-22-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "22.01.2019",
  language: "en",
  title: "Карл Расмуссен",
  subtitle: "Гауссовы процессы и Prowler.io",
  abstract: "Побывал на выступлении сотрдуника Prowler.io - самого модного кембриджского стартапа.",
  cover: "https://images.startups.co.uk/wp-content/uploads/2016/10/PROWLER.png",
  categories: ["how-life-works", "math", "business", "people"],
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
          Если набрать в Гугле "gaussian processes", то первое, что выскочит, будет здоровенный талмуд Расмуссена и
          Уильямса, а также несколько сайтиков за их же авторством и ряд постов в блогах с отсылками к ним.
        </p>
        <p>
          Карл Расмуссен - это профессор инженерного факультета Кебмриджа и архиепископ англиканский байезианской церкви,
          в которой по-моему состоит 2/3 Кембриджа.
        </p>
        <img src={churchOfBayes} className="img-responsive center-block"></img>
        <p>
          Как и большинство других здешних профессоров, его святейшество "еще немножечко шьет". Расмуссен - сооснователь
          самого модного из местных стартапов - Prowler.io. Послушал их выступление.
        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};
