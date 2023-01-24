FROM golang:alpine as builder

WORKDIR /go/src

COPY . /go/src

RUN go build -o /go/src/build


FROM scratch

COPY --from=builder /go/src/build /

ENTRYPOINT ["/build"]
