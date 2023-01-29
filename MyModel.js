// Get two modules from the agentscript bundle on unpkg
import { utils, Model } from 'https://unpkg.com/agentscript/dist/agentscript.js'

class MyModel extends Model {
    population = 10 // number of turtles
    speed = 0.1 // step size in patch units
    wiggleAngle = 10 // util.degToRad(10)
    noLinks = false

    // ======================

    // Use default world options and Model constructor.
    constructor() {
        super()
    }

    setup() {
        this.turtles.setDefault('atEdge', 'bounce')

        this.turtles.create(this.population, t => {
            const patch = this.patches.oneOf()
            t.setxy(patch.x, patch.y)
        })

        if (this.population < 2 || this.noLinks) return
        this.turtles.ask(t => {
            this.links.create(t, this.turtles.otherOneOf(t))
        })
    }

    step() {
        this.turtles.ask(t => {
            t.heading += utils.randomCentered(this.wiggleAngle)
            t.forward(this.speed)
        })
    }
}

export default MyModel

// import {
//     Model,
//     utils,
// } from 'https://unpkg.com/agentscript@0.10.19/dist/agentscript.js'

// // import Model from 'https://unpkg.com/agentscript/src/Model.js'
// import Model from 'https://unpkg.com/agentscript@0.10.19/src/Model.js'
// // import { randomCentered } from 'https://unpkg.com/agentscript@0.10.19/src/utils.js'
// // import * as utils from 'https://unpkg.com/agentscript@0.10.19/src/utils.js'
// import * as utils from 'https://unpkg.com/agentscript/src/utils.js'

// import * as util from 'https://unpkg.com/agentscript/src/utils.js'
// import Model from 'https://unpkg.com/agentscript/src/Model.js'
// import * as as from './agentscript.js'
// let { Model, utils } = as
// import { Model, utils } from './agentscript.js'

// import Model from 'https://code.agentscript.org/src/Model.js'
// import { util, Model } from 'https://unpkg.com/agentscript/src/AS.js'
// import { util, Model } from 'https://unpkg.com/agentscript/dist/agentscript.js'
// import { util, Model } from 'https://code.agentscript.org/dist/agentscript.js'
// import * as AS from 'https://unpkg.com/agentscript/dist/agentscript.js'
