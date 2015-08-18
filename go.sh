#!/bin/bash

blocks='wftbi vnlog hyedo cravs modeu skima tripes'
mkdir -p tmp

babel-node ./blocks.js $blocks > tmp/all.words
grep '^.\{4\}$' tmp/all.words > words-4.txt
grep '^.\{5\}$' tmp/all.words > words-5.txt
grep '^.\{6\}$' tmp/all.words > words-6.txt
grep '^.\{7\}$' tmp/all.words > words-7.txt

rm -rf tmp
