<script setup>
let name = ref('');
let email = ref('');
let subject = ref('');
let message = ref('');

async function sendMail() {
  try {
    let res = await fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
    });

    if (res.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email');
  }

  name.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
}
</script>

<template>
  <section class="section1 d-flex align-center">
    <div class="px-10">
      <h1 style="color: yellow; font-size: 70px">Contact Us</h1>
      <p style="color: white; font-size: 30px">Get to know us better</p>
    </div>
  </section>

  <section class="section4">
    <v-container>
      <h2 class="d-block text-center my-10">
        <span style="font-weight: bolder">CONTACT</span> INFORMATION
      </h2>
      <p class="d-block text-center">
        With Incrementors you get a bunch of professionals ready to provide you
        with a personalized solution around the rims of all your business
        shortcomings. We are known for our excellence in services and are
        complimented for our professional solutions and accommodative approach
        to fulfill every possible miss that our clients face during their
        alliance with us. Our skilled team of experienced specialists thrives to
        enhance your website to bring you more visitors and revenue. We’re
        committed to building innovative strategies and put your business out
        there as an online expert. Get in touch with world-class professionals
        to tackle your business hurdles for you.
      </p>
    </v-container>

    <section class="section2">
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center">
            <div
              class="d-flex justify-center py-10 box"
              style="border: 1px solid black; width: 350px"
            >
              <div>
                <div class="d-flex justify-center mb-2">
                  <Icon
                    name="ic:sharp-email"
                    style="font-size: 40px; color: #20396e"
                  />
                </div>
               
                <p class="mb-1 mt-5 text-center">manger@wingstarnarketing.com</p>
              
               <div class="d-flex justify-center my-3">
                 <v-btn style="background-color: #20396e; color: white"
                  >View Services</v-btn
                >
               </div>
              </div>
            </div>
          </v-col>

          <v-col class="d-flex justify-center">
            <div
              class="d-flex justify-center py-10 box"
              style="border: 1px solid black; width: 350px"
            >
              <div>
                <div class="d-flex justify-center mb-2">
                  <Icon
                    name="carbon:phone-filled"
                    style="font-size: 40px; color: #20396e"
                  />
                </div>
             
                <p class="mb-1 mt-5 text-center">8000189694</p>
                <p  class="mb-2 mt-2 text-center">8209326351</p>
             <div class="d-flex justify-center">
                 <v-btn style="background-color: #20396e; color: white"
                  >View Services</v-btn
                >
             </div>
              </div>
            </div>
          </v-col>

          <v-col class="d-flex justify-center">
            <div
              class="d-flex justify-center py-10 box"
              style="border: 1px solid black; width: 350px"
            >
              <div>
                <div class="d-flex justify-center mb-2">
                  <Icon
                    name="fa6-solid:location-pin"
                    style="font-size: 40px; color: #20396e"
                  />
                </div>
            <p class="mb-1 mt-5 text-center">Front of JM PLAZA Shop 2 star marketing, fatehpur road sikar rajasthan,(332001)</p>
               
               <div class="d-flex justify-center my-3">
                 <v-btn style="background-color: #20396e; color: white"
                  >View Services</v-btn
                >
               </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section3">
     <v-container>
			 <div class="d-flex justify-center">
      <div>
				  <hr />
        <p class="mt-10 text-center" style="font-size: 30px; font-weight: bold" >
          BUSINESS HOURS
        </p>
				<p class="text-center">We are always available to hear from you with our round-the-clock support system. You can also check below the nearest physical office and drop by some time to have a coffee together. All of our office branches are 24*7 working. We are curious to hear about your business requirement and associate ourselves as your extended family.</p>
        <hr />
			</div>
      </div>
		 </v-container>
    </section>
  </section>
</template>

<style scoped>
.image {
  max-width: 400px;
  width: 100%;
}

.section1 {
  width: 100%;
  height: 400px;
  background-color: #20396e;
}

.box:hover {
  border: 3px solid goldenrod;
}
</style>
