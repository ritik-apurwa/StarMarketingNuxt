<template>
 
  <section class="section1 parallax d-none d-md-block height">
  </section>

	<section class="section1 parallax d-block d-md-none low-height">
  </section>

        <v-container fluid>
          <v-row>
            <v-col cols="12" class="text-center">
              <h1 class="display-2 my-5" style="color: #20396e;">Star Marketing</h1>
              <p class="subtitle-1">Your partner for creative graphics design solutions</p>
            </v-col>
          </v-row>
        </v-container>

        <!-- Logo Design Section -->
        <v-container>
          <h2 class="text-center my-5">Logo Design</h2>
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="mx-auto" max-width="500">
                <img src="../../assets/image/service/grapic/image1.avif" alt="Logo Design" aspect-ratio="1.5" height="200" width="500px"/>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="mx-auto" max-width="500">
                <v-card-text>
                  <p>Our logo design services help businesses create memorable and impactful brand identities. We
                    work closely with our clients to understand their vision and create logos that reflect their
                    values and resonate with their target audience.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <!-- Packaging Design Section -->
        <v-container>
          <h2 class="text-center my-5">Packaging Design</h2>
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="mx-auto" max-width="500">
             <img src="../../assets/image/service/grapic/image2.webp" alt="Logo Design" aspect-ratio="1.5" height="200" width="500px"/>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="mx-auto" max-width="500">
                <v-card-text>
                  <p>Our packaging design services focus on creating visually appealing and functional packaging
                    solutions that enhance product appeal and attract consumers. We design packaging that stands
                    out on the shelf and communicates the brand's message effectively.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <!-- Brand Identity Section -->
        <v-container>
          <h2 class="text-center my-5">Brand Identity</h2>
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="mx-auto" max-width="500">
                  <img src="../../assets/image/service/grapic/image3.jpg" alt="Logo Design" aspect-ratio="1.5" height="200" width="500px"/>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="mx-auto" max-width="500">
                <v-card-text>
                  <p>Our brand identity services encompass creating cohesive visual elements including logos,
                    color schemes, typography, and imagery that represent the essence of a brand. We help
                    businesses establish a strong and consistent brand identity that resonates with their target
                    audience.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

<h5 class="text-center mt-16">Looking to elevate your brand's visual identity? Our expert team at Star Marketing is here to make it happen! </h5>
          
         <v-row class="mt-10">
          <v-col cols="12" lg="4">
            <v-card class="box">
              <Icon name="bxs:offer"  style="font-size: 40px; color: rgb(116, 116, 6);"/>
              <h4> What We Offer:</h4>
              <p>Professional logo design</p>
              <p>Stunning graphics for social media</p>
              <p>Eye-catching marketing materials</p>
              <p>Custom illustrations and artwork</p>
            </v-card>
          </v-col>

           <v-col cols="12" lg="4">
            <v-card class="box">
              <Icon name="streamline:industry-innovation-and-infrastructure-solid" style="font-size: 40px; color: rgb(116, 116, 6);"/>
              <h4>Why Choose Us?</h4>
              <p>Years of experience in the industry</p>
              <p>Creative solutions tailored to your brand</p>
              <p>Fast turnaround times without compromising quality</p>
            </v-card>
          </v-col>


           <v-col cols="12" lg="4">
            <v-card class="box">
              <Icon name="streamline:decent-work-and-economic-growth-solid" style="font-size: 40px; color: rgb(116, 116, 6);"/>
              <h4>  How We Work:</h4>
              <p>Schedule a consultation with our design experts.</p>
              <p>Collaborate on your vision and goals.</p>
              <p>Sit back and watch as we bring your ideas to life!</p>
            </v-card>
          </v-col>
         </v-row>
        </v-container>

</template>

<style scoped>
.section1 {
  background-image: url('../../assets/image/service/grapic/banner.webp');
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4); */
 
  max-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.box{
  height: 250px;
  padding: 10px;
}

.box:hover {
    box-shadow: 0 4px 8px rgba(14, 14, 14, 0.5); /* Add box shadow on hover */
  }

  .low-height {
	height: 200px !important;
}

.height {
	height: 600px !important;
}

</style>