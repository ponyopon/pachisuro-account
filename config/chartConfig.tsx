export const chartConfig = {
  backgroundGradientFrom: "#1F1F1F",
  backgroundGradientTo: "#1F1F1F",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  decimalPlaces: 0,
  propsForBackgroundLines: {
    strokeDasharray: "", // Remove the dashed lines
    strokeWidth: 0, // Make the lines invisible
  },
};
