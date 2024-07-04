<script setup>
import {useDataStore} from '~/stores/data'
const data = useDataStore()


</script>


<template>
 <div v-if="!data.loader">
   <section class="section1 parallax d-none d-md-block height">
 <div style="width: 800px" class="pt-16 pl-10">
      <h1 style="font-size: 50px">
        Digital, Business, & Technology Partners for Success
      </h1>
      <p style="font-size: 30px">
        We simplify the digital transformation journeys of businesses through
        smart and innovative software solutions.
      </p>
      <v-btn
        style="
          padding-inline: 30px;
          background-color: #184ca1;
          color: white;
          border-radius: 30px;
        "
        >Contact Our Experts</v-btn
      >
    </div>
  </section>
	<section class="section1 parallax d-block d-md-none low-height">

     <div class="pt-7 pb-4 pl-10">
      <h5 style="font-size: 20px">
       <b>Digital, Business, & Technology Partners for Success</b>
      </h5>
      <p style="font-size: 10px">
        We simplify the digital transformation journeys of businesses through
        smart and innovative software solutions.
      </p>
      <v-btn
        style="
          padding-inline: 10px;
          background-color: #184ca1;
          color: white;
          border-radius: 30px;
        
        "
        size="small"
        >Contact Our Experts</v-btn
      >
    </div>

  </section>

  <section class="section2 mt-6">
    <v-row>
      <v-col cols="12" md="6" lg="3" class="d-flex justify-center">
        <div>
          <h2 style="font-size: 60px; color: #20396e" class="text-center"><b>5+</b></h2>
          <p style="font-size: 30px" class="text-center">Years</p>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="3" class="d-flex justify-center">
        <div>
          <h2 style="font-size: 60px; color: #20396e" class="text-center"><b>850+</b></h2>
          <p style="font-size: 30px" class="text-center">Solution Experts</p>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="3" class="d-flex justify-center">
        <div>
          <h2 style="font-size: 60px; color: #20396e" class="text-center"><b>500+</b></h2>
          <p style="font-size: 30px" class="text-center">Happy Clients</p>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="3" class="d-flex justify-center">
        <div>
          <h2 style="font-size: 60px; color: #20396e" class="text-center"><b>3</b></h2>
          <p style="font-size: 30px" class="text-center">Offices Worldwide</p>
        </div>
      </v-col>
    </v-row>
  </section>
  <hr />

  <section class="section3 mt-16">
    <h2
      class="text-center"
      style="font-size: 50px; color: #20396e; font-weight: bold"
 
    >
      Our Industry Experience
    </h2>
    <p class="text-center mx-auto" style="font-size: 25px; max-width: 900px">
      We provide industry-specific solutions to help enterprises and
      fast-growing organizations succeed in today’s digital-first world.
    </p>
  </section>

  <v-container>
    <v-row class="d-flex justify-center">
      <v-col>
       <div class="d-flex justify-center">
         <img src="../assets/image/home/image1.webp" alt="" width="300" />
       </div>
      </v-col>

      <v-col>
        <div class="d-flex justify-center">
          <img src="../assets/image/home/image3.avif" alt="" width="300" />
        </div>
      </v-col>

      <v-col>
      <div class="d-flex justify-center">
          <img src="../assets/image/home/image5.avif" alt="" width="300" />
      </div>
      </v-col>

      <v-col>
      <div class="d-flex justify-center">
          <img src="../assets/image/home/image4.jpg" alt="" width="300" />
      </div>
      </v-col>

      <v-col>
        <div class="d-flex justify-center">
          <img src="../assets/image/home/image6.jpeg" alt="" width="300" />
        </div>
      </v-col>

      <v-col>
        <div  class="d-flex justify-center">
          <img src="../assets/image/home/section1.webp" alt="" width="300" />
        </div>
      </v-col>
    </v-row>

    <div class="d-flex justify-center">
      <v-btn
        class="mt-10"
        style="
          padding-inline: 70px;
          background-color: #20396e;
          color: white;
          border-radius: 30px;
        "
        >Get a Quote</v-btn
      >
    </div>
  </v-container>

  <div class="mt-16 px-5">
    <h2 class="text-center mb-10" style="font-family: bold; font-size: 60px">
      <b>Services We Provide</b>
    </h2>

    <v-row>
      <v-col>
        <v-card class="pa-5">
          <h2>Web Development</h2>
          <p>
            Whether you need a corporate website, an e-commerce platform, or a
            complex web application, our team has the expertise to bring your
            vision to life. We leverage the latest technologies and best
            practices to ensure your website is fast, secure, and scalable.
          </p>

          <!-- <div>
					<img src="../assets/image/home/vue.svg" alt="" width="60">
					<img src="../assets/image/home/react-native.png" alt="" width="50">
					<img src="../assets/image/home/angular.webp" alt="" width="100">
					<img src="../assets/image/home/nuxt.png" alt="" width="70">
				</div> -->
        </v-card>
      </v-col>

      <v-col>
        <v-card class="pa-5">
          <h2>Mobile Development</h2>
          <p>
            Whether you need a corporate website, an e-commerce platform, or a
            complex web application, our team has the expertise to bring your
            vision to life. We leverage the latest technologies and best
            practices to ensure your website is fast, secure, and scalable.
          </p>

          <!-- <div>
					<img src="../assets/image/home/vue.svg" alt="" width="60">
					<img src="../assets/image/home/react-native.png" alt="" width="50">
					<img src="../assets/image/home/angular.webp" alt="" width="100">
					<img src="../assets/image/home/nuxt.png" alt="" width="70">
				</div> -->
        </v-card>
      </v-col>

      <v-col>
        <v-card class="pa-5">
          <h2>Digital Marketing</h2>
          <p>
            Whether you need a corporate website, an e-commerce platform, or a
            complex web application, our team has the expertise to bring your
            vision to life. We leverage the latest technologies and best
            practices to ensure your website is fast, secure, and scalable.
          </p>

          <!-- <div>
					<img src="../assets/image/home/vue.svg" alt="" width="60">
					<img src="../assets/image/home/react-native.png" alt="" width="50">
					<img src="../assets/image/home/angular.webp" alt="" width="100">
					<img src="../assets/image/home/nuxt.png" alt="" width="70">
				</div> -->
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-center">
      <v-btn
        class="mt-10"
        style="
          padding-inline: 70px;
          background-color: #20396e;
          color: white;
          border-radius: 30px;
        "
        >Learn More</v-btn
      >
    </div>
  </div>

  <section class="section5 py-10 mt-10" style="background-color: rgb(235, 231, 231)">
    <v-row>
      <v-col>
        <div class="d-flex justify-center">
          <img src="../assets/image/home/google.jpg" alt="" width="200px" />
        </div>
      </v-col>
      <v-col>
        <div class="d-flex justify-center">
          <img src="../assets/image/home/microsoft.jpg" alt="" width="200px" />
        </div>
      </v-col>

      <v-col>
        <div class="d-flex justify-center">
          <img
            src="../assets/image/home/samsung.jpg"
            alt=""
            width="200px"
            height="100"
          />
        </div>
      </v-col>

      <v-col>
        <div class="d-flex justify-center">
          <img
            src="../assets/image/home/digital.jpg"
            alt=""
            width="200px"
            height="100"
          />
        </div>
      </v-col>
    </v-row>
  </section>

