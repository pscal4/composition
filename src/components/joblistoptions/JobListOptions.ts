import { defineComponent, type PropType } from 'vue'
import type Job from '@/models/Job'
import { JobSortOrder } from '@/models/JobSortOrder';

export default defineComponent({
    props: {
        jobs: {
            type: Array<Job>,
            required: true
        },
        jobSortOrder: {
            type: String as PropType<JobSortOrder>,
            default: JobSortOrder.Title,
        },
        allowReset: Boolean,
        someNumber: [Number, String] as PropType<Number | String>
    },

    data() {
        return {
            salarySelectedCount: 0,
            orderChangedCount: 0,
        };
    },

    computed: {
        orderedJobs(): Job[] {
            return [...this.jobs].sort((a: Job, b: Job) => {
                return a[this.jobSortOrder] > b[this.jobSortOrder] ? 1 : -1
            })

        }
    },

    watch: {
        jobSortOrder: {
            handler(newValue: JobSortOrder, oldValue: JobSortOrder) {
                if (newValue == 'salary') {
                    this.salarySelectedCount++;
                }
                this.orderChangedCount++;
            },
            immediate: true,
            // deep: true, 
        },
        allowReset: function (newValue: boolean, oldValue: boolean): void {
            //        ^ Simple syntax 
            console.log(`allowReset changed from ${oldValue} to ${newValue}`);
        },

    },
    methods: {
        onResetOrderClick(): void {
            this.$emit(`resetOrder`);
        }
    }

})
