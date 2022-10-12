<template>
  <div>
    <IntroMovie/>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
    'IntroMovie' :() => import('@/components/IntroMovie'),
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  },
};
</script>

<style>
</style>
