import {
  PlaylistContainer,
  AboutPlaylist,
  BtnContainer,
  PlaylistInfo,
} from "./components.style";
import { Card, CardSideBack, CardSideFront } from "../amazing_card/components";
import { H0 } from "../../utils/heading.style";
import { Slide, SliderBody, SlidesContainer } from "../slider/components.style";
import { BackIcon, ForwardIcon } from "../music_player/components.style";
import { Paragraph } from "../about/components.style";
import { OutLinedButton } from "../../utils/buttons.style";

export const PlaylistCard = () => {
  return (
    <PlaylistContainer>
      <H0>Your PlayList</H0>
      <SliderBody>
        <BackIcon />
        <SlidesContainer>
          {[2, 3, 4, 5, 6, 7, 7].map((playlist, index) => {
            if (true) {
              return (
                <Card>
                  <div key={index} style={{ transform: "translateX(34vw)" }}>
                    <Slide
                      key={index}
                      style={{
                        transform: "translateX(" + -index * 37 + "vw)",
                        transition: "transform 2s ease-out",
                      }}
                    >
                      <AboutPlaylist>
                        <CardSideFront
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(34, 34, 34, 0.6),rgba(34, 34, 34, 0.6)),url(" +
                              `${""}` +
                              ")",
                            backgroundSize: "cover",
                          }}
                        >
                          <PlaylistInfo>
                            <H0> Playlist Name </H0>
                            <Paragraph style={{ width: "20vw" }}>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Tempora mollitia saepe alias corrupti ut?
                            </Paragraph>
                          </PlaylistInfo>
                        </CardSideFront>
                      </AboutPlaylist>
                      <CardSideBack
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(34, 34, 34, 0.6),rgba(34, 34, 34, 0.6)),url(" +
                            `${""}` +
                            ")",
                          backgroundSize: "cover",
                        }}
                      >
                        <H0
                          style={{
                            fontSize: "40px",
                            marginTop: "4rem",
                          }}
                        >
                          {" "}
                          {index} Songs
                        </H0>
                        <BtnContainer>
                          <OutLinedButton
                            style={{
                              color: "#f9f6f8",
                              border: "2px solid #f80bb1",
                              padding: "10px 20px",
                            }}
                          >
                            See Musics
                          </OutLinedButton>
                          <OutLinedButton
                            style={{
                              color: "#f9f6f8",
                              border: "2px solid #f80bb1",
                              padding: "10px 20px",
                            }}
                          >
                            Add musics
                          </OutLinedButton>
                          <OutLinedButton
                            style={{
                              color: "#f9f6f8",
                              border: "2px solid #f80101",
                              padding: "10px 20px",
                            }}
                          >
                            Delete
                          </OutLinedButton>
                        </BtnContainer>
                      </CardSideBack>
                    </Slide>
                  </div>
                </Card>
              );
            }
          })}
        </SlidesContainer>
        <ForwardIcon />
      </SliderBody>
    </PlaylistContainer>
  );
};
