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
    <JobList :jobs="jobs" :order="order" :showHeading="true" someNumber="200" @resetOrder="onResetOrder"/>
  </div>
</template>
<script src="./CompositionView.ts" lang="ts"/>
