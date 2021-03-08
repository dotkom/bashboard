const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

export const decodeAssetId = (id) => {
  const [, assetId, dimensions, format] = pattern.exec(id);
  const [width, height] = dimensions.split("x").map((v) => parseInt(v, 10));

  return {
    assetId,
    dimensions: { width, height },
    format,
  };
};

export const createDimensionRule = (Rule, requirementFn) => {
  return Rule.custom((image) => {
    if (!image) return true;
    const { dimensions } = decodeAssetId(image.asset._ref);
    return requirementFn(dimensions);
  });
};
