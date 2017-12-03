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
              <h4>{ title }</h4>
              <span className="font-bol">{ subtitle }</span>
              <div className="text-muted">
                Автор: <span className="font-bold">{ author }</span>
              </div>
              <div className="text-muted">
                Дата: <span className="font-bold">{ date_created }</span>
              </div>
              <br />
              <img style="width:80%;" src="{ cover }" alt="" />
            </div>
              <div className="panel-body">
                { content }
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
