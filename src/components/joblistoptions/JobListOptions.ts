import { defineComponent, type PropType } from 'vue'
import type Job from '@/models/Job'
import type OrderTerm from '@/models/OrderTerm'

export default defineComponent({
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
        someNumber: [Number, String] as PropType<Number | String>
    },
    data() {
        return {
            salarySelectedCount: 0,
            orderChangedCount: 0,
            hasMounted : false,
        };
    },
    computed: {
        orderedJobs(): Job[] {
            return [...this.jobs].sort((a: Job, b: Job) => {
                return a[this.order] > b[this.order] ? 1 : -1
            })

        }
    },
    watch: {
        order: {
            handler(newValue: OrderTerm, oldValue: OrderTerm) {
                if (newValue == 'salary') {
                    this.salarySelectedCount++;
                }
                this.orderChangedCount++;
            },
            immediate: true,
        },

    },
    methods: {
        onResetOrderClick() {
            this.$emit(`resetOrder`);
        }
    }

})
