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
        showHeading: Boolean,
        someNumber: [Number, String] as PropType<Number | String>
    },
    // Notice type is a constructor so Boolean (with upper case) versus boolean
    // Need PropType when property can be multiple types

    // Class Decorator syntax for props
    // @Prop({ required: true })
    // private jobs: Job[];
    // @Prop({ default: 'title' })
    // private jobSortOrder: JobSortOrder;
    // @Prop({ default: false })
    // private showHeading: boolean;
    // @Prop()
    // private someNumber: number | string;


    data() {
        return {
            salarySelectedCount: 0,
            orderChangedCount: 0,
        };
    },
    // Class syntax
    // private salarySelectedCount: number = 0;
    // private orderChangedCount: number = 0;


    computed: {
        orderedJobs(): Job[] {
            return [...this.jobs].sort((a: Job, b: Job) => {
                return a[this.jobSortOrder] > b[this.jobSortOrder] ? 1 : -1
            })

        }
    },
    // Class syntax
    // private get orderedJobs(): Job[] { ... }

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
        showHeading: function (newValue: boolean, oldValue: boolean): void {
            //        ^ Simple syntax 
            console.log(`showHeading changed from ${oldValue} to ${newValue}`);
        },

    },
    methods: {
        onResetOrderClick(): void {
            this.$emit(`resetOrder`);
        }
    }

})
