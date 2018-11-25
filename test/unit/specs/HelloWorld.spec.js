import Vue from 'vue'
import auth from '@/components/auth'

describe('auth.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(auth)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.auth div.d').textContent)
      .to.equal('a')
  })
})
