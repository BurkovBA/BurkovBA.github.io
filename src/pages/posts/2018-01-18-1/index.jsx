import React from 'react';

let metadata = {
  id: "2018-01-18-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "18.01.2018",
  language: "en",
  title: "OpenStack, Kubernetes and OpenShift crash course for impatient",
  subtitle: "",
  abstract: "Much like a junkie from a russian anecdote, who started shouting \"Jiggers, cops!\" " +
    "when they brought him to the police station, EBI in 2018 suddenly discovered the existence of " +
    "cloud technologies.",
  cover: "https://cdn.thenewstack.io/media/2014/05/openstack.png",
  categories: ["programming"],
  time_to_read: 20,
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
        <p>
          This is a brief crash course on OpenStack, Kubernetes and OpenShift for the purposes of bioinformatics.
        </p>
        <p>
          Currently, 2 cloud solutions are being adopted by EBI at the same time:
        </p>
        <ul>
          <li><a href="https://www.openstack.org/">OpenStack</a> (IaaS)</li>
          <li><a href="https://www.openshift.com/">OpenShift</a> (PaaS)</li>
        </ul>
        <p>
          I'm using terms IaaS, PaaS, SaaS as summarised here:
        </p>
        <img className="img-responsive center-block" src="https://cdn-images-1.medium.com/max/1200/1*JacqOl2kjyTYzv31v0xITw.png"/>
        <p>
          OpenStack is a lower-level IaaS solution, it allows you to provision VMs on demand from images
          that you make, mount data volumes and monitor the state of your VMs via a web dashboard.
          It's unaware of Docker or any software you run on top of it - you have to manually program the logic of
          servers provisioning, software installation, failover etc.
        </p>
        <p>
          OpenShift is a higher-level PaaS solution that pretty much offers Kuberenetes on top of OpenStack
          (OpenShift = Kubernetes + OpenStack).
        </p>
        <p>
          <a href="https://kubernetes.io/">Google Kubernetes</a> is the winner of orchestration solutions race according
          to what I read, hear at meetups and talks from tech consultancies (notable rivals being <a href="https://docs.docker.com/engine/swarm/">Docker Swarm</a>, <a href="http://mesos.apache.org/">Apache Mesos</a> and <a href="https://www.nomadproject.io/">Hashicorp Nomad</a>).
        </p>
        <p>
          Kubernetes allows you to declaratively configure deployment of your
          application as a set of Docker containers on top of whatever infrastructure you have, automatically monitors
          your application state, restarts crashed machines, manages service discovery, allows for horizontal scaling
          and redundancy of your microservices, allows for rolling green-blue deployments of new versions, re-deploys
          on webhooks from github etc.
        </p>
        <p>
          OpenShift just provides first-class integration of Kubernetes with OpenStack
          off the shelf.
        </p>
        <p>
          So, I believe we could use both for different purposes.
        </p>
        <p>
          OpenShift is perfect for website deployments. For instance, in RNAcentral.org deployment we shall have multiple
          microservices, running background worker processes for sequence search or export. Kuberneter will handle
          their orchestration, redundancy/horizontal scaling, disaster recovery, monitoring and partially automate CI/CD.
          (of course, we can try running Kubernetes on top of OpenStack, but OpenShift seems to be doing exactly that
          in a nicer fashion)
        </p>
        <p>
          OpenStack is more suited for running bioinformatical pipelines of release jobs (like we do for Rfam and
          RNAcentral). We might not need Kubernetes: we can deploy some existing pipeline solution like Toil or Arvados
          on top of OpenStack as computational resources backend (or just replace LSF commands in our existing scripts
          with calls to OpenStack APIs).
        </p>
        <a href="https://www.openstack.org/software/">OpenStack</a>
      </div>
    )
  }
}

export default Content;
export {metadata};
