import {
    action,
    observable
} from 'mobx'
import {
    addGlobal
} from 'Utils'

const mainStore = observable({
    page: '',
    categories: [
        {
            name: 'animals',
            label: 'Animals',
            to: '/list/animals',
            thumbnail: 'stock_plush.png',
        },
        {
            name: 'snuggies',
            label: 'Snuggies',
            to: '/list/snuggies',
            thumbnail: 'stock_dedo.png',
        },
    ],
    setValue: function (prop, value) {
        this[prop] = value
    },
}, {
    setValue: action.bound
})

const cartStore = observable({
    items: [
        {
            code: '01',
            price: 35,
            typeCode: 'AN',
            variationCode: 'custom',
            image: 'Blue Elephant.jpg',
            customMessage: 'This is custom message 1.',
            customInitials: 'SD',
        },
        {
            code: '01',
            price: 35,
            typeCode: 'AN',
            variationCode: '02',
            image: 'Blue Elephant.jpg',
            customMessage: '',
            customInitials: 'VD',
        },
        {
            code: '01',
            price: 35,
            typeCode: 'AN',
            variationCode: '03',
            image: 'Blue Elephant.jpg',
            customMessage: 'This is custom message 2.',
            customInitials: '',
        },
    ],
})

const productStore = observable({
    template: {
        index: null,
        name: '',
        price: 0,
        code: '00',
        description: '',
        typeCode: '',
        typeDescription: '',
        cautionMessage: null,
        patternMessage: null,
        variations: [],
        allowCustom: false,
        variationCode: null,
        customMessage: '',
        customInitials: ''
    },
    index: 0,
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
    variationCode: 'custom',
    customMessage: 'This is custom message 1.',
    customInitials: 'SD',
    setValue: function (prop, value) {
        this[prop] = value
    },
    // TODO load from REST
    loadProduct: function (index) {
        const {
            code,
            price,
            typeCode,
            variationCode,
            image,
            customMessage,
            customInitials,
        } = cartStore.items[index]

        this.index = index
        this.code = code
        this.price = price
        this.typeCode = typeCode
        this.variationCode = variationCode
        this.image = image
        this.customMessage = customMessage
        this.customInitials = customInitials
    },
    // Check if any change was made to the current product, in relation
    // to its instance on Cart Store.
    get isChanged () {
        const itemIncart = cartStore.items[this.index]
        const change = ['variationCode', 'customMessage', 'customInitials']
            .find(prop => (this[prop] !== itemIncart[prop]))
        return !!change
    },
    clearProductStore: function (data) {
        Object.entries(this.template).forEach(entry => this.setValue(entry[0], entry[1]))
    }
}, {
    setValue: action.bound,
    loadProduct: action.bound,
    clearProductStore: action.bound
})

const uiStore = observable({
    height: 0,
    width: 0,
    screen: 'mobile',
    layout: 'landscape',
    isMenuButtonOpen: false,
    isPageTop: false,
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
                : 'desktop'
        )
        this.setValue('layout', this.width
            ? this.layout = 'portrait'
            : this.layout = 'landscape')
    },
    updateScroll: function () {
        if (this.isPageTop)
            this.isPageTop = window.scrollY <= 100
        else
            this.isPageTop = window.scrollY === 0
    }
}, {
    setValue: action.bound,
    updateScreen: action.bound,
    updateScroll: action.bound
})

const display = [
    {
        alias: '01AA99',
        name: 'Huggable Elephant',
        price: 37,
        discount: 29,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '02BB99',
        name: 'Unhuggable Hippo',
        price: 49,
        discount: 48,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '01AA99s',
        name: 'Huggable Elephant',
        price: 37,
        discount: 29,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '02BB99s',
        name: 'Unhuggable Hippo',
        price: 49,
        discount: 48,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '01AA99x',
        name: 'Huggable Elephant',
        price: 37,
        discount: 29,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '02BB99x',
        name: 'Unhuggable Hippo',
        price: 49,
        discount: 48,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '01AA99d',
        name: 'Huggable Elephant',
        price: 37,
        discount: 29,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '02BB99d',
        name: 'Unhuggable Hippo',
        price: 49,
        discount: 48,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '01AA99t',
        name: 'Huggable Elephant',
        price: 37,
        discount: 29,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '02BB99t',
        name: 'Unhuggable Hippo',
        price: 49,
        discount: 48,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '01AA99p',
        name: 'Huggable Elephant',
        price: 37,
        discount: 29,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
    {
        alias: '02BB99tp',
        name: 'Unhuggable Hippo',
        price: 49,
        discount: 48,
        image: 'https://picsum.photos/600/600',
        link: 'www.ocastudios.com'
    },
]

uiStore.updateScreen()
uiStore.updateScroll()
window.addEventListener('resize', uiStore.updateScreen)
// window.addEventListener('scroll', setDebounce(300, uiStore.updateScroll))
window.addEventListener('scroll', uiStore.updateScroll)

addGlobal({
    cartStore,
    display,
    mainStore,
    productStore,
    uiStore,
})

export {
    cartStore,
    display,
    mainStore,
    productStore,
    uiStore,
}