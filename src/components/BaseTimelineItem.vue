<template>
    <div class="baseTimelineItem__container">
        <div class="baseTimeLineItem__date">{{ event.start_date }} — {{ event.end_date }}</div>
        <div class="baseTimelineItem__decoration">
            <div class="baseTimelineItem__tick"></div>
            <div :class="decorationLineClass"></div>
        </div>

        <div class="baseTimelineItem__content">
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

const decorationLineClass = computed(() => {
    if (props.isFirst) return "baseTimelineItem__line__first"
    if (props.isLast) return "baseTimelineItem__line__last"
    return "baseTimelineItem__line"
})

</script>

<style lang="scss" scoped>
.baseTimelineItem__container {
    display: grid;
    grid-template-columns: 300px auto 300px;
    column-gap: 12px;

    .baseTimeLineItem__date {
        align-content: center;
        text-align: end
    }

    .baseTimelineItem__decoration {
        position: relative;
        display: flex;

        .baseTimelineItem__tick {
            border: 5px solid var(--primary-color);
            border-radius: 50%;
            height: 5px;
            width: 5px;

            align-self: center;
        }

        .baseTimelineItem__line {
            background-color: var(--primary-color);
            width: 4px;
            height: 100%;

            position: absolute;
            top: 0%;
            left: 3px;
        }

        .baseTimelineItem__line__first {
            background-color: var(--primary-color);
            width: 4px;
            height: 100%;

            position: absolute;
            top: 50%;
            left: 3px;
        }

        .baseTimelineItem__line__last {
            background-color: var(--primary-color);
            width: 4px;
            height: 50%;

            position: absolute;
            top: 0%;
            left: 3px;
        }
    }
}
</style>