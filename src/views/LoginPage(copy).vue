<template>
    <div class="text-center bd-login">
        <main class="form-signin align-midle">
            <form-tag name="myform" event="myevent">
                <form-floating v-model="email" label="Email" type="email" name="email" id="floatingInput" required="true" placeholder=""></form-floating>
                <form-floating v-model="password" label="Password" type="password" name="password" id="floatingPassword" required="true" placeholder=""></form-floating>
            </form-tag>
        </main>
    </div>
    
    <!-- <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <h1>Login</h1>
                    </div>
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>
        
       
    </div> -->
</template>
 <style scoped>
 .bd-login{
    height: 100%;
    display: flex;
    
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
 }
 .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
 }
 </style>

<script>
import FormTag from '../components/forms/FormTag.vue'
import FormFloating from '../components/forms/FormFloating.vue'
import {store} from '../assets/js/store.js'

export default {
    name:'LoginPage',
    components: {
        FormTag,
        FormFloating,
    },
    data() {
        return{
            email: "",
            password: "",
            store,
        }
    }
}
</script>