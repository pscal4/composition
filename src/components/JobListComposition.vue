<template>
  <div class="job-list">
    <h3>
      Composition Job List
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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, ref, type Ref, watch, onMounted } from 'vue'
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
  emits: ['resetOrder'],
  setup(props, { emit, attrs, slots, expose }) {

    // Note:  "this" will have a value of undefined inside setup() 
  
    const salarySelectedCount = ref(0);
    const orderChangedCount: Ref<number> = ref(0);

      const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1
      })
    });

    // Also can use watchEffect() which runs immediately and re-runs it whenever the dependencies are changed.
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

    return {
      salarySelectedCount,
      orderChangedCount,
      orderedJobs,
      onResetOrderClick,
    }
  },
})
</script>

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