pipeline{
    agent any
    stages{
        stage("Build Image"){
            steps{
                sh 'docker build -t client-test-image:latest -f ./client/Dockerfile.dev ./client'
                sh 'docker run client-test-image:latest npm run test:ci'
            }
        }
    }
}