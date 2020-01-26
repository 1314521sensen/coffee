<template>
	<view class="my">
		<view class="my-bg">
			<view class="hidden"></view>
			<view class="my-icon">
				<view class="my-auto">
					<image src="/static/my/portrait.gif"></image>
				</view>
			</view>
			<view class="my-inp">
				<view class="inp-plice">
					<view class="inp-icon"></view>
					<input type="text" placeholder="请输入账户">
				</view>
				<view class="inp-plice">
					<view class="inp-icon"></view>
					<input type="text" placeholder="请输入密码">
				</view>
			</view>
			<view class="my-btn">
				<view class="btn-plice">会员登录</view>
				<view class="btn-plice" @click="login">没有账号,立即登录</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login(){
				uni.navigateTo({
					url:"/pages/my/registered"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.my{
		height:1340rpx;
		background:url("../../static/my/bg.gif") no-repeat;
		background-size: 100% 100%;
		.my-bg{
			height:100%;
			background-color:rgba(0,0,0,0.5);
			.hidden{
				height:260rpx;
			}
			.my-icon{
				.my-auto{
					width: 26%;
					height:200rpx;
					// background-color: green;
					margin:0 auto;
					border-radius:50%;
					image{
						width: 100%;
						height:100%;
						border-radius:50%;
					}
				}
			}
			.my-inp{
				// background-color:green;
				padding: 0 40rpx;
				margin:130rpx 0 100rpx;
				.inp-plice{
					display:flex;
					border-bottom:1px solid #999;
					.inp-icon{
						width: 50rpx;
						height:50rpx;
						background-image:url("../../static/my/zhang.png");
						background-repeat: no-repeat;
						background-size: 100% 100%;
					}
					input{
						color:#fff;
					}
					&:last-child .inp-icon{
						background-image:url("../../static/my/pass.png");
					}
					&:last-child{
						margin-top:60rpx;
					}
				}
			}
			.my-btn{
				.btn-plice{
					width: 80%;
					// height:50rpx;
					background-color:#a85629;
					margin:0 auto;
					line-height:100rpx;
					color:#fff;
					text-align:center;
					font-size: 32rpx;
					font-weight: bold;
					&:last-child{
						margin-top:32rpx;
					}
				}
			}
		}	
	}
</style>
