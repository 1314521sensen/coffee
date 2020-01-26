<template>
	<view class="q">
		<sao msg="咖啡详情" url="/pages/coffeezhonglei/coffeezhonglei"></sao>
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import sao from "../../compent/sao.vue";
	export default {
		data() {
			return {
				swiperList: [{
					id: 0,
					type: 'image',
					url: '/static/coffeebanner/banner1.gif'
				}, {
					id: 1,
					type: 'image',
					url: '/static/coffeebanner/banner2.gif',
				}, {
					id: 2,
					type: 'image',
					url: '/static/coffeebanner/banner3.gif'
				}],
				dotStyle: false,
			}
		},
		methods: {
			DotStyle(e) {
					this.dotStyle = e.detail.value
				},
				// cardSwiper
				cardSwiper(e) {
					this.cardCur = e.detail.current
				},
			},
			components:{
				sao:sao
			}
	}
</script>

<style lang="less">
	.q{
		overflow:hidden;
		.screen-swiper{
			height:1255rpx;
			.image{
				width: 100%;
				height:100%;
			}
		}
	}
</style>
