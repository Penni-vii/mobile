import axios from 'axios'
import jsonBig from 'json-bigint' // 处理超过js安全范围长度数字的第三方包

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 设置基础地址
})

// axios 开放了自定义转换后端返回数据的 API
// data 就是后端返回的原始数据
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (error) {
    console.log('转换失败', error)
    // 失败的话，返回一个空的对象
    return {}
  }
}]

export default request
