import "colors";

const print = new Object()

print.err = (text = " ") => {
  console.log(">> ".gray + text.red);
  
}

print.warn =  (text = " ") => {
  console.log(">> ".gray + text.yellow);
  
}

print.plain =  (text = " ")=> {
  console.log(">> ".gray + text.green);
  
}

print.note =  (text = " ")=> {
  console.log(">> ".gray + text.italic.gray);
  
}


export default print ;