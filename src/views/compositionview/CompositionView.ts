import { defineComponent, onMounted, ref, type Ref } from 'vue';
import type Job from '@/models/Job';
import type OrderTerm from '@/models/OrderTerm'
import JobList from '@/components/JobListComposition.vue'
import JobListSetup from '@/components/JobListSetup.vue'

export default defineComponent({
  name: 'CompositionView',
  components: { JobList, JobListSetup },

  setup() {
    const jobs = ref<Job[]>([]);
    const order = ref<OrderTerm>('title');

    function getJobs(): void {
      jobs.value = [
        { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
        { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
        { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
        { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
        { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
      ];
    }

    const onHandleSortClick = (term: OrderTerm) => {
      order.value = term
    }

    function onResetOrder() {
      order.value = 'title';
    }

    // There is not a created life cycle hook.  If we wanted to call getJobs in created, it would just
    // be executed inside setup.
    onMounted(() => {
      getJobs();
    });

    return {
      jobs,
      order,
      onHandleSortClick,
      onResetOrder,
    }
  }
});

