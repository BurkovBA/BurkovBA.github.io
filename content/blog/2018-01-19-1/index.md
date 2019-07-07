---
title: OpenStack, Kubernetes and OpenShift crash course for impatient - OpenStack
date: "2018-01-19T00:00:00.284Z"
tags: ["programming"]
cover: "./openstack.png"
description: OpenStack is a pretty old standard for describing cloud resources and interacting with them. Most of its APIs were suggested around 2012. It is "Open" because multiple vendors that provide cloud services (including Rackspace and Red Hat) agreed to use the same API for interaction with them and called it OpenStack.
---

<!-- https://cdn.thenewstack.io/media/2014/05/openstack.png -->
<div>
  <h3>OpenStack</h3>
  <p>
    <a href="https://www.openstack.org/software/">OpenStack</a> evolves over time and has seen many <a href="https://releases.openstack.org/">releases</a>.
    OpenStack consists of a <a href="https://www.openstack.org/software/project-navigator/">list of APIs, called Projects</a> for
    managing different aspects of you cloud infrastructure. Arguably the most important among them are <a href="https://www.openstack.org/software/releases/ocata/components/nova">Nova</a> used
    to create new virtual machines and <a href="https://www.openstack.org/software/releases/ocata/components/cinder">Cinder</a> used
    to manage block devices. You'll also have to interact with <a href="https://www.openstack.org/software/releases/ocata/components/keystone">Keystone</a> project
    in order to authenticate your requests to all the OpenStack APIs.
  </p>
  <h4>Key concepts</h4>
  <p>
    I'll briefly list
    the <a href="https://netapp.github.io/openstack-deploy-ops-guide/kilo/content/section_nova-key-concepts.html">key concepts of Nova</a> and <a href="https://netapp.github.io/openstack-deploy-ops-guide/kilo/content/section_cinder-key-concepts.html">key concepts of Cinder</a> here.
  </p>
  <ul>
    <li><b>instance</b> - a virtual server.</li>
    <li><b>flavor</b> - in OpenStack you can't just say I want a server with X MB RAM, Y processor, Z hard drive - you
      have to choose one from the existing presets - flavors - e.g. 32 MB RAM, 4 core processor, 20 GB hard drive (<a href="https://netapp.github.io/openstack-deploy-ops-guide/kilo/content/section_nova-key-concepts.html">see more here</a>).
    </li>
    <li><b>disk</b> - every instance needs at least a root disk that contains boot loader and operating system to boot;
      root disk can be represented either by an <b>ephemeral disk</b> that will be destroyed when the instance is
        destroyed or by <b>persistent volume</b> that will survive the destruction of instance (<a href="https://netapp.github.io/openstack-deploy-ops-guide/kilo/content/section_cinder-key-concepts.html">see more here</a>).
    </li>
    <li><b>volume</b> - persistent Cinder volume; by contrast with ephemeral disks, contents of volumes are
        persistent and survive instance destruction (<a href="https://netapp.github.io/openstack-deploy-ops-guide/kilo/content/section_nova-deployment-choices.html#nova.boot.options">see more here</a>).
    </li>
    <li><b>image</b> - image of an operating system, similar to .iso images that you install your OS from. Used to create ephemeral root disks.</li>
    <li><b>snapshot</b> - copy of a disk or volume, taken at a certain moment of time; could be used to create
      a root volume from it.
    </li>
  </ul>
  <h4>Python APIs</h4>
  <p>
    OpenStack provides convenient python APIs for each project. You can add them to
    <code>requirements.txt</code> file of your project and install them via <code>pip</code>.
  </p>
  <p>
    Here I'll provide a sample piece of code that creates an instance. Note that Openstack apis change a bit over
    time, so this piece of code might become obsolete (especially, considering it's 2 years old).
  </p>
  <div>
    <Gist id="8ca8c38c0b78ee53fa214fb00e047c4d" />
  </div>
  <h4>Terraform</h4>
  <p>
    Instead of using the raw OpenStack API, you can use some compatibility layer that abstracts out some of
    the API details. A popular solution nowadays is <a href="https://www.terraform.io/">Terraform</a> by
    Hashicorp. <a href="https://www.terraform.io/docs/providers/openstack/">Here is their manual</a> on
    provisioning servers via OpenStack.
  </p>
  <a href="/blog/2018-01-20-1">Part 2. Kubernetes</a>
</div>