


const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

const newStrand = [...genes]
newStrand[2]=genes[4]
newStrand[4]=genes[2]
console.log(newStrand)

newStrand.splice(3,1)
newStrand.push(genes[3])
newStrand.push(genes[3])
console.log(newStrand)

newStrand.unshift("FXT")
console.log(newStrand)



