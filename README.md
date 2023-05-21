
# Self driving car simulation using genetic algorithm

This simulation is built on HTML canvas using OOP principles in Javascript without any libraries. Firstly, a car is developed with physics (accelaration and friction). Then the road is generated and a ray-casting sensor is applied to detect collisions with traffic and road borders. Finally, a neural network is created and visualised. Multiple cars are parallelly simulated to find a network that can safely steer through the traffic. The network is optimised using mutations on a genetic algorithm.




## Demo



Play with the code [here](https://stackblitz.com/edit/web-platform-wfmbmp?file=script.js)

**Steps:**
- Change the number of cars to 400 or 500 in script.js
- Save the best path during the run so the next time mutation happens, it references that.
- Change the mutation value between 0 and 1 and see the behaviour
- Change the number of cars to 1 to see only the best path.


https://github.com/servesh-chaturvedi/self-driving-car/assets/72094888/dbfb4484-9fd5-477b-897e-e810bdb0e7b9

## Acknowledgements

 - [Dr Radu's playlist](https://youtube.com/playlist?list=PLB0Tybl0UNfYoJE7ZwsBQoDIG4YN9ptyY)
