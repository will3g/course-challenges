# Golang in docker image with 1.86 mb

<iframe src="https://drive.google.com/file/d/19mr1Yk9KyG99-1sYbQdYtcJCqAOgfLwV/preview" width="640" height="480" allow="autoplay"></iframe>

## I used this commands to generate go.mod into docker container, without golang in my local machine

- cd src
- docker run -it -v "$(pwd)":/go/src --rm golang bash
- export GOPATH=<my_local_pwd>
- go mod init app.go
- go mod tidy

## Image in docker hub to pull:

- wpo2512/golang-2mb