"use client";

import { siteSettings } from "../../../config/settings";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function BlogEditorPage() {
  const { colors } = siteSettings;
const [formData, setFormData] = useState({
  title: "",
  excerpt: "",
  date: new Date().toISOString().split("T")[0],
  author: "Your Name",
  image: "📝",
  tags: "",
  featured: false,
  content:
    "# Your Blog Post Title\n\nStart writing your content here...\n\n## Section 1\n\nYour content...",
});

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const generateMarkdown = () => {
    const tags = formData.tags
      .split(",")
      .map((t) => `"${t.trim()}"`)
      .join(", ");

    return `---
title: "${formData.title}"
excerpt: "${formData.excerpt}"
date: "${formData.date}"
author: "${formData.author}"
image: "${formData.image}"
tags: [${tags}]
featured: ${formData.featured}
---

${formData.content}`;
  };

  const downloadMarkdown = () => {
    const slug = generateSlug(formData.title);
    const markdown = generateMarkdown();
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const saveMarkdown = async () => {
    const slug = generateSlug(formData.title);
    const markdown = generateMarkdown();
    const filename = `${slug}.md`;

    try {
      const response = await fetch('/api/blog/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filename,
          content: markdown,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(`✅ Blog post saved successfully!\n\nSaved to: ${data.path}\n\nRestart your dev server to see the new post.`);
      } else {
        alert(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error saving blog post:', error);
      alert('❌ Failed to save blog post. Check console for details.');
    }
  };

  return (
    <div suppressHydrationWarning className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Blog <span style={{ color: colors.primary }}>Editor</span>
          </h1>
          <Link
            href="/admin"
            className="px-6 py-2 border-2 rounded-lg hover:bg-[#00ff88] hover:text-black transition-all"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            ← Back
          </Link>
        </div>

        <div className="space-y-6">
          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-gray-400 font-semibold">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border focus:outline-none focus:border-[#00ff88]"
                style={{ borderColor: `${colors.primary}33` }}
                placeholder="Enter post title"
              />
              {formData.title && (
                <p className="mt-1 text-xs text-gray-500">
                  Slug: {generateSlug(formData.title)}.md
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-gray-400 font-semibold">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border focus:outline-none focus:border-[#00ff88]"
                style={{ borderColor: `${colors.primary}33` }}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-400 font-semibold">
              Excerpt *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border focus:outline-none focus:border-[#00ff88]"
              style={{ borderColor: `${colors.primary}33` }}
              rows={2}
              placeholder="Short description for previews..."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-gray-400 font-semibold">
                Author
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border focus:outline-none focus:border-[#00ff88]"
                style={{ borderColor: `${colors.primary}33` }}
                placeholder="Author name"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400 font-semibold">
                Image/Emoji
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border focus:outline-none focus:border-[#00ff88]"
                style={{ borderColor: `${colors.primary}33` }}
                placeholder="📝 or /image.jpg"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400 font-semibold">
                Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border focus:outline-none focus:border-[#00ff88]"
                style={{ borderColor: `${colors.primary}33` }}
                placeholder="React, Next.js, Tutorial"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({ ...formData, featured: e.target.checked })
              }
              className="w-5 h-5 rounded"
              style={{ accentColor: colors.primary }}
            />
            <label htmlFor="featured" className="text-gray-400 cursor-pointer">
              ⭐ Featured Post (show on homepage)
            </label>
          </div>

          {/* Rich Text Editor */}
          <div>
            <label className="block mb-2 text-gray-400 font-semibold">
              Content (Markdown)
            </label>
            <div data-color-mode="dark">
              <MDEditor
                value={formData.content}
                onChange={(val) =>
                  setFormData({ ...formData, content: val || "" })
                }
                height={500}
                preview="live"
                hideToolbar={false}
                enableScroll={true}
                visibleDragbar={true}
                highlightEnable={true}
                style={{
                  backgroundColor: "#1a1a1a",
                  border: `1px solid ${colors.primary}33`,
                  borderRadius: "8px",
                }}
              />
            </div>
            <div className="mt-2 flex gap-4 text-sm text-gray-500">
              <span>
                💡 Supports: Headers, Bold, Italic, Lists, Links, Code, Images
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={saveMarkdown}
              disabled={!formData.title || !formData.excerpt}
              className="flex-1 px-8 py-4 rounded-lg font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: colors.primary, color: "black" }}
            >
              💾 Save to {process.env.NEXT_PUBLIC_BLOG_PATH || 'content/blog'}
            </button>
            <button
              onClick={downloadMarkdown}
              disabled={!formData.title || !formData.excerpt}
              className="flex-1 px-8 py-4 rounded-lg font-bold text-lg border-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#00ff88] hover:text-black"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              ⬇️ Download File
            </button>
          </div>

          {/* Instructions */}
          <div
            className="p-6 bg-gray-900 rounded-lg border"
            style={{ borderColor: `${colors.primary}33` }}
          >
            <h3
              className="font-bold mb-3 flex items-center gap-2"
              style={{ color: colors.primary }}
            >
              📋 Instructions
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-400">
              <li>Fill in the post details (Title and Excerpt are required)</li>
              <li>Write your content using the rich text editor above</li>
              <li>
                Use the toolbar for formatting (bold, italic, links, code, etc.)
              </li>
              <li>Preview your content in real-time on the right panel</li>
              <li>Click &quot;💾 Download Markdown File&quot; when ready</li>
              <li>
                Save the downloaded file to{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">
                  /content/blog/
                </code>
              </li>
              <li>Restart your dev server to see the new post</li>
            </ol>
          </div>

          {/* Preview of generated markdown */}
          <details
            className="p-6 bg-gray-900 rounded-lg border"
            style={{ borderColor: `${colors.primary}33` }}
          >
            <summary
              className="cursor-pointer font-bold mb-4 hover:opacity-80"
              style={{ color: colors.primary }}
            >
              📄 View Generated Frontmatter
            </summary>
            <pre className="text-xs text-gray-400 overflow-auto p-4 bg-gray-800 rounded">
              {generateMarkdown()}
            </pre>
          </details>
        </div>
      </div>
    </div>
  );
}
