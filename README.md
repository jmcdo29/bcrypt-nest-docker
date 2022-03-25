# Using Bcrypt with Docker and Node-Alpine

Normally when we install bcrypt it needs to use `node-gyp`, some python bindings and C++ to finish setting up the JavaScript package to work. This is fine in fully fledged Unix images, but Alpine doesn't have access to these bindings immediately. So what we can do is use a multi-stage build process to build the bcrypt package in the full image, and make use of the built product in the alpine image at the end of the dockerfile.

## Testing it works

You can run the following commands to ensure everything works as expected:

```sh
docker build . -t docker-bcrypt-nest
docker run -i -p 3000:3000 docker-bcrypt-nest
```

And in another terminal

```sh
curl http://localhost:3000 # this gets the hash from bcrypt for "hello world!"
curl -X http://localhost:3000 -d "originalValue=hello world!&hash=<hash from first request>"
```

Notice that we're still able to make use of bcrypt even though we're running an alpine image in the end.
