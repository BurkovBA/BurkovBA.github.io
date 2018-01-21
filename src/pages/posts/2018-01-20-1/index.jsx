import React from 'react';
import Gist from 'react-gist-burkov';

let metadata = {
  id: "2018-01-20-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "20.01.2018",
  language: "en",
  title: "OpenStack, Kubernetes and OpenShift crash course for impatient",
  subtitle: "Part 2: Kubernetes",
  abstract: "",
  cover: "https://kubernetes.io/images/favicon.png",
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
        <h3>Kubernetes</h3>
        <p>
          <a href="https://kubernetes.io/">Kubernetes</a> is a system for orchestration of containerized
          applications that can be used to deploy your <a href="http://microservices.io/patterns/microservices.html">microservice</a>-based websites to the cloud. Kubernetes is created by Google, based
          on their internal orchestration system Borg (although, codebase is re-written completely from scratch).
          Kubernetes is written mostly in Go programming languages and is <a href="https://github.com/kubernetes/kubernetes">open-source</a>.
        </p>
        <p>
          Kubernetes assumes that your application is represented by a set of containers, currently specifically <a href="https://www.docker.com/">Docker</a> containers
          (but integration with other containerization systems are underway, e.g. see <a href="https://coreos.com/rkt/">CoreOS rkt</a> and <a href="https://bobcares.com/blog/docker-vs-rkt-rocket/">its differences from Docker</a>).
        </p>
        <p>
          Here are the key concepts and entities of Kubernetes.
        </p>
        <ul>
          <li><b>Nodes</b> - hardware servers that you're deploying your Kubernetes application to; for instance, these
            can be represented by dedicated servers at Hetzner.de or OpenStack instances
          </li>
          <li><b>Images and Containers</b> - <a href="https://docs.docker.com/engine/userguide/storagedriver/imagesandcontainers/">images</a> and <a href="https://www.docker.com/what-container">containers</a> are
            Docker images and containers (although, Kubernetes engineers work on porting it to other containerization
            systems). Kubernetes dowloads your images from <a href="https://hub.docker.com/">Docker Hub</a> or its private
            analogues and build containers from them.
          </li>
          <li><b>Pods</b> - pods in the same sense as in <a href="https://coreos.com/rkt/">rkt</a>. These are
            "logical servers" of your app. Each pod contains
            a group of containers that are meant to reside on the same
            physical server (node) and a number of volumes. For instance, your Nginx reverse proxy container (used to serve
            static assets like javascript, css, images and fonts) and your Node.js Express web server container (used
            for backend rendering of your React web application) might reside in the same pod and share a volume
            with your static assets.
          </li>
          <li><b>Volumes, Persistent Volumes and Persistent Volume Claims</b> - Volumes are NOT just
            <a href="https://docs.docker.com/engine/admin/volumes/">docker volumes</a>, but a piece of block storage that
            is allocated from underlying IaaS for a pod and lives as long as the pod lives (similarly to OpenStack
            ephemeral disks). Unlike regular Volumes, Persistent Volumes
            are <a href="https://kubernetes.io/docs/concepts/storage/volumes/">volumes in terms of underlying IaaS solution</a>, they
            are meant to outlive corresponding pods (e.g. if your IaaS is OpenStack, these are Cinder Volumes).
            Persistent Volume is an available volume resource, while Persistent Volume Claim is a specific allocated
            Persistent Volume for a certain current pod. Persistent Volume Claim consumes Persistent Volume resources
            same way as Pod consumes Node resources.
          </li>
        </ul>
      </div>
    )
  }
}

export default Content;
export {metadata};
