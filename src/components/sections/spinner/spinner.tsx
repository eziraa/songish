import { Spinner, SpinnerContainer } from "./components.style";

const LoadingSpinner = () => (
  <SpinnerContainer>
    <Spinner length={16} />
  </SpinnerContainer>
);
export const SmallSpinner = () => (
  <div style={{ width: "20px", height: "20px", margin: "auto" }}>
    <Spinner
      length={5}
      style={{
        width: "20px",
        height: "20px",
        display: "inline-block",
        margin: "auto",
      }}
    />
  </div>
);

export default LoadingSpinner;
