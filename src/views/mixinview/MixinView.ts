import { defineComponent } from 'vue';
import JobListOptions from '@/components/joblistoptions/JobListOptions.vue'
import JobListMixin from '@/mixins/joblistmixin';
import { JobSortOrder } from '@/models/JobSortOrder';

export default defineComponent({
    name: 'MixinView',
    mixins: [JobListMixin],
    components: {
        JobListOptions,
    },

    created() {
        this.jobSortOrder = JobSortOrder.Location;
    },

    methods: {
        onHandleSortClick(sortOrder: JobSortOrder) {
            this.jobSortOrder = sortOrder;
        },        

        onResetOrder() {
            this.jobSortOrder = JobSortOrder.Location;
        }
    },
})