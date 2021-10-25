import request from './request.js'

var baseurl="http://127.0.0.1:5500"

// 测试
const testapi=(data)=>request('post',baseurl+'/api/test',data)
// 注册
const registerapi=(data)=>request('post',baseurl+'/api/register',data)
// 发送验证码
const sendsmsapi=(data)=>request('post',baseurl+'/api/sendsms',data)
// 发送验证码
const loginapi=(data)=>request('post',baseurl+'/api/login',data)

export {
	registerapi,
	sendsmsapi,
	testapi,
	loginapi
}
