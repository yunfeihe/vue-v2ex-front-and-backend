<template>
    <panel-list class="main-content">
        <div class="list-item tabs">
            <router-link v-for="tab in tabItems" :key="tab"></router-link>
        </div>
        <div class="list-item nodes"></div>
        <div class="posts">
            <div class="list-item post"></div>
        </div>
    </panel-list>
</template>

<script>
    import PanelList from '../../common/com/PanelList.vue';
    export default {
        components: {
            PanelList,
        },
        data() {
            return {
                tabItems: [
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                    {
                        name: 'all',
                        title: '全部',
                    },
                    {
                        name: 'tech',
                        title: '技术',
                    },
                ],
                nodeItems: [],
                postItems: [],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-content {
        .list-item {

        }
    }
</style>    
