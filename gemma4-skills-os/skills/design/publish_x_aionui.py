---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/resources/skills/x-recruiter/scripts/publish_x.py
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import sys
import time
from pathlib import Path

from playwright.sync_api import sync_playwright


def read_text(path: str) -> str:
    return Path(path).read_text(encoding="utf-8").strip()


def main() -> None:
    if len(sys.argv) < 2:
        print("用法: python3 scripts/publish_x.py <post_content.txt> [cover.png] [jd_details.png]")
        sys.exit(1)

    content_path = sys.argv[1]
    cover_path = sys.argv[2] if len(sys.argv) > 2 else None
    details_path = sys.argv[3] if len(sys.argv) > 3 else None

    content = read_text(content_path)

    print("🚀 X 发布脚本已启动")
    print("操作指南：")
    print("1) 观察浏览器窗口：脚本会打开 X 首页或发帖页。")
    print("2) 若出现登录页，请完成登录。")
    print("3) 登录完成后，脚本会自动填充文案与图片。")
    print("4) 请在浏览器中检查内容，确认无误后点击“Post”。")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context()
        page = context.new_page()

        page.goto("https://x.com/home", wait_until="domcontentloaded")
        page.wait_for_timeout(2000)

        # If not logged in, X will redirect to login or show a login wall.
        if "login" in page.url or "i/flow/login" in page.url:
            print("⏳ [步骤 2] 等待登录：请在浏览器窗口完成登录。")
            print("   脚本将自动检测登录完成后继续；如检测不到，请回到终端按 Enter 继续。")
            try:
                page.wait_for_url("https://x.com/home", timeout=120000)
            except Exception:
                input("登录完成后回到终端，按 Enter 继续...")
                page.goto("https://x.com/home", wait_until=\"domcontentloaded\")
            page.wait_for_timeout(2000)

        # Focus composer
        composer = page.locator("div[role='textbox'][data-testid='tweetTextarea_0']")
        if not composer.is_visible():
            # Try clicking the compose button if needed
            compose_btn = page.locator("a[data-testid='SideNav_NewTweet_Button'], div[data-testid='SideNav_NewTweet_Button']")
            if compose_btn.is_visible():
                compose_btn.click()
            page.wait_for_timeout(1000)

        composer = page.locator("div[role='textbox'][data-testid='tweetTextarea_0']")
        composer.wait_for(timeout=10000)
        composer.click()
        composer.fill(content)

        # Upload images if provided
        if cover_path or details_path:
            files = [p for p in [cover_path, details_path] if p]
            file_input = page.locator("input[type='file'][data-testid='fileInput']")
            file_input.set_input_files(files)
            page.wait_for_timeout(3000)

        # Click Post
        post_btn = page.locator("div[data-testid='tweetButtonInline']")
        post_btn.wait_for(timeout=10000)
        post_btn.click()

        # Wait a bit to ensure posting
        page.wait_for_timeout(3000)
        print("✅ 已提交发布，请在 X 上确认。")
        time.sleep(5)

        context.close()
        browser.close()


if __name__ == "__main__":
    main()
