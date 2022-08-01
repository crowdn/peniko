if [ ! -d "./dist" ]; then
  mkdir dist
fi
npm version patch 
cp ./peniko.pkg.json ./dist/package.json
cp ./README.md ./dist/README.md

npm run build

# publish to npm
