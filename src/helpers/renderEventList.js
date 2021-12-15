const eventList = (arr) => {
  return arr.reduce((acc, item, index) => {
    if (index > 0) {
      let right = item.start < acc[index - 1].start + acc[index - 1].duration;
      let width = right ? 100 : 200;
      if (right) {
        acc[index - 1].width = width;
        if (index > 1 && !acc[index - 2].right) {
          acc[index - 1].right = right;
        }
      }
      if (
        right &&
        acc[index - 1].width === 100 &&
        acc[index - 1].right === right
      ) {
        acc = [...acc, { ...item, right: !right, width }];
        return acc;
      }
      acc = [...acc, { ...item, right, width }];
      return acc;
    }
    acc = [
      {
        ...item,
        right: false,
        width: 200,
      },
    ];
    return acc;
  }, []);
};

export default eventList;
