workflow "New workflow" {
  on = "push"
  resolves = ["docker run"]
}

action "docker stop" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  runs = "stop"
  args = "blog"
}

action "docker build" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["docker stop"]
  runs = "build"
  args = "-t blog ."
}

action "docker run" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["docker build"]
  runs = "run"
  args = "-p 80:80 -d --name blog blog"
}
