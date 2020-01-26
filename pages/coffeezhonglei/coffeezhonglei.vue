<template>
	<view>
		<store msg="咖啡的种类" image="/static/zhonglei/headerImage.gif"></store>
		<list></list>
	</view>
</template>

<script>
	import store from "../../compent/headerTop.vue";
	import list from "../../compent/zhonglei/listzl.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			store:store,
			list:list
		}
	}
</script>

<style>

</style>
