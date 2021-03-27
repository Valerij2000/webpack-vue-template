<template>
  <div>
    <section>
    <div class="container">
      <img src="/assets/img/logo.png" :alt="message" />
      <p>{{ message }}</p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <h1>Hello World!</h1>
          <button type="button" class="btn btn-primary">Primary</button>
        </div>
      </div>
    </div>

  </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'Example Vue component'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
img {
  max-width: 200px;
}
</style>
