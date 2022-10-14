<template>
    <div>
      <header>
        <div class="title">
          <h1>Hyrule Jobs</h1>
        </div>
        <div class="order">
          <button @click="handleClick('title')">Order by title</button>
          <button @click="handleClick('salary')">Order by salary</button>
          <button @click="handleClick('location')">Order by location</button>
        </div>
      </header>
  
      <JobList :jobs="jobs" :order="order" />
    </div>
  </template>
  <script src="./CompositionView.ts" lang="ts"/>
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
  header .title{
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

