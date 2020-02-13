let tiny = require('tiny-json-http')
let tap = require('tap')
let data = require('@begin/data')
let sandbox = require('@architect/sandbox')

let end
tap.test('sandbox.start', async t => {
  end = await sandbox.start()
  t.pass()
})

tap.test('get /', async t => {
  let url = 'http://localhost:3333'
  await tiny.get({ url })
  t.pass()
})

tap.test('data.set', async t => {
  let result = await data.set({table: 'tmp'})
  t.ok(result.table === 'tmp')
  console.log(result)
})

tap.test('data.get', async t => {
  let result = await data.get({table: 'tmp'})
  t.ok(result.length == 1)
  console.log(result)
})

tap.test('end', async t => {
  await end()
  t.pass()
})
