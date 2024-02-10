<template>
    <div class="container" style="height: 100%;">
        <div class="row d-flex align-items-center" style="min-height: 80vh;" >
            <!-- <div class="col"></div> -->
            <div class="col d-flex justify-content-center align-items-center">
                <div class="card" style="width: 18rem;">
                    <div class="card-header bg-dark text-light">
                        <h1>Login</h1>
                    </div>
                    <div class="card-body">
                        <form-tag name="myform" event="myevent">
                            <form-floating v-model="email" label="Email" type="email" name="email" id="floatingInput" required="true" placeholder=""></form-floating>
                            <form-floating v-model="password" label="Password" type="password" name="password" id="floatingPassword" required="true" placeholder=""></form-floating>
                            <input type="submit" value="Login" class="btn btn-dark w-100">
                        </form-tag>
                    </div>
                </div>
            </div>
            <!-- <div class="col"></div> -->
        </div>
        
       
    </div>
</template>

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