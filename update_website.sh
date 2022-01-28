#!/bin/bash
if [[ $# -eq 0 ]] || [[ $# -gt 1 ]] ; then
    echo 'ERROR: Must supply the commit message as a single parameter.'
    exit 1
fi

./remove_location_data_from_images.sh

curl "http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json" -o data/steamgames.json

git add .
git commit -m "$1"
git push

PROJECT_OUTPUT_DIRECTORY=~/projects/keikakub.github.io 


bundle exec middleman build

rsync -av --exclude '.git' --exclude 'CNAME' ./build/. ${PROJECT_OUTPUT_DIRECTORY} --delete

cd ${PROJECT_OUTPUT_DIRECTORY}
git add .
git commit -m "$1"
git push
