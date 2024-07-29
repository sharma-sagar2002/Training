enum direction {
    down,
    up,
    left,
    right,
}

const mapDirection : string[]=["Down","Up","Left","Right"];


function giveDirections(directionValue : number): string {
   return mapDirection[directionValue];
}


console.log(direction.up);