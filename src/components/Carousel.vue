<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item><img
        class="image"
        v-bind:src="imageUrls[0]"
    /></van-swipe-item>
    <van-swipe-item><img
        class="image"
        v-bind:src="imageUrls[1]"
    /></van-swipe-item>
    <van-swipe-item><img
        class="image"
        v-bind:src="imageUrls[2]"
    /></van-swipe-item>
    <van-swipe-item><img
        class="image"
        v-bind:src="imageUrls[3]"
    /></van-swipe-item>
    <van-swipe-item><img
        class="image"
        v-bind:src="imageUrls[4]"
    /></van-swipe-item>
    <van-swipe-item><img
        class="image"
        v-bind:src="imageUrls[5]"
    /></van-swipe-item>
  </van-swipe>
</template>

<script>
import image1 from "../assets/gallery/HYW09498.jpg"
import image2 from "../assets/gallery/HYW09305.jpg"
import image3 from "../assets/gallery/HYW09384.jpg"
import image4 from "../assets/gallery/HYW09470.jpg"
import image5 from "../assets/gallery/HYW09542.jpg"
import image6 from "../assets/gallery/HYW09536.jpg"

export default {
  components: {},
  data() {
    return {
      imageUrls: [
        image3,
        image1,
        image2,
        image4,
        image5,
        image6
      ],
    }
  },
}
</script>

<style>
.images {
  position: relative;
  display: flex;
  height: auto;
  transition: transform 0.5s;
}

.image {
  width: 100%;
  height: auto;
  max-width: 2000px;
  max-height: 2000px;
}

.image-circle-wrapper {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -18px);
}

.image-circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #d2d2d2;
  margin-right: 12px;
}

.image-circle:last-child {
  margin-right: 0;
}

.image-circle.activeImg {
  background-color: #404040;
}

.slick-arrow {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 45%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}

.slick-prev {
  left: 150px;
  z-index: 10;
}

.slick-prev::before {
  content: "";
  display: inline-block;
  width: 36px;
  height: 36px;
  border-left: 8px solid rgba(0, 0, 0, 0.5);
  border-bottom: 8px solid rgba(0, 0, 0, 0.5);
  transform: rotate(45deg);
}

.slick-prev:focus::before,
.slick-prev:hover::before {
  border-left: 8px solid rgba(0, 0, 0, 0.8);
  border-bottom: 8px solid rgba(0, 0, 0, 0.8);
}

.slick-next {
  right: 150px;
  z-index: 10;
}

.slick-next::before {
  content: "";
  display: inline-block;
  width: 36px;
  height: 36px;
  border-top: 8px solid rgba(0, 0, 0, 0.5);
  border-right: 8px solid rgba(0, 0, 0, 0.5);
  transform: rotate(45deg);
}

.slick-next:focus::before,
.slick-next:hover::before {
  border-top: 8px solid rgba(0, 0, 0, 0.8);
  border-right: 8px solid rgba(0, 0, 0, 0.8);
}
</style>