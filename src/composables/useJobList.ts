import { onMounted, ref } from "vue"
import type Job from '@/models/Job';
import { JobSortOrder } from "@/models/JobSortOrder";

export interface useJobListOptions {
  initialOrder? : JobSortOrder,
  allowReset?: boolean,
}

export function useJobList(options : useJobListOptions = {}) {
  const { initialOrder = JobSortOrder.Location,
    allowReset = true,    
  } = options;

    const jobs = ref<Job[]>([]);
    const jobSortOrder = ref(initialOrder);

    function getJobs(): void {
      jobs.value = [
        { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
        { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
        { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
        { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
        { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
      ];
    }

    function onResetOrder() {
      jobSortOrder.value = initialOrder;
    }

    // Composables can use life cycle hooks.
    onMounted(() => {
      getJobs();
    });

    return {
      jobSortOrder,
      allowReset : ref(allowReset),      
      jobs,
      onResetOrder,      
    }
  }