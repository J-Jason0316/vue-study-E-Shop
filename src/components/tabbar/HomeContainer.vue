<template>
    <div>
        <!-- 轮播 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item, i) in Img" :key="i">
                <img :src="item.img" alt>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-camera"></span>
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-chatboxes"></span>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-pengyouquan"></span>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
// 使用 Mock
var Mock = require("mockjs");
var Random = Mock.Random;

Mock.mock("http://123.com", {
    data: [
        {
            img: Random.image("375x200", "#00405d", "#FFF", "Mock.js")
        },
        {
            img: Random.image("375x200", "#05505d", "#FFF", "!")
        },
        {
            img: Random.image("375x200", "#00405d", "#FFF", "520")
        }
    ]
});

import { Toast } from "mint-ui";

export default {
    data() {
        return {
            Img: []
        };
    },
    created() {
        this.getImg();
    },
    methods: {
        getImg() {
            this.axios.get("http://123.com").then(Response => {
                console.log(Response.data.data);
                this.Img = Response.data.data;
                Toast("获取成功");
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 200px;

    .mint-swipe-item {
        &:nth-child(1) {
            background-color: rgb(54, 134, 209);
        }
        &:nth-child(2) {
            background-color: rgb(42, 203, 231);
        }
        &:nth-child(3) {
            background-color: rgb(220, 241, 24);
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
}
.mui-grid-view.mui-grid-9  {
    background-color: #fff;
    border: none;
    .mui-table-view-cell {
        border-right:none;
        border-bottom:none;
    }
}
</style>


