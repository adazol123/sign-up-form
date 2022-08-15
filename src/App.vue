<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import MarqueeScroll from "./components/MarqueeScroll.vue";
import Input from "./components/Input.vue";
</script>

<template>
  <section>
    <div class="panel">
      <div class="side-image">
        <img
          src="https://images.unsplash.com/photo-1591079125182-a1641b78c8ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          class="w-full h-full object-cover"
          alt="boxes"
        />
        <div class="busy-background">
          <div class="side-header">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.3709 34.2042C26.6432 39.9319 17.3568 39.9319 11.6291 34.2042C8.7653 31.3404 7.33338 27.5869 7.33337 23.8333C7.33337 20.0798 8.76529 16.3263 11.6291 13.4624C11.6291 13.4624 12.8335 16.4999 16.5001 18.3333C16.5001 14.6666 17.4168 9.16658 21.9742 5.5C25.6667 9.16667 29.5005 10.592 32.3709 13.4624C35.2348 16.3263 36.6667 20.0798 36.6667 23.8333C36.6667 27.5869 35.2348 31.3404 32.3709 34.2042Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.111 29.5557C20.2588 31.7036 23.7412 31.7036 25.8891 29.5557C26.9631 28.4817 27.5 27.0742 27.5 25.6666C27.5001 24.2591 26.9631 22.8515 25.8891 21.7775C24.822 20.7103 23.4254 20.1734 22.0267 20.1666L20.1666 25.6665L16.5 25.6666C16.5001 27.0742 17.037 28.4817 18.111 29.5557Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="side-content">
              <h1>Adazolhub</h1>
              <p>The Odin Project activity: <span>Sign up form</span></p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="grid place-content-center w-full md:overflow-hidden overflow-visible"
      >
        <div class="relative flex flex-col justify-between p-6 w-full max-w-lg">
          <div>
            <div class="pb-8 flex flex-col gap-8">
              <h3>
                This is not a real online service! You know you need something
                like this in your life to help you realize your deepest dreams.
                Sign up now to get started.
              </h3>
              <h3>You know you want to.</h3>
            </div>
            <div>
              <form autocomplete="off">
                <div>
                  <div class="fields">
                    <h2>Let's do this!</h2>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      label="Full name"
                    />
                    <Input
                      type="email"
                      placeholder="john.doe@email.com"
                      label="Email"
                    />
                    <Input
                      type="tel"
                      placeholder="+639-25456-1234"
                      label="Phone Number"
                    />
                    <Input
                      type="password"
                      placeholder="*******"
                      label="Password"
                    />
                  </div>
                </div>
                <button class="mt-8" type="button">Create account</button>
              </form>
              <span class="mt-8 block text-custom-emerald-700"
                >Already have an account? <a href="#">Log in</a></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  @apply h-screen;
}
.panel {
  @apply flex h-[100%] flex-col md:flex-row;
}
.side-image {
  @apply md:w-[50vw] md:h-[100%] h-[20vh] relative;
}

.busy-background {
  @apply absolute inset-0 bg-[#081907]/70 h-[60%] md:h-fit py-8 my-auto grid place-content-center;
}

.side-header {
  @apply flex gap-4;
}

.side-content h1 {
  @apply text-2xl font-bold uppercase text-white;
}

.side-content p {
  @apply text-xs font-thin text-custom-emerald-300;
}
.side-content p span {
  @apply text-white;
}
h3 {
  @apply text-lg;
}
h2 {
  @apply text-lg font-medium;
}

.fields {
  --bg-gray-primary: #151a17;
  @apply grid gap-2 py-8 relative bg-gray-primary shadow-[0_0_0_100vmax_var(--bg-gray-primary)];
  clip-path: inset(0 -100vmax);
}

button {
  @apply border-none bg-accent-primary px-8 py-4 rounded  font-bold text-dark-primary;
}
button:hover {
  @apply bg-gray-primary text-white  shadow-md;
}
button:focus {
  @apply bg-emerald-700 text-white border-emerald-700;
}

a {
  @apply text-base-primary font-medium;
}
</style>
