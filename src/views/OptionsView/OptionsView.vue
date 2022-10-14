<template>
    <div>
      <header>
        <div class="title">
          <h1>Options</h1>
        </div>
        <div class="order">
          <button @click="onHandleSortClick('title')">Order by title</button>
          <button @click="onHandleSortClick('salary')">Order by salary</button>
          <button @click="onHandleSortClick('location')">Order by location</button>
        </div>
      </header>
  
      <job-list-options :jobs="jobs" :order="order" :showHeading="true" />
    </div>
  </template>
<script src="./OptionsView.ts" lang="ts"/>
