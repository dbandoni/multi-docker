pipeline {
  agent any
   triggers {
        githubPush()
    }
  stages {
    stage("Test Client Image") {
      steps {
        sh 'docker build -t client-test-image:latest -f ./client/Dockerfile.dev ./client'
        sh 'docker run client-test-image:latest npm run test:ci'
      }
    }
    stage("Build Images") {
      steps {
        echo 'Building Image: Client'
        sh 'docker build -t bandonidxc/multi-client ./client'
        echo 'Building Image: Nginx'
        sh 'docker build -t bandonidxc/multi-nginx ./nginx'
        echo 'Building Image: Server'
        sh 'docker build -t bandonidxc/multi-server ./server'
        echo 'Building Image: Worker'
        sh 'docker build -t bandonidxc/multi-worker ./worker'
      }
    }
    stage("Push Docker Images"){
        steps {
           sh 'echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_ID} --password-stdin'
           sh 'docker push bandonidxc/multi-client'
           sh 'docker push bandonidxc/multi-nginx'
           sh 'docker push bandonidxc/multi-server'
           sh 'docker push bandonidxc/multi-worker'
        }
    }
  }
}