import { FlyweightFactory } from "./flyweightFactory"

function main(){
  const flyweightFactory = FlyweightFactory.getInstance()

  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.trunc(Math.random() * 10)
    flyweightFactory.getNumber(randomNumber)
  }
}

main()
