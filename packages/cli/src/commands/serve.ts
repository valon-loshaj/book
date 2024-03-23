import path from "path";
import { serve } from "local-api";
import { Command } from "commander";
import { dir } from "console";

export const serveCommand = new Command()
	.command("serve [filename]")
	.option("-p, --p <number>", "Port to run server on", "4005")
	.description("Open a file for editing")
	.action((filename = "notebook.js", options: { port: string }) => {
		const dir = path.join(process.cwd(), path.dirname(filename));
		serve(parseInt(options.port), path.basename(filename), dir);
	});
