<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center">
      <div class="blue-background">
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4">
            <div class="d-flex flex-column justify-content-center">
              <h3 class="text-center pt-4 header-h3">IP Address Tracker</h3>
              <div class="input-group my-3">
                <input
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Search for any IP address or domain"
                  aria-label="Search for any IP address or domain"
                  aria-describedby="basic-addon2"
                >
                <span
                  class="input-group-text d-flex justify-content-center alig-items-center"
                  id="basic-addon2"
                ><i class="fas fa-chevron-right fa"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div class="data-status"></div>
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
  background-image: url("../assets/pattern-bg.png");
  height: 250px;
  width: 1440px;
  .header-h3 {
    color: white;
  }
  span#basic-addon2 {
    background-color: hsl(0, 0%, 17%);
    border: none;
    width: 50px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    i {
      color: white;
    }
  }
  .input-group {
    height: 50px;
    input.form-control {
      border: none;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      padding-left: 20px;
    }
  }
}
</style>