<template>
    <div class="baseTimelineItem__container">
        <div class="baseTimelineItem__decoration">
            <div class="baseTimelineItem__tick"></div>
            <div :class="decorationLineClass"></div>
        </div>

        <div class="baseTimelineItem__content">
            <div>{{ event.start_date }} — {{ event.end_date }}</div>
            <div><strong>{{ event.title }}</strong></div>
            <div>{{ event.organization }}</div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    event: {
        type: Object,
        required: true
    },
    isFirst: {
        type: Boolean,
        default: false
    },
    isLast: {
        type: Boolean,
        default: false
    }
})

const decorationLineClass = computed(() =>{
    if (props.isFirst) return "baseTimelineItem__line__first" 
    if (props.isLast) return "baseTimelineItem__line__last"
    return "baseTimelineItem__line"
})

</script>

<style lang="scss" scoped>
.baseTimelineItem__container {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 12px;

    .baseTimelineItem__decoration {
        position: relative;
        display: flex;

        .baseTimelineItem__tick {
            border: 5px solid #2C734F;
            border-radius: 50%;
            height: 5px;
            width: 5px;

            align-self: center;
        }

        .baseTimelineItem__line {
            background-color: #2C734F;
            width: 4px;
            height: 100%;

            position: absolute;
            top: 0%;
            left: 3px;
        }

        .baseTimelineItem__line__first {
            background-color: #2C734F;
            width: 4px;
            height: 100%;

            position: absolute;
            top: 50%;
            left: 3px;
        }

        .baseTimelineItem__line__last {
            background-color: #2C734F;
            width: 4px;
            height: 50%;

            position: absolute;
            top: 0%;
            left: 3px;
        }
    }
}
</style>