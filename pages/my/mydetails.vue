<template>
	<view class="myde">
		<view class="portrait">
			<headto msg="个人中心"  image="../../static/my/detailsbg.gif"></headto>
			<view class="myDetailsBg">
				<view class="myDetailsBg-auto">
					<text>咖啡的浓香,沉醉的幸福,</text>
					<text>尽在帝豪咖啡厅。</text>
				</view>
			</view>
			<view class="my-icon">
				<view class="my-auto">
					<image src="/static/my/portrait.gif"></image>
				</view>
			</view>
		</view>
		<view class="portrait">
			<view class="my-icon Myname">
				<view class="my-auto">
					<text>李青松</text>
					<text>LiQingSong</text>
				</view>
			</view>
		</view>
		<view class="myinformation">
			<view class="myinformation-list" v-for="(item,index) in list" :key="index">
				<view class="list-image">
					<image :src="item.image"></image>
				</view>
				<text>{{item.intext}}</text>
			</view>
		</view>
		<view class="year">
			<view class="year-left">
				<view class="icon">
					
				</view>
				<text>我买过的咖啡</text>
			</view>
			<view class="year-right">
				<text>更新时间:2017/3/21</text>
			</view>
		</view>
		<view class="year-list">
			<view class="yearList-top">
				<view class="yearList-top-plice" v-for="(item,index) in yearList" :key="index">
					<text>{{item.title}}</text>
					<text>{{item.num}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//引入子组件
	// import sao from "/compent/sao.vue"
	import headto from "../../compent/headerTop.vue";
	export default{
		data(){
			return {
				list:[
					{
						image:"/static/my/information.gif",
						intext:"用户信息"
					},
					{
						image:"/static/my/integra.gif",
						intext:"会员积分"
					},
					{
						image:"/static/my/collectio.gif",
						intext:"我的收藏"
					}
				],
				yearList:[
					{
						title:"购买过的咖啡",
						num:0
					},
					{
						title:"制作中的咖啡",
						num:0
					},
					{
						title:"购买过其他",
						num:0
					},
					{
						title:"近期消费",
						num:0
					}
				]
			}
		},
		components:{
			headto:headto
		}
	}
</script>

<style lang="less" scoped>
	.myde{
		background-color: #fff !important;
	}
	.portrait{
		position: relative;
		.myDetailsBg{
			overflow:hidden;
			position: absolute;
			top:0;
			left:0;
			width: 100%;
			height:380rpx;
			background-color:rgba(0,0,0,.5);
			.myDetailsBg-auto{
				width: 70%;
				margin:120rpx auto;
				// background-color: green;
				text{
					display:block;
					font-size: 36rpx;
					color:#d3d0d1;
					font-weight: bold;
					&:last-child{
						text-indent:6em;
						margin-top:37rpx;
					}
				}
			}
		}
		.my-icon{
			position:absolute;
			bottom:-100rpx;
			left:0;
			width: 100%;
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
		.Myname{
			position: static;
			margin-top:140rpx;
			height:168rpx;
			text{
				display:block;
				text-align:center;
				font-size: 40rpx;
				font-weight: bold;
				&:last-child{
					font-size: 30rpx;
				}
			}
		}
	}
	.myinformation{
		// width: 80%;
		// height:200rpx;
		// background-color:deeppink;
		// margin:0 auto;
		display:flex;
		justify-content: space-around;
		.myinformation-list{
			width: 24%;
			// height:200rpx;
			// background-color:green;
			.list-image{
				width: 50%;
				height:80rpx;
				// background-color:red;
				margin: 0 auto;
				image{
					width: 100%;
					height:100%;
				}
			}
			text{
				display:block;
				font-size: 32rpx;
				text-align:center;
				margin-top:32rpx;
				font-weight: bold;
			}
		}
	}
	.year{
		display:flex;
		justify-content: space-between;
		font-size: 36rpx;
		font-weight: bold;
		line-height:64rpx;
		margin:74rpx 0;
		background-color: #eee;
		padding:0 20rpx;
		.year-left{
			display: flex;
			.icon{
				width: 52rpx;
				height:52rpx;
				background-color:green;
				background: url("../../static/my/year.gif") no-repeat;
				background-size: 100% 100%;
				margin-right:24rpx;
			}
		}
		.year-right{
			text{
				font-size: 30rpx;
				color:#999;
			}
		}
	}
	.year-list{
		.yearList-top{
			display: flex;
			flex-wrap: wrap;
			.yearList-top-plice{
				width: 50%;
				display:flex;
				justify-content: space-around;
				font-size: 30rpx;
				font-weight: bold;
				padding:26rpx 0;
				border-bottom:1rpx solid #ddd;
				&:nth-child(2n){
					border-left:2rpx solid #ddd;
				}
			}
		}
	}
</style>
