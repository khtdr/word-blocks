#!/bin/bash

blocks='wftbi vnlog hyedo cravs modeu skima tripes'

node ./blocks.js $blocks > words-all.txt
grep '^.\{4\}$' words-all.txt > words-4.txt
grep '^.\{5\}$' words-all.txt > words-5.txt
grep '^.\{6\}$' words-all.txt > words-6.txt
grep '^.\{7\}$' words-all.txt > words-7.txt
