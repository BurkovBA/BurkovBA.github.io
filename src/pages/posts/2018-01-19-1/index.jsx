import React from 'react';

let metadata = {
  id: "2018-01-19-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "19.01.2018",
  language: "en",
  title: "OpenStack, Kubernetes and OpenShift crash course for impatient",
  subtitle: "Part 1: OpenStack",
  abstract: "OpenStack is a pretty old standard for describing cloud\n" +
  "resources and interacting with them. Most of its APIs were suggested around 2012. It is \"Open\" because\n" +
  "multiple vendors that provide cloud services (including Rackspace and Red Hat) agreed to use the same\n" +
  "API for interaction with them and called it OpenStack.",
  cover: "https://cdn.thenewstack.io/media/2014/05/openstack.png",
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

  componentDidMount() {
    if (this.props.onload) this.props.onload(this.state);
  }

  render() {
    return (
      <div>
        <h3>OpenStack</h3>
        <p>
          <a href="https://www.openstack.org/software/">OpenStack</a> is a pretty old standard for describing cloud
          resources and interacting with them. Most of its APIs were suggested around 2012. It is "open" because
          multiple vendors that provide cloud services (including Rackspace and Red Hat) agreed to use the same
          API - OpenStack.
        </p>
        <p>
          OpenStack evolves over time and has seen many <a href="https://releases.openstack.org/">releases</a>.
          OpenStack consists of a <a href="https://www.openstack.org/software/project-navigator/">list of APIs, called Projects</a> for
          managing different aspects of you cloud infrastructure. Arguably the most important among them are
          <a href="https://www.openstack.org/software/releases/ocata/components/nova">Nova</a> used to create new
          virtual machines and <a href="https://www.openstack.org/software/releases/ocata/components/cinder">Cinder</a> used
          to manage block devices.
        </p>
        <p>
          I'll briefly list
          the <a href="https://netapp.github.io/openstack-deploy-ops-guide/kilo/content/section_nova-key-concepts.html">key concepts of Nova</a> and <a href="https://netapp.github.io/openstack-deploy-ops-guide/kilo/content/section_cinder-key-concepts.html">key concepts of Cinder</a> here.
        </p>
        <ul>
          <li><b>instance</b> - a virtual server</li>
          <li><b>flavor</b> - on Rackspace you can't just say I want a server with X MB RAM, Y processor, Z hard drive - you
            have to choose one from the existing presets - flavors - e.g. 32 MB RAM, 4 core processor, 20 GB hard drive
          </li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default Content;
export {metadata};
