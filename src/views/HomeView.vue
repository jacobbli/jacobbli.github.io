<template>
  <div class="homeView__container">
    <div class="homeView__content">
      <p>I'm a techie with a passion for business process automation.</p>
      <p>I love using technology to help people work more efficiently.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homeView__container {
  position: relative;
  top: 20px;

  display: flex;
  justify-content: center;

  .homeView__content {
    max-width: 600px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    color: var(--primary-font-color);
    font-family: var(--header-font);
    text-align: center;

    h1 {
      font-size: 52px;
    }

    p {
      font-size: 32px;
      line-height: 1.5;
    }
  }
}

@media only screen and (min-width: 768px) {
  .homeView__container {
    justify-content: left;

    .homeView__content{
      text-align: left;
    }
  }
}
</style>