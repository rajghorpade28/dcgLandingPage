import React, { useState, useEffect } from 'react';
import './LicenseModal.css';

const DOWNLOAD_URL = 'https://mega.nz/folder/Ym1CWZzB#BTGeC7ZN5lD2Y7Jnwb8Ueg';

export default function LicenseModal({ isOpen, onClose }) {
  const [agreed, setAgreed] = useState(false);

  // Reset checkbox whenever modal opens
  useEffect(() => {
    if (isOpen) setAgreed(false);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleProceed = () => {
    if (!agreed) return;
    onClose();
    window.location.href = DOWNLOAD_URL;
  };

  return (
    <div className="lm-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="lm-dialog" role="dialog" aria-modal="true" aria-labelledby="lm-title">
        {/* Header */}
        <div className="lm-header">
          <div className="lm-header-left">
            <span className="lm-shield">🛡️</span>
            <div>
              <h2 id="lm-title" className="lm-title">License Agreement &amp; User Consent</h2>
              <p className="lm-subtitle">Digital Chaff Generator (DCG) · Effective April 2026</p>
            </div>
          </div>
          <button className="lm-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Scrollable body */}
        <div className="lm-body">
          <section className="lm-section">
            <h3>1. Acceptance of Terms</h3>
            <p>By installing, accessing, or using the Digital Chaff Generator browser extension ("DCG", "Extension", "we", "us"), you ("User") agree to be bound by the terms of this License Agreement and User Consent ("Agreement").</p>
            <p>If you do not agree to these terms, you must not install or use the Extension.</p>
          </section>

          <section className="lm-section">
            <h3>2. License Grant</h3>
            <p>Subject to compliance with this Agreement, you are granted a limited, non-exclusive, non-transferable, and revocable license to use the Extension for personal, non-commercial purposes.</p>
            <p>You agree not to:</p>
            <ul>
              <li>Reverse engineer, decompile, or modify the Extension (except where permitted by law)</li>
              <li>Distribute, sublicense, or resell the Extension</li>
              <li>Use the Extension for unlawful, fraudulent, or abusive activities</li>
            </ul>
          </section>

          <section className="lm-section">
            <h3>3. Description of the Extension</h3>
            <p>The Extension is designed to:</p>
            <ul>
              <li>Generate automated background browsing activity during user idle periods</li>
              <li>Simulate realistic user interactions on publicly accessible websites</li>
              <li>Provide phishing detection using third-party threat intelligence services and locally executed machine learning models</li>
            </ul>
          </section>

          <section className="lm-section">
            <h3>4. User Consent</h3>
            <h4>4.1 Automated Background Activity</h4>
            <p>The Extension may automatically open background browser tabs, load publicly accessible web pages, and simulate user-like interactions such as scrolling, delays, and navigation. This activity may occur without direct user interaction and typically during idle conditions or as configured by the User.</p>

            <h4>4.2 Network Requests</h4>
            <p>The Extension may initiate standard browser network requests (HTTP/HTTPS) to load web content. Such requests are processed through the browser's native networking stack and may include execution of third-party scripts present on visited websites.</p>

            <h4>4.3 Local Processing</h4>
            <p>All behavioral generation, persona simulation, and decision-making processes occur locally on the User's device and are not transmitted to external servers by the Extension.</p>

            <h4>4.4 Phishing Detection</h4>
            <p>The Extension may analyze URLs to assess potential security risks. Depending on user settings, this may include local analysis using embedded models or queries to third-party services such as Google Safe Browsing. By enabling such features, you consent to URLs being checked against these services.</p>
          </section>

          <section className="lm-section">
            <h3>5. Data Handling and Privacy</h3>
            <h4>5.1 Data Collection</h4>
            <p>The Extension is designed to not collect personally identifiable information and not transmit browsing history or user data to external servers.</p>

            <h4>5.2 Local Storage</h4>
            <p>The Extension may store limited data locally, including persona configurations, session timing and operational parameters, and non-identifiable metrics. All such data remains on the User's device and is not externally shared.</p>

            <h4>5.3 Third-Party Cookies and Content</h4>
            <p>Because the Extension loads real web pages, third-party cookies may be set by visited websites and external scripts may execute as part of normal page loading. These are controlled by the respective websites and not by the Extension.</p>
          </section>

          <section className="lm-section">
            <h3>6. User Controls</h3>
            <p>Users retain full control and may enable or disable the Extension at any time, start or stop automated browsing activity, modify persona and behavior settings, and enable or disable phishing detection features.</p>
          </section>

          <section className="lm-section">
            <h3>7. Limitations of Protection</h3>
            <p>The Extension does not provide anonymity or conceal IP address, prevent all forms of tracking or fingerprinting, guarantee detection of all phishing or malicious sites, or replace antivirus, firewall, or other security tools. It is intended to reduce behavioral profiling accuracy and provide risk awareness.</p>
          </section>

          <section className="lm-section">
            <h3>8. Responsible Use</h3>
            <p>You agree not to use the Extension to engage in fraudulent or deceptive practices, generate artificial ad clicks or manipulate advertising systems, interfere with or disrupt websites or services, or impersonate individuals or entities.</p>
          </section>

          <section className="lm-section">
            <h3>9. Performance and Resource Usage</h3>
            <p>The Extension may utilize system resources including CPU and memory, network bandwidth, and background browser tabs. While safeguards are implemented, performance impact may vary depending on system configuration.</p>
          </section>

          <section className="lm-section">
            <h3>10. Disclaimer of Warranties</h3>
            <p>The Extension is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, express or implied. We do not guarantee continuous or error-free operation, accuracy of phishing detection, or complete protection against tracking or security threats.</p>
          </section>

          <section className="lm-section">
            <h3>11. Limitation of Liability</h3>
            <p>To the maximum extent permitted by law, the developers of the Extension shall not be liable for any direct, indirect, incidental, or consequential damages, loss of data, profits, or business opportunities, or security breaches or system issues arising from use.</p>
          </section>

          <section className="lm-section">
            <h3>12. Third-Party Services</h3>
            <p>The Extension may interact with third-party services including Google Safe Browsing. Use of such services is subject to their respective terms and privacy policies.</p>
          </section>

          <section className="lm-section">
            <h3>13. Updates and Modifications</h3>
            <p>We reserve the right to update or modify the Extension and revise this Agreement. Continued use of the Extension constitutes acceptance of any updated terms.</p>
          </section>

          <section className="lm-section">
            <h3>14. Termination</h3>
            <p>We may suspend or terminate your license to use the Extension if you violate this Agreement. You may discontinue use at any time by uninstalling the Extension.</p>
          </section>

          <section className="lm-section">
            <h3>15. Governing Law</h3>
            <p>This Agreement shall be governed by and interpreted in accordance with the laws of your local jurisdiction.</p>
          </section>

          <section className="lm-section">
            <h3>16. Contact Information</h3>
            <p>For questions, support, or legal inquiries, please contact the Digital Chaff Generator team via the contact form on this website.</p>
          </section>

          <section className="lm-section">
            <h3>17. User Acknowledgment</h3>
            <p>By installing and using the Extension, you acknowledge that you have read, understood, and agreed to this Agreement, including all automated behaviors and data handling practices described herein.</p>
          </section>
        </div>

        {/* Footer */}
        <div className="lm-footer">
          <label className="lm-checkbox-label" htmlFor="lm-agree">
            <input
              id="lm-agree"
              type="checkbox"
              className="lm-checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className="lm-checkbox-custom" />
            <span className="lm-checkbox-text">
              I have read and agree to the License Agreement and User Consent.
            </span>
          </label>
          <div className="lm-footer-actions">
            <button className="btn btn--ghost" onClick={onClose}>Cancel</button>
            <button
              className="btn btn--primary"
              disabled={!agreed}
              onClick={handleProceed}
            >
              ⬇️ Proceed to Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
