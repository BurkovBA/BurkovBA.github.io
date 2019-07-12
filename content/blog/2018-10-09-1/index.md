---
title: Docker users and user namespaces
date: "2018-10-09T00:00:00.284Z"
tags: ["programming"]
cover: "./docker.png"
description: After taking a break from DevOps for a few months and switching to other fields, I would always forget the details of how users within a docker container map to users on the host machine. This is a condensed recap of user mappings that should save me time, upon switching the contexts.
---

<!-- https://cdn-images-1.medium.com/max/640/1*TdHKA_vurEsoQVvaENRtBg.png -->
<div>
  <p>
    Suppose that you're running a docker container. Normally, you'd have a <code>docker</code> group on your machine
    that your user (e.g. <code>boris</code>) belongs to.
  </p>
  <p>
    Normally, uid/pids within the container are the same uids and pids as in your host system, cause containers and
    the host machine share the same kernel.
  </p>
  <p>
    E.g. when you run a docker container, normally processes within the container run as root user with uid 0. Files,
    owned by those processes (e.g. through a mounted volume), are seen as owned by root on the host, they have uid
    of 0 as well.
  </p>
  <p>
    If you run a process as a non-root user within the container (e.g. stock <code>postgres</code> image does
    <code>gosu</code> to uid 999 before running, on the host machine postgres-owned files will be owned by uid=999.
  </p>
  <p>
    <code>uids</code> for non-system users <a href="https://en.wikipedia.org/wiki/User_identifier">normally start with 1000</a>,
    so if you're running some process within the docker container as uid 1001,
  </p>
  <p>
    In a Dockerfile you can use <code>USER</code> instruction to specify that some commands might need to be run under a
    different uid.
  </p>
  <p>
    You can pass a <code>--user</code> option to <code>docker run</code>, e.g. <code>docker run -d --user 1001 ubuntu:latest sleep infinity</code>,
    and in that case process within your container process will run as user 1001. This option overrides the
    <code>USER</code> command in your container.
  </p>
  <p>
    Read more examples in <a href="https://docs.docker.com/engine/security/userns-remap/#enable-userns-remap-on-the-daemon">this excellent posts by Marc Campbell</a>.
  </p>
  <p>
    Take note that examples, provided in the post, work on true Linux machines, but not on Mac OS, where <code>ps</code>
    doesn't show docker processes, due to implementation details of docker machine on macs.
  </p>
  <h4>User namespaces and remapping</h4>
  <p>
    There's a mechanism in Linux kernel called user namespaces, which allows you to improve security of your
    containers.
  </p>
  <p>
    Basically, you can remap a range of uids, used within a docker container, to regular users uids on your host machine,
    when configuring the docker daemon. Read more in the <a href="https://docs.docker.com/engine/security/userns-remap/">official documentation</a>.
  </p>
  <h4>Links:</h4>
  <ul>
    <li><a href="https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf">Understanding how uid and gid work in docker containers</a></li>
    <li><a href="https://medium.com/@mccode/processes-in-containers-should-not-run-as-root-2feae3f0df3b">Don't run processes in containers as root</a></li>
    <li><a href="https://docs.docker.com/engine/security/userns-remap/">User namespaces and remapping</a></li>
  </ul>
</div>