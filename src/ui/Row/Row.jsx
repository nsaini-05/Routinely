function Row({
  children,
  alignItems = "center",
  justifyContent = "center",
  direction = "row",
  gap,
  margin,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems,
        justifyContent,
        flexDirection: direction,
        gap,
        marginBottom: margin?.bottom,
      }}
    >
      {children}
    </div>
  );
}

export default Row;
