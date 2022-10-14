<script setup lang="ts">
//  script setup provides number of advantages:
// More succinct code with less boilerplate
// Ability to declare props and emitted events using pure TypeScript
// Better runtime performance (the template is compiled into a render function in the same scope, without an intermediate proxy)
// Better IDE type-inference performance (less work for the language server to extract types from code)

import { type PropType, computed, ref, type Ref, watch, onMounted } from 'vue'
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
const hasMounted = ref(false);

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

onMounted(() => {
        console.log(`JobListComposition mounted`);
        hasMounted.value = true;
    });

    // There is not a created life cycle hook.  Code previously in created should be executed inside setup()

</script>

<template>
  <div class="job-list">
    <h3>
      Setup Job List <span v-if="hasMounted">has mounted</span>
      <span v-if="showHeading"> with optional heading and number {{someNumber}}</span>      
    </h3>
    <p>Ordered by {{ order }}</p>
    <p>Order has been changed {{orderChangedCount}} times</p>
    <p>Salary order has been selected {{salarySelectedCount}} times</p>
    <button @click="onResetOrderClick">Reset Order</button>

    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} rupees</p>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis voluptatum eius doloremque optio iusto
            sequi dignissimos. Pariatur earum assumenda dolores possimus quidem quam, reprehenderit aliquid consequuntur
            amet non facere.</p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}

.job-list ul {
  padding: 0
}

.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}

.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}

.salary {
  display: flex;
}

.salary img {
  width: 30px;
}

.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}

.list-move {
  transition: all 1s;
}
</style>