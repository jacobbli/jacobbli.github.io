<template>
    <div class="baseToolTip">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.baseToolTip {
    padding: 8px;
    font-size: 0.70rem;
    border: 1px solid rgb(185, 185, 185);
    border-radius: 2px;
    background-color: var(--background-colour);
    color: black;

  z-index: 99;

}
</style>