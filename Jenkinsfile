pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:bionic' } }
   stages {
      stage('e2e-tests') {
         steps {
            sh 'npm install'
            sh 'npm run test'
         }
      }
   }
}