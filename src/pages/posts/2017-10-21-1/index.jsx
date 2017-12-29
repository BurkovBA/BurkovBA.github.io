import React from 'react';

let Enigma = require('./photo_2017-12-29_23-39-24.jpg');

let metadata = {
  id: "2017-10-21-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "21.10.2017",
  language: "ru",
  title: "Энигма",
  subtitle: "Про Блетчли-парк, вотчину Алана Тьюринга, где во Вторую Мировую была вскрыта немецкая система шифрования \"Энигма\".",
  abstract: "Все смотрели \"Игру в Имитацию\"? Камбербетч, конечно, прекрасен, а в жизни, конечно, всё было не так. " +
    "В этом посте расскажу о том, что узнал истории крипотграфии в ходе экскурсии в Блетчли-парк.",
  cover: Enigma,
  categories: ["history", "programming", "math", "people"],
  time_to_read: 30,
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

      </div>
    )
  }
}

export default Content;
export {metadata};
