const request=function (method='get',url='',data={}){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:url,
			method,
			data,
			header:{
				Authorization:"Bearer "+localStorage.getItem('token')
			},
			success: function(res) {
			     // console.log(res.data);
				 if(res.data.code==401){
					 // if(localStorage.getItem('locale')=='en'){
						//  uni.showToast({
						// 	title:'Login expired',
						// 	icon:'none'
						//  })
					 // }else{
						//  uni.showToast({
						// 	title:'登录过期,请重新登录',
						// 	icon:'none'
						//  })
					 // }
					 setTimeout(()=>{
					localStorage.setItem('token','')
					 uni.reLaunch({
						url:'/pages/login/login'
					 })
					 },1500)
				 }
				 resolve(res.data)
			}
		})
	})
}
export default request 