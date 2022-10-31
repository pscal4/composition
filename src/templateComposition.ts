import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ComponentNameHere',
    components: {
    },
    props: {
        isExample: {
            type: Boolean,
            default: false,
        },
    },
    emits: [],
    setup(props) {
    },
})