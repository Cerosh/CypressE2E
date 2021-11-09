pipeline {
	agent any
	tools {nodejs "node"}
	options {
        ansiColor('xterm')
    }
	stages {
		stage('Clone Git Repo'){
				steps{
					git branch: 'main', url: 'https://github.com/Cerosh/CypressE2E.git'
		    }
		}
		stage('Install Dependencies'){
				steps{
					sh 'npm install  cypress-cucumber-preprocessor'
				}
		}
		stage('Run Tests'){
				steps{
					sh 'npm run cy:run-with-report'
				}
		}
		stage('Publish HTML Report'){
				steps{
				    publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cucumber_report/html', reportFiles: 'cucumber_report.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
}