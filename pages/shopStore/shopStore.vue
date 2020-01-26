<template>
	<view class="shopStoreBox">
		<store msg="店内介绍" image="/static/headto/bgi.gif"></store>
		<storeList></storeList>
	</view>
</template>

<script>
	import store from "../../compent/headerTop.vue";
	//列表组件
	import storeList from "../../compent/storelist.vue"
	export default {
		data(){
			return {
				
			}
		},
		//注册子组件
		components:{
			store:store,
			storeList:storeList
		}
	}
</script>

<style lang="less" scoped>
	.shopStoreBox{
		background-color: #f8f8f8;
	}
</style>
