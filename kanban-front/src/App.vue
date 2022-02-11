<template>
  <div id = "app">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Kanban</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/tasks">Tasks</b-nav-item>
        <b-nav-item to="/developers" >Developers</b-nav-item>
        <b-nav-item to="/addTask" >Add task</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
