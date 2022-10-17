<script lang="ts">
import { useMouse } from '@/composables/useMouse';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const { x, y } = useMouse();

        return {
            x,
            y
        };
    },
})

</script>
<template>
    <h3>
        Composable View
    </h3>
    <p>The mouse is at x: {{x}} and y: {{y}}</p>
</template>