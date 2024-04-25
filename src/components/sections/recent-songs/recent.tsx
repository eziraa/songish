import { Slide, SliderBody, SlidesContainer } from "../slider/components.style";
import { RecentContainer, AboutMusic } from "./components.style";

export const RecentSection = () => {
  return (
    <RecentContainer>
      <h1>Resent musics</h1>
      <SliderBody>
        <SlidesContainer>
          {["Song 1", "Song 2", "Song 3"].map((music, index) => {
            if (true) {
              return (
                <Slide key={index}>
                  <AboutMusic>
                    <h1> {music} </h1>
                    <p style={{ width: "20vw" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora mollitia saepe alias corrupti ut?
                    </p>
                  </AboutMusic>
                </Slide>
              );
            }
          })}
        </SlidesContainer>
      </SliderBody>
    </RecentContainer>
  );
};
