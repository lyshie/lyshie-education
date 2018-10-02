#!/usr/bin/env sh

echo 'var quiz_suffix = ['
for c in $(head -n 300 bigram_suffix | grep -oP '\p{Han}'); do
	p=$(grep -oP "\p{Han}${c}" bigrams | head -n 8 | xargs)
	echo "    '${p}',"
done
echo "    ''"
echo '];'
