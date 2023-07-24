import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Dimensions.get("window").width * 0.85;

const DUMMY = [
  "https://images-ext-1.discordapp.net/external/hDhpSnONeO_i3y_BkNUC_VU46Us9_Rp0mVnnSLw10jo/https/images-cdn.ubuy.co.in/633ff70b752e5739cf688f6e-original-retro-design-5-stars-barber.jpg?width=1250&height=395",
  "https://images-ext-2.discordapp.net/external/Doy8JYNnn9NJDLhKpGrxa7igW-A5oC8Dwe1saMu088Y/https/marketplace.canva.com/EAFj3rnrU28/1/0/1600w/canva-black-and-white-vintage-barbershop-outdoor-banner-ICh9tK96iqc.jpg?width=1402&height=701",
  "https://classicbarberapex.com/wp-content/uploads/2021/11/images.suavecito.jpg",
  "https://www.whiteribbon.org.au/awcontent/whiteribbon/ed/ed53a1ef-6bcd-4aa1-b8f2-6b927a67b099.png",
  "https://in.bodychi.me/wp-content/uploads/2023/01/302050279_467914265348580_3420603950392093700_n.jpg",
  "https://tattoostylist.com/wp-content/uploads/2020/04/tattoo-ideas-for-men.jpg",
];

function useImageAspectRatio(imageUrl: string) {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    let isValid = true;
    Image.getSize(imageUrl, (width, height) => {
      if (isValid) {
        setAspectRatio(width / height);
      }
    });

    return () => {
      isValid = false;
    };
  }, [imageUrl]);

  return aspectRatio;
}

const DashboardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ alignItems: "center" }}>
      <GestureHandlerRootView>
        <Carousel
          autoPlayInterval={3000}
          data={DUMMY}
          onProgressChange={(_, absoluteProgress) =>
            setActiveIndex(Math.round(absoluteProgress))
          }
          renderItem={(item) => {
            const aspectRatio = useImageAspectRatio(item.item);

            return (
              <View
                style={{
                  width: SCREEN_WIDTH,
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item.item }}
                  style={{
                    width: ITEM_WIDTH,
                    borderRadius: 8,
                    aspectRatio,
                  }}
                />
              </View>
            );
          }}
          width={SCREEN_WIDTH}
          height={SCREEN_WIDTH / 2}
          autoPlay={true}
        />
      </GestureHandlerRootView>

      <AnimatedDotsCarousel
        currentIndex={activeIndex}
        length={DUMMY.length}
        interpolateOpacityAndColor={true}
        maxIndicators={DUMMY.length / 2}
        activeIndicatorConfig={{
          color: "black",
          margin: 3,
          opacity: 1,
          size: 8,
        }}
        inactiveIndicatorConfig={{
          color: "rgb(200, 200, 200)",
          margin: 3,
          opacity: 0.5,
          size: 8,
        }}
        decreasingDots={[
          {
            config: {
              color: "rgb(200, 200, 200)",
              margin: 3,
              opacity: 0.5,
              size: 6,
            },
            quantity: 2,
          },
          {
            config: {
              color: "rgb(200, 200, 200)",
              margin: 3,
              opacity: 0.5,
              size: 4,
            },
            quantity: 2,
          },
        ]}
      />
    </View>
  );
};

export default DashboardCarousel;
