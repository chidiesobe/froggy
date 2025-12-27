"use client";

import { useState } from "react";
import { siteSettings } from "../config/settings";

export default function CVViewer() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const { colors, about } = siteSettings;

  if (!about.showCV || !about.cvUrl) return null;

  return (
    <>
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setIsViewerOpen(true)}
            className="inline-block px-8 py-4 border-2 font-bold rounded-lg transition-all transform hover:scale-105 hover:cursor-pointer"
              style={{ borderColor: colors.primary, color: colors.primary }}
          >
            📄 My Curriculum Vitae (CV)
          </button>
        </div>
      </div>

      {/* CV Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-lg shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-100 rounded-t-lg">
              <h3 className="text-xl font-bold text-black">CV Preview</h3>
              <div className="flex gap-2">
                <a
                  href={about.cvUrl}
                  download
                  className="px-4 py-2 text-sm font-semibold rounded transition-all"
                  style={{ backgroundColor: colors.primary, color: "#000" }}
                >
                  Download
                </a>
                <button
                  onClick={() => setIsViewerOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-all"
                >
                  Close
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${about.cvUrl}#view=FitH`}
                className="w-full h-full"
                title="CV Preview"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
