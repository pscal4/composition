<script lang="ts">
import { defineComponent } from 'vue';
import JobListSetup from '@/components/JobListSetup.vue'
import { useJobList } from '@/composables/useJobList';
import { JobSortOrder } from '@/models/JobSortOrder';

export default defineComponent({
    name: 'ComposableView',
    components: { JobListSetup },

    setup() {
        const { jobs, jobSortOrder, allowReset, onResetOrder } = useJobList({
            initialOrder: JobSortOrder.Location,
        });

        const onHandleSortClick = (sortOrder: string) => {
            jobSortOrder.value = sortOrder as JobSortOrder;
        }

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

<template>
    <div>
        <header>
            <div class="title">
                <h1>Composable</h1>
            </div>
            <div class="order">
                <button @click="onHandleSortClick('title')">Order by title</button>
                <button @click="onHandleSortClick('salary')">Order by salary</button>
                <button @click="onHandleSortClick('location')">Order by location</button>
            </div>
        </header>
        <hr>

        <JobListSetup :jobs="jobs" :jobSortOrder="jobSortOrder" :allowReset="allowReset" :someNumber="200" @resetOrder="onResetOrder" />
    </div>
</template>
  
  