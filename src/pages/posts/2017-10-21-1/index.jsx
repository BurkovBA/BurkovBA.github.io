import React from 'react';


let metadata = {
  id: "2017-10-21-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "21.10.2017",
  language: "ru",
  title: "Энигма",
  subtitle: "Про Блетчли-парк, вотчину Алана Тьюринга, где во Вторую Мировую была вскрыта немецкая система шифрования.",
  abstract: "",
  cover: "http://t0.gstatic.com/images?q=tbn:ANd9GcRrs7XfZqihvWX-CCmLKp8R9Q0zncirJmWTOEVpa9oEFYQRXphz",
  categories: ["business", "programming", "people"],
  time_to_read: 120,
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
