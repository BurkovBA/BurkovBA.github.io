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
          Here are the key concepts and entities of Kubernetes (<a href="https://kubernetes.io/docs/concepts/">see the official docs</a>).
        </p>
        <ul>
          <li><b>Nodes</b> - Nodes are servers that you're deploying your Kubernetes application to;
            for instance, these can be represented by dedicated servers at Hetzner.de or OpenStack instances.
          </li>
          <li><b>Cluster</b> - all the Nodes that Kubernetes is operating on constitute Kubernetes Cluster.</li>
          <li>
            <b>Master</b> - single point of failure of the Cluster that manages all the nodes and offers API which
            interacts with user and accepts commands from kubectl utility.
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
          <li><b>Volumes, Persistent Volumes and Persistent Volume Claims</b> - Volumes are NOT
            just <a href="https://docs.docker.com/engine/admin/volumes/">docker volumes</a>, but <a href="https://kubernetes.io/docs/concepts/storage/volumes/">a piece of block storage that
            is allocated from underlying IaaS for a pod</a> and lives as long as the pod lives (similarly to OpenStack
            ephemeral disks). Unlike regular Volumes, Persistent Volumes
            are volumes in terms of underlying IaaS solution, they
            are meant to outlive corresponding pods (e.g. if your IaaS is OpenStack, these are Cinder Volumes).
            Persistent Volume is an available volume resource, while Persistent Volume Claim is a specific allocated
            Persistent Volume for a certain current pod. Persistent Volume Claim consumes Persistent Volume resources
            same way as Pod consumes Node resources.
          </li>
          <li>
            <b>Contorllers</b> - orchestrators that determine, how multi-pod configurations are deployed on you
            Kubernetes cluster. Possible controller types are called Deployment, ReplicationController, ReplicaSet,
            StatefulSet, DaemonSet, GarbageCollection and Jobs.
          </li>
        </ul>
        <p>
          To be a part of Kubernetes Cluster a Node has to run
          <a href="https://github.com/kubernetes/community/blob/master/contributors/design-proposals/architecture/architecture.md#the-kubernetes-node">at least the following processes</a>:
        </p>
        <ul>
          <li><b>kubelet</b> - agent program similar to what Jenkins or OpenStack run, that communicates with master</li>
          <li><b>container engine</b> - usually, Docker, to run containers</li>
          <li><b>kube-proxy</b> - routing utility that programs iptables to provide virtual IPs and load-balancing for pods</li>
        </ul>
        <p>
          To create Kubernetes deployment, you need to create a .YAML file, that declaratively describes your desired
          cluster state. Kubernetes will try its best to make your cluster fit the config you specified. See full
          reference of .YAML file options
          in the <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.9/">reference section</a> of documentation
          and see examples of .YAML configurations in <a href="https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/">tasks</a> section.
        </p>
        <p>
          To interact with Kubernetes you'll probably use <code>kubectl</code> utility. Its full reference is also available
          in <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.9/">reference section</a> of
          the Kubernetes documentation.
        </p>
        <p>
          To try Kubernetes out on your local machine, try installing <a href="https://kubernetes.io/docs/tasks/tools/install-minikube/">Minikube</a>. It
          will create a VM on your local computer that will work as a Node of Kubernetes cluster and you will be able to
          try your deployment configuration on it. It will also run a web server with a nice dashboard, describing the
          state of your Kubernetes cluster.
        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};
