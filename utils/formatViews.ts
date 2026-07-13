const formatViews = (views: number): string => {
  if (views < 1_000_000) return `${(views / 1000).toFixed(0)}K`;
  if (views >= 1_000_000) return `${(views / 1_000_000).toFixed(0)}M`;

  return views.toString();
};

export default formatViews;
