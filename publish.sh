#!/bin/sh -e

yarn && yarn test:ng-multi-select-lib && yarn build:ng-multi-select-lib --prod && cd dist/libs/ng-multi-select-lib/ && npm version patch --force && npm publish --access public
