<template>
	<div class="app-block">
		<div class="cube">
			<image src="../../static/cube.png" class="img-responsive" alt="">
		</div>
		<div>
			<input type="number" v-model="phone" class="text" value="" placeholder="手机号" onfocus="this.value = '';"
				onblur="if (this.value == '') {this.value = '';}">
			<view class="password" style="display: flex;">
				<input style="flex:1" type="number" v-model="smscode" placeholder="手机验证码"
					v-bind:maxlength="4">
				<view class="mesg-code-num" :class="send_sms_code_interval_time == 60 ? '' : 'cannot'"
					@click="sendSMSCodeSubmit" v-html="send_sms_code_but_title">获取验证码</view>
			</view>
			<input v-model="password" class="password" value="" placeholder="密码">
			<input v-model="password1" class="password" value="" placeholder="确认密码">
			<input class="invitcode" type="text" v-model="invitcode" placeholder="邀请码" v-bind:maxlength="6">
			<div class="submit"><input type="submit" disabled="true" class="submits" @click="rigester()" value="注册"></div>
			<div class="clear"></div>
		</div>
		<navigator url="login" class="sign">已有账号? 去登录</navigator>
	</div>
</template>

<script>
	import {
		registerapi,
		sendsmsapi,
		testapi
	} from "@/utils/api.js"
	export default {
		data() {
			return {
				phone: '',
				password: '',
				password1: "",
				invitcode: "",
				smscode: '',
				send_sms_code_but_title: "获取验证码",
				send_sms_code_interval_time: 60,
				send_sms_code_interval_timeout_id: '',
				is_allow_send_sms_code: true
			}
		},
		methods: {
			countdownTime() {
				if (this.send_sms_code_interval_time < 1) {
					this.send_sms_code_interval_time = 60;
					clearTimeout(this.send_sms_code_interval_timeout_id); // 停止倒计时事件
					this.send_sms_code_but_title = "重新获取";
					this.is_allow_send_sms_code = true;
				} else {
					this.send_sms_code_but_title = "重新获取(" + this.send_sms_code_interval_time + ")";
					this.send_sms_code_interval_time--;
					this.send_sms_code_interval_timeout_id = setTimeout(function() {
							this.countdownTime();
						}.bind(this),
						1000)
				}
			},
			sendSMSCodeSubmit() {
				console.log(132465789)
				if (this.phone.length != 11) {
					uni.showToast({
						icon: 'none',
						title: '手机格式错误',
						duration:2000
					});
					return;
				}
				if (this.is_allow_send_sms_code) {
					this.is_allow_send_sms_code = false;
					this.countdownTime();
					var data = {
						phone: this.phone
					};
					sendsmsapi(data).then(res=>{
						console.log(res)
						if (res.code === 0) {
							// 发送成功 执行倒计时
							// this.countdownTime();
						} else {
							// 失败
							this.is_allow_send_sms_code = true;
							uni.showModal({
								title: '',
								content: res.msg,
								showCancel: false,
								confirmText: '知道了',
								confirmColor: '#485576',
								success: function(res_showModal) {
									if (res_showModal.confirm) {
						
									}
								}
							});
						}
					})
				}
			},
			rigester() {
				if (this.phone.length != 11) {
					uni.showToast({
						icon: 'none',
						title: '手机号码有误',
						duration:2000
					});
					return;
				}
				if (this.smscode.length != 4) {
					uni.showToast({
						icon: 'none',
						title: '验证码有误',
						duration:2000
					});
					return;
				}
				let rule = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/
				if (!rule.exec(this.password)) {
					uni.showToast({
						icon: 'none',
						title: '密码格式为6至10位字母和数字',
						duration:2000
					});
					return;
				}
				if (this.password != this.password1) {
					uni.showToast({
						icon: 'none',
						title: '密码不一致',
						duration:2000
					});
					return;
				}
				if (this.invitcode.length != 6) {
					uni.showToast({
						icon: 'none',
						title: '邀请码有误',
						duration:2000
					});
					return;
				}
				var prams = {
					phone: this.phone,
					password: this.password,
					invitcode: this.invitcode,
					code:this.smscode
				}
				registerapi(prams).then(res => {
					if(res.code==0){
						uni.showToast({
							icon: 'none',
							title: '注册成功',
							duration:2000
						});
						setTimeout(()=>{
							uni.navigateTo({
								url:"/pages/index/login"
							})
						},2000)
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
		background: url(../../static/bg.jpg) 0px 0px no-repeat;
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
		width: 240rpx;
		height: 264rpx;
	}

	.mesg-code-num {
		position: relative;
		height: 53rpx;
		line-height: 53rpx;
		font-size: 26rpx;
		color: #fff;
		text-align: center;
		padding: 0 24rpx;
		border-radius: 6rpx;
		background: #3A486A;
	}

	.mesg-code-num.cannot {
		background: #C3C3D6;
		pointer-events: none;
	}

	.app-block .text,
	.app-block .password,
	.invitcode {
		width: 81.2%;
		padding: 0.6em 1em 0.6em 4em;
		color: #fff;
		font-size: 16px;
		outline: none;
		font-weight: 500;
		text-align: left;
		border-radius: 10rpx;
		border: none;
		background: url("../../static/icons.png") no-repeat 14px 14px #1e1e1d;
		background-size: 7%;
		margin: 0.8em 0;
	}

	.app-block .invitcode {
		background: #1e1e1d;
	}

	.app-block .password {
		background: url("../../static/icons.png") no-repeat 13px -32px #1e1e1d;
		background-size: 7%;
	}

	.submit {
		margin: 0.5em 0;
	}


	.app-block .submits {
		font-size: 20px;
		font-weight: 300;
		color: #fff;
		cursor: pointer;
		outline: none;
		padding: 10rpx 20rpx;
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

	.new h3 a,
	.new h4 a {
		font-size: 0.9em;
	}

	form {
		width: 94%;
		margin: 0 auto;
	}

	.app-block input[type="submit"] {
		font-size: 18px;
		padding: 14px 15px;
	}

	.app-block {
		margin: 0 auto 0 2.2%;
		padding: 0em 3em;
	}

	.buttons {
		margin: 0em 0 1em 0;
		padding: 3em 0em 1em 0em;
	}
</style>
