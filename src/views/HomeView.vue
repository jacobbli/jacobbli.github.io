<template>
  <div class="homeView__container">
    <div class="homeView__content">
      <h1>Hi!</h1>
      <p>I'm a techie with a passion for automation. I love finding ways to help people work more efficiently.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homeView__container {
  width: 100%;
  display: flex;
  justify-content: center;

  .homeView__content {
    width: 380px;
    height: 380px;
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    background-color: #2C734F;
    color: #DFF2E9;
    border-radius: 50%;
    text-align: center;
  }
}
</style>