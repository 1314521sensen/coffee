<template>
	<view class="bgregistered">
		<view class="opti">
			<view class="inp-aoto">
				<view class="inp" v-for="(item,index) in list" :key="index">
					<view class="icon">
						<image :src="item.image"></image>
					</view>
					<input type="text" :placeholder="item.pla">
				</view>
			</view>
			<view class="RegisterNow">
				立即注册
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				list:[
					{
						image:"/static/my/zhang.png",
						pla:"Name/用户名"
					},
					{
						image:"/static/my/pass.png",
						pla:"Password/密码"
					},
					{
						image:"/static/my/email.png",
						pla:"Email/邮箱"
					},
					{
						image:"/static/my/biry.png",
						pla:"Birthday/生日"
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.bgregistered{
		height:1335rpx;
		background:url("../../static/my/bg.gif") no-repeat;
		background-size: 100% 100%;
		.opti{
			overflow: hidden;
			height:100%;
			background-color:rgba(0,0,0,0.6);
			.inp-aoto{
				margin-top:300rpx;
				padding:0 40rpx;
				.inp{
					display:flex;
					padding:20rpx 0;
					color:#fff;
					margin-bottom:80rpx;
					border-bottom:2rpx solid #fff;
					font-size: 32rpx;
					&:last-child{
						margin-bottom:0;
					}
					.icon{
						width:9%;
						height:60rpx;
						// background-color:red;
						margin-right:20rpx;
						image{
							width: 100%;
							height:100%;
						}
					}
					input{
						width: 90%;
						display:block;
						margin-top:12rpx;
					}
				}
			}
			.RegisterNow{
				width: 90%;
				background-color: #a65b2f;
				margin:140rpx auto 0;
				line-height:88rpx;
				text-align:center;
				color:#fff;
				font-size: 36rpx;
				font-weight: bold;
				border-radius:20rpx;
			}
		}
	}
</style>
