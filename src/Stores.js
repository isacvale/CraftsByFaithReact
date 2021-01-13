import {
    action,
    observable
} from 'mobx'

const mainStore = observable({
    ahoy: 'mateys',
    hereGoMethods: () => {},
}, {
    hereGoMethods: action
})

export { mainStore }