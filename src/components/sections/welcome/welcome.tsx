import { Paragraph } from "../about/components.style";
import { HiArrowSmallRight } from "react-icons/hi2";
import {
  Body,
  LeftSection,
  StartButton,
  Subtitle,
  Title,
  WelcomeSection,
} from "./components.style";
import { useAppDispatch } from "../../../utils/customHook";
import { setMinorTask } from "../../../store/user/userSlice";
import { LOGIN } from "../../../config/constants/user-current-task";

const Welcome = () => {
  const dispatch = useAppDispatch();

  return (
    <WelcomeSection>
      <Title>Welcome to EzAddis Songish</Title>
      <Body>
        <LeftSection>
          <Subtitle>Discover millions of songs at your fingertips</Subtitle>
          <StartButton
            onClick={() => {
              dispatch(setMinorTask(LOGIN));
            }}
          >
            Get Started <HiArrowSmallRight />
          </StartButton>
        </LeftSection>
        <Paragraph>
          Immerse yourself in a world of sound with our vast library of tracks
          from artists all around the globe. Whether you're looking for the
          latest hits, classical symphonies, or obscure indie tracks, you'll
          find it all here.
        </Paragraph>
      </Body>
    </WelcomeSection>
  );
};

export default Welcome;
