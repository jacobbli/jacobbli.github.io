<template>
    <div class="baseLink__content" :class="[isSelectedClass, colorClass]">
        <component :is="iconMap[label]" />
        <div>{{ label }}</div>
    </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import ResumeIcon from "./icons/CvIcon.vue";
import ContactIcon from "./icons/ContactIcon.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import LightbulbIcon from "./icons/LightbulbIcon.vue";

const props = defineProps({
    isSelected: {
        type: Boolean,
        default: false,
    },
    isPrimaryColor: {
        type: Boolean,
        default: true,
    },
    url: {
        type: String,
        default: ""
    },
    label: {
        type: String,
        default: ""
    }
});

const isSelectedClass = computed(() =>
    props.isSelected ? "baseLink__isSelected" : ""
);

const colorClass = computed(() =>
    props.isPrimaryColor & !props.isSelected ? "primaryColor" : "secondaryColor"
);

const iconMap = {
    Home: HomeIcon,
    Resume: ResumeIcon,
    Projects: LightbulbIcon,
    Contacts: ContactIcon
}

</script>

<style lang="scss" scoped>
.baseLink__content {
    display: flex;
    gap: 4px;
    width: fit-content;
    padding: 4px 8px 4px 8px;
    border-radius: 20px;

    cursor: pointer;
}

.baseLink__isSelected {
    background-color: #2C734F;
    color: #def2e8
}

.primaryColor {
    color: #2C734F;
    fill: #2C734F;


    transition: background-color 0.5s, color 0.5s, fill 0.5s;

    &:hover {
        background-color: #2C734F;
        color: #def2e8;
        fill: #def2e8;

    }
}

.secondaryColor {
    color: #def2e8;
    fill: #def2e8;

    transition: background-color 0.5s, color 0.5s, fill 0.5s;

    &:hover {
        background-color: #def2e8;
        color: #2C734F;
        fill: #2C734F;
    }
}
</style>