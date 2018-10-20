<template>
    <div class="index-side-bar">
        <personal-info></personal-info>
        <div class="sep-20"></div>
        <hot-topic></hot-topic>
    </div>
</template>

<script>
    import PersonalInfo from './Personal-Info';
    import HotTopic from '@com/HotTopic';
    export default {
        components: {
            PersonalInfo,
            HotTopic
        }
    }
</script>

<style lang="scss" scoped>
    .index-side-bar {
        background-color: inherit;
        div.sep-20 {
            height: 20px;
        }
    }
</style>
