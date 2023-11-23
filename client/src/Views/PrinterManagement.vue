<template class="sidebar">
  <aside class="sidebar">
    <!-- <h1>Hello</h1> -->
    <div
      class="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar_item"
      style="width: 280px"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span class="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="/" class="nav-link active" aria-current="page"> Home </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark"> Dashboard </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark"> Máy in </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark"> Người dùng </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark"> Extras </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="/vite.svg"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>Admin</strong>
        </a>
        <ul
          class="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
          style=""
        >
          <li><a class="dropdown-item" href="#">Thêm máy in...</a></li>
          <li><a class="dropdown-item" href="#">Cài đặt</a></li>
          <li><a class="dropdown-item" href="#">Trang cá nhân</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
        </ul>
      </div>
    </div>
  </aside>
</template>
