---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/file2base64.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

const file2base64 = (file: File): Promise<string> => {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			const dataUrl = reader.result as string;
			const base64 = dataUrl.split(",")[1];
			resolve(base64);
		};
		reader.onerror = (error) => reject(error);
	});
};

export default file2base64;
