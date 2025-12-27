'use client';

import { siteSettings } from '../config/settings';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminPage() {
  const { colors } = siteSettings;
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'blog' | 'projects'>('blog');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Admin <span style={{ color: colors.primary }}>Login</span>
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-2 text-gray-400">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border focus:outline-none focus:border-[#00ff88]"
                style={{ borderColor: `${colors.primary}33` }}
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-semibold transition-all"
              style={{ backgroundColor: colors.primary, color: 'black' }}
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-500 text-sm">
            Demo password: admin123
          </p>
          <Link 
            href="/"
            className="block mt-6 text-center hover:opacity-80"
            style={{ color: colors.primary }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Admin <span style={{ color: colors.primary }}>Dashboard</span>
          </h1>
          <Link 
            href="/"
            className="px-6 py-2 border-2 rounded-lg hover:bg-[#00ff88] hover:text-black transition-all"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            Back to Site
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b" style={{ borderColor: `${colors.primary}33` }}>
          <button
            onClick={() => setActiveTab('blog')}
            className="px-6 py-3 font-semibold transition-colors"
            style={{ 
              color: activeTab === 'blog' ? colors.primary : 'gray',
              borderBottom: activeTab === 'blog' ? `2px solid ${colors.primary}` : 'none'
            }}
          >
            Blog Posts
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className="px-6 py-3 font-semibold transition-colors"
            style={{ 
              color: activeTab === 'projects' ? colors.primary : 'gray',
              borderBottom: activeTab === 'projects' ? `2px solid ${colors.primary}` : 'none'
            }}
          >
            Projects
          </button>
        </div>

        {/* Content */}
        {activeTab === 'blog' ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Blog Posts</h2>
              <Link
                href="/admin/blog/editor"
                className="px-6 py-3 rounded-lg font-semibold transition-all"
                style={{ backgroundColor: colors.primary, color: 'black' }}
              >
                + New Post
              </Link>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border" style={{ borderColor: `${colors.primary}33` }}>
              <p className="text-gray-400">
                To create or edit blog posts, add/edit markdown files in <code className="bg-gray-800 px-2 py-1 rounded">/content/blog/</code>
              </p>
              <p className="mt-4 text-gray-400">
                File format: <code className="bg-gray-800 px-2 py-1 rounded">post-slug.md</code>
              </p>
              <Link
                href="/admin/blog/editor"
                className="inline-block mt-6 px-6 py-3 border-2 rounded-lg font-semibold hover:bg-[#00ff88] hover:text-black transition-all"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                Open Blog Editor
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Projects</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border" style={{ borderColor: `${colors.primary}33` }}>
              <p className="text-gray-400">
                To create or edit projects, edit the file <code className="bg-gray-800 px-2 py-1 rounded">/app/data/projects.ts</code>
              </p>
              <div className="mt-6 p-4 bg-gray-800 rounded">
                <p className="text-sm text-gray-300 mb-2">Add a new project to the array:</p>
                <pre className="text-xs text-gray-400 overflow-auto">
{`{
  id: 7,
  title: 'New Project',
  description: 'Project description...',
  image: '🚀',
  tags: ['React', 'Node.js'],
  link: 'https://project.com',
  github: 'https://github.com/...',
  featured: true,
}`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Quick Guide */}
        <div className="mt-12 p-6 bg-gray-900 rounded-lg border" style={{ borderColor: `${colors.primary}33` }}>
          <h3 className="text-xl font-bold mb-4">Quick Guide</h3>
          <div className="space-y-3 text-gray-400">
            <p>📝 <strong>Blog Posts:</strong> Create markdown files in <code className="bg-gray-800 px-2 py-1 rounded">/content/blog/</code></p>
            <p>🚀 <strong>Projects:</strong> Edit <code className="bg-gray-800 px-2 py-1 rounded">/app/data/projects.ts</code></p>
            <p>⚙️ <strong>Settings:</strong> Edit <code className="bg-gray-800 px-2 py-1 rounded">/app/config/settings.ts</code></p>
            <p>🎨 <strong>Colors:</strong> Change theme colors in settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
