<template>
    <div class="baseLink__content" :class="[isSelectedClass, colorClass]">
        <component :is="iconMap[icon]" />
        <slot></slot>
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
import LinkedinIcon from "./icons/LinkedinIcon.vue";
import EmailIcon from "./icons/EmailIcon.vue";

const props = defineProps({
    isSelected: {
        type: Boolean,
        default: false,
    },
    isPrimaryColor: {
        type: Boolean,
        default: true,
    },
    icon: {
        type: String,
        default: ""
    }
});

const isSelectedClass = computed(() => {
    if (props.isSelected && props.isPrimaryColor) return "baseLink__isSelected__primaryColor"
    if (props.isSelected && !props.isPrimaryColor) return "baseLink__isSelected__secondaryColor"
    return ""
}
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
    App: WebAssetIcon,
    LinkedIn: LinkedinIcon,
    Email: EmailIcon
}

</script>

<style lang="scss" scoped>
.baseLink__content {
    display: flex;
    gap: 4px;
    width: fit-content;
    padding: 4px 8px 4px 8px;
    border-radius: 20px;
    align-items: flex-end;

    cursor: pointer;
}

.baseLink__isSelected {

    &__primaryColor {
        background-color: var(--primary-color);
        color: var(--secondary-font-color);
        fill: var(--secondary-font-color);
    }

    &__secondaryColor {
        background-color: var(--secondary-color);
        color: var(--primary-font-color);
        fill: var(--primary-font-color);
    }
}

.primaryColor {
    color: var(--primary-font-color);
    fill: var(--primary-font-color);

    transition: background-color 0.5s, color 0.5s, fill 0.5s;

    &:hover {
        background-color: var(--primary-color);
        color: var(--secondary-font-color);
        fill: var(--secondary-font-color);
    }
}

.secondaryColor {
    color: var(--secondary-font-color);
    fill: var(--secondary-font-color);

    transition: background-color 0.5s, color 0.5s, fill 0.5s;

    &:hover {
        background-color: var(--secondary-color);
        color: var(--primary-font-color);
        fill: var(--primary-font-color);
    }
}
</style>