node {
  checkout scm
  def testImage = docker.build("test-image", "-f ./client/Dockerfile.dev ./client")

  testImage.inside {
    sh 'cd client && npm run test -- --coverage'
  }
}