pipeline{
    agent{
        label "node"
    }
    stages{
        stage("Build Image"){
            steps{
                sh 'docker build -t client-test-image:latest -f ./client/Dockerfile.dev ./client'
                sh 'docker run -it client-test-image:latest npm run test -- --coverage'
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
    }
}