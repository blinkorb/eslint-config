const [_ignored, acknowledged] = [1, 2];

const { nope, ...yup } = {
  nope: false,
  yup: true,
};

export const test = (_unused: string, used: number) => used;

export { acknowledged, yup };
