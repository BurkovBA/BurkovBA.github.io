import React from 'react';
import { Link, Location } from 'react-router-dom';

require("pages/Blog.scss");

// import all blog posts (second argument means recursively)
let posts = {};
let context = require.context("./posts", true, /\.*/);

context.keys().forEach(function (path) {
  let id = path.match(/\d{4}-\d{2}-\d{2}-\d/);
  posts[id] = context(path);
});


class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          "id": "2017-05-01-1",
          "author": "Борис Бурков",
          "authors_avatar": require("images/burkov_boris_web.jpg"),
          "date_created": "5.01.2017",
          "title": "Об овцах и стартапщиках",
          "subtitle": "Огораживание в средневековой Англии и современные вынужденные предприниматели",
          "abstract": "Гербом Англии должны быть не три льва, а дюжина овец.\n Этим кротким созданиям она отчасти обязана своей индустриальной мощью, позволившей ей так вырваться вперед в общественном и экономическом развитии.",
          "cover": "http://www.rabstol.net/uploads/gallery/main/515/rabstol_net_sheep_02.jpg",
          "categories": ["Big Picture", "Economy & Finance", "Entrepreneurship"],
          "views": "",
          "comments": [],
          "content": "Сегодня я добирался на работу в Хинкстон на поезде и проезжал овечью ферму возле деревни Грейт Честерфорд. \n лучший друг советских физкультуников положил 20 миллионов жизней. Впрочем, и Merrie Olde England без боя не сдавалась - смена экономической модели стала сильнейшим социальным потрясением для широких слоев крестьян."
        },
      ]
    };
  }

  componentDidMount() {
    // do ajax requests with following setState invocation, e.g.:
    // http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
  }

  componentWillUnmount() {
    // abort any ajax here
  }

  render() {
    return (
      <div className="row">
        { this.state.posts.map((post) =>
          <div key={post.id} className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="hpanel blog-box">
              <div className="panel-heading">
                <div className="media clearfix">
                  <a className="pull-left">
                    <img src={ post.authors_avatar } alt="profile-picture" />
                  </a>
                  <div className="media-body">
                    <span className="post-authorship">
                      <small><span className="font-bold">{ post.author }</span> </small>
                      <br />
                      <small className="text-muted"><i className="fa fa-calendar"> </i> { post.date_created }</small>
                    </span>
                    <span className="pull-right">
                      <small><i className="fa fa-eye"> </i> Просмотров: 62 </small>
                      <br />
                      <small><i className="fa fa-comments-o"> </i> Комментариев: 10</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="panel-image">
                <img className="img-responsive" src={ post.cover } alt="" />
                <div className="title">
                  <Link to={`/blog/${post.id}`}> <h4>{ post.title }</h4></Link>
                  <small>{ post.subtitle }</small>
                </div>
              </div>
              <div className="panel-body">
                <p>
                  { post.abstract }
                </p>
                <Link to={`/blog/${post.id}`}> <h4>Продолжение...</h4></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Blog
