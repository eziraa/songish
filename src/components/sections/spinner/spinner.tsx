import { Spinner, SpinnerContainer } from "./components.style";

const LoadingSpinner = () => (
  <SpinnerContainer>
    <Spinner length={16} />
  </SpinnerContainer>
);
export const SmallSpinner = () => (
  <div style={{ width: "2rem", height: "2rem", margin: "auto" }}>
    <Spinner
      length={5}
      style={{
        width: "2rem",
        height: "2rem",
        display: "inline-block",
        margin: "auto",
      }}
    />
  </div>
);

export default LoadingSpinner;
