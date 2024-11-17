<template>
    <div class="baseLink__content" :class="[isSelectedClass, colorClass]">
        <component :is="iconMap[icon]" />
        <div>{{ label }}</div>
    </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import ResumeIcon from "./icons/CvIcon.vue";
import ContactIcon from "./icons/ContactIcon.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import LightbulbIcon from "./icons/LightbulbIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import WebAssetIcon from "./icons/WebAssetIcon.vue";

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
    },
    icon: {
        type: String,
        default: ""
    }
});

const isSelectedClass = computed(() =>
    props.isSelected ? "baseLink__isSelected" : ""
);

const colorClass = computed(
    () => {
        if (props.isSelected) return ""
        if (props.isPrimaryColor) return "primaryColor"
        return "secondaryColor"

    }
);

const iconMap = {
    Home: HomeIcon,
    Resume: ResumeIcon,
    Projects: LightbulbIcon,
    Contact: ContactIcon,
    Github: GithubIcon,
    App: WebAssetIcon
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
    background-color: var(--primary-color);
    color: var(--secondary-color);
    fill: var(--secondary-color);

}

.primaryColor {
    color: var(--primary-color);
    fill: var(--primary-color);


    transition: background-color 0.5s, color 0.5s, fill 0.5s;

    &:hover {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        fill: var(--secondary-color);

    }
}

.secondaryColor {
    color: var(--secondary-color);
    fill: var(--secondary-color);

    transition: background-color 0.5s, color 0.5s, fill 0.5s;

    &:hover {
        background-color: var(--secondary-color);
        color: var(--primary-color);
        fill: var(--primary-color);
    }
}
</style>