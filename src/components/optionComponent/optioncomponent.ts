import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Options',
    components: {
    },
    mixins: [],
    props: {
        isExample: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
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