#!/bin/bash

if [ "$#" -eq 0 ]
then
	echo "No argument supplied"
	exit 1
fi
while [ "$#" -gt 0 ]
do
	mkdir -p "ex$1"
	shift
done
