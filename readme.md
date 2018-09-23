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

```vagrant@vagrant:$ cd / ```

```vagrant@vagrant:$ cd app/ ```

```vagrant@vagrant:/app$ docker-compose up --build```

5. run new terminal and `vagrant ssh`
6. testing backend with the new terminal `curl http://0.0.0.0:5000`
7. test backend and mongodb with the new terminal `curl http://0.0.0.0:5000/api/v1/item/all`
8. test frontend with the new terminal `curl http://0.0.0.0:3000` #

Go to http://localhost:9000/ to watch frontend in action

_Enjoy the HackerNews!_
