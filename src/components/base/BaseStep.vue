<script setup>
import { defineProps } from 'vue';
import CircleFilledIcon from '../icons/CircleFilledIcon.vue';
import CircleOutlinedIcon from '../icons/CircleOutlinedIcon.vue';

defineProps({
    isSelected: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div v-if="isSelected" class="baseStep">
        <circle-filled-icon />
    </div>
    <div v-else class="baseStep">
        <circle-outlined-icon />
    </div>
</template>
<style lang="scss" scoped>
.baseStep {
    color: var(--text-colour);
}
</style>