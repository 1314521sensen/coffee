<template>
	<view class="ZLlist">
		<view class="plice" v-for="(item,index) in list" :key="index">
			<view class="species">
				<view class="species-plice species-left" @click="species">
					<image :src="item[0]"></image>
				</view>
				<view class="species-plice species-right" @click="species">
					<image :src="item[1]"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				list:[
					[
						"/static/zhonglei/list1.gif","/static/zhonglei/list2.gif"
					],
					[
						"/static/zhonglei/list3.gif","/static/zhonglei/list4.gif"
					],
					[
							"/static/zhonglei/list5.gif","/static/zhonglei/list6.gif"
					],
					[
							"/static/zhonglei/list7.gif","/static/zhonglei/list8.gif"
					],
				]
			}
		},
		methods:{
			species(){
				uni.navigateTo({
					url:"/pages/coffeebanner/coffeebanner"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.ZLlist{
		margin-top:60rpx;
		.plice{
			.species{
				display:flex;
				padding:0 40rpx;
				margin-bottom:60rpx;
				.species-plice{
					width: 43%;
					height:224rpx;
					// background-color:red;
					border-radius:20rpx;
					image{
						width: 100%;
						height:100%;
						border-radius:20rpx;
					}
				}
				.species-left{
					margin-right:100rpx;
				}
			}
			&:last-child{
				margin-bottom:0;
			}
		}
	}
</style>
