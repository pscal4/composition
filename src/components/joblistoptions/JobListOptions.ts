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
            default: 'title'
        },
        showHeading: Boolean,
        someNumber: [Number, String] as PropType<Number | String>
    },
    // Class Decorator syntax for props
    // @Prop({ required: true })
    // private jobs : Job[];
    // @Prop({ default: 'title' })
    // private order : OrderTerm;
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
                return a[this.order] > b[this.order] ? 1 : -1
            })

        }
    },
    // Class syntax
    // private get orderedJobs(): Job[] { ... }

    watch: {
        order: {
            handler(newValue: OrderTerm, oldValue: OrderTerm) {
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
            // Do something
        },

    },
    methods: {
        onResetOrderClick(): void {
            this.$emit(`resetOrder`);
        }
    }

})
