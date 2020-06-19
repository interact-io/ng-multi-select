#!/bin/sh -e

yarn && yarn test:ng-multi-select-lib && yarn build:ng-multi-select-lib --prod
