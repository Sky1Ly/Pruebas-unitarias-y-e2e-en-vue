import { shallowMount } from '@vue/test-utils'

import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
    test('Validación de match con el snapshot', () => {
        //Selección del componente de prueba
        const wrapper = shallowMount(AboutView)


        //Asersion
        expect(wrapper.html()).toMatchSnapshot()
    })
})