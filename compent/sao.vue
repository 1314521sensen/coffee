<template>
	<view class="headTile">
		<view class="headicon" @tap="fanhui(url)"></view>
		{{msg}}
		<view class="headicon scan-code"></view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			fanhui(url){
				uni.navigateTo({
					url:url,
					fail(){
						uni.switchTab({
							url:url
						})
					}
				});
			},
			fanhuituo(url){
				
			}
		},
		props:["msg","url"]
	}
</script>

<style lang="less" scoped>
	.headTile{
		position:absolute;
		top:20rpx;
		left:0;
		z-index:1;
		width: 100%;
		display:flex;
		// height:10%;
		background-color:rgba(0,0,0,0.2);
		// margin-top:20rpx;
		text-align:center;
		font-size: 36rpx;
		color:#fff;
		font-weight: bold;
		justify-content: space-around;
		padding:10rpx 0;
		.headicon{
			width: 48rpx;
			height:48rpx;
			background: url("../static/icon/fanhui.png") no-repeat;
			background-size: 100% 100%;
		}
		.scan-code{
			background: url("../static/icon/sao.png") no-repeat;
			background-size: 100% 100%;
		}
	}
</style>
