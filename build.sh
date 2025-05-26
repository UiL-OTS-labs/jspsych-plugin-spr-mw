#!/bin/bash

# do a earl(e)y exit
set -e

# "Compile" grammar.js, from grammar.ne
npx nearleyc -o ./src/grammar.js ./src/grammar.ne -e spr_grammar

# package it using esbuild
node ./build.mjs
