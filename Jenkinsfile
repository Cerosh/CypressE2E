import groovy.json.JsonOutput
def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline {
	agent any
	tools {nodejs "node"}
	environment {
    PATH = "$PATH:/usr/local/bin"
    BUILD_USER = ''
  }
	options {
        ansiColor('xterm')
    }
    
	stages {
	    stage('Build Docker Image'){
	        steps{
	           sh '/usr/local/bin/docker build -t cyp-dock-cucum-report .' 
	        }
	    }
		stage('Clone Git Repo'){
				steps{
					git branch: 'main', url: 'https://github.com/Cerosh/CypressE2E.git'
		    }
		}
		stage('Run Tests'){
				steps{
					sh '/usr/local/bin/docker-compose run chrome'
					
				}
		}
		stage('Publish HTML Report'){
				steps{
				    publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cucumber_report/html', reportFiles: 'cucumber_report.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
	 post {
	     
        always {
            script {
                BUILD_USER = getBuildUser()
            }
            
            slackSend channel: '#test-automation-results',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n   More info at: ${env.BUILD_URL}HTML_20Report/"

            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!'
        }
    }
}