<v-container>
    <section class="section6 mt-16">
    <h2 class="text-center my-10" style="color:#184ca1"><b>Our Satisfied Clients</b></h2>
    <v-row>
      <v-col cols="12" md="5" lg="4">
        <v-card class="box">
          <img src="../assets/image/home/client/client1.jpg" alt="" width="100" height="100">
          <h6 class="my-2"><b>shreeniwas rawat</b></h6>
          <p>Working with Star Marketing has been an absolute pleasure. They understood our vision perfectly and delivered a stunning website that exceeded our expectations. The team was professional, responsive, and went above and beyond to ensure we were happy with the final product. Highly recommend!</p>
          <div>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
          </div>
        </v-card>
      </v-col>

        <v-col cols="12" md="5" lg="4">
        <v-card class="box">
          <img src="../assets/image/home/client/client2.jpg" alt="" width="100" height="100">
          <h6 class="my-2"><b>Sarika </b></h6>
          <p>Star Marketing completely transformed our online presence with their app development services. The app is user-friendly, visually appealing, and packed with features that our customers love. Their attention to detail and commitment to quality is unparalleled. We're thrilled with the results!</p>
          <div>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
          </div>
        </v-card>
      </v-col>

       <v-col cols="12" md="5" lg="4">
        <v-card class="box">
          <img src="../assets/image/home/client/client3.jpg" alt="" width="100" height="100">
          <h6 class="my-2"><b>Abdx pvt Ltd </b></h6>
          <p>From start to finish, the team at Star Marketing was fantastic. They communicated effectively, met all deadlines, and created a website that perfectly aligns with our brand identity. Their expertise and creativity are truly commendable. We couldn't be happier with our new site!</p>
          <div>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
          </div>
        </v-card>
      </v-col>
     

       <v-col cols="12" md="5" lg="4">
        <v-card class="box">
          <img src="../assets/image/home/client/client4.jpg" alt="" width="100" height="100">
          <h6 class="my-2"><b>Surendra Singh </b></h6>
          <p>Star Marketing's professionalism and efficiency made the entire process of developing our website smooth and stress-free. They were always available to answer questions and provide updates. The final product is a sleek, modern website that has already received great feedback from our users."</p>
          <div>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
          </div>
        </v-card>
      </v-col>

       <v-col cols="12" md="5" lg="4">
        <v-card class="box">
          <img src="../assets/image/home/client/client5.jpg" alt="" width="100" height="100">
          <h6 class="my-2"><b>Saravan haritwal</b></h6>
          <p>We approached Star Marketing with a complex project, and they delivered innovative solutions that met all our requirements. Their support throughout the development process was fantastic, and they were always willing to make adjustments as needed. The app they developed is exactly what we needed to take our business to the next level.</p>
          <div>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
          </div>
        </v-card>
      </v-col>

       <v-col cols="12" md="5" lg="4">
        <v-card class="box">
          <img src="../assets/image/home/client/client6.jpg" alt="" width="100" height="100">
          <h6 class="my-2"><b>Sikandar ali</b></h6>
          <p>Star Marketing brought our ideas to life with their remarkable creativity and technical expertise. The website they developed for us is not only visually stunning but also highly functional and easy to navigate. Their team was attentive to our needs and delivered a product that truly represents our brand. We couldn't be more pleased!</p>
          <div>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
           <Icon name="noto:star"/>
          </div>
        </v-card>
      </v-col>
    </v-row>

  </section>
