<template>
	<div class="app-block">
		<div class="cube">
			<image src="../../static/cube.png" class="img-responsive" alt="">
		</div>
		<form>
			<input type="number" v-model="phone" class="text" value="" placeholder="手机号" onfocus="this.value = '';"
				onblur="if (this.value == '') {this.value = '';}">
			<input v-model="password" class="password" value="" placeholder="密码">
			<div class="submit"><input type="submit" disabled="true" class="submits" @click="login()" value="登录"></div>
			<div class="clear"></div>
		</form>
		<navigator url="register" class="sign">建立新账号? 注册</navigator>
	</div>
</template>

<script>
import {loginapi} from "@/utils/api.js"
	export default{
		data(){
			return{
				phone:'',
				password:''
			}
		},
		methods:{
			login(){
				if(this.phone.length!=11){
					uni.showToast({
						icon: 'none',
						title: '手机号有误',
						duration:2000
					});
					return;
				}
				let rule=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/
				if(!rule.exec(this.password)){
					uni.showToast({
						icon: 'none',
						title: '密码格式为6至10位字母和数字',
						duration:2000
					});
					return;
				}
				var prams={
					phone:this.phone,
					password:this.password
				}
				loginapi(prams).then(res=>{
					if(res.code==0){
						uni.showToast({
							icon: 'none',
							title: '登录成功',
							duration:2000
						});
					}else{
						uni.showToast({
							icon: 'none',
							title: res.msg,
							duration:2000
						});
					}
				})
			}
		}
	}
</script>

<style>
	/* float left */
	.clear {
		clear: both;
	}
	/*end reset*/
	.app-block {
		background: url(../../static/bg.jpg)0px 0px no-repeat;
		background-size: cover;
		margin: 0 auto;
		text-align: center;
		min-height: 100vh;
		padding: 3em 5em;
		height: 80%;
	}

	form {
		padding: 3% 3% 7% 3%;
		border-bottom: 1px solid #999;
	}

	/*-----*/
	.cube image {
		margin: 2em 0;
		width:240rpx;
		height:264rpx;
	}

	.app-block .text,
	.app-block .password {
		width: 81.2%;
		padding: 1em 1em 1em 4em;
		color: #fff;
		font-size: 16px;
		outline: none;
		font-weight: 500;
		text-align: left;
		border-radius: 10rpx;
		border: none;
		background: url("../../static/icons.png") no-repeat 14px 20px #1e1e1d;
		background-size: 7%;
		margin: 0.8em 0;
	}

	.app-block .password {
		background: url("../../static/icons.png") no-repeat 13px -26px #1e1e1d;
		background-size: 7%;
	}

	.submit {
		margin: 1em 0;
	}

	.app-block .submits {
		font-size: 20px;
		font-weight: 300;
		color: #fff;
		cursor: pointer;
		outline: none;
		padding: 20rpx 20rpx;
		width: 100%;
		border: none;
		moz-transition: all 0.3s;
		-o-transition: all 0.3s;
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
		background: #eacb20;
		border-radius: 2em;
		-webkit-border-radius: 2em;
		-o-border-radius: 2em;
		-moz-border-radius: 2em;
		border: 3px solid #EACB20
	}
	.app-block .sign {
		color: #AFAFB0;
		font-weight: 400;
		font-size: 1em;
	}

		form {
			width: 94%;
			margin: 0 auto;
		}

		.app-block {
			margin: 0 auto 0 2.2%;
			padding: 0 4em;
		}

		.buttons {
			margin: 0em 0 1em 0;
			padding: 3em 0em 1em 0em;
		}

</style>
