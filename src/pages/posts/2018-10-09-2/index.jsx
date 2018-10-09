import React from 'react';

let metadata = {
  id: "2018-10-09-2",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "09.10.2018",
  language: "en",
  title: "Postgres roles",
  subtitle: "",
  abstract: "Postgres authentication and permission system sometimes feels" +
  " like a total mess to me. This is a recap of how it works.",
  cover: "https://cdn-images-1.medium.com/max/640/1*7AOhGDnRL2eyJMUidCHZEA.jpeg",
  categories: ["programming"],
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
        <p>Here are the basic concepts of Postgres:</p>
        <p>
          A <code>cluster</code> holds many <code>databases</code>, which hold many <code>schemas</code> that contain
          many <code>tables</code>.
        </p>
        <p>
          Schemas (even with the same name) in different DBs are unrelated. Within the same DB they are something
          like namespaces for tables. Granting privileges for a schema only applies to this particular schema in the
          current DB (the current DB at the time of granting).
        </p>
        <p>
          Every database starts with a schema <code>public</code> by default. That's a convention, and many settings
          start with it. Other than that, the schema public is just a schema like any other. <a href="https://severalnines.com/blog/postgresql-schema-management-basics">More on schemas</a>
        </p>
        <p>
          Access to Postgres entities is regulated by the concept of a <code>role</code>. Role is a hybrid of user and
          group. In previous versions, postgres used to have users and groups, but now they are replaced with a single
          entity. So now 'user' role <a href="https://stackoverflow.com/questions/8485387/why-did-postgresql-merge-users-and-groups-into-roles?noredirect=1&lq=1">can be granted permissions</a> to a 'group' role.
        </p>
        <p>
          Potentially available permissions are listed <a href="https://severalnines.com/blog/postgresql-privileges-user-management-what-you-should-know">here</a>.
        </p>
        <p>
          Role authentication supports <a href="https://www.postgresql.org/docs/9.1/static/auth-methods.html">a number of mechanisms</a>,
          which can be configured in <code>pg_hba.conf</code>.
        </p>
        <p>
          Typically, a trusted authentication mechanism is enabled that allows users on the local machine to login to postgres
          without a password. E.g. <a href="https://hub.docker.com/_/postgres/">within a docker container</a> the database is accessible with psql, but not outside.
        </p>
        <p>
          Still, <code>psql</code> client is supposed to pass a certain username to the database. If you don't do this,
           <code>psql database</code> command is equivalent to <code>psql -U $USER database</code>. Attempt to login as
          a root <a href="https://serverfault.com/questions/515277/difference-of-postgresqls-trust-and-ident">will cause an error.</a>
        </p>
        <h4>Links:</h4>
        <ul>
          <li><a href="https://stackoverflow.com/questions/24918367/grant-privileges-for-a-particular-database-in-postgresql/24923877#24923877">Entities</a></li>
          <li><a href="https://stackoverflow.com/questions/8485387/why-did-postgresql-merge-users-and-groups-into-roles?noredirect=1&lq=1">Nested roles</a></li>
          <li><a href="https://severalnines.com/blog/postgresql-schema-management-basics">Schemas</a></li>
          <li><a href="https://www.postgresql.org/docs/9.1/static/auth-methods.html">Authentication mechanisms</a></li>
          <li><a href="https://severalnines.com/blog/postgresql-privileges-user-management-what-you-should-know">Permissions</a></li>
          <li><a href="https://serverfault.com/questions/515277/difference-of-postgresqls-trust-and-ident">psql and system user</a></li>
        </ul>
      </div>
    )
  }
}

export default Content;
export {metadata};
