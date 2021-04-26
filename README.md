![Build Image](https://travis-ci.com/Odubolaoluwatimilehin/simple-node-CI-CD.svg?token=qbXsTfaxmbqxN6nb6s5p&branch=main)

# Overview
This is a very simple, bare-bones NodeJS and ExpressJS project created.

# Local Setup
* Install dependencies: `npm install`
* Run server: `node server.js`

# Usage
By default, the application should be loaded on `localhost:8080`. It should provide an HTTP 200 response when loaded at `localhost:8080/health`.

# Container Setup
* Build image: `docker build .`
* Run container with image: `docker run {image_id}` where `image_id` can be retrieved by running `docker images` and found under the column `IMAGE ID`
* TravisCI was useed in continous integration. image was built and pushed to docker registry Docker Hub, where it is pulled by AWS EKS, to set up pods in K8S services.
* The reverse proxy file is another pod set up to proxy url addresse.
* Nginx server was used for proxy.
* Kubectl was used to intreact with K8S.


Sample bare-bones ```nginx.conf``` file

``` events {
}
http {
  server {
      listen <PORT_NUMBER>;
      location /<PROXY_PATH>/ {
          proxy_pass http://<REDIRECT_PATH>/;
      }
  }
}

```

