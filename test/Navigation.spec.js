import { mount } from '@vue/test-utils'
import Navigation from '@/components/Navigation.vue'
import { RouterLinkStub } from '@vue/test-utils'
describe('AppTitle', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Navigation, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      mocks: {
        $route: {
          fullPath: '/blog',
        },
      },
      propsData: {
        links: [
          {
            url: '/',
            text: 'Homepage',
          },
          {
            url: '/blog',
            text: 'Blog',
          },
        ],
      },
    })
  })
  test('renders it as a list', () => {
    expect(wrapper.find('ul')).toBeTruthy()
  })
  test('renders both list items', () => {
    expect(wrapper.findAll('li').length).toBe(2)
  })

  test('the active url has the active class', () => {
    expect(wrapper.get('li.active'))
    expect(wrapper.find('li.active').text()).toBe('Blog')
  })
  test('the first element is in the list', () => {
    const elem = wrapper.findAll('li').at(0)
    expect(elem.text()).toBe('Homepage')
  })
  test('the last element is in the list', () => {
    expect(wrapper.findAll('li').at(1).text()).toBe('Blog')
  })
})
