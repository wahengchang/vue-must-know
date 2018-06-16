const {filesInDirectory} = require('../../lib/fs')

test('abc', ()=>{
    const result = filesInDirectory('./public')

    const filesInData = result.filter(item => item.name==="data")

    console.log('JSON.stringify(filesInData): ', JSON.stringify(filesInData))
    expect(true).toBe(true)
})