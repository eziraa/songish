import { H0 } from "../../utils/heading.style";
import { Unfavorite } from "../../utils/icons/button-like-icon";
import { Paragraph } from "../about/components.style";
import { AboutMusic } from "../recent-songs/components.style";
import { SliderBody, SlidesContainer, Slide } from "../slider/components.style";
import {
  FavoriteContainer,
  FavoriteBtnContainer,
  FavoriteBtn,
} from "./components.style";

export const FavoriteSongs = () => {
  return (
    <FavoriteContainer>
      <H0>Your favorite songs</H0>
      <SliderBody>
        <SlidesContainer>
          {[1, 2, 3, 4, 5, 6, 6].map((song, index, song_list) => {
            if (true) {
              return (
                <div key={index} style={{ transform: "translateX(34vw)" }}>
                  <Slide
                    key={index}
                    style={{
                      transform: "translateX(" + index * 37 + "vw)",
                      transition: "transform 2s ease-out",
                      backgroundImage:
                        "linear-gradient(rgba(34, 34, 34, 0.6),rgba(34, 34, 34, 0.6)),url(" +
                        `/src/assets/images/${index + 1}` +
                        ".jpg)",
                      backgroundSize: "cover",
                    }}
                  >
                    <AboutMusic>
                      <H0> {song} </H0>
                      <Paragraph style={{ width: "20vw" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora mollitia saepe alias corrupti ut?
                      </Paragraph>
                      <FavoriteBtnContainer>
                        <FavoriteBtn>Listen now</FavoriteBtn>
                        <FavoriteBtn>
                          <Unfavorite /> Remove
                        </FavoriteBtn>
                      </FavoriteBtnContainer>
                    </AboutMusic>
                  </Slide>
                </div>
              );
            }
          })}
        </SlidesContainer>
      </SliderBody>
    </FavoriteContainer>
  );
};
