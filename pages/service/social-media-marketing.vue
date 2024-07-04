<template>
  

   <section class="section1 parallax d-none d-md-block height">
  </section>
	<section class="section1 parallax d-block d-md-none low-height">
  </section>

  <v-container>
    <h1 class="display-2 text-center my-5" style="color: #20396e">
      Star Marketing
    </h1>
    <p class="text-center">
      Your partner for effective social media marketing solutions.
    </p>
    <!-- <v-row>
            <v-col cols="12" md="6">
              <v-card class="my-5 box">
                <v-card-title class="text-center">
                  <h2>Our Services</h2>
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li>Social Media Strategy Development</li>
                    <li>Content Creation and Management</li>
                    <li>Community Engagement</li>
                    <li>Analytics and Reporting</li>
                    <li>Advertising Campaigns</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="my-5 box">
                <v-card-title class="text-center">
                  <h2>Contact Us</h2>
                </v-card-title>
                <v-card-text>
                  <p>Address: 123 Star Avenue, Cityville</p>
                  <p>Phone: 555-555-5555</p>
                  <p>Email: info@starmarketing.com</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row> -->

    <v-row>
      <v-col cols="12" md="5">
        <div class="d-flex">
          <Icon
            name="icon-park-solid:correct"
            style="font-size: 100px; color: blue"
          />
          <h6 style="font-size: 20px" class="mt-8 pl-3">
            Running a business is your prime responsibility. With the increase
            in the number of users hanging out on various social media
            platforms, businesses can no longer ignore the power of these
            platforms to reach their customers
          </h6>
        </div>
        <div class="d-flex">
          <Icon
            name="icon-park-solid:correct"
            style="font-size: 70px; color: blue"
          />
          <h6 style="font-size: 20px" class="mt-5 pl-3">
            But the problem is that most businesses do not have the proper
            knowledge and the expertise to use these platforms to their full
            potential
          </h6>
        </div>
      </v-col>

      <v-col cols="12" md="5">
        <img
          src="../../assets/image/service/social/social-banner.webp"
          alt=""
         class="image"
        />
      </v-col>
    </v-row>

    <section class="section2 my-16" style="margin-top: 50px">
      <h3 class="text-center my-10" style="color: #20396e">
        <b>Why does your business need to have social media marketing?</b>
      </h3>

      <v-row>
        <v-col cols="12" lg="5">
          <img
            src="../../assets/image/service/social/soical.webp"
            alt=""
          class="image"
          />
        </v-col>

        <v-col cols="12" lg="5">
          <ul>
            <li class="my-5">
              Social media plays a crucial role in affecting public opinion
              about your brand. That is why various brands use platforms such as
              Facebook, Twitter, LinkedIn, Instagram, and Snapchat to enter into
              an authoritative dialogue with their fans.
            </li>

            <li class="my-5">
              Successful social media marketing campaigns combine incredible
              storytelling and business communication with the advanced
              targeting capabilities of social networks to achieve business
              goals
            </li>

            <li class="my-5">
              Social media marketing companies develop various strategies that
              adequately use organic content and paid ads to reach your relevant
              audience
            </li>
          </ul>
        </v-col>
      </v-row>
    </section>

    <h2 class="text-center my-5" style="margin-bottom: 70px">Our Work</h2>
    <v-row>
      <v-col cols="12" md="5" lg="4">
        <v-card class="mx-auto" max-width="344" tile>
          <img
            src="../../assets/image/service/social/image4.jpg"
            height="240"
            style="max-width: 344px"
          />
        </v-card>
      </v-col>
      <v-col cols="12" md="5" lg="4">
        <v-card class="mx-auto" max-width="344" tile>
          <img
            src="../../assets/image/service/social/image5.jpg"
            height="200"
            style="max-width: 344px"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="5" lg="4">
        <v-card class="mx-auto" max-width="344" tile>
          <img
            src="../../assets/image/service/social/image1.jpg"
            height="200"
            style="max-width: 344px"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="5" lg="4">
        <v-card class="mx-auto" max-width="344" tile>
          <img
            src="../../assets/image/service/social/image2.jpg"
            height="240"
            style="max-width: 344px"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="5" lg="4">
        <v-card class="mx-auto" max-width="344" tile>
          <img
            src="../../assets/image/service/social/image3.jpg"
            height="240"
            style="max-width: 344px"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="5" lg="4">
        <v-card class="mx-auto" max-width="344" tile>
          <img
            src="../../assets/image/service/social/image6.jpg"
            height="200"
            style="max-width: 344px"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const images = ref([
  { src: '~/assets/image/service/social/image1.jpg' },
  { src: 'https://via.placeholder.com/344x200' },
  { src: 'https://via.placeholder.com/344x200' },
  { src: 'https://via.placeholder.com/344x200' },
  { src: 'https://via.placeholder.com/344x200' },
  { src: 'https://via.placeholder.com/344x200' },
]);
</script>

<style scoped>
.box {
  border: 2px solid #20396e;
}

.section1 {
  background-image: url('../../assets/image/service/social/banner2.webp');
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

.image{
  max-width: 500px;
  width: 100%;
}
</style>
