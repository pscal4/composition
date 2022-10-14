import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MouseMixin',
    data() {
        return {
            x: 0,
            y: 0,
        };
    },

    mounted() {
        window.addEventListener('mousemove', this.update);
    },

    unmounted() {
        window.removeEventListener('mousemove', this.update);
    },

    methods: {
        update(event: MouseEvent): void {
            this.x = event.pageX;
            this.y = event.pageY;
        }
    },
})