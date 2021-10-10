<template>
	<div class="app-block">
		<div class="cube">
			<image src="../../static/cube.png" class="img-responsive" alt="">
		</div>
		<form>
			<input type="number" v-model="phone" class="text" value="" placeholder="手机号" onfocus="this.value = '';"
				onblur="if (this.value == '') {this.value = '';}">
			<input type="password" v-model="password" class="password" value="" placeholder="密码">
			<div class="submit"><input type="submit" disabled="true" class="submits" @click="login()" value="登录"></div>
			<div class="clear"></div>
		</form>
		<p class="sign">建立新账号? <a href="#"> 注册</a></p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				phone:'',
				password:''
			}
		},
		methods:{
			login(){
				
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

	.app-block p.sign {
		padding-top: 3em;
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

	.app-block p a,
	.app-block p.sign {
		color: #AFAFB0;
		font-weight: 400;
		font-size: 1em;
	}

	.app-block p {
		padding-top: 1em;
	}

	.app-block p a:hover,
	.app-block p.sign a:hover {
		text-decoration: underline;
		color: #EACB20;
	}
		.copy-right p {
			font-size: 0.9em;
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
			padding: 1em 4em 2em 4em;
		}

		.buttons {
			margin: 0em 0 1em 0;
			padding: 3em 0em 1em 0em;
		}

		.block h2 {
			padding: 0.8em 0;
			font-size: 1.4em;
		}

		.app-block p a,
		.app-block p.sign a {
			font-size: 0.9em;
		}

		.app-block p {
			padding-top: 0em;
		}

		.app-block p.sign {
			padding: 2em 0 2em 0;
		}

</style>
