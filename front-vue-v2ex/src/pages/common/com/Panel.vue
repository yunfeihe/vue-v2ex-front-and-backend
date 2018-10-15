<template>
    <div class="page-panel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import '../style/mixin.scss';
    .page-panel {
        @include panel;
    }
</style>
