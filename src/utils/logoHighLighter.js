function highLighter(name) {
  const normalText = name.slice(0, -2);
  const highLightedText = name.slice(-2);

  return [normalText, highLightedText];
}
export default highLighter;
