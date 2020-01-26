<template>
	<view class="addTianJia">
		<view class="addplice">
			添加收藏
		</view>
		<view class="addplice">
			立即购买
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
	.addTianJia{
		margin-top:30rpx;
		display:flex;
		.addplice{
			width: 50%;
			line-height:100rpx;
			color:#fff;
			font-size: 36rpx;
			text-align:center;
			font-weight: bold;
			&:first-child{
				background-color: #f8b651;
			}
			&:last-child{
				background-color: #ea6200;
			}
		}
	}
</style>
