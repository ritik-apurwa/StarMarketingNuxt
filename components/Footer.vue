<script setup>
import {useDataStore} from '~/stores/data'
const data = useDataStore()
</script>


<template>
  <div class="footer" v-if="!data.loader">
    <div class="d-flex pl-10 py-10">
      <img src="../assets/image/home/star.png" alt="" width="70" />
      <p class="mt-7" style="color: #0000ff"><b>Star Marketing</b></p>
    </div>
    <hr class="hr" />

    <v-row>
      <v-col class="d-flex justify-center pl-4" cols="12" lg="3">
       <div>
        <h5 class="mb-4"><b>Contact</b></h5>
				 <div class="d-flex mt-2">
          <Icon
            name="fa6-solid:location-pin"
            style="font-size: 20px; color: red"
          />
            <p style="font-size: 15px;" class="ml-4 mb-2">fatehpur road sikar rajasthan,</p>
        </div>

					<div class="d-flex mt-2">
				    <Icon
                    name="ic:sharp-email"
                    style="font-size: 20px; color: #20396e"
                  />
             
                <p style="font-size: 15px;"  class="ml-4 mb-2">manger@wingstarnarketing.com</p>
			</div>

				<div class="d-flex mt-2">
				    <Icon
                    name="carbon:phone-filled"
                    style="font-size: 20px; color: green"
                  />
               
                <p style="font-size: 15px;"  class="ml-4 mb-2">8000189694,8209326351</p>
			</div>
			 </div>
      </v-col>


     



      <v-col class="d-flex justify-center" cols="12" lg="3">

      <div>
        <h4 class="mb-4"><b>Company</b></h4>
        
          <p class="mb-1" style="font-size: 16px; font-weight: 400" @click="navigateTo('/')">Home</p>
          <p class="mb-1" style="font-size: 16px; font-weight: 400" @click="navigateTo('/about')">About</p>
          <p class="mb-1" style="font-size: 16px; font-weight: 400" @click="navigateTo('/contact')">Contact</p>
     
      </div>
      </v-col>

          <v-col class="d-flex justify-center" cols="12" lg="3">

      <div>
        <h4 class="mb-4"><b>Resources</b></h4>
        
          <p @click="navigateTo('/terms-and-services')" class="mb-1" style="font-size: 16px; font-weight: 400">Terms and Services</p>
          <p @click="navigateTo('/privacy-policy')" class="mb-1" style="font-size: 16px; font-weight: 400">Privacy Policy</p>
     
     
      </div>
      </v-col>
    

         <v-col class="d-flex justify-center" cols="12" lg="3">
       <div>
				 <h4 class="mb-4"><b>Our Services</b></h4>
        
          <p class="mb-1" @click="navigateTo('/service/web-development')">Web Development</p>
          <p class="mb-1" @click="navigateTo('/service/app-development')">App Development</p>
          <p class="mb-1" @click="navigateTo('/service/social-media-marketing')">Social Media Marketing</p>
          <p class="mb-1" @click="navigateTo('/service/graphics-design')">Graphics Design</p>
          <p class="mb-1" @click="navigateTo('/service/product-photography')">Product Photography</p>
          <p class="mb-1" @click="navigateTo('/service/saas-development')">Saas Development</p>
     
			 </div>
      </v-col>

    </v-row>

    <hr class="hr"/>
    <p class="text-center pb-10">Copyright © 2023 Star Marketing</p>
  </div>
</template>
<style scoped>
.footer {
  background-color: #e4eef7;
  color: black;
  margin-top: 40px;
}
.footer2 {
  color: black;
}

.hr {
  color: black;
  margin-block: 40px;
}
</style>
