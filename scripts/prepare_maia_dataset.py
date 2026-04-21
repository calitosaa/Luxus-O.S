import os
import json

def prepare_dataset():
    base_path = r"C:\Users\Carlos\Documents\New folder\Luxus-O.S\gemma4-skills-os"
    skills_path = os.path.join(base_path, "skills")
    agents_path = os.path.join(base_path, "agents")
    output_file = r"C:\Users\Carlos\Documents\New folder\Luxus-O.S\Maia\training_data.jsonl"
    
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    dataset = []
    
    # Process Skills
    if os.path.exists(skills_path):
        print(f"Reading skills from {skills_path}...")
        for filename in os.listdir(skills_path):
            if filename.endswith(".md"):
                with open(os.path.join(skills_path, filename), "r", encoding="utf-8") as f:
                    content = f.read()
                    # Convert MD to training pair
                    dataset.append({
                        "instruction": f"Explain the Luxus O.S skill: {filename.split('__')[-1].replace('.md', '')}",
                        "input": "",
                        "output": content
                    })

    # Process Agents
    if os.path.exists(agents_path):
        print(f"Reading agents from {agents_path}...")
        for filename in os.listdir(agents_path):
            if filename.endswith(".ts"):
                with open(os.path.join(agents_path, filename), "r", encoding="utf-8") as f:
                    content = f.read()
                    dataset.append({
                        "instruction": f"Show the architecture for the {filename.replace('.ts', '')} agent in Luxus O.S",
                        "input": "",
                        "output": f"```typescript\n{content}\n```"
                    })

    print(f"Generated {len(dataset)} training samples.")
    
    with open(output_file, "w", encoding="utf-8") as f:
        for entry in dataset:
            f.write(json.dumps(entry, ensure_ascii=False) + "\n")
            
    print(f"Dataset saved to {output_file}")

if __name__ == "__main__":
    prepare_dataset()
