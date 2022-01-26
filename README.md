# Udacity's Assignment 1 - Image API

This is the assignment for UDACITY's Full stack javascript developer.

This api server provides the ability to

1) Serve placeholders to developers
2) Resize existing images

# Requirements

You will need the following installed on your machine.

1. Windows - This has only been tested on Windows so some NPM scripts may not work on other OS
2. Node v14.18.2
3. NPM 6.14.15
4. Terminal access
5. Git

_It is out of this scope to show how to install the above software and gain access to the terminal._

# Install

1. Download or clone this git by running the following in an empty folder

```shell
git clone https://github.com/bramburn/udacity-imageapi.git
```

2. Once downloaded you will need to use `npm` to install the required packages.

```shell
npm install
```

_Please note we have not tested this on yarn, so this is not supported yet._

# Usage

Once you've installed the package you can run a local deploy by following the steps below.

1) Build the app and serve the pages by running `npm run serve`
2) Access the local page [http://localhost:3000](http://localhost:3000)
3) Test the resize API using the following format:

`http://localhost:3000/api/images/<image name>/<width>/<height>/`

Replace:

| Code           | Description                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------|
| `<image name>` | One of the images:<br/> - encenadaport.jpg<br/> - fjord.jpg<br/>- icelandwaterfall.jpg<br/>- palmtunnel.jpg<br/>- santamonica.jpg |
| `<width>`      | integer greater than 0                                                                                                        |
| `<height`>     | integer greater than 0                                                                                                        |

http://localhost/api/images/santamonica.jpg/100/50/

Available image to test:

- encenadaport.jpg [100x100](http://localhost:3000/api/images/encenadaport.jpg/100/100/)
  | [200x100](http://localhost:3000/api/images/encenadaport.jpg/200/100/)
  | [500x500](http://localhost:3000/api/images/encenadaport.jpg/500/500/)
- fjord.jpg [100x100](http://localhost:3000/api/images/fjord.jpg/100/100/)
  | [200x100](http://localhost:3000/api/images/fjord.jpg/200/100/)
  | [500x500](http://localhost:3000/api/images/fjord.jpg/500/500/)
- icelandwaterfall.jpg [100x100](http://localhost:3000/api/images/icelandwaterfall.jpg/100/100/)
  | [200x100](http://localhost:3000/api/images/icelandwaterfall.jpg/200/100/)
  | [500x500](http://localhost:3000/api/images/icelandwaterfall.jpg/500/500/)
- palmtunnel.jpg [100x100](http://localhost:3000/api/images/palmtunnel.jpg/100/100/)
  | [200x100](http://localhost:3000/api/images/palmtunnel.jpg/200/100/)
  | [500x500](http://localhost:3000/api/images/palmtunnel.jpg/500/500/)
- santamonica.jpg [100x100](http://localhost:3000/api/images/santamonica.jpg/100/100/)
  | [200x100](http://localhost:3000/api/images/santamonica.jpg/200/100/)
  | [500x500](http://localhost:3000/api/images/santamonica.jpg/500/500/)


4) You can also use a place holder using the following api endpoint. This will generate a red image with the desired
   width and height. This is generated using Sharp and is not cached. It is recommended not to use on public sites.

`http://localhost:3000/api/placeholder?w=<width>&h=<height>`

| Code       | Description |
|------------|-------------|
| `<width>`  |  integer greater than 0    |
| `<height>` |  integer greater than 0    |
|            |             |

# Commands

Test the package endpoints, this will run jasmine

```shell
npm run test
```

Lint test the code to identify errors against the project's eslint config.

```shell
npm run lint
```

Build command to generate a `dist/` for deployment.

```shell
npm run build
```

Running a local dev using nodemon to test on your machine. Access the site
using [http://localhost:3000](http://localhost:3000)

```shell
npm run dev
```
