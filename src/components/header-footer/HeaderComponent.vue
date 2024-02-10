<template>
    <header class="navbar navbar-expand-lg bg-dark border-bottom border-body">
        <nav class="navbar navbar-expand-lg bg-dark container-xxl" data-bs-theme="dark">
        <div class="container-fluid" style="margin-left:10px">
            <a href="/" class="navbar-brand">DSS-APIs</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/apis">APIs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/docs">Documentations</router-link>
                    </li>

                    <li class="d-flex">
                        <router-link  class="nav-link" to="/login">Login</router-link>
                        <!-- <a href="javascript:void(0)" class="nav-link" @click="logout">Logout</a> -->
                    </li>
                </ul>
                <div class="dropdown-center">
                    <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="./../../assets/logo.png" width="30" alt="">
                        Nama Akun
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg-end">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><a class="dropdown-item" href="#">Subscription</a></li>
                        <li><a class="dropdown-item" href="#">Feedback</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </header>
    
</template>