dir=./README.md

echo '# SmartKey TS Types' > $dir
echo >> $dir
echo '## Device interface' >> $dir
echo '```typescript' >> $dir
echo >> $dir
cat ./src/index.ts >> $dir
echo '```' >> $dir
