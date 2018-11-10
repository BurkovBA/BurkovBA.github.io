import React from 'react';


let metadata = {
  id: "2018-11-10-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "10.11.2018",
  language: "ru",
  title: "Встреча с Обри де Греем",
  subtitle: "",
  abstract: "Поглядел наконец живьем на главного геронтологического оптимиста.",
  cover: firstSlide,
  categories: ["people", "biomed", "mathematics"],
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
          В прошлую пятницу послушал наконец в Тринити-колледже Обри де Грея, который в очередной раз толкал свою
          речь про геронтологию.
        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};