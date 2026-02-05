#!/bin/bash

if [ "$#" -eq 0 ]
then
	echo "No argument supplied"
fi
while [ "$#" -gt 0 ]
do
	echo "$1"
	shift
done

