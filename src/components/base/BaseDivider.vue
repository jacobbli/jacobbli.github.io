<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    isVertical: {
        type: Boolean,
        default: false
    }
})

const dividerClass = computed(() => props.isVertical ? "baseDivider__vertical" : "baseDivider__horizontal")

</script>
<template>
    <div :class="dividerClass"></div>
</template>

<style lang="scss" scoped>
.baseDivider__horizontal {
    width: 80%;
    height: 1px;
    align-self: center;
    background: linear-gradient(to right, transparent, var(--primary-grey-85) 10%, var(--primary-grey-85) 90%, transparent 100%);
}

.baseDivider__vertical {
    width: 1px;
    height: 80%;

    align-self: center;
    background: linear-gradient(transparent, var(--primary-grey-85) 10%, var(--primary-grey-85) 90%, transparent 100%);
}
</style>