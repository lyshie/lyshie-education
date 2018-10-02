#!/usr/bin/env sh

echo 'var quiz_prefix = ['
for c in $(head -n 300 bigram_prefix | grep -oP '\p{Han}'); do
	p=$(grep -oP "${c}\p{Han}" bigrams | head -n 8 | xargs)
	echo "    '${p}',"
done
echo "    ''"
echo '];'
