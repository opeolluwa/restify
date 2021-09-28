pipeline {
    agent {
        docker {
            image 'node:10'
            args '-u root:root'
            reuseNode true
        }
    }
    stages {
        stage('Tests') {
            steps {
                sh 'npm i'
                sh 'npm test'
            }
        }
    }
}