pipeline {
    agent any
    stages {
        stage("Build a new docker image") {
            steps {
                sh '''
                    docker build -t blog .
                '''
            }
        }
        stage("Stop an old docker container") {
            steps {
                script {
                    try {
                        sh 'docker stop blog'
                    } catch (err) {}
                }
            }
        }
        stage("Start a new docker container") {
            steps {
                sh '''
                    docker run -p 8888:8888 -rm -d --name blog blog
                '''
            }
        }
    }
}
