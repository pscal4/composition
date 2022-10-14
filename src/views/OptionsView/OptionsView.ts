import { defineComponent } from 'vue';
import OptionsComponent from '@/components/optionsComponent/optionscomponent.vue'

export default defineComponent({
    name: 'OptionsView',
    components: {
        OptionsComponent,
    },
    data() {
        return {
        };
    },

    computed: {
    },

    watch: {
        someName: function (newValue: any, oldValue: any): void {
        },
        someObject: {
            handler(newValue, oldValue) {
                //do something
            },
            deep: true,
            immediate: true,
        },

    },

    methods: {
    },
})