const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use the reduce function to sum up all the batteries in the batteryBatches array
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

module.exports = {
  totalBatteries
};
