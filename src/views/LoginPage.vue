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
                        <form-tag name="myform" @myevent="submitHanlder" event="myevent">
                            <form-floating v-model="email" label="Email" type="text" name="email" id="floatingInput" required="true" placeholder=""></form-floating>
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
import Security from '@/assets/js/security'
import router from '@/router'

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
    },
    methods: {
        submitHanlder() {
            console.log("submitHandler called - success!")

            const payload = {
                email: this.email,
                password: this.password,
            }

            fetch(process.env.VUE_APP_API_URL + "/users/login", Security.requestOptions(payload))
            .then((response) => response.json())
            .then((response) => {
                if (response.error) {
                    console.log("Error:", response.message)
                    alert({
                        type: 'error',
                        text: response.message,
                    })
                } else {
                    console.log("Token", response.data.token.token)
                    store.token = response.data.token.token
                    store.user = {
                        id: response.data.user.id,
                        firts_name: response.data.user.first_name,
                        last_name: response.data.user.last_name,
                        email: response.data.user.email,
                        username: response.data.user.email,
                    }

                    // save info to cookie
                    let date = new Date()
                    let expDays = 1;
                    date.setTime(date.getTime() + (expDays * 24 *60 *60 * 1000))
                    const expires = "expires" + date.toUTCString()

                    // set the cookie
                    document.cookie = "_site_data="
                    + JSON.stringify(response.data)
                    +"; "
                    + expires
                    + "; Path=/; SameSite=strict; Secure;"

                    router.push('/')
                }
            })
        }
    }
}
</script>