<template>
	<view class="shopintroduce">
		<view class="shopText">
			<text>
				{{msg}}
			</text>
			<view class="shopprice">
				<text>￥26</text>
				<text>会员打7.5折</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:["msg"]
	}
</script>

<style lang="less" scoped>
	.shopintroduce{
		.shopText{
			font-size: 32rpx;
			font-weight: bold;
			color:#000;
			padding:0 20rpx;
			margin:30rpx 0 40rpx;
		}
		.shopprice{
			margin-top:38rpx;
			text{
				display:inline-block;
				font-size:45rpx;
				color:red;
				margin-right:40rpx;
				&:last-child{
					font-size: 35rpx;
					color:#fb6922;
					font-weight: 300;
					margin-right:0;
				}
			}
		}
	}
</style>
