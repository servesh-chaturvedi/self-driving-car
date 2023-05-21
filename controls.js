class Controls {
  constructor(type) {
    this.forwards = false
    this.reverse = false
    this.right = false
    this.left = false

    switch (type) {
      case "KEYS":
        this.#addKeyboardListeners()
        break
      case "DUMMY":
        this.forwards = true
        break
    }
  }

  #addKeyboardListeners() {
    document.onkeydown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = true
          break
        case "ArrowRight":
          this.right = true
          break
        case "ArrowUp":
          this.forwards = true
          break
        case "ArrowDown":
          this.reverse = true
          break
      }
    }
    document.onkeyup = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = false
          break
        case "ArrowRight":
          this.right = false
          break
        case "ArrowUp":
          this.forwards = false
          break
        case "ArrowDown":
          this.reverse = false
          break
      }
    }
  }
}
