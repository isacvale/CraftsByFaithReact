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
    description: "<p>This Huggable Elephants is soft and adorable for all age groups to love!</p><p>This is a perfect gift for Birthdays, Anniversary, Christmas, or any other occasions.</p>",
    typeCode: 'AN',
    typeDescription: "<p>Crafts by Faith Animals are handmade and all hand sewed together for security and safety.</p>",
    cautionMessage: "<p>Arms and Legs are sewed with Buttons for more movement of Animal. Eyes are Crafters Safety Eyes for Crochet Animals. Upon request only, can do no buttons and crochet eyes for a young child.</p>",
    patternMessage: "<p>This Elephant is handmade by Craft by Faith Crochet maker with designer alterations, and inspired by a Jess Huff pattern.</p>",
    variations: [
        {
            name: 'Grey',
            code: '01',
            stock: 3,
        },
        {
            name: 'Blue',
            code: '02',
            stock: 2,
        },
        {
            name: 'Pink',
            code: '03',
            stock: 1,
        },
        {
            name: 'Purple',
            code: '04',
            stock: 2,
        }
    ],
    allowCustom: true,
    selectedVariation: '01',
    customMessage: '',
    customInitials: '',
    setValue: function (prop, value) {
        this[prop] = value
    }
}, {
    setValue: action.bound
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