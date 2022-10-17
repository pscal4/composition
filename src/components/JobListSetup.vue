<script setup lang="ts">
//  script setup provides number of advantages:
// More succinct code with less boilerplate
// Ability to declare props and emitted events using pure TypeScript
// Better runtime performance (the template is compiled into a render function in the same scope, without an intermediate proxy)
// Better IDE type-inference performance (less work for the language server to extract types from code)

import { type PropType, computed, ref, type Ref, watch } from 'vue'
import type Job from '@/models/Job'
import type OrderTerm from '@/models/OrderTerm'

const props = defineProps({
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
});

const emit = defineEmits(['resetOrder'])
// const emitsObjectSyntax = defineEmits<{
//   (e: 'resetOrder'): void
//   }>();

const salarySelectedCount = ref(0);
const orderChangedCount: Ref<number> = ref(0);

const orderedJobs = computed(() => {
  return [...props.jobs].sort((a: Job, b: Job) => {
    return a[props.order] > b[props.order] ? 1 : -1
  })
});

watch(() => props.order,
  (newValue, oldValue) => {
    if (newValue == 'salary') {
      salarySelectedCount.value++;
    }
    orderChangedCount.value++;
  },
  { immediate: true });

function onResetOrderClick() {
  emit(`resetOrder`);
}

</script>

<template>
  <div class="job-list">
    <h3>
      Setup Job List
      <span v-if="showHeading"> with optional heading and number {{someNumber}}</span>
    </h3>
    <p>Ordered by: <span class="greenbold">{{order}}</span></p>
    <p>Order has been changed: <span class="greenbold">{{orderChangedCount}} times</span></p>
    <p>Salary order has been selected: <span class="greenbold">{{salarySelectedCount}} times</span></p>
    <button @click="onResetOrderClick">Reset Order</button>

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
