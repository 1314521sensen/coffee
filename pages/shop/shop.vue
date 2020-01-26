<template>
	<view class="shopping">
		<sao :msg="msg1" url="/pages/index/index"></sao>
		<banner></banner>
		<shopintroduce :msg="msg"></shopintroduce>
		<evaluation></evaluation>
		<tian></tian>
	</view>
</template>

<script>
	//引入头部的组件
	import sao from "../../compent/sao.vue"
	import banner from "../../compent/shopping/shopbanner.vue";
	//引入介绍的小组件
	import shopintroduce from "../../compent/shopping/shopintroduce.vue";
	import evaluation from "../../compent/shopping/evaluation.vue";
	//引入添加 购买的组件
	import tian from "../../compent/shopping/tianajia.vue";
	export default {
		data() {
			return {
				msg:"卡布奇诺是一种加入以同量的意大利特浓咖啡和蒸汽泡沫牛奶相混合的意大利咖啡。",
				msg1:"详情页面"
			}
		},
		methods: {
			
		},
		components:{
			sao:sao,
			banner:banner,
			shopintroduce:shopintroduce,
			evaluation:evaluation,
			tian:tian
		}
	}
</script>

<style>

</style>
