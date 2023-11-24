<template>
  <html lang="en">
    <header>
      <nav
        class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3 phuc_bg"
      >
        <div class="container-fluid">
          <img class="phuc_logo" alt="SGSW" src="vite.svg" />

          <a class="navbar-brand" href="home">BK Smart Printer</a>
          <div class="navbar-collapse collapse d-sm-inline-flex">
            <ul class="navbar-nav flex-grow-1 justify-content-evenly">
              <li class="phuc_nav">
                <a class="nav-link" href="manage">Quản lý máy in</a>
              </li>
              <li class="phuc_nav">
                <a class="nav-link" href="about">Giới thiệu</a>
              </li>
            </ul>
            <form class="form-inline">
              <input
                class="form-control"
                type="search"
                placeholder="Bạn muốn tìm gì"
                aria-label="Search"
              />
              <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
            </form>
          </div>
        </div>
      </nav>
    </header>
  </html>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      products: [
        { title: "A", link: "AA" },
        { title: "B", link: "BB" },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif, Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
