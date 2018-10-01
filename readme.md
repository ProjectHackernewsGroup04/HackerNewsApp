# Environment Setup

## Vagrant

1. Clone project

``` git clone https://github.com/ProjectHackernewsGroup04/Ops ```

2. Go to /vm directory

``` cd vm ```

3. Start up vagrant

``` vagrant up ```

4. SSH into this machine

``` vagrant ssh ```

5. _Have FUN!_

## Run docker 

1. Inside Vagrant vm


```vagrant@vagrant:$ cd /app/ ```

```vagrant@vagrant:/app$ docker-compose up --build```

The `docker-compose.yaml` file collects all `dockerfile` from other reposetories and runs them; sets ports and containers:
1 for backend (backend-app), 1 for frontend (frontend-app), 1 for mongodb (db).

## Test if all containers runs

2. Open new terminal and `vagrant ssh`
3. Test backend `curl http://0.0.0.0:5000`
4. Test backend and mongodb ex: `curl http://0.0.0.0:5000/api/item/all`
5. Test frontend `curl http://0.0.0.0:3000`

Go to http://localhost:9000/ to watch frontend in action

_Enjoy the HackerNews!_


# CI/CD chain
For CI/CD we're using [CircleCI](https://circleci.com/). 
CircleCI allows us to version control the deployment process, as it uses simple yaml files to configure the workflow.
Our workflow looks something like the following:
Code changes pushed to github -> CircleCI builds and tests -> Builds image and pushes to DockerHub -> Deploys on DO with newly build image from DockerHub
