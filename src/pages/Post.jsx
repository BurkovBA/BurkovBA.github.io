import React from 'react';

class Post extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="hpanel blog-article-box">
            <div className="panel-heading">
              <a className="pull-left">
                <img src="/src/images/burkov_boris_web.jpg" />
              </a>
              <h4>{ this.props.title }</h4>
              <span className="font-bol">{ this.props.subtitle }</span>
              <div className="text-muted">
                Автор: <span className="font-bold">{ this.props.author }</span>
              </div>
              <div className="text-muted">
                Дата: <span className="font-bold">{ this.props.date_created }</span>
              </div>
              <br />
              <img style="width:80%;" src="{ this.props.cover }" alt="" />
            </div>
              <div className="panel-body">
                { this.props.children }
              </div>
              <div className="panel-footer">
                <span className="pull-right">
                  <i className="fa fa-comments-o"> </i> 22 comments
                </span>
                <i className="fa fa-eye"> </i> 142 views
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
