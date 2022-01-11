import { readFileSync, writeFileSync } from 'fs'

const interfaces = 'Device Supplier Organisation DappFather Common'.split(' ')

const buildSection = (name: string) => `
## ${name} interface
\`\`\`typescript
${readFileSync(`./src/${name}.ts`, 'utf-8')}
\`\`\`
`

const readme = `# SmartKey TS Types\n${interfaces.map(buildSection).join('\n')}`

writeFileSync('README.md', readme)
