<template>
    <div class="workHistoryItem__container">
        <div class="workHistoryItem__line"></div>
        <div class="workHistoryItem__content">
            <div class="workHistoryItem__dates">{{ experience.start_date }} — {{ experience.end_date }}</div>
            <div>{{ experience.title }}</div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    experience: {
        type: Object,
        required: true
    },
    padding: {
        type: String,
        default: '0px'
    }
})

</script>

<style lang="scss" scoped>
.workHistoryItem__container {
    display: flex;
    // flex-direction: column;
    // padding-top: v-bind(padding);
    min-height: v-bind(padding);

    .workHistoryItem__line {
        background-color: red;
        width: 5px;
        // height: v-bind(padding);
    }
}
</style>