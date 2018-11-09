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
          Postgres configuration typically consists of 3 files and a <code>conf.d</code> folder: the main file,
          <code>postgresql.conf</code>, specifies locations of two other files, <code>pg_hba.conf</code> and
          <code>pb_ident.conf</code> and reads them. It also imports the contents of <code>conf.d</code> directory.
        </p>
        <p>
          Role authentication supports <a href="https://www.postgresql.org/docs/9.1/static/auth-methods.html">a number of mechanisms</a>,
          which can be configured in <code>pg_hba.conf</code>. "hba" part stands for "Host-based authentication", this
          is the main configuration file, responsible for authentication settings.
        </p>
        <p>
          Typically, a trusted authentication mechanism is enabled that allows users on the local machine to login to
          postgres without a password. E.g. <a href="https://hub.docker.com/_/postgres/">within a docker container</a> the
          database is accessible with psql, but not outside.
        </p>
        <p>
          Mapping between the unix system users and postgres users is governed by <code>pg_ident.conf</code> configuration
          file. Records in it are of the form:
        </p>
        <pre>
          # MAPNAME  SYSTEM-USERNAME  PG-USERNAME<br/>
          # root is allowed to login as postgres<br/>
          root_as_postgres  postgres  postgres<br/>
          User123           LinuxUser PGUser
        </pre>
        <p>
          MAPNAME is the (otherwise freely chosen) map name that was used in <code>pg_hba.conf</code>.  SYSTEM-USERNAME
          is the detected user name of the client.  PG-USERNAME is the requested PostgreSQL user name.  The existence
          of a record specifies that SYSTEM-USERNAME may connect as PG-USERNAME.
        </p>
        <p>
          If SYSTEM-USERNAME starts with a slash (/), it will be treated as a regular expression. Optionally this can
          contain a capture (a parenthesized subexpression).  The substring matching the capture will be substituted for
          \1 (backslash-one) if present in PG-USERNAME.
        </p>
        <p>
          Multiple maps may be specified in <code>pg_ident.conf</code> and used by <code>pg_hba.conf</code>. See <a href="https://www.dbrnd.com/2016/12/postgresql-pg_ident-conf-to-map-operating-system-username-and-database-username-external-authentication-password/">more examples on pg_ident.conf</a>.
        </p>
        <p>
          Maps, specified in <code>pg_ident.conf</code>, are then used in <code>pg_hba.conf</code> to determine, who can
          access the database over what kind of connection. Records in <code>pg_hba.conf</code> are of the form:
        </p>
        <pre>
          # This file controls: which hosts are allowed to connect, how clients<br/>
          # are authenticated, which PostgreSQL user names they can use, which<br/>
          # databases they can access.  Records take one of these forms:<br/>
          #<br/>
          # local      DATABASE  USER  METHOD  [OPTIONS]<br/>
          # host       DATABASE  USER  ADDRESS  METHOD  [OPTIONS]<br/>
          # hostssl    DATABASE  USER  ADDRESS  METHOD  [OPTIONS]<br/>
          # hostnossl  DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
        </pre>
        <p>
          For example, <code>pg_hba.conf</code> configuration could look like this:
        </p>
        <pre>
          # Default:<br/>
          local  all  postgres    trust<br/>
          <br/>
          # "local" is for Unix domain socket connections only<br/>
          local  all  all    trust<br/>
          <br/>
          # IPv4 local connections:<br/>
          host  all  all  127.0.0.1/32  trust<br/>
          <br/>
          # IPv6 local connections:<br/>
          host  all  all  ::1/128  trust<br/>
          <br/>
          # Local root Unix user, passwordless access<br/>
          local  all  postgres    peer map=root_as_postgres<br/>
          <br/>
          # Password hosts<br/>
          host  all  all  0.0.0.0/0  password
        </pre>
        <p>
          Still, <code>psql</code> client is supposed to pass a certain username to the database. If you don't do this, <code>psql database</code>
          command is equivalent to <code>psql -U $USER database</code>. Attempt to login as
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
          <li><a href="https://github.com/ANXS/postgresql">Comments in Postgres config files, created by this Ansible role, are very helpful</a></li>
        </ul>
      </div>
    )
  }
}

export default Content;
export {metadata};
