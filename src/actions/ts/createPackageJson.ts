export function createPackageJson(data: any) {
  return [
    {
      type: "add",
      skipIfExists: true,
      path: `${data.BASE_PATH}/package.json`,
      templateFile: "../templates/ts/package.json.hbs",
      data: { ...data },
    },
  ];
}
