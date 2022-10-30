import { defineComponent } from 'vue';
import type Job from '@/models/Job';
import { JobSortOrder } from '@/models/JobSortOrder';

export default defineComponent({
    name: 'JobListMixin',
    data() {
        return {
            jobs: [] as Job[],
            jobSortOrder: JobSortOrder.Title,
            allowReset: true,
        };
    },

    mounted() : void {
        this.getJobs();
    },

    methods: {
        getJobs() : void {
            // Pretend this is an API call
            this.jobs = [
                { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
                { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
                { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
                { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
                { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
            ];
        },
      
        onResetOrder() {
            this.jobSortOrder = JobSortOrder.Title;
        }
    },
})