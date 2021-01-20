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

const productStore = observable({
    name: 'Hugabble Elephant',
    price: 35,
    code: '01',
    description: ["This Huggable Elephants is soft and adorable for all age groups to love!",
"This is a perfect gift for Birthdays, Anniversary, Christmas, or any other occasions."],
    typeCode: 'AN',
    typeDescription: ["Crafts by Faith Animals are handmade and all hand sewed together for security and safety."],
    cautionMessage: ["Arms and Legs are sewed with Buttons for more movement of Animal. Eyes are Crafters Safety Eyes for Crochet Animals. Upon request only, can do no buttons and crochet eyes for a young child."],
    patternMessage: ["This Elephant is handmade by Craft by Faith Crochet maker with designer alterations, and inspired by a Jess Huff pattern."],
    variantions: [
        {
            name: 'Grey',
            code: '01',
        },
        {
            name: 'Blue',
            code: '02',
        },
        {
            name: 'Pink',
            code: '03',
        },
        {
            name: 'Purple',
            code: '04',
        },
        {
            name: 'Custom',
            code: '05',
        },
    ]
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
        this.setValue('screen', uiStore.width <= 640
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
    productStore,
    uiStore
}