<template>
    <div class="login-container">
        <form @submit.prevent="login">
            <h1>Iniciar sesión</h1>
            <input type="email" v-model="email" placeholder="Correo electrónico" required />
            <input type="password" v-model="password" placeholder="Contraseña" required />
            <button type="submit">Ingresar</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase"; // Importa la configuración inicializada

export default {
    data() {
        return {
            email: "",
            password: "",
            errorMessage: "",
        };
    },
    methods: {
        async login() {
            try {
                const auth = getAuth(app); // Obtén la instancia de Auth
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    this.email,
                    this.password
                );
                console.log("Inicio de sesión exitoso:", userCredential.user);
                this.$router.push("/dashboard"); // Redirige al dashboard
            } catch (error) {
                console.error("Error al iniciar sesión:", error);
                this.errorMessage = "Credenciales incorrectas. Inténtalo de nuevo.";
            }
        },
    },
};

</script>

<style scoped>
/* Estilos básicos para el formulario de login */
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
}

button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.error {
    color: red;
    margin-top: 10px;
}
</style>