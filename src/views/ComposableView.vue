<script lang="ts">
import { defineComponent, onMounted, ref, type Ref } from 'vue';
import type Job from '@/models/Job';
import type OrderTerm from '@/models/OrderTerm'
import JobList from '@/components/JobListComposition.vue'
import JobListSetup from '@/components/JobListSetup.vue'
import { useJobList } from '@/composables/useJobList';

export default defineComponent({
    name: 'CompositionView',
    components: { JobList, JobListSetup },

    setup() {
        const { jobs, order, onResetOrder } = useJobList('title');

        const onHandleSortClick = (term: OrderTerm) => {
            order.value = term
        }

        return {
            jobs,
            order,
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

        <!-- <JobList :jobs="jobs" :order="order" :showHeading="true" someNumber="200" @resetOrder="onResetOrder"/> -->
        <JobListSetup :jobs="jobs" :order="order" :showHeading="true" someNumber="500" @resetOrder="onResetOrder" />
    </div>
</template>
<style>
header {
    text-align: center;
}

header .order {
    margin-top: 20px;
}

button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

header .title {
    display: flex;
    justify-content: center;
}

header img {
    width: 60px;
    margin-right: 20px;
}

header h1 {
    font-size: 3em;
}
</style>
  
  