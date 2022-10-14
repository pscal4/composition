import { defineComponent } from 'vue';
import JobListOptions from '@/components/joblistoptions/JobListOptions.vue'
import type Job from '@/models/Job';
import type OrderTerm from '@/models/OrderTerm';

export default defineComponent({
    name: 'OptionsView',
    components: {
        JobListOptions,
    },
    data() {
        return {
            jobs: [
                { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
                { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
                { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
                { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
                { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
            ] as Job[],
            order: 'title' as OrderTerm,

        };
    },
    methods: {
        onHandleSortClick(term: OrderTerm) {
            this.order = term
        },
        onResetOrder() {
            this.order = 'title';
        }
    },
})