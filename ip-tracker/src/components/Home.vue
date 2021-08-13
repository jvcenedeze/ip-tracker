<template>
  <div class="container-fluid">
    <div class="container-fluid blue-background">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <div class="d-flex flex-column justify-content-center">
            <h3 class="text-center pt-3 header-h3">IP Address Tracker</h3>
            <div class="input-group my-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search for any IP address or domain"
                aria-label="Search for any IP address or domain"
                aria-describedby="basic-addon2"
              >
              <span
                class="input-group-text"
                id="basic-addon2"
              ><i class="fas fa-angle-right"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
.blue-background {
  background-color: blue;
  .header-h3 {
    color: white;
  }
  span#basic-addon2 {
    background-color: hsl(0, 0%, 17%);
    i {
      color: white;
    }
  }
}
</style>