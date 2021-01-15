import {
    action,
    observable
} from 'mobx'

const mainStore = observable({
    page: '',
    hereGoMethods: () => {},
}, {
    hereGoMethods: action
})

const uiStore = observable({
    height: 0,
    width: 0,
    screen: 'mobile',
    layout: 'landscape',
    isMenuButtonOpen: false,
    setValue: function (prop, value) {
        this[prop] = value
    },
    updateScreen: function () {
        this.setValue('width', window.innerWidth)
        this.setValue('height', window.innerHeight)
        this.setValue('screen', uiStore.width <= 480
            ? 'mobile'
            : this.width <= 1100
                ? 'tablet'
                : 'desktop')
        this.setValue('layout', this.width
            ? this.layout = 'portrait'
            : this.layout = 'landscape')
    },
}, {
    setValue: action.bound,
    updateScreen: action.bound
})

uiStore.updateScreen()
window.addEventListener('resize', uiStore.updateScreen)

export {
    mainStore,
    uiStore
}