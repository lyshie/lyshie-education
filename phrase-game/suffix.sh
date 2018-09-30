#!/usr/bin/env sh

for c in $(head -n 300 bigram_suffix | grep -oP '\p{Han}'); do
	p=$(grep -oP "\p{Han}${c}" BIAU2.UTF8 | head -n 8 | xargs)
	echo "${p}"
done
