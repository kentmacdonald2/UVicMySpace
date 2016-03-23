#!/bin/bash
set -e # exit with nonzero exit code if anything fails

git config --global push.default simple # make git be quiet

LAST_COMMIT="$(git rev-parse --short HEAD)"

# clone the old gh pages
git clone "https://${GH_TOKEN}@${GH_REF}" UVicMySpace/
cd UVicMySpace/
git checkout gh-pages
rm -rf *
cd ../

# build the docs 
grunt build

cd UVicMySpace/

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "travis.ci.build@gmail.com"

# commit any new changes
git add --all .
git commit -m "Travis CI - Deployed ${LAST_COMMIT}"

# push to the repo
git push --quiet "https://${GH_TOKEN}@${GH_REF}"