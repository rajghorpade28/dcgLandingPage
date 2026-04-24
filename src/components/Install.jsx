import React from 'react';
import './Install.css';

const STEPS = [
  { num: '01', title: 'Download the Extension', code: 'Click "Download Extension" above and\nagree to the license terms to get the file.' },
  { num: '02', title: 'Extract the ZIP', code: 'Extract the downloaded ZIP file to\na folder on your computer.' },
  { num: '03', title: 'Load in Chrome', code: 'Go to chrome://extensions\nEnable Developer Mode → Load Unpacked\nSelect the extracted folder.' },
];

export default function Install({ onInstallClick }) {
  return (
    <section className="install section" id="install">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">✦ Get Started</span>
          <h2 className="section-title">Up and running in 3 steps</h2>
          <p className="section-sub">No accounts. No subscriptions. Developer mode only.</p>
        </div>

        <div className="install__steps">
          {STEPS.map(step => (
            <div key={step.num} className="install-step glass-card">
              <span className="install-step__num">{step.num}</span>
              <div>
                <h3 className="install-step__title">{step.title}</h3>
                <pre className="install-step__code"><code>{step.code}</code></pre>
              </div>
            </div>
          ))}
        </div>

        <div className="install__cta">
          <button className="btn btn--primary btn--lg" onClick={onInstallClick}>
            ⬇️ Download Extension
          </button>
          <p className="install__cta-note">By downloading, you agree to review our license terms.</p>
        </div>
      </div>
    </section>
  );
}

