import { mount, createLocalVue } from '@vue/test-utils'
import mixins from '@/mixins'
import store from '@/store'

import TransactionAmount from '@/components/utils/TransactionAmount'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueI18n)
localVue.use(Vuex)
const i18n = new VueI18n({
  locale: 'fr-fr',
  fallbackLocale: 'fr-fr',
  messages: { 'fr-fr': {} },
  silentTranslationWarn: true
})

const incomingAddress = 'AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv'
const outgoingAddress = 'AN7BURQn5oqBRBADeWhmmUMJGQTy5Seey3'

describe('Utils/TransactionAmount', () => {
  beforeAll(() => {
    store.dispatch('network/setSymbol', 'O')
  })

  it('Should display an outgoing transaction in red', () => {
    const $route = {
      params: {
        address: incomingAddress
      }
    }
    const wrapper = mount(TransactionAmount, {
      propsData: {
        transaction: {
          sender: incomingAddress,
          recipient: outgoingAddress,
          amount: 100000000
        },
        type: 0
      },
      mocks: {
        $route
      },
      i18n,
      localVue,
      mixins,
      store
    })
    expect(wrapper.classes()).toContain('text-red')
    expect(wrapper.classes()).not.toContain('text-green')
    expect(wrapper.text()).toEqual(mixins.readableCrypto(100000000).trim())
  })

  it('Should display an incoming transaction in green', () => {
    const $route = {
      params: {
        address: incomingAddress
      }
    }
    const wrapper = mount(TransactionAmount, {
      propsData: {
        transaction: {
          sender: outgoingAddress,
          recipient: incomingAddress,
          amount: 100000000
        },
        type: 0
      },
      mocks: {
        $route
      },
      i18n,
      localVue,
      mixins,
      store
    })
    expect(wrapper.classes()).toContain('text-green')
    expect(wrapper.classes()).not.toContain('text-red')
    expect(wrapper.text()).toEqual(mixins.readableCrypto(100000000).trim())
  })

  it('Should display special transactions in red', () => {
    const $route = {
      params: {
        address: incomingAddress
      }
    }
    const wrapper = mount(TransactionAmount, {
      propsData: {
        transaction: {
          sender: incomingAddress,
          recipient: incomingAddress,
          amount: 100000000
        },
        type: 1
      },
      mocks: {
        $route
      },
      i18n,
      localVue,
      mixins,
      store
    })
    expect(wrapper.classes()).toContain('text-red')
    expect(wrapper.classes()).not.toContain('text-green')
    expect(wrapper.text()).toEqual(mixins.readableCrypto(100000000).trim())
  })
})
