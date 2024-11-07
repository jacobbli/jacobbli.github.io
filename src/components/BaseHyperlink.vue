<template>
    <div class="navigationItem__content" :class="isSelectedClass">
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    isSelected: {
        type: Boolean,
        default: false,
    },
});

const isSelectedClass = computed(() =>
    props.isSelected ? "navigationItem__isSelected" : ""
);
</script>

<style lang="scss" scoped>
.navigationItem__content {
    display: flex;
    gap: 4px;
    text-decoration: none;
    color: #258f2e;

    cursor: pointer;
}

.navigationItem__isSelected {
    font-weight: bold;
}
</style>