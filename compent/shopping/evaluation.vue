<template>
	<view class="shopevaluation">
		<view class="evaluationbgi">评价</view>
		<view class="evaluationintroduce">
			<view class="evaluationintroduce-top">
				<view class="evaluationTitle">
					<text>老***喽</text>
				</view>
				<view class="evaluationInter">
					卡布奇诺咖啡是意大利咖啡的一种变化,即在偏浓的咖啡上,倒入以蒸汽发泡的牛奶,此时咖啡的颜色就像卡布奇诺教会修士深褐色外衣上覆的头巾一样,咖啡因此得名。
				</view>
			</view>
			<view class="evaluationintroduce-bottom">
				查看全部评价
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}		
	}
</script>

<style lang="less" scoped>
	.shopevaluation{
		.evaluationbgi{
			height:60rpx;
			background-color: #fff;
			line-height:60rpx;
			text-align:center;
			font-size: 36rpx;
			color:#999;
		}
		.evaluationintroduce{
			.evaluationintroduce-top{
				// height:200rpx;
				// background-color:red;
				padding:0 20rpx;
				margin:30rpx 0;
				.evaluationTitle{
					font-size:37rpx;
					
				}
				.evaluationInter{
					font-size: 22rpx;
				}
			}
			.evaluationintroduce-bottom{
				width: 40%;
				// height:50rpx;
				// background-color:green;
				margin:0 auto;
				border-radius:28rpx;
				color:#ff6a00;
				border:1px solid #ff6a00;
				padding:12rpx 0;
				text-align:center;
				font-size: 34rpx;
				font-weight: bold;
			}
		}
	}
</style>
