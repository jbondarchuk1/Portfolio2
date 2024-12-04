To run the fully networked back end and front end: $ docker compose up --build
    - the nextjs application server runs on port 8080
    - the nestjs api server runs on port 8081

To run just one of the servers on port 3000:
    $ cd [nestjs, nextjs] # choose the one you want to run
    $ npm install
    $ npm run dev

NOTE: Running on web browsers with many plugins may throw hydration errors. these should be harmless. To prevent this, either disable plugins or run in an incognito window.


Development Note: Docker containers running on the same network (web in this case), can send http requests to each other using the service name. For example 'http://nestjs:3000' will send to the nestjs server.
