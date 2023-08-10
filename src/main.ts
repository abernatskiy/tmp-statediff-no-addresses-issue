import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor} from './processor'

processor.run(new TypeormDatabase({supportHotBlocks: false}), async (ctx) => {
    for (let block of ctx.blocks) {
        for (let stdiff of block.stateDiffs) {
            console.log(stdiff)
        }
    }
})
