export function Bmap() {
  return new Promise(function (resolve, reject) {
    window.initBMapGL = function () {
      console.log('initBMapGL')
      resolve()
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `//api.map.baidu.com/api?v=3.0&ak=jcI3Q88g6V99OPBjLryoOqPTtsRdedHA&callback=initBMapGL`

    script.onerror = reject

    document.head.appendChild(script)
  })
}

