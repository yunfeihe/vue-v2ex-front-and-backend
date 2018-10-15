<template>
    <panel class="panel-list">
        <slot>
            <div class="panel-list-item test">default</div>
            <div class="panel-list-item test">default</div>
        </slot>
    </panel>
</template>

<script>
    import Panel from './Panel.vue';

    export default {
        components: {
            Panel,
        },
        render(h){
            return h()
        }

    }
</script>

<style lang="scss" scoped>
    .panel-list {
        .panel.list-item {
        border-bottom: 1px solid #e2e2e2;
        &:last-of-type {
            border: none;
        }
    }
    }

    

    .panel-list-item.test {
        font-size: 14px;
        line-height: 1.2;
        padding: 10px;
    }
</style>