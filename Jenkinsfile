pipeline {
    agent any
    tools{
        nodejs 'Node21'
    }
    stages{
        stage('Build Nodejs'){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/MorganiMix/nanifish-1']])
                sh 'npm install'
            }
        }
        stage('Build docker image'){
            steps{
                script{
                    sh 'docker build -t morganimix/nanifish-1 .'
                }
            }
        }
        stage('Push image to Hub'){
            steps{
                script{
                    withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubpwd')]) {
                        sh 'docker login -u morganimix -p ${dockerhubpwd}'
                        sh 'docker push morganimix/nanifish-1'
                    }
                }
            }
        }
    }
}