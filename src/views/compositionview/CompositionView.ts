import { defineComponent, ref, type Ref } from 'vue';
import type Job from '@/models/Job';
import type OrderTerm from '@/models/OrderTerm'
import JobList from '@/components/JobList.vue'

export default defineComponent({
  name: 'CompositionView',
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
      { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
      { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
      { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
      { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
    ])

    const order = ref<OrderTerm>('title')

    const onHandleSortClick = (term: OrderTerm) => {
      order.value = term
    }

    function onResetOrder() {
      order.value = 'title';
    }

    return {
      jobs,
      order,
      onHandleSortClick,
      onResetOrder,
    }
  }
});

