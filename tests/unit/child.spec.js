import { mount } from '@vue/test-utils'
import Test from '@/platform/membertest/test.vue'
import { shallowMount } from '@vue/test-utils'

describe('test.vue', () => {
  it('renders a slot', () => {
    const wrapper = shallowMount(Test)
    expect(wrapper.html().includes("Vue and TDD")).toBe(true)
  })
})
