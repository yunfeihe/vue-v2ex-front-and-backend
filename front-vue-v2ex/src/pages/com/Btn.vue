<template>
    <div @click="handleClick" class="v2ex-btn" :style="styleConfig">
        <slot>default</slot>
    </div>
</template>

<script>
    export default {
        props: {
            width: {
                type: Number,
                default: 40,
            },
            height: {
                type: Number,
                default: 20,
            },
            fontSize: {
                type: Number,
                default: 14,
            },
            color: {
                type: String,
                default: 'black',
            }
        },
        data() {
            return {
                styleConfig: {
                    height: this.height + 'px',
                    width: this.width + 'px',
                    lineHeight: this.height + 'px',
                    fontSize: this.fontSize + 'px',
                    color: this.color,
                }
            }
        },
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v2ex-btn {
        border: 1px solid rgba(80,80,90,.2);
        background: linear-gradient(rgba(80,80,90,.1) 0%, #fff 5%, rgb(240, 240, 240) 50%, rgba(80,80,90,.35) 100%);
        border-radius: 4px;
        font-style: 14px;
        text-align: center;
        font-weight: 700;
        box-sizing: border-box;
        &:hover {
            cursor: pointer;
        }
        &:active {
            background-color: #e2e2e2;
            background: linear-gradient(#e2e2e2 0%, rgb(209, 209, 209) 50%, #e2e2e2 100%);
        }
        
    }
</style>