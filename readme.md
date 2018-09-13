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

### _Now inside vagrant..._

To start up webservice

```vagrant@vagrant:~$ cd /frontend/```

If its the first VM instance, npm needs to be installed.

```vagrant@vagrant:/frontend$ npm install```

```vagrant@vagrant:/frontend$ node index.js```

Go to http://localhost:9000/

_Enjoy the HackerNews!_
