# Jason Bondarchuk’s Microservices Portfolio

https://jasonbondarchuk.tech

## Project explanation

This is a portfolio project showing my understanding of modern web application development. 

I showcase front-end development with:

- NextJS
- Tailwind CSS
- ShadCN (component library)

I showcase back-end development with: 

- NestJS
- Jest (testing)
- SQLite 

I showcase infrastructure, networking, and DevOps as seen below:

- **Virtualization:** Docker, Docker-Compose
- **VCS and CI/CD:** GitHub/GitHub Actions/Cron
- **Modern IT infrastructure/Cloud/Networking:** Linux KVM (Proxmox), API/VPN Gateways
  - Note: it would have been easier to just throw them up on a cloud server, but I wanted to have fun with some local deployment/hybrid cloud strategies. If you are curious about my experience with the cloud, I do have an AWS Solutions Architect-Associate Certification and industry experience.

## Getting Started

To run the fully networked back end and front end: 

````bash
$ docker compose up --build
````

   - the nextjs application server runs on port 8080
   - the nestjs API server runs on port 8081

To run just one of the servers on port 3000:
    

```bash
$ cd [nestjs, nextjs] # choose the one you want to run
# follow instructions in the appropriate project's README.md file.
```

**NOTE:** Running on web browsers with many plugins may throw hydration errors. these should be harmless. To prevent this, either disable plugins or run in an incognito window.

**Development Note:** Docker containers running on the same network (web in this case), can send http requests to each other using ‘http://service_name:internal-port’. For example 'http://nestjs:3000' will send to the nestjs server.
