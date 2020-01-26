<template>
	<view class="store">
		<view class="store-bgc">
			<bg :msg="msg" url="/pages/index/index"></bg>
			<image :src="image"></image>
		</view>
	</view>
</template>

<script>
	//引入头部黑色的小组件
	import bg from "compent/sao.vue";
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		components:{
			bg:bg
		},
		props:["msg","image"]
	}
</script>

<style lang="less" scoped>
	.store{
		height:378rpx;
		// background: url("../static/headto/bgi.gif") no-repeat;
		// background-size: 100% 100%;
		.store-bgc{
			overflow:hidden;
			height:100%;
			// background-color:rgba(172,148,129,0.6) !important;
			image{
				width: 100%;
				height:100%;
			}
		}
	}
</style>
