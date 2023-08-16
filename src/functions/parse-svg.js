const parseSVG = (svgString) => {
  return new DOMParser().parseFromString(svgString, 'image/svg+xml').documentElement;
}

export default parseSVG;