import { mount } from '@vue/test-utils'
import AppTitle from '@/components/AppTitle.vue'

describe('AppTitle', () => {
  test('renders the title', () => {
    const wrapper = mount(AppTitle, {
      slots: {
        default: ['The Title'],
      },
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.text()).toBe('The Title')
    const hasClass = wrapper.find('h1.title')
    expect(hasClass.exists()).toBe(true)
  })
})
