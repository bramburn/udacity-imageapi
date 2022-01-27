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

`http://localhost:3000/api/image/?image=<image name>&width=<width>&height=<height>`

Replace:

| Code           | Description                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------|
| `<image name>` | One of the images:<br/> - encenadaport.jpg<br/> - fjord.jpg<br/>- icelandwaterfall.jpg<br/>- palmtunnel.jpg<br/>- santamonica.jpg |
| `<width>`      | integer greater than 0                                                                                                        |
| `<height`>     | integer greater than 0                                                                                                        |

http://localhost/api/image/?image=santamonica.jpg&width=100&height=50

Available image to test:

- encenadaport.jpg [100x100](http://localhost:3000/api/image/?image=encenadaport.jpg&width=100&height=100)
  | [200x100](http://localhost:3000/api/image/?image=encenadaport.jpg&width=200&height=100)
  | [500x500](http://localhost:3000/api/image/?image=encenadaport.jpg&width=500&height=500)
- fjord.jpg [100x100](http://localhost:3000/api/image/?image=fjord.jpg&width=100&height=100)
  | [200x100](http://localhost:3000/api/image/?image=fjord.jpg&width=200&height=100)
  | [500x500](http://localhost:3000/api/image/?image=fjord.jpg&width=500&height=500)
- icelandwaterfall.jpg [100x100](http://localhost:3000/api/image/?image=icelandwaterfall.jpg&width=100&height=100)
  | [200x100](http://localhost:3000/api/image/?image=icelandwaterfall.jpg&width=200&height=100)
  | [500x500](http://localhost:3000/api/image/?image=icelandwaterfall.jpg&width=500&height=500)
- palmtunnel.jpg [100x100](http://localhost:3000/api/image/?image=palmtunnel.jpg&width=100&height=100)
  | [200x100](http://localhost:3000/api/image/?image=palmtunnel.jpg&width=200&height=100)
  | [500x500](http://localhost:3000/api/image/?image=palmtunnel.jpg&width=500&height=500)
- santamonica.jpg [100x100](http://localhost:3000/api/image/?image=santamonica.jpg&width=100&height=100)
  | [200x100](http://localhost:3000/api/image/?image=santamonica.jpg&width=200&height=100)
  | [500x500](http://localhost:3000/api/image/?image=santamonica.jpg&width=500&height=500)



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
