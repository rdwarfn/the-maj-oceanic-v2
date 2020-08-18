<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="data in store" :key="data.id">
      {{ data.text }}
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  data: () => ({
    store: [{
      id: 0,
      text: "Know where you want to be.\n Else is secondary.",
      image: "~/assets/images/carousel/banner/5.png"
    },{
      id: 1,
      text: "'Kow where you want to be.\n Else is secondary.",
      image: "~/assets/images/carousel/banner/6.png"
    }],
    swiperOption: {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  })
}
</script>

<style>

</style>