<template>
	<view class="list">
		<view class="listIntroduce" v-for="(item,index) in storeList" :key="index">
			<view class="IntroduceLeft">
				<image :src="item.image"></image>
			</view>
			<view class="IntroduceRight">
				<view class="IntroduceRightTitle">
					{{item.title}}
				</view>
				<view class="IntroduceRightIntroduce">
					{{item.Introduce}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				storeList:[
					{
						image:"/static/headto/list/IntroduceLef1.gif",
						title:"帝豪咖啡厅的顶级设施",
						Introduce:"意大利咖啡机(双头机比较好)、意式电磨(4k~5k的比较合适)、净水器、手冲套装（滤杯分享壶手.....）"
					},
					{
						image:"/static/headto/list/IntroduceLef2.gif",
						title:"本店咖啡种类?",
						Introduce:"卡布奇诺,拿铁,摩卡奇诺,玛奇朵,花式摩卡,皇室咖啡,爱尔兰咖啡,康宝兰以及意式特浓。这太多了,很多花式咖啡"
					},
					{
						image:"/static/headto/list/IntroduceLef3.gif",
						title:"发展历程、及各分店?",
						Introduce:"根据咖啡店营业时间可以对店员适当进行排班管理,一般划分早、中、晚三个班,每班工作时间不超过八个小时。"
					},
					{
						image:"/static/headto/list/IntroduceLef4.gif",
						title:"我们著名的咖啡师?",
						Introduce:"根据国务院规定2016年01月22日发布的《国务院关于取消一批职业资格许可和认定事项的决定》(国发2016)5号)"
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.list{
		margin-top:76rpx;
		padding:0 20rpx;
		.listIntroduce{
			display:flex;
			background-color: #fff;
			border-radius:0 20rpx 20rpx 0;
			box-shadow: 0px 6px 12px #999;
			margin-bottom:60rpx;
			&:last-child{
				margin-bottom:0;
			}
			.IntroduceLeft{
				width: 30%;
				margin-right:30rpx;
				image{
					width: 100%;
					height:100%;
				}
			}
			.IntroduceRight{
				width: 66%;
				padding:8rpx 0 20rpx;
				.IntroduceRightTitle{
					color:#999;
					font-size: 32rpx;
					font-weight: bold;
					margin-bottom:8rpx;
				}
				.IntroduceRightIntroduce{
					font-size:24rpx;
					color:#bdbdbd
				}
			}
		}
	}
</style>
