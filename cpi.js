function calculateCPI(spis){

let total = 0;

for(let i=0;i<spis.length;i++)
{
total += spis[i];
}

return (
total / spis.length
).toFixed(2);

}
