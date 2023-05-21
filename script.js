const carCanvas = document.getElementById("carCanvas")
carCanvas.width = 200
const networkCanvas = document.getElementById("networkCanvas")
networkCanvas.width = 300

const carCtx = carCanvas.getContext("2d")
const networkCtx = networkCanvas.getContext("2d")

const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9)

const N = 100
const cars = generateCars(N)
let bestCar = cars[0]
let bestBrain = localStorage.getItem("bestBrain")
if (bestBrain) {
  for (let i = 0; i < cars.length; i++) {
    cars[i].brain = JSON.parse(bestBrain)
    if (i !== 0) {
      NeuralNetwork.mutate(cars[i].brain, 0.2)
    }
  }
}

const traffic = [
  new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(0), -300, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(2), -300, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(0), -500, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(1), -500, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(1), -700, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(2), -700, 30, 50, "DUMMY", 2),
]

animate()

function save() {
  localStorage.setItem("bestBrain", JSON.stringify(bestCar.brain))
}
function discard() {
  localStorage.removeItem("bestBrain")
}

function generateCars(N) {
  const cars = []
  for (let i = 0; i < N; i++) {
    cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI"))
  }
  return cars
}

function animate(time) {
  traffic.forEach((c) => c.update(road.borders, []))
  cars.forEach((car) => car.update(road.borders, traffic))

  bestCar = cars.find((c) => c.y === Math.min(...cars.map((c) => c.y)))

  carCanvas.height = window.innerHeight
  networkCanvas.height = window.innerHeight

  carCtx.translate(0, -bestCar.y + carCanvas.height * 0.7)
  road.draw(carCtx)
  traffic.forEach((c) => c.draw(carCtx, "lightgreen"))
  carCtx.globalAlpha = 0.2
  cars.forEach((car) => car.draw(carCtx, "navy"))
  carCtx.globalAlpha = 1
  bestCar.draw(carCtx, "navy", true)

  networkCtx.lineDashOffset = -time / 50
  Visualiser.drawNetwork(networkCtx, bestCar.brain)
  requestAnimationFrame(animate)
}
