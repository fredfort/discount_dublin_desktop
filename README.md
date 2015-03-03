# kerp-forms-poc-webclient

Proof-of-concept client code for KERP forms


## Requirements

- NPM (Comes with [Node.js](http://nodejs.org/))
- Ruby (comes pre-installed on Mac) - [installation guide](https://www.ruby-lang.org/en/installation/)
- SASS - [installation](http://sass-lang.com/install)


## Build & development

Open up terminal and:

1. Clone this repo `https://github.com/lookinglocal/kerp-forms-poc-webclient.git`
2. Enter new directory `cd kerp-forms-poc-webclient`
3. Make sure you have `Grunt` installed `npm install -g grunt grunt-cli`
4. Make sure you have `Bower` installed `npm install -g bower`
5. Install project dependencies `npm install && bower install`
6. Run server `grunt serve`, will open up browser window at `http://localhost:9000/apps/index.html`

## Testing

Running `grunt test` will run the unit tests with karma.
