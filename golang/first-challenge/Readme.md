# Golang in docker image with 1.86 mb

![golang-with-1-86-mb](https://i.imgur.com/bGIsQ3F.png)

## I used this commands to generate go.mod into docker container, without golang in my local machine

- cd src
- docker run -it -v "$(pwd)":/go/src --rm golang bash
- export GOPATH=<my_local_pwd>
- go mod init app.go
- go mod tidy

## Image in docker hub to pull:

- wpo2512/golang-2mb
