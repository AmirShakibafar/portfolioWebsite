type CloudConfig = {
  id: number;
  src: string;
  top: string;
  width: number;
  height: number;
  opacity: number;
  zIndex: number;
  direction: 'left' | 'right';
  initialOffset: string;
  travelDistance: string;
  duration: number;
  delay: number;
};

const cloudAssets: { src: string; width: number; height: number }[] = [
  { src: '/clouds/cloud1.png', width: 118, height: 58 },
  { src: '/clouds/cloud2.png', width: 146, height: 76 },
  { src: '/clouds/cloud3.png', width: 82, height: 46 },
  { src: '/clouds/cloud4.png', width: 71, height: 40 },
  { src: '/clouds/cloud5.png', width: 190, height: 123 },
  { src: '/clouds/cloud6.png', width: 95, height: 55 },
  { src: '/clouds/cloud7.png', width: 101, height: 50 },
  { src: '/clouds/long-cloud.png', width: 157, height: 42 },
  { src: '/clouds/sm-cloud.png', width: 49, height: 24 },
  { src: '/clouds/sm-cloud2.png', width: 44, height: 25 },
];

const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

export const generateClouds = (count: number): CloudConfig[] => {
  const configs: CloudConfig[] = [];
  const minWidth = 44, maxWidth = 190;
  const minOpacity = 0.5, maxOpacity = 1.0;

  for (let i = 0; i < count; i++) {
    const asset = cloudAssets[Math.floor(Math.random() * cloudAssets.length)];
    const direction = Math.random() > 0.5 ? 'right' : 'left';
    const duration = 12000 / asset.width;
    const opacity = mapRange(asset.width, minWidth, maxWidth, minOpacity, maxOpacity);

    // Using the "sweet spot" value you found.
    const topPosition = getRandom(0, 35);

    configs.push({
      id: i,
      src: asset.src,
      top: `${topPosition}%`,
      width: asset.width,
      height: asset.height,
      opacity: opacity,
      zIndex: Math.round(asset.width),
      direction: direction,
      initialOffset: direction === 'left' ? '100vw' : '-20vw',
      travelDistance: direction === 'left' ? '-150vw' : '150vw',
      duration: duration,
      delay: Math.random() * -duration,
    });
  }

  return configs;
};