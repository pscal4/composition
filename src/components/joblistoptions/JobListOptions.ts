import { defineComponent, type PropType, computed } from 'vue'
import type Job from '@/models/Job'
import type OrderTerm from '@/models/OrderTerm'

export default defineComponent({
    mixins: [],
    props: {
        jobs: {
            type: Array as PropType<Job[]>,
            required: true
        },
        order: {
            type: String as PropType<OrderTerm>,
            required: true
        },
        showHeading: Boolean,
    },
    computed: {
        orderedJobs() : Job[] {
            return [...this.jobs].sort((a: Job, b: Job) => {
                return a[this.order] > b[this.order] ? 1 : -1
            })

        }
    }
})
