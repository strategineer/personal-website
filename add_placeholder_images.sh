#!/bin/bash
base_path="source/images/projects"
ids="2019-02-03-Framestore-VR 2018-06-05-Machine-Head 2013-02-01-Writerator"
cwd=$(pwd)
for i in $ids; do
    cd "${cwd}/${base_path}/${i}"
    # Get name
    name=${i#*-*-*-}
    # Convert dashes to spaces in name.
    name=$(echo ${name} | sed 's/-/ /g')
    echo "Generating ${name}... in $(pwd)"
    convert -background black -fill white -size 318x180 -gravity center -font Noto-Mono label:" ${name} " thumbnail.png
done
cd ${cwd}
