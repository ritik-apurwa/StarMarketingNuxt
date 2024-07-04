<script setup>
let drawer = ref(false)
let router = useRouter()
function toggleDrawer() {
	drawer.value = !drawer.value
}

function goto(url) {
	navigateTo(url)
}
let token = ref()
let path = ref(location.pathname)

onMounted(() => {
	setInterval(() => {
		path.value = location.pathname
		token.value = localStorage.getItem('token')
	}, 2000)
})

function logout() {
	goto('/admin')
	localStorage.removeItem('token')
}
</script>

<template>
	<v-layout>
		<v-main style="height: 70px; background-color: white">
			<header class="d-flex justify-between align-center bg-theme-lighten-2 px-4">
				<NuxtLink href="/" class="text-theme td-none fw-bold fz-12 d-flex align-center home-link">
					<img src="../assets/image/home/star.png" alt="" width="60" />
					<span class="ms-3 d-none d-md-inline logo-title" style="color: #433dde;">StarMarketing</span>
				</NuxtLink>

				<div class="menu h-100 d-flex align-center">
					<div class="align-center d-none d-lg-flex">
						<NuxtLink to="/" class="text-white text-decoration-none text px-4 py-1 mr-2">Home</NuxtLink>
						<NuxtLink to="/about" class="text-white text-decoration-none text px-4 py-1 mr-2">About</NuxtLink>
						<NuxtLink to="/contact" class="text-white text-decoration-none text px-4 py-1 mr-2">Contact</NuxtLink>
						
					
						<v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  valiant="text"
                  class=" text-decoration-none text ps-4"
									style="background-color:#20396e ; color: white; border-radius: 30px;"
                >
                  Services
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <NuxtLink
                      to="/service/web-development"
                      class="text-black text-decoration-none text ps-4"
                      >Web Development</NuxtLink
                    >
                    
                  </v-list-item-title>
                  <v-list-item-title>
                    <NuxtLink
                      to="/service/app-development"
                      class="text-black text-decoration-none text ps-4"
                      >App Development</NuxtLink
                    >
                   
                  </v-list-item-title>
                  <v-list-item-title>
                    <NuxtLink
                      to="/service/social-media-marketing"
                      class="text-black text-decoration-none text ps-4"
                      >Social Media Marketing </NuxtLink
                    >
                  </v-list-item-title>

									  <v-list-item-title>
                    <NuxtLink
                      to="/service/graphics-design"
                      class="text-black text-decoration-none text ps-4"
                      >Graphics Design </NuxtLink
                    >
                  </v-list-item-title>

									  <v-list-item-title>
                    <NuxtLink
                      to="/service/product-photoshut"
                      class="text-black text-decoration-none text ps-4"
                      >Product Photography</NuxtLink
                    >
                  </v-list-item-title>

									

									  <v-list-item-title>
                    <NuxtLink
                      to="/service/saas-development"
                      class="text-black text-decoration-none text ps-4"
                      >Saas Development</NuxtLink
                    >
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
					</div>
					<v-btn class="d-lg-none" @click="drawer = true" icon="mdi-menu"> </v-btn>
				</div>
			</header>
		</v-main>

		<v-navigation-drawer v-model="drawer" temporary>
			<div class="mb-10"></div>

			   <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="About"
          value="about"
          @click="goto('/about')"
        />
        <v-list-item
          prepend-icon="mdi-login"
          title="Contact"
          value="contact"
          @click="goto('/contact')"
        />
        <v-list-item
          prepend-icon="mdi-account-plus"
          title="Web Development"
          value="Web Development"
          @click="goto('/service/web-development')"
        />

        <v-list-item
          prepend-icon="mdi-chat-processing"
          title="App Development"
          value="App Development"
          @click="goto('/service/app-development')"
        />

           <v-list-item
          prepend-icon="mdi-chat-processing"
          title="Social Media Marketing "
          value="Social Media Marketing "
          @click="goto('/service/social-media-marketing')"
        />

           <v-list-item
          prepend-icon="mdi-chat-processing"
          title="Graphics Design"
          value="Graphics Design"
          @click="goto('/service/graphics-design')"
        />

     

          <v-list-item
          prepend-icon="mdi-briefcase-outline"
          title="Product Photography"
          value="Product Photography"
          @click="goto('/service/product-photography')"
        />

        <v-list-item
          prepend-icon="mdi-account-hard-hat"
          title="Saas Development"
          value="Saas Development"
          @click="goto('/service/saas-development')"
        />

    
        <v-divider></v-divider>
      </v-list>
		</v-navigation-drawer>

  
	</v-layout>
</template>

<style scoped>
header {
	height: 70px;
}

.logo {
	width: auto;
	height: 42px;
}

.logo-title {
	color: black;
	font-weight: bold;
	text-decoration: none !important;
}

.home-link:hover {
	text-decoration: none !important;
	/* background-color: #216f8c; */
	color: #20396e;
	border-color: transparent;
	color: white;
}

/* .menu a:hover {
  background-color: rgb(202, 53, 78);
  border-radius: 20px;
} */
.menu a{
	 background-color: #20396e;
  border-radius: 20px;


	/* border-bottom: 2px solid red; */
}
</style>
