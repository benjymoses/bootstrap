export function createPackageJson(data) {
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
//# sourceMappingURL=createPackageJson.js.map