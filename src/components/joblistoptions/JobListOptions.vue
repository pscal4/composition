<template>
  <div class="job-list">
    <h3>
      Options Job List
      <span v-if="showHeading"> with optional heading and number {{someNumber}}</span>      
    </h3>
    <p>Ordered by: <span class="greenbold">{{jobSortOrder}}</span></p>
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
<script src="./JobListOptions.ts" lang="ts"></script>
