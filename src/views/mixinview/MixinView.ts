import { defineComponent } from 'vue';
import JobListOptions from '@/components/joblistoptions/JobListOptions.vue'
import type OrderTerm from '@/models/OrderTerm';
import JobListMixin from '@/mixins/joblistmixin';

export default defineComponent({
    name: 'MixinView',
    mixins: [JobListMixin],
    components: {
        JobListOptions,
    },

    methods: {
        onHandleSortClick(term: OrderTerm) {
            this.order = term
        },        
    },
})