pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-web-app:latest .'
            }
        }
        stage('Deploy Container') {
            steps {
                sh 'docker stop devops-web-app || true'
                sh 'docker rm devops-web-app || true'
                sh 'docker run -d --name devops-web-app -p 80:3000 devops-web-app:latest'
            }
        }
    }
}
