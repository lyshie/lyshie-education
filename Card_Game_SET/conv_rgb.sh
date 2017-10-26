#!/bin/sh

for f in $(ls SVG_10/*.svg); do
    t=$(basename $f | cut -d'.' -f1)
    cp -f "$f" "SVG_10/R/${t}R.svg"
    sed -i 's/0000ff/ff0000/g' "SVG_10/R/${t}R.svg"
    sed -i 's/0000FF/FF0000/g' "SVG_10/R/${t}R.svg"
done

for f in $(ls SVG_10/*.svg); do
    t=$(basename $f | cut -d'.' -f1)
    cp -f "$f" "SVG_10/G/${t}G.svg"
    sed -i 's/0000ff/00ff00/g' "SVG_10/G/${t}G.svg"
    sed -i 's/0000FF/00FF00/g' "SVG_10/G/${t}G.svg"
done

for f in $(ls SVG_10/*.svg); do
    t=$(basename $f | cut -d'.' -f1)
    cp -f "$f" "SVG_10/B/${t}B.svg"
done
