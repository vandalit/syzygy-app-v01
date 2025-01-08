<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password);
                this.$router.push("/dashboard");
            } catch (error) {
                console.error("Error al iniciar sesión:", error);
            }
        },
    },
};
</script>