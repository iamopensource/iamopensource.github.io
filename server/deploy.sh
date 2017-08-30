#!/bin/bash

if [ -z "$GITHUB_TOKEN" ]
then
  echo "Need to set GITHUB_TOKEN enviornment variable before deployment."
  echo "Please run GITHUB_TOKEN=XXXXXXXXXXXXXXXXXX ./deploy.sh"
  exit 1
fi

echo "Beginning now deployment..."
NOW_URL=$(now -e GITHUB_TOKEN=$GITHUB_TOKEN deploy --public)
echo "Deployment processing at --> $NOW_URL"

echo "Beginning smoke test..."
ATTEMPTS=0
MAX_ATTEMPTS=10
while [ $ATTEMPTS -lt $MAX_ATTEMPTS] 
do
  echo "Pausing for 2 seconds..."
  sleep 2
  RESPONSE_STATUS_CODE=$(curl --write-out %{http_code} --silent --output /dev/null $NOW_URL/api/contriubtions)
  if [ $RESPONSE_STATUS_CODE == "200" ] then
    echo "Smoke test passed!, updating pages site to point to new deployment..."
    cd ..
    PREPARED_NOW_URL=$(echo "$NOW_URL" |  sed -E 's/\//\\\//g' | sed -E 's/\./\\./g')
    sed -i '' -E 's/https:\/\/iamopensource-[a-z]+\.now\.sh/$PREPARED_NOW_URL/g' index.html
    git commit -m "Updates the backend url $NOW_URL"
    echo "Commit added run git push origin master to update the front end"
  else
    echo "Smoke test failed with error code $RESPONSE_STATUS_CODE, retrying..."
  fi
  ATTEMPTS=$[$ATTEMPTS+1]
done
echo "Max attempts reached, smoke test failed. Deployment failed."
exit 1
