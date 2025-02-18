const unitConverter = (value: string | number, index: number) => {
  //clears value (avoid having persistent 0s in every input)
  if (Number(value) === 0 || value === "") {
    return ["", "", "", "", ""];
  }

  let dh;
  let f;
  let s;
  let r;
  let doro;

  switch (index) {
    case 0:
      dh = Number(value);
      f = dh * 100;
      s = f;
      r = dh * 20;
      doro = dh * 2;
      return [dh, f, s, r, doro];
    case 1:
      f = Number(value);
      dh = f / 100;
      s = f;
      r = dh * 20;
      doro = dh * 2;
      return [dh, f, s, r, doro];
    case 2:
      s = Number(value);
      dh = s / 100;
      f = s;
      r = dh * 20;
      doro = dh * 2;
      return [dh, f, s, r, doro];
    case 3:
      r = Number(value);
      dh = r / 20;
      f = dh * 100;
      s = f;
      doro = dh * 2;
      return [dh, f, s, r, doro];
    case 4:
      doro = Number(value);
      dh = doro / 2;
      f = dh * 100;
      s = f;
      r = dh * 20;
      return [dh, f, s, r, doro];
    default:
      dh = "";
      f = dh;
      s = dh;
      r = dh;
      doro = dh;
      return [dh, f, s, r, doro];
  }
};

export default unitConverter;
