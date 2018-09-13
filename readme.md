# Enviorement Setup

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

1. cd ..
2. cd ..
3. cd app/
4. `docker-compose up --build`
5. run new terminal and `vagrant ssh`
6. test with new terminal `curl http://0.0.0.0:5000`
7. test with new terminal `curl http://0.0.0.0:5000/api/v1/item/all`


### _Now inside vagrant..._

To start up webservice

```vagrant@vagrant:~$ cd /frontend/```

If its the first VM instance, npm needs to be installed.

```vagrant@vagrant:/frontend$ npm install```

```vagrant@vagrant:/frontend$ node index.js```

Go to http://localhost:9000/

_Enjoy the HackerNews!_
