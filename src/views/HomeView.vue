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
  position: relative;
  top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;

  .homeView__content {
    width: 320px;
    height: 320px;
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    background-color: var(--primary-color);
    color: var(--secondary-color);
    border-radius: 50%;
    text-align: center;
  }
}
</style>