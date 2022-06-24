if [ ! -d "./dist" ]; then
  mkdir dist
fi
cp ./package.json ./dist/package.json
cd ./dist 
npm link