const fs = require('fs');
const path = require('path');

function getFilesRecursive(dir, extension) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFilesRecursive(filePath, extension));
        } else if (file.endsWith(extension)) {
            results.push(filePath);
        }
    });
    return results;
}

async function prepareDataset() {
    const basePath = path.join('C:', 'Users', 'Carlos', 'Documents', 'New folder', 'Luxus-O.S', 'gemma4-skills-os');
    const skillsPath = path.join(basePath, 'skills');
    const agentsPath = path.join(basePath, 'agents');
    const outputFile = path.join('C:', 'Users', 'Carlos', 'Documents', 'New folder', 'Luxus-O.S', 'Maia', 'training_data.jsonl');

    if (!fs.existsSync(path.dirname(outputFile))) {
        fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    }

    const writeStream = fs.createWriteStream(outputFile, { encoding: 'utf8' });

    console.log("Processing skills...");
    if (fs.existsSync(skillsPath)) {
        const skillFiles = getFilesRecursive(skillsPath, '.md');
        console.log(`Found ${skillFiles.length} skill files.`);
        for (const filePath of skillFiles) {
            const content = fs.readFileSync(filePath, 'utf8');
            const file = path.basename(filePath);
            const entry = {
                instruction: `Explain the Luxus O.S skill: ${file.split('__')[1]?.replace('.md', '') || file}`,
                input: "",
                output: content
            };
            writeStream.write(JSON.stringify(entry) + '\n');
        }
    }

    console.log("Processing agents...");
    if (fs.existsSync(agentsPath)) {
        const agentFiles = getFilesRecursive(agentsPath, '.ts');
        console.log(`Found ${agentFiles.length} agent files.`);
        for (const filePath of agentFiles) {
            const content = fs.readFileSync(filePath, 'utf8');
            const file = path.basename(filePath);
            const entry = {
                instruction: `Show the architecture for the ${file.replace('.ts', '')} agent in Luxus O.S`,
                input: "",
                output: `\`\`\`typescript\n${content}\n\`\`\``
            };
            writeStream.write(JSON.stringify(entry) + '\n');
        }
    }

    writeStream.end();
    console.log(`Dataset generation complete. Saved to ${outputFile}`);
}

prepareDataset().catch(console.error);
