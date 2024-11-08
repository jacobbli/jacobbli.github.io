<template>
    <div class="navigationItem__content" :class="[isSelectedClass, colorClass]">
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
    isPrimaryColor: {
        type: Boolean,
        default: true,
    },
});

const isSelectedClass = computed(() =>
    props.isSelected ? "navigationItem__isSelected" : ""
);

const colorClass = computed(() =>
    props.isPrimaryColor ? "primaryColor" : "secondaryColor"
);
</script>

<style lang="scss" scoped>
.navigationItem__content {
    display: flex;
    gap: 4px;
    text-decoration: none;
    color: #2C734F;

    cursor: pointer;
}

.navigationItem__isSelected {
    font-weight: bold;
}

.primaryColor {
    color: #2C734F;

}

.secondaryColor {
    color: #def2e8
}
</style>