/** @format */

const styles = (theme) => ({
  globalLoading: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    userSelect: 'none'
  },
  icon: {
    position: "fixed",
    marginLeft: "auto",
    marginRight: "auto",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    width: 100,
  },
});

export default styles;
