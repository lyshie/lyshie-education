#!/bin/sh

for f in $(ls SVG_11); do
    inkscape -z "SVG_11/$f" -l "SVG_10/$f"
done
