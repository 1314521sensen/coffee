<template>
	<view class="shopping-banner">
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index" class="image">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: '/static/coffeebanner/banner1.gif'
				}, {
					id: 1,
					type: 'image',
					url:"/static/coffeebanner/banner2.gif"
				}, {
					id: 2,
					type: 'image',
					url:"/static/coffeebanner/banner3.gif"
				}],
				dotStyle: false
			}
		},
		methods:{
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
		}
	}
</script>

<style lang="less" scoped>
	.shopping-banner{
		height:600rpx;
		.screen-swiper{
			height:100%;
			.image{
				width: 100%;
				height:100%;
			}
		}
	}
</style>
