<script>
	export default {
		onLaunch: function() {
			// 锁定竖屏
			var plus=plus||''
			if(plus){
				plus.screen.lockOrientation('portrait-primary');
				// 相机、麦克风权限
				this.$Utils.equipment();
			}
			
			console.log('App Launch');
			// uni.reLaunch({
			// 	url:"/pages/index/login"
			// })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
