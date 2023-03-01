interface EnabledFeatureProps {
  development: boolean;
  production: boolean;
  stage: boolean;
  sysDev: boolean;
  test: boolean;
}

interface Features {
  branch: boolean;
  reactotron: boolean;
}

export const getEnabledFeatures = ({
  sysDev,
  test,
  stage,
  production,
  development,
}: EnabledFeatureProps): Features => ({
  branch: !sysDev && (production || stage),
  reactotron: sysDev && (development || stage || production || test),
});
