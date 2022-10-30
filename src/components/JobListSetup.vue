<script setup lang="ts">
//  script setup provides number of advantages:
// More succinct code with less boilerplate
// Ability to declare props and emitted events using pure TypeScript
// Better runtime performance (the template is compiled into a render function in the same scope, without an intermediate proxy)
// Better IDE type-inference performance (less work for the language server to extract types from code)

import { type PropType, computed, ref, watch } from 'vue'
import type Job from '@/models/Job'
import type { JobSortOrder } from '@/models/JobSortOrder';

const props = defineProps({
  jobs: {
    type: Array as PropType<Job[]>,
    required: true
  },
  jobSortOrder: {
    type: String as PropType<JobSortOrder>,
    default: 'title',
  },
  allowReset: Boolean,
  someNumber: [Number, String] as PropType<Number | String>
});

const emit = defineEmits(['resetOrder'])
// const emitsObjectSyntax = defineEmits<{
//   (e: 'resetOrder'): void
//   }>();

const salarySelectedCount = ref(0);
const orderChangedCount = ref(0);

const orderedJobs = computed(() => {
  return [...props.jobs].sort((a: Job, b: Job) => {
    return a[props.jobSortOrder] > b[props.jobSortOrder] ? 1 : -1
  })
});

// Also can use watchEffect() which runs immediately and re-runs it whenever the dependencies are changed.
watch(() => props.jobSortOrder,
  (newValue, oldValue) => {
    if (newValue == 'salary') {
      salarySelectedCount.value++;
    }
    orderChangedCount.value++;
  },
  { immediate: true });

function onResetOrderClick(): void {
  emit(`resetOrder`);
}

    // Note:  "this" will have a value of undefined inside setup()

</script>

<script lang="ts">
// Can have both script and script setup.
export default {
  name: 'JobListSetup',
  //inheritAttrs: false,
}
</script>

<template>
  <div class="job-list">
    <h3>
      Setup Job List {{someNumber}}
    </h3>
    <p>Ordered by: <span class="greenbold">{{jobSortOrder}}</span></p>
    <p>Order has been changed: <span class="greenbold">{{orderChangedCount}} times</span></p>
    <p>Salary order has been selected: <span class="greenbold">{{salarySelectedCount}} times</span></p>
    <button v-if="allowReset" @click="onResetOrderClick">Reset Order</button>

    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} rupees</p>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </li>
    </transition-group>
  </div>
</template>
