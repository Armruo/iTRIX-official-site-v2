const fs = require('fs').promises;
const path = require('path');

async function processDirectory(dirPath, type) {
    try {
        const files = await fs.readdir(dirPath);
        
        for (const file of files) {
            if (file.endsWith('.mdx')) {
                const filePath = path.join(dirPath, file);
                await processFile(filePath, type);
            }
        }
    } catch (error) {
        console.error(`Error processing directory ${dirPath}:`, error);
    }
}

async function processFile(filePath, type) {
    try {
        let content = await fs.readFile(filePath, 'utf8');
        
        // 检查文件是否已经有 type 字段
        if (!content.includes('type:')) {
            // 在 frontmatter 的末尾（第一个 --- 之后的 ---）添加 type 字段
            content = content.replace(/^(---\n[\s\S]*?)(---)/m, `$1type: "${type}"\n$2`);
            
            await fs.writeFile(filePath, content, 'utf8');
            console.log(`✅ Updated ${filePath}`);
        } else {
            console.log(`⏭️ Skipped ${filePath} (type field already exists)`);
        }
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
    }
}

async function main() {
    const contentDir = path.join(__dirname, '..', 'content');
    
    // 处理博客文章
    await processDirectory(path.join(contentDir, 'blog'), 'Post');
    
    // 处理文档
    await processDirectory(path.join(contentDir, 'docs'), 'Doc');
}

main().catch(console.error);
