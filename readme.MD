## Description
Minimal reproduction for issue: https://github.com/remy/nodemon/issues/813

## dependencies
* docker

## To reproduce:
* build docker image with `./build-containers.sh`
* run environment with `./start.sh`. You should be seeing some logs now
* In a second terminal run `./attach.sh`, this will drop you to the container command line.  
  You can edit a file by running `vim src/index.ts`.
* after editing and saving a file, you'll see a similar log in your first terminal

```
Been Running for 122 seconds
[nodemon] files triggering change check: src/index.ts
[nodemon] matched rule: **/*.*
[nodemon] changes after filters (before/after): 1/1
[nodemon] delaying restart for 2500ms
Been Running for 123 seconds
Been Running for 124 seconds
Been Running for 125 seconds
[nodemon] restarting due to changes...
[nodemon] src/index.ts

Been Running for 126 seconds
Been Running for 127 seconds
Been Running for 128 seconds
```