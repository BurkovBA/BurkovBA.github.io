import React from 'react';
import { Link, Location } from 'react-router-dom';
import tr from 'services/translate.jsx';

require("pages/Blog.scss");


class Blog extends React.Component {
  render() {
    return (
      <div className="row">
        { Object.values(this.props.posts).map((post) =>
          <div key={post.metadata.id} className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="hpanel blog-box">
              <div className="panel-heading">
                <div className="media clearfix">
                  <a className="pull-left">
                    <img src={ post.metadata.authors_avatar } alt="profile-picture" />
                  </a>
                  <div className="media-body">
                    <span className="post-authorship">
                      <small><span className="font-bold">{ tr(post.metadata.author) }</span> </small>
                      <br />
                      <small className="text-muted"><i className="fa fa-calendar"> </i> { post.metadata.date_created }</small>
                    </span>
                    <span className="pull-right">
                      <small><i className="fa fa-clock-o"> </i> {tr('Time to read')}: { post.metadata.time_to_read } min</small>
                      <br />
                      <small>{ post.metadata.categories.map((category, index) =>
                        <span key={category}>
                          <span>{ !!index && ' ' }</span>
                          <span className={`label label-${category}`}>{ tr(category) }</span>
                        </span>
                      )}
                      </small>
                      {/*<small><i className="fa fa-eye"> </i> Просмотров: 62 </small>*/}
                      {/*<br />*/}
                      {/*<small><i className="fa fa-comments-o"> </i> Комментариев: 10</small>*/}
                    </span>
                  </div>
                </div>
              </div>
              <div className="panel-image">
                <img className="img-responsive" src={ post.metadata.cover } alt="" />
                <div className="title">
                  <Link to={`/blog/${post.metadata.id}`}> <h4>{ post.metadata.title }</h4></Link>
                  <small>{ post.metadata.subtitle }</small>
                </div>
              </div>
              <div className="panel-body">
                <p>
                  { post.metadata.abstract }
                </p>
                <Link to={`/blog/${post.metadata.id}`}> <h4>{tr('Continue')}...</h4></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Blog
