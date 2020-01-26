<template>
	<view class="coffee">
		<view class="LogIn" @click="Login('/pages/my/my')">
			<text>登录/</text>
			<text>注册</text>
		</view>
		<view class="coffee-right"></view>
		<view class="list">
			<view class="icon" @click="store('/pages/coffeezhonglei/coffeezhonglei')"></view>
			<view class="icon" @click="store('/pages/shopStore/shopStore')"></view>
			<view class="icon" @click="store('/pages/shop/shop')"></view>
			<view class="icon" @click="store('/pages/shopStore/shopStore')"></view>
			<view class="icon" @click="store('/pages/my/mydetails')"></view>
		</view>
		<view class="shopName">
			<view class="shopicon"></view>
			<text>
				帝豪咖啡厅
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		created(){
			
		},
		methods: {
			store(url){
				uni.switchTab({
					url:url
				})
			},
			Login(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="less">
	.coffee{
		position: relative;
		overflow:hidden;
		height:1340rpx;
		background:#000 url("../../static/index/bgi.jpg") no-repeat;
		background-size: 100% 100%;
		.LogIn{
			width: 200rpx;
			height:80rpx;
			background-color:#fb7f3c !important;
			border-radius:0 16rpx 16rpx 0;
			margin-top:44rpx;
			padding-left:30rpx;
			text{
				text-align:center;
				color:#fff;
				line-height:80rpx;
				font-size: 34rpx;
			}
		}
		.coffee-right{
			position:absolute;
			top:200rpx;
			right:0;
			height: 75%;
			width: 82%;
			background: url("../../static/index/bgi2.gif");
			background-size: 100% 100%;
		}
		.list{
			position:absolute;
			top:200rpx;
			right:0;
			height: 75%;
			width: 90%;
			.icon{
				position:absolute;
				top: -48rpx;
				left: 264rpx;
				width: 180rpx;
				height:180rpx;
				border-radius: 50%;
				background: url(../../static/index/list.gif) no-repeat;
				background-position: 0 0;
				background-size: 768rpx;
				&:nth-child(2){
					top: 124rpx;
					left: 44rpx;
					background-position: -236rpx 0;
				}
				&:nth-child(3){
					top:388rpx;
					left:-20rpx;
					background-position: -468rpx 0;
				}
				&:nth-child(4){
					top: 662rpx;
					left: 44rpx;
					background-position: 0 -228rpx;
				}
				&:last-child{
					top: 852rpx;
					left: 264rpx;
					background-position:-236rpx -228rpx;
				}
			}
		}
		.shopName{
			display:flex;
			position: absolute;
			bottom:20rpx;
			left:0rpx;
			width:100%;
			// height:20rpx;
			// background-color:green;
			color:#fff;
			.shopicon{
				width: 60rpx;
				height:60rpx;
				// background-color:yellow;
				background: url("../../static/index/shop.gif") no-repeat;
				background-size: 100% 100%;
				margin:0 20rpx;
			}
			text{
				font-size: 22rpx;
				margin-top:30rpx
			}
		}
	}
</style>
