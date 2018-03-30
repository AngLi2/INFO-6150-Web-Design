function addNames(...names:string[]) {
   for (var i = 0; i < names.length; i++) {
      console.log("The "+(i+1)+" name "+"is "+names[i]);
   }
}
addNames("Jack", "Bob")
addNames("Wang","Lee","Chen","Zhao","Liu")