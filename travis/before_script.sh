#!/bin/bash

set -e

yarn build
yarn test:imports
yarn test:ssr
