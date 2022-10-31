<template>
  <div class="job-list">
    <h3>
      Composition Job List {{ someNumber }}
    </h3>
    <p>Ordered by: <span class="greenbold">{{ jobSortOrder }}</span></p>
    <p>Order has been changed: <span class="greenbold">{{ orderChangedCount }} times</span></p>
    <p>Salary order has been selected: <span class="greenbold">{{ salarySelectedCount }} times</span></p>
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

<script lang="ts">
import { defineComponent, type PropType, computed, ref, type Ref, watch, onMounted } from 'vue'
import { JobSortOrder } from '@/models/JobSortOrder';
import type Job from '@/models/Job';
import { Person } from '@/models/Person';

export interface JobListOptions {
  allowReset: boolean,
  someNumber: number,
}

export default defineComponent({
  props: {
    jobs: {
      type: Array as PropType<Job[]>,
      required: true
    },
    jobSortOrder: {
      type: String as PropType<JobSortOrder>,
      default: JobSortOrder.Title,
    },
    allowReset: Boolean,
    someNumber: [Number, String] as PropType<number | string>,
    // Other property examples
    // buttonClass: {
    //   type: [Array, Object, String] as PropType<string[] | object | string>,
    //   default: '',
    // },
    // heading: String,
    // count: Number,
    // singleJob: Object as PropType<Job>, // Because Job is an interface
    // updatePerson : Person, // Person is a class so it has a constructor    
  },

  emits: ['resetOrder'],
  // There is also object syntax for emits with validation return true if valid, false if invalid
  // See https://vuejs.org/guide/typescript/options-api.html#typing-component-emits 

  setup(props, { emit, attrs, slots, expose }) {
    // equivalent to this.$emit, this.$attrs, this.$slots

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

    return {
      salarySelectedCount,
      orderChangedCount,
      orderedJobs,
      onResetOrderClick,
    }
  },
})
</script>
