// import { fileURLToPath } from "url";
// import path from "path";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
import { tsActions } from "./actions/ts/index.js";
const OUTPUT_PREFIX = "devGen";
export default function (plop) {
    plop.setWelcomeMessage("Please choose from an option below");
    tsActions(plop, { BASE_PATH: OUTPUT_PREFIX });
    plop.setGenerator("main-menu", {
        description: "Main Menu",
        prompts: [
            {
                type: "list",
                name: "language",
                message: "What language are you working with?",
                choices: ["TypeScript"],
            },
        ],
        actions: (data) => {
            if (!data)
                return [];
            if (data.language === "TypeScript") {
                return [
                    {
                        type: "runGenerator",
                        generator: "ts-options",
                        data: { ...data, BASE_PATH: OUTPUT_PREFIX },
                    },
                ];
            }
            return [];
        },
    });
}
//# sourceMappingURL=plopfile.js.map