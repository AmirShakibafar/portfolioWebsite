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

// Pre-categorize assets by size
const smallAssets = cloudAssets.filter(c => c.width < 80);
const mediumAssets = cloudAssets.filter(c => c.width >= 80 && c.width < 150);
const largeAssets = cloudAssets.filter(c => c.width >= 150);
const smallAndMediumAssets = [...smallAssets, ...mediumAssets];


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
  const numLargeClouds = 2;

  // 1. Generate a fixed number of large clouds
  for (let i = 0; i < numLargeClouds && i < count; i++) {
    const asset = largeAssets[Math.floor(Math.random() * largeAssets.length)];
    // Create the cloud config (this logic is duplicated to avoid a complex helper)
    const direction = Math.random() > 0.5 ? 'right' : 'left';
    const duration = 12000 / asset.width;
    const opacity = mapRange(asset.width, minWidth, maxWidth, minOpacity, maxOpacity);
    const topPosition = getRandom(0, 35);
    configs.push({ id: i, src: asset.src, top: `${topPosition}%`, width: asset.width, height: asset.height, opacity, zIndex: Math.round(asset.width), direction, initialOffset: direction === 'left' ? '100vw' : '-20vw', travelDistance: direction === 'left' ? '-150vw' : '150vw', duration, delay: Math.random() * -duration });
  }

  // 2. Fill the rest with small and medium clouds
  const remainingCount = count - configs.length;
  for (let i = 0; i < remainingCount; i++) {
    const asset = smallAndMediumAssets[Math.floor(Math.random() * smallAndMediumAssets.length)];
    const direction = Math.random() > 0.5 ? 'right' : 'left';
    const duration = 12000 / asset.width;
    const opacity = mapRange(asset.width, minWidth, maxWidth, minOpacity, maxOpacity);
    const topPosition = getRandom(0, 35);
    configs.push({ id: i + numLargeClouds, src: asset.src, top: `${topPosition}%`, width: asset.width, height: asset.height, opacity, zIndex: Math.round(asset.width), direction, initialOffset: direction === 'left' ? '100vw' : '-20vw', travelDistance: direction === 'left' ? '-150vw' : '150vw', duration, delay: Math.random() * -duration });
  }

  // 3. Shuffle the array to mix the large clouds in randomly
  for (let i = configs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [configs[i], configs[j]] = [configs[j], configs[i]];
  }
  
  return configs;
};