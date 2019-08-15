#!/bin/bash
set -e

fgrep -R '/lib' ./es/ && { echo the es module build should not import cjs; exit 1; } || true
fgrep -R '/es' ./lib/ && { echo the cjs build should not import es; exit 1; } || true