</v-container>

<section class="mt-10">
	<v-row justify="center">
		<v-col cols="12" md="5" lg="2">
			<div class="d-flex justify-center px-0" >
				<img src="../assets/image/home/top1.png" alt="" width="150" height="150">
			</div>
		</v-col>

		<v-col cols="12" md="5" lg="2">
			<div class="d-flex justify-center">
				<img src="../assets/image/home/top2.webp" alt="" width="150" height="150">
			</div>
		</v-col>

		<v-col cols="12" md="5" lg="2">
			<div class="d-flex justify-center">
				<img src="../assets/image/home/top3.jpg" alt="" width="150" height="150">
			</div>
		</v-col>

		<v-col cols="12" md="5" lg="2">
			<div class="d-flex justify-center">
				<img src="../assets/image/home/top4.jpg" alt="" width="150" height="150">
			</div>
		</v-col>

		<v-col cols="12" md="5" lg="2">
			<div class="d-flex justify-center">
				<img src="../assets/image/home/top5.jpg" alt="" width="150" height="150">
			</div>
		</v-col>

	</v-row>
</section>
 </div>

 <div v-if="data.loader"  class="skeleton d-flex justify-center align-center">
 <div>
  <h4 class="text-white"><b>Star Marketing</b></h4>
   <v-progress-circular
      :size="50"
      color="white ml-12"
      indeterminate
    ></v-progress-circular>
 </div>
 </div>
</template>

<style scoped>

.v-progress-circular {
  margin: 1rem;
}

 .skeleton{
  height: 735px;
 background: linear-gradient(to bottom right,#184ca1 , lightblue);
 }
.section1 {
  background-image: url('../assets/image/home/banner1.jpg');
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4); */
 max-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.low-height {
	height: 200px !important;
}

.height {
	height: 600px !important;
}

.box{
  padding: 15px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   height: 420px;
}
</style>
