export default class Barrage {
  constructor (canvasId, w, h, colors, fontFamily, fontSize) {
    this.canvas = document.getElementById(canvasId)
    this.canvas.width = w
    this.canvas.height = h
    this.w = w
    this.h = h
    this.ctx = this.canvas.getContext('2d')
    this.barrageList = []
    // this.colors = colors || ['#fff', '#FFCCCC', '#CCFFCC', '#CCCCFF', '#FFFFCC', '#CCFFFF']
    this.colors = colors || ['#006064', '#00838F', '#2196F3', '#E57373', '#3949AB', '#009688', '#607D8B']
    this.fontFamily = fontFamily || ['SimSun', 'SimHei', 'DFKai-SB', 'KaiTi']
    this.fontSize = fontSize || ['14px', '18px', '20px', '22px']
  }

  // 添加弹幕列表
  shoot (value) {
    const top = this.getTop()
    const color = this.getColor()
    const fontFamily = this.getFontFamily()
    const fontSize = this.getFontSize()
    const offsetX = this.getOffset()
    const offsetY = this.getOffset()
    const width = Math.ceil(this.ctx.measureText(value).width)

    const barrage = {
      value,
      top,
      left: this.w,
      color,
      fontFamily,
      fontSize,
      offsetX,
      offsetY,
      width,
      isLeft: true,
      isTop: true
    }
    this.barrageList.push(barrage)
  }

  // 开始绘制
  draw () {
    if (this.barrageList.length) {
      this.ctx.clearRect(0, 0, this.w, this.h)
      for (let i = 0; i < this.barrageList.length; i++) {
        const b = this.barrageList[i]
        if (b.isLeft) { // 向左移动中
          // 当移动到最左边 开始向右移动
          if (b.left <= 0) {
            b.left += b.offsetX
            b.isLeft = false
          } else {
            b.left -= b.offsetX
          }
        } else if (b.left + b.width >= this.w) {
          // 当移动到最右边 开始向左移动
          b.left -= b.offsetX
          b.isLeft = true
        } else {
          b.left += b.offsetX
        }
        if (b.isTop) { // 向上移动中
          // 当移动到最上边 开始向下移动
          if (b.top <= 0) {
            b.top += b.offsetY
            b.isTop = false
          } else {
            b.top -= b.offsetY
          }
        } else if (b.top >= this.h) {
          // 当移动到最下边 开始向上移动
          b.top -= b.offsetY
          b.isTop = true
        } else {
          b.top += b.offsetY
        }
        // 当移动到最左边 移除此项
        // if (b.left + b.width <= 0) {
        //   this.barrageList.splice(i, 1)
        //   i--
        //   continue
        // }
        // b.left -= b.offsetX
        this.drawText(b)
      }
    }
    requestAnimationFrame(this.draw.bind(this))
  }

  // 绘制文字
  drawText (barrage) {
    this.ctx.font = barrage.fontSize + ' KaiTi'
    // this.ctx.font = barrage.fontSize + ' ' + barrage.fontFamily
    this.ctx.fillStyle = barrage.color
    this.ctx.fillText(barrage.value, barrage.left, barrage.top)
  }

  // 获取随机颜色
  getColor () {
    const i = Math.floor(Math.random() * this.colors.length)
    return this.colors[i]
    // return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
  }

  // 获取随机字体
  getFontFamily () {
    const fontFamilyIdx = Math.floor(Math.random() * this.fontFamily.length)
    return this.fontFamily[fontFamilyIdx]
    // return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
  }

  // 获取随机字体大小
  getFontSize () {
    const fontSizeIdx = Math.floor(Math.random() * this.fontSize.length)
    return this.fontSize[fontSizeIdx]
    // return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
  }

  // 获取随机top
  getTop () {
    // canvas绘制文字x,y坐标是按文字左下角计算，预留30px
    return Math.floor(Math.random() * (this.h - 30)) + 30
  }

  // 获取偏移量
  getOffset () {
    return +Math.floor(Math.random() * 6) + 1
  }
}
