import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import UploadData from '@/components/UploadData.vue'

describe('UploadData.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(UploadData, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
