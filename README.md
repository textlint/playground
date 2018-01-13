# playground [![Build Status](https://travis-ci.org/textlint/playground.svg?branch=master)](https://travis-ci.org/textlint/playground)

textlint online playground.

Visit [https://textlint.github.io/playground](https://textlint.github.io/playground)

## Limitation

Currently, only use built-in rule in the playground.

## Embed mode

    <iframe width="800" height="500" src="https://textlint.github.io/playground?embed" />

## Installation

    yarn

## Usage

    yarn start

## Testing

This project use [Cypress](https://www.cypress.io/ "Cypress") for E2E Testing.


    # start local server
    yarn start
    # In other tab, start cypress
    yarn run cypress:open
    
Or

    # start local server
    yarn start
    # In other tab, start cypress
    yarn test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
