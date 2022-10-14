<script lang="ts">
import { defineComponent } from 'vue';
import MouseMixin from '@/mixins/mousemixin'

export default defineComponent({
    name: 'MixinView',
    mixins: [MouseMixin],
})
</script>
<template>
    <h3>
        Mixin View
    </h3>
    <p>The mouse is at x: {{x}} and y: {{y}}</p>
</template>