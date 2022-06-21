if [ ! -d "./dist" ]; then
  mkdir dist
fi
cp ./peniko.pkg.json ./dist/package.json
cd ./dist 
npm link