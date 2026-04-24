import React from 'react';
import './Install.css';

const STEPS = [
  { num: '01', title: 'Download the Extension', code: 'Download from: https://mega.nz/folder/Ym1CWZzB#BTGeC7ZN5lD2Y7Jnwb8Ueg\nExtract the downloaded ZIP file.' },
  { num: '02', title: 'Install & Build', code: 'cd DigitalChaffGenerator\nnpm install && npm run build' },
  { num: '03', title: 'Load in Chrome', code: 'chrome://extensions → Developer Mode → Load Unpacked → select /dist' },
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

        <div className="install__note">
          <span>🔑</span>
          <p>Optionally, add your <strong>Google Safe Browsing API key</strong> in a <code>.env</code> file for live cloud threat checking. Without it, the local ML model provides full protection.</p>
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

