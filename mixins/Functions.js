export const threshold = {
  methods: {
    threshold () {
      let thresholds = [];
      let numSteps = 20;
    
      for (let i=1.0; i<=numSteps; i++) {
        let ratio = i/numSteps;
        thresholds.push(ratio);
      }
    
      thresholds.push(0);
      return thresholds;
    }
  }
}