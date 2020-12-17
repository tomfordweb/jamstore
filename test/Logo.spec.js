import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo, {
      mocks: {
        $config: {
          appTitle: 'Test Suite',
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.text()).toBe('Test Suite')
  })
})
