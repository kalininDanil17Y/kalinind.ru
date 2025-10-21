#!/usr/bin/env node
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const serverEntry = path.resolve(__dirname, '../node_modules/@tailwindcss/language-server/bin/tailwindcss-language-server')

const child = spawn(process.execPath, [serverEntry, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: process.env,
})

child.on('error', (error) => {
  console.error('[tailwindcss-language-server wrapper] Failed to launch language server:', error)
  process.exit(1)
})

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }
  process.exit(code ?? 0)
})

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    child.kill(signal)
  })
}
