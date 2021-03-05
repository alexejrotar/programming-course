#!/bin/bash

ejs views/overview.ejs -f units/overview.json -o units/overview.html

for unit in ls -d units/*/
do
  if [ -e $unit/unit.json ]
  then
    ejs views/unit.ejs -f $unit/unit.json basepath=$unit -o $unit/unit.html &&
      echo "compiled $unit"
  fi
done
