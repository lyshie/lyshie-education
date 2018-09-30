#!/usr/bin/env sh

for c in $(head -n 300 bigram_prefix | grep -oP '\p{Han}'); do
	p=$(grep -oP "${c}\p{Han}" BIAU2.UTF8 | head -n 8 | xargs)
	echo "${p}"
done
