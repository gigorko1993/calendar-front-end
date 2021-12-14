const eventList = (arr) => {
  return arr.reduce((acc, el, i) => {
    if (i > 0) {
      let right = el.start < acc[i - 1].start + acc[i - 1].duration;
      let width = right ? 100 : 200;

      if (right) {
        acc[i - 1].width = width;

        if (!acc[i - 2].right && i > 1) {
          acc[i - 1].right = right;
        }
      }
      if (right && acc[i - 1].width === 90 && acc[i - 1].right === right) {
        acc = [...acc, { ...el, right: !right, width }];
        return acc;
      }
      acc = [...acc, { ...el, right, width }];
      return acc;
    }
    acc = [
      {
        ...el,
        right: false,
        width: 200,
      },
    ];
    return acc;
  }, []);
};

export default eventList;
