import fs from 'fs/promises';
import path from 'path';

/**
 * Luxus O.S Main Entry Point
 * Orchestrates 100k+ dynamic skills and MCP agents for Maia LLM.
 */

class LuxusOS {
    private skillsPath: string;
    private agentsPath: string;

    constructor() {
        this.skillsPath = path.join(process.cwd(), 'gemma4-skills-os', 'skills');
        this.agentsPath = path.join(process.cwd(), 'gemma4-skills-os', 'agents');
    }

    async boot() {
        console.log("=========================================");
        console.log("  Booting Luxus O.S for Maia (Gemma 4)    ");
        console.log("=========================================");
        
        // This is a lightweight boot process. It won't load 100k files into RAM immediately.
        // It provides the directory indexing for the Maia Brain to access context dynamically.
        
        const agentCount = await this.countDirectories(this.agentsPath);
        console.log(`[INFO] Indexed ${agentCount} Agent architectures.`);
        
        console.log("[SUCCESS] Luxus O.S is online and ready for Maia integration.");
    }

    private async countDirectories(dirPath: string): Promise<number> {
        try {
            const items = await fs.readdir(dirPath, { withFileTypes: true });
            return items.filter(i => i.isDirectory()).length;
        } catch (e) {
            console.error(`Warning: Could not read directory ${dirPath}`);
            return 0;
        }
    }
}

const os = new LuxusOS();
os.boot().catch(console.error);
