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
    const outputFile = path.join('C:', 'Users', 'Carlos', 'Documents', 'New folder', 'Luxus-O.S', 'Maia', 'training_data.jsonl');
    
    // Folders to include and their labels
    const categoryMap = {
        'agents': 'Agent Architecture',
        'skills': 'System Skill',
        'workflows': 'Process Workflow',
        'logic': 'System Logic',
        'plugins': 'Core Plugin',
        'mcp-providers': 'MCP Provider',
        'conectores-mcp': 'MCP Connector',
        'training-prompts': 'Training Prompt Template'
    };

    if (!fs.existsSync(path.dirname(outputFile))) {
        fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    }

    const writeStream = fs.createWriteStream(outputFile, { encoding: 'utf8' });
    let totalSamples = 0;

    for (const [folder, label] of Object.entries(categoryMap)) {
        const folderPath = path.join(basePath, folder);
        if (fs.existsSync(folderPath)) {
            console.log(`Processing ${folder} (${label})...`);
            
            // Be more inclusive with extensions
            const extensions = ['.md', '.ts', '.json', '.txt', '.js'];
            let files = [];
            extensions.forEach(ext => {
                files = files.concat(getFilesRecursive(folderPath, ext));
            });
            
            // Remove duplicates (if any)
            files = [...new Set(files)];
            
            console.log(`Found ${files.length} items in ${folder}.`);
            
            for (const filePath of files) {
                const content = fs.readFileSync(filePath, 'utf8');
                const name = path.basename(filePath).replace(/\.(md|ts|txt|json|js)$/, '').split('__').pop();
                
                const entry = {
                    instruction: `Explain and provide the implementation for the Luxus O.S ${label}: ${name}`,
                    input: `Category: ${label}, Path: ${path.relative(basePath, filePath)}`,
                    output: filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.json') ? 
                            `# ${label}: ${name}\n\n\`\`\`${path.extname(filePath).slice(1)}\n${content}\n\`\`\`` : 
                            content
                };
                writeStream.write(JSON.stringify(entry) + '\n');
                totalSamples++;
            }
        }
    }

    writeStream.end();
    console.log(`Deep Crawl complete. Generated ${totalSamples} training samples.`);
    console.log(`Saved to ${outputFile}`);
}

prepareDataset().catch(console.error);
