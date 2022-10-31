<template>
  <div>
    <header>
      <div class="title">
        <h1>Composition</h1>
      </div>
      <div class="order">
        <button @click="onHandleSortClick('title')">Order by title</button>
        <button @click="onHandleSortClick('salary')">Order by salary</button>
        <button @click="onHandleSortClick('location')">Order by location</button>
      </div>
    </header>
    <hr>
    <job-list :jobs="jobs" :jobSortOrder="jobSortOrder" :allowReset="allowReset" :someNumber="200" @resetOrder="onResetOrder" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, type Ref } from 'vue';
import type Job from '@/models/Job';
import JobList from '@/components/JobListComposition.vue'
import { JobSortOrder } from '@/models/JobSortOrder';

export default defineComponent({
  name: 'CompositionView',
  components: { JobList },
  setup() {
    const allowReset = ref(true);
    const jobSortOrder = ref(JobSortOrder.Title);
    const jobs: Ref<Array<Job>> = ref([]);
    // Another way: const jobs2 = ref<Array<Job>>([]);

    // There is also reactive() method that can be used for objects but it has some limitations
    // See https://vuejs.org/guide/essentials/reactivity-fundamentals.html 


    onMounted(() => {  // Can be async
      getJobs();
    });
    // There is not a created or beforeCreate life cycle hook.  If we wanted to call getJobs in created, it would just
    // be executed inside setup.

    function getJobs(): void {
      jobs.value = [
        { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
        { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
        { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
        { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
        { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
      ];
    }

    // Another syntax for functions
    const onHandleSortClick = (sortOrder: string) => {
      jobSortOrder.value = sortOrder as JobSortOrder;
    }

    function onResetOrder() : void {
      jobSortOrder.value = JobSortOrder.Title;
    }
    
    // Note:  setup() does not have access to the component instance 
    //    "this" will have a value of undefined inside setup()

    // Must return anything referenced in the template

    return {
      jobs,
      jobSortOrder,
      allowReset,
      onHandleSortClick,
      onResetOrder,
    }
  }
});

</script>
