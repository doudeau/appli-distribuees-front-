<template>
  <div>
    <div>
      <h1>Tasks</h1>
    </div>
    <div>
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Title</th>
            <th>Creation Date </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{task.title}}</td>
            <td>{{task.created}}</td>
            <td>{{task.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'tasks',
  data: () => ({
    tasks: null,
  }),
  created() {
    axios.get("http://localhost:8080/tasks").then((result) => {
      this.tasks = result.data
      console.log(result.data)
          })
  }
}
</script